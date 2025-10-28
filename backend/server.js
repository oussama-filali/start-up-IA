// 🚀 Serveur Express - RevisAI Backend API
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// 📦 Import des routes
import authRoutes from './routes/auth.js';
import courseRoutes from './routes/courses.js';
import aiRoutes from './routes/ai.js';
import gamificationRoutes from './routes/gamification.js';

// 🔧 Configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ⚙️ Middlewares globaux
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 📝 Logger middleware (développement)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`📨 ${req.method} ${req.path}`);
    next();
  });
}

// 🛣️ Routes API
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/gamification', gamificationRoutes);

// 🏠 Route racine (test)
app.get('/', (req, res) => {
  res.json({ 
    message: '✅ API RevisAI fonctionne !',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      courses: '/api/courses',
      ai: '/api/ai',
      gamification: '/api/gamification'
    }
  });
});

// 🚫 Route 404
app.use((req, res) => {
  res.status(404).json({ 
    error: '❌ Route non trouvée',
    path: req.path 
  });
});

// ⚠️ Gestion erreurs globales
app.use((err, req, res, next) => {
  console.error('❌ Erreur serveur:', err.message);
  res.status(500).json({ 
    error: '❌ Erreur serveur interne',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 🚀 Démarrage du serveur
app.listen(PORT, () => {
  console.log(`\n🚀 Serveur RevisAI démarré sur http://localhost:${PORT}`);
  console.log(`📚 Documentation: http://localhost:${PORT}/`);
  console.log(`🌍 Environnement: ${process.env.NODE_ENV}\n`);
});
