// 🔐 Routes d'authentification - RevisAI
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/database.js';

const router = express.Router();

// 📝 Inscription utilisateur
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // ✅ Validation des données
    if (!email || !password || !name) {
      return res.status(400).json({ 
        error: '❌ Données manquantes',
        required: ['email', 'password', 'name']
      });
    }

    // 🔍 Vérification si utilisateur existe
    const existingUser = await pool.query(
      'SELECT id FROM users WHERE email = $1',
      [email.toLowerCase()]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({ 
        error: '❌ Cet email est déjà utilisé' 
      });
    }

    // 🔒 Hash du password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 💾 Création utilisateur
    const result = await pool.query(
      `INSERT INTO users (email, password, name) 
       VALUES ($1, $2, $3) 
       RETURNING id, email, name, xp, level, created_at`,
      [email.toLowerCase(), hashedPassword, name]
    );

    const user = result.rows[0];

    res.status(201).json({ 
      message: '✅ Utilisateur créé avec succès',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        xp: user.xp,
        level: user.level
      }
    });
  } catch (error) {
    console.error('❌ Erreur inscription:', error.message);
    res.status(500).json({ error: '❌ Erreur serveur' });
  }
});

// 🔑 Connexion utilisateur
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ Validation
    if (!email || !password) {
      return res.status(400).json({ 
        error: '❌ Email et mot de passe requis' 
      });
    }

    // 🔍 Recherche utilisateur
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email.toLowerCase()]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ 
        error: '❌ Email ou mot de passe incorrect' 
      });
    }

    const user = result.rows[0];

    // 🔐 Vérification password
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ 
        error: '❌ Email ou mot de passe incorrect' 
      });
    }

    // 🎫 Génération JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: '✅ Connexion réussie',
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        xp: user.xp,
        level: user.level,
        avatar_url: user.avatar_url
      }
    });
  } catch (error) {
    console.error('❌ Erreur connexion:', error.message);
    res.status(500).json({ error: '❌ Erreur serveur' });
  }
});

// 🔄 Refresh token
router.post('/refresh', (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ 
        error: '❌ Token requis' 
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const newToken = jwt.sign(
      { userId: decoded.userId, email: decoded.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ 
      message: '✅ Token rafraîchi',
      token: newToken 
    });
  } catch (error) {
    res.status(401).json({ 
      error: '❌ Token invalide' 
    });
  }
});

export default router;
