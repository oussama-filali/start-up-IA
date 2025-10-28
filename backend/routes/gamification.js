// 🏆 Routes gamification - RevisAI
import express from 'express';
import pool from '../config/database.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// 🏆 Récupérer les badges de l'utilisateur
router.get('/badges', verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;

    const result = await pool.query(
      `SELECT b.* FROM badges b
       JOIN user_badges ub ON b.id = ub.badge_id
       WHERE ub.user_id = $1
       ORDER BY ub.unlocked_at DESC`,
      [userId]
    );

    res.json({
      message: '✅ Badges récupérés',
      total: result.rows.length,
      badges: result.rows
    });
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    res.status(500).json({ error: '❌ Erreur serveur' });
  }
});

// 🔓 Débloquer un badge
router.post('/badges/unlock', verifyToken, async (req, res) => {
  try {
    const { badgeId, xpReward } = req.body;
    const userId = req.user.userId;

    // ✅ Validation
    if (!badgeId) {
      return res.status(400).json({ 
        error: '❌ badgeId requis' 
      });
    }

    // 🔍 Vérifier si badge déjà débloqué
    const existing = await pool.query(
      `SELECT id FROM user_badges 
       WHERE user_id = $1 AND badge_id = $2`,
      [userId, badgeId]
    );

    if (existing.rows.length > 0) {
      return res.status(400).json({ 
        error: '❌ Badge déjà débloqué' 
      });
    }

    // ➕ Débloquer le badge
    await pool.query(
      `INSERT INTO user_badges (user_id, badge_id)
       VALUES ($1, $2)`,
      [userId, badgeId]
    );

    // 🎁 Ajouter XP
    if (xpReward) {
      await pool.query(
        `UPDATE users SET xp = xp + $1 WHERE id = $2`,
        [xpReward, userId]
      );
    }

    res.json({
      message: '✅ Badge débloqué!',
      badgeId,
      xpAdded: xpReward || 0
    });
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    res.status(500).json({ error: '❌ Erreur serveur' });
  }
});

// 📊 Récupérer les stats gamification
router.get('/stats', verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;

    // 📈 Stats utilisateur
    const userResult = await pool.query(
      'SELECT xp, level, streak_days FROM users WHERE id = $1',
      [userId]
    );

    if (userResult.rows.length === 0) {
      return res.status(404).json({ 
        error: '❌ Utilisateur non trouvé' 
      });
    }

    // 🏆 Badges débloqués
    const badgesResult = await pool.query(
      `SELECT COUNT(*) FROM user_badges WHERE user_id = $1`,
      [userId]
    );

    // 🏅 Classement global
    const rankResult = await pool.query(
      `SELECT ROW_NUMBER() OVER (ORDER BY xp DESC) as rank
       FROM users WHERE id = $1`,
      [userId]
    );

    const user = userResult.rows[0];
    const badgesCount = parseInt(badgesResult.rows[0].count);
    const rank = rankResult.rows[0].rank;

    res.json({
      message: '✅ Stats récupérées',
      stats: {
        xp: user.xp,
        level: user.level,
        streakDays: user.streak_days,
        badgesUnlocked: badgesCount,
        globalRank: rank
      }
    });
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    res.status(500).json({ error: '❌ Erreur serveur' });
  }
});

// 🏅 Récupérer le leaderboard
router.get('/leaderboard', async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;

    const result = await pool.query(
      `SELECT id, name, xp, level, avatar_url
       FROM users
       ORDER BY xp DESC
       LIMIT ${limit} OFFSET ${offset}`,
    );

    res.json({
      message: '✅ Leaderboard récupéré',
      total: result.rows.length,
      leaderboard: result.rows.map((user, index) => ({
        rank: parseInt(offset) + index + 1,
        ...user
      }))
    });
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    res.status(500).json({ error: '❌ Erreur serveur' });
  }
});

export default router;
