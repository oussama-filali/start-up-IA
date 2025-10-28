// 📚 Routes des cours - RevisAI
import express from 'express';
import pool from '../config/database.js';
import { verifyToken, optionalAuth } from '../middlewares/authMiddleware.js';

const router = express.Router();

// 📚 Récupérer tous les cours
router.get('/', optionalAuth, async (req, res) => {
  try {
    const { category, difficulty, limit = 20, offset = 0 } = req.query;

    // 🔍 Construction de la requête
    let query = 'SELECT * FROM courses WHERE 1=1';
    const params = [];

    if (category) {
      params.push(category);
      query += ` AND category = $${params.length}`;
    }

    if (difficulty) {
      params.push(difficulty);
      query += ` AND difficulty = $${params.length}`;
    }

    query += ` ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;

    const result = await pool.query(query, params);

    res.json({
      message: '✅ Cours récupérés',
      total: result.rows.length,
      courses: result.rows
    });
  } catch (error) {
    console.error('❌ Erreur récupération cours:', error.message);
    res.status(500).json({ error: '❌ Erreur serveur' });
  }
});

// 📖 Récupérer un cours spécifique
router.get('/:id', optionalAuth, async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      'SELECT * FROM courses WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ 
        error: '❌ Cours non trouvé' 
      });
    }

    res.json({
      message: '✅ Cours récupéré',
      course: result.rows[0]
    });
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    res.status(500).json({ error: '❌ Erreur serveur' });
  }
});

// 📈 Récupérer la progression d'un utilisateur dans un cours
router.get('/:courseId/progress', verifyToken, async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user.userId;

    const result = await pool.query(
      `SELECT * FROM user_progress 
       WHERE user_id = $1 AND course_id = $2`,
      [userId, courseId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ 
        message: '⚠️ Aucune progression',
        progress: null
      });
    }

    res.json({
      message: '✅ Progression récupérée',
      progress: result.rows[0]
    });
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    res.status(500).json({ error: '❌ Erreur serveur' });
  }
});

// ✅ Mettre à jour la progression d'un cours
router.post('/:courseId/progress', verifyToken, async (req, res) => {
  try {
    const { courseId } = req.params;
    const { progress_percentage, completed } = req.body;
    const userId = req.user.userId;

    // ✅ Validation
    if (progress_percentage === undefined) {
      return res.status(400).json({ 
        error: '❌ progress_percentage requis' 
      });
    }

    // 🔍 Vérifier si progression existe
    const existing = await pool.query(
      `SELECT id FROM user_progress 
       WHERE user_id = $1 AND course_id = $2`,
      [userId, courseId]
    );

    let result;
    if (existing.rows.length > 0) {
      // ✏️ Mise à jour
      result = await pool.query(
        `UPDATE user_progress 
         SET progress_percentage = $1, completed = $2, last_accessed = NOW()
         WHERE user_id = $3 AND course_id = $4
         RETURNING *`,
        [progress_percentage, completed || false, userId, courseId]
      );
    } else {
      // ➕ Création
      result = await pool.query(
        `INSERT INTO user_progress 
         (user_id, course_id, progress_percentage, completed)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
        [userId, courseId, progress_percentage, completed || false]
      );
    }

    res.json({
      message: '✅ Progression mise à jour',
      progress: result.rows[0]
    });
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    res.status(500).json({ error: '❌ Erreur serveur' });
  }
});

export default router;
