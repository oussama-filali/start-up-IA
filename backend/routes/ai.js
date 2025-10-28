// 🤖 Routes IA Assistant - RevisAI
import express from 'express';
import { HfInference } from '@huggingface/inference';
import pool from '../config/database.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// 🤖 Initialisation Hugging Face
const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// 💬 Chat avec l'assistant IA
router.post('/chat', verifyToken, async (req, res) => {
  try {
    const { message, conversationId } = req.body;
    const userId = req.user.userId;

    // ✅ Validation
    if (!message) {
      return res.status(400).json({ 
        error: '❌ Message requis' 
      });
    }

    // 🔍 Récupérer l'historique de conversation (optionnel)
    let history = [];
    if (conversationId) {
      const historyResult = await pool.query(
        `SELECT message, ai_response FROM ai_conversations 
         WHERE user_id = $1 AND id = $2
         ORDER BY created_at DESC LIMIT 5`,
        [userId, conversationId]
      );
      history = historyResult.rows;
    }

    // 📝 Construction du contexte
    let context = 'Tu es RevisAI, un assistant d\'apprentissage IA amical et pédagogue. ';
    context += 'Tu aides les utilisateurs à apprendre la programmation, la data science et le design. ';
    context += 'Sois concis, clair et utilise des exemples pratiques.\n\n';

    // 🤖 Appel à Hugging Face Inference API (Mistral 7B)
    const response = await hf.textGeneration({
      model: 'mistralai/Mistral-7B-Instruct-v0.2',
      inputs: context + 'Utilisateur: ' + message + '\nAssistant: ',
      parameters: {
        max_new_tokens: 500,
        temperature: 0.7,
        top_p: 0.9,
        repetition_penalty: 1.2
      }
    });

    // 📝 Extraction de la réponse
    const aiResponse = response[0]?.generated_text 
      ? response[0].generated_text.split('Assistant: ')[1] || response[0].generated_text
      : 'Désolé, je n\'ai pas pu générer une réponse.';

    // 💾 Sauvegarde de la conversation
    const convoResult = await pool.query(
      `INSERT INTO ai_conversations (user_id, message, ai_response)
       VALUES ($1, $2, $3)
       RETURNING id, created_at`,
      [userId, message, aiResponse]
    );

    res.json({
      message: '✅ Réponse générée',
      conversationId: convoResult.rows[0].id,
      userMessage: message,
      aiResponse: aiResponse.trim(),
      timestamp: convoResult.rows[0].created_at
    });
  } catch (error) {
    console.error('❌ Erreur IA:', error.message);
    
    // 🔧 Erreur spécifique Hugging Face
    if (error.message.includes('API')) {
      return res.status(503).json({ 
        error: '❌ Service IA indisponible',
        message: 'Veuillez réessayer dans quelques instants'
      });
    }

    res.status(500).json({ error: '❌ Erreur serveur' });
  }
});

// 📜 Récupérer l'historique de conversation
router.get('/history', verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { limit = 50, offset = 0 } = req.query;

    const result = await pool.query(
      `SELECT id, message, ai_response, created_at FROM ai_conversations 
       WHERE user_id = $1
       ORDER BY created_at DESC
       LIMIT ${limit} OFFSET ${offset}`,
      [userId]
    );

    res.json({
      message: '✅ Historique récupéré',
      total: result.rows.length,
      conversations: result.rows
    });
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    res.status(500).json({ error: '❌ Erreur serveur' });
  }
});

export default router;
