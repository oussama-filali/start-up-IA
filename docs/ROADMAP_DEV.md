# 🚀 Roadmap de Développement - RevisAI

**Date de début :** 28 octobre 2025  
**Stack :** React + Vite, Node.js + Express, PostgreSQL, IA gratuite (Hugging Face)  
**Philosophie :** Code lisible, commentaires FR + emojis, design moderne

---

## 📋 TODO Liste Complète (28 tâches)

### 🎯 Phase 0 : Setup Initial (Jour 1)

#### ✅ Tâche 1 : Initialiser la structure du projet
```bash
start-up-IA/
├── frontend/          # 🎨 Application React
├── backend/           # 🏗️ API Node.js
├── database/          # 🗄️ Scripts PostgreSQL
└── docs/              # 📚 Documentation (déjà fait)
```

**Commandes :**
```bash
# Créer les dossiers
mkdir frontend backend database

# Initialiser Git Flow
git checkout develop
git checkout -b feature/setup-initial
```

---

### 📦 Phase 1 : Installation des dépendances (Jour 1)

#### ✅ Tâche 2 : Frontend - React + Vite

**Stack Frontend :**
- ⚡ **Vite** : Build tool ultra-rapide
- ⚛️ **React 18** : UI library
- 🎨 **Tailwind CSS** : Styling utility-first
- 🎭 **Font Awesome 6** : Icônes modernes (pas d'ASCII, que des vraies icônes)
- ✨ **Framer Motion** : Animations fluides
- 🔄 **Zustand** : State management simple
- 🛣️ **React Router** : Navigation

**Installation :**
```bash
cd frontend
npm create vite@latest . -- --template react
npm install tailwindcss postcss autoprefixer
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome
npm install framer-motion zustand react-router-dom
npm install axios react-hook-form zod
npm install @monaco-editor/react chart.js react-chartjs-2
npx tailwindcss init -p
```

**Configuration Tailwind (tailwind.config.js) :**
```js
// 🎨 Configuration du design system RevisAI
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // 🎨 Palette principale
        primary: '#6366F1',     // Indigo
        secondary: '#8B5CF6',   // Violet
        accent: '#10B981',      // Vert
        dark: '#1F2937',        // Gris foncé
        light: '#F9FAFB',       // Gris clair
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
```

---

#### ✅ Tâche 3 : Backend - Node.js + Express

**Stack Backend :**
- 🟢 **Node.js** : Runtime JavaScript
- 🚂 **Express** : Framework web minimaliste
- 🗄️ **pg (node-postgres)** : Client PostgreSQL
- 🔐 **bcryptjs** : Hash passwords
- 🎫 **jsonwebtoken** : Authentification JWT
- 🌐 **cors** : CORS middleware
- 🔒 **dotenv** : Variables d'environnement

**Installation :**
```bash
cd ../backend
npm init -y
npm install express pg bcryptjs jsonwebtoken cors dotenv
npm install nodemon --save-dev
```

**Structure backend :**
```
backend/
├── server.js           # 🚀 Point d'entrée
├── config/
│   └── database.js     # 🗄️ Config PostgreSQL
├── routes/
│   ├── auth.js         # 🔐 Routes auth
│   ├── courses.js      # 📚 Routes cours
│   ├── ai.js           # 🤖 Routes IA
│   └── gamification.js # 🏆 Routes badges/XP
├── controllers/
│   ├── authController.js
│   ├── courseController.js
│   ├── aiController.js
│   └── gamificationController.js
├── middlewares/
│   └── authMiddleware.js # 🛡️ Vérification JWT
├── models/
│   └── queries.sql     # 📝 Requêtes SQL
└── .env                # 🔒 Variables secrètes
```

---

#### ✅ Tâche 4 : Configurer IA gratuite

**Options d'IA gratuite :**

##### Option 1 : **Hugging Face Inference API** ⭐ (Recommandé)
- ✅ **Gratuit** : 30 000 requêtes/mois
- ✅ **Simple** : API REST
- ✅ **Modèles** : Mistral, Llama 2, Falcon

**Installation :**
```bash
npm install @huggingface/inference
```

**Code exemple :**
```js
// 🤖 backend/controllers/aiController.js
import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;
    
    // 💬 Appel à l'IA (modèle Mistral 7B)
    const response = await hf.textGeneration({
      model: 'mistralai/Mistral-7B-Instruct-v0.1',
      inputs: message,
      parameters: {
        max_new_tokens: 500,
        temperature: 0.7,
      }
    });
    
    res.json({ reply: response.generated_text });
  } catch (error) {
    console.error('❌ Erreur IA:', error);
    res.status(500).json({ error: 'Erreur IA' });
  }
};
```

##### Option 2 : **Ollama** (Local, 100% gratuit)
- ✅ Totalement gratuit
- ✅ Pas de limite
- ⚠️ Nécessite installation locale

---

### 🎨 Phase 2 : Design System (Jour 2)

#### ✅ Tâche 5 : Créer les composants de base

**Fichiers à créer :**
```
frontend/src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx       # 🔘 Boutons (primary, secondary, outline)
│   │   ├── Card.jsx         # 🗃️ Cards réutilisables
│   │   ├── Input.jsx        # ⌨️ Champs de formulaire
│   │   ├── Badge.jsx        # 🏅 Badges gamification
│   │   ├── ProgressBar.jsx  # 📊 Barres de progression
│   │   ├── Avatar.jsx       # 👤 Avatars utilisateurs
│   │   └── Modal.jsx        # 🪟 Modales
│   └── layout/
│       ├── Navbar.jsx       # 🔝 Barre navigation
│       ├── Sidebar.jsx      # 📱 Menu latéral
│       └── Footer.jsx       # 🔽 Pied de page
└── styles/
    └── globals.css          # 🎨 Styles globaux
```

**Exemple Button.jsx :**
```jsx
// 🔘 Composant Button réutilisable avec variants
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  icon // 🎨 Icône Font Awesome (ex: faRocket)
}) => {
  // 🎨 Classes Tailwind selon variant
  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-white',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        rounded-lg font-medium transition-all duration-200
        flex items-center gap-2
        ${variants[variant]}
        ${sizes[size]}
      `}
    >
      {/* 🎭 Affichage icône Font Awesome si fournie */}
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </motion.button>
  );
};
```

---

### 🏗️ Phase 3 : Backend API (Jour 3-5)

#### ✅ Tâche 6 : Setup serveur Express

**backend/server.js :**
```js
// 🚀 Serveur Express - RevisAI Backend
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// 📦 Import des routes
import authRoutes from './routes/auth.js';
import courseRoutes from './routes/courses.js';
import aiRoutes from './routes/ai.js';
import gamificationRoutes from './routes/gamification.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ⚙️ Middlewares
app.use(cors());
app.use(express.json());

// 🛣️ Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/gamification', gamificationRoutes);

// 🏠 Route de test
app.get('/', (req, res) => {
  res.json({ message: '✅ API RevisAI fonctionne !' });
});

// 🚀 Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
```

---

#### ✅ Tâche 7 : PostgreSQL - Schema & Migrations

**database/schema.sql :**
```sql
-- 🗄️ Schema de base de données RevisAI

-- 👥 Table utilisateurs
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  avatar_url VARCHAR(500),
  xp INT DEFAULT 0,
  level INT DEFAULT 1,
  streak_days INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 📚 Table cours
CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50), -- Dev, Data, Design, Business
  difficulty VARCHAR(20), -- Débutant, Intermédiaire, Avancé
  duration_hours INT,
  thumbnail_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW()
);

-- 📈 Table progression utilisateur
CREATE TABLE user_progress (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  course_id INT REFERENCES courses(id) ON DELETE CASCADE,
  progress_percentage INT DEFAULT 0,
  completed BOOLEAN DEFAULT FALSE,
  last_accessed TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

-- 🏆 Table badges
CREATE TABLE badges (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  xp_reward INT DEFAULT 0
);

-- 🎖️ Table badges débloqués par utilisateurs
CREATE TABLE user_badges (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  badge_id INT REFERENCES badges(id) ON DELETE CASCADE,
  unlocked_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, badge_id)
);

-- 💬 Table historique conversations IA
CREATE TABLE ai_conversations (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  ai_response TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 📝 Index pour performances
CREATE INDEX idx_user_progress ON user_progress(user_id);
CREATE INDEX idx_course_category ON courses(category);
CREATE INDEX idx_user_badges ON user_badges(user_id);
```

**Seed data (exemples) :**
```sql
-- 🌱 Données de test

-- Badges exemples
INSERT INTO badges (name, description, icon, xp_reward) VALUES
  ('🔥 Streak de feu', '7 jours consécutifs', 'flame', 100),
  ('🚀 Première fusée', 'Premier cours terminé', 'rocket', 50),
  ('🧠 Einstein', 'Niveau expert atteint', 'brain', 500);

-- Cours exemples
INSERT INTO courses (title, description, category, difficulty, duration_hours) VALUES
  ('Python pour débutants', 'Apprends Python de zéro', 'Dev', 'Débutant', 10),
  ('React Avancé', 'Maîtrise React et ses hooks', 'Dev', 'Avancé', 20),
  ('Data Science avec Python', 'Analyse de données et ML', 'Data', 'Intermédiaire', 30);
```

---

#### ✅ Tâche 8-11 : Routes API Backend

**backend/routes/auth.js :**
```js
// 🔐 Routes authentification
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/database.js';

const router = express.Router();

// 📝 Inscription
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // 🔒 Hash du password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // 💾 Insertion en BDD
    const result = await pool.query(
      'INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING id, email, name',
      [email, hashedPassword, name]
    );
    
    res.status(201).json({ 
      message: '✅ Utilisateur créé',
      user: result.rows[0] 
    });
  } catch (error) {
    console.error('❌ Erreur inscription:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// 🔑 Connexion
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // 🔍 Recherche utilisateur
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    
    if (result.rows.length === 0) {
      return res.status(401).json({ error: '❌ Email ou mot de passe incorrect' });
    }
    
    const user = result.rows[0];
    
    // 🔐 Vérification password
    const validPassword = await bcrypt.compare(password, user.password);
    
    if (!validPassword) {
      return res.status(401).json({ error: '❌ Email ou mot de passe incorrect' });
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
        level: user.level
      }
    });
  } catch (error) {
    console.error('❌ Erreur connexion:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

export default router;
```

---

### 🎨 Phase 4 : Frontend Pages (Jour 6-15)

#### ✅ Tâche 12-23 : Créer les 12 pages

**Structure des pages :**
```
frontend/src/
├── pages/
│   ├── Landing.jsx          # 🏠 Page d'accueil
│   ├── Auth/
│   │   ├── Login.jsx        # 🔐 Connexion
│   │   └── Signup.jsx       # 📝 Inscription
│   ├── Onboarding.jsx       # 🚀 3 étapes
│   ├── Dashboard.jsx        # 📊 Tableau de bord
│   ├── CoursePage.jsx       # 📚 Page cours
│   ├── AIChat.jsx           # 🤖 Chat IA
│   ├── CodeEditor.jsx       # 💻 Éditeur code
│   ├── Progress.jsx         # 📈 Progression
│   ├── Gamification.jsx     # 🏆 Badges
│   ├── Certifications.jsx   # 📜 Certifications
│   ├── Profile.jsx          # 👤 Profil
│   └── Settings.jsx         # ⚙️ Paramètres
└── App.jsx                  # 🛣️ Router principal
```

**Exemple Landing.jsx :**
```jsx
// 🏠 Page d'accueil avec animations Framer Motion
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faBrain, faTrophy, faArrowRight, faSparkles } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../components/ui/Button';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      {/* 🎯 Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 py-20 text-center"
      >
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Apprends avec l'IA 🚀
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Une plateforme révolutionnaire qui personnalise ton apprentissage 
          grâce à l'intelligence artificielle
        </p>
        
        <Button variant="primary" size="lg" icon={faArrowRight}>
          Commencer gratuitement
        </Button>
      </motion.section>

      {/* ✨ Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={faBrain}
            iconColor="text-primary"
            title="Assistant IA 24/7"
            description="Pose tes questions à tout moment"
          />
          <FeatureCard 
            icon={faSparkles}
            iconColor="text-secondary"
            title="Parcours adaptatifs"
            description="Contenu personnalisé à ton niveau"
          />
          <FeatureCard 
            icon={faTrophy}
            iconColor="text-accent"
            title="Gamification"
            description="Badges, XP et défis motivants"
          />
        </div>
      </section>
    </div>
  );
};

// 🎴 Composant FeatureCard
const FeatureCard = ({ icon, iconColor, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-8 rounded-2xl shadow-lg"
  >
    <div className={`text-4xl mb-4 ${iconColor}`}>
      <FontAwesomeIcon icon={icon} />
    </div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);
```

---

### 📱 Phase 5 : Responsive & Animations (Jour 16-18)

#### ✅ Tâche 24-25 : Responsive + Animations

**Breakpoints Tailwind :**
```js
// 📱 Mobile-first responsive
sm: '640px',   // Mobile large
md: '768px',   // Tablet
lg: '1024px',  // Desktop
xl: '1280px',  // Desktop large
```

**Animations Framer Motion :**
```jsx
// ✨ Exemples d'animations réutilisables

// 💫 Fade in from bottom
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// 🎊 Confettis quand badge débloqué
import confetti from 'canvas-confetti';

const unlockBadge = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
};
```

---

### 🧪 Phase 6 : Tests & Deploy (Jour 19-21)

#### ✅ Tâche 26-28 : Tests, Documentation, Déploiement

**Tests Backend (Jest) :**
```bash
npm install jest supertest --save-dev
```

**Déploiement gratuit :**
- 🎨 **Frontend** : Vercel (gratuit, auto-deploy from GitHub)
- 🏗️ **Backend** : Railway ou Render (tier gratuit)
- 🗄️ **PostgreSQL** : Supabase (2GB gratuit) ou ElephantSQL

---

## 📅 Timeline estimée

| Phase | Durée | Tâches |
|-------|:-----:|:------:|
| **Setup** | 1 jour | 1-4 |
| **Design System** | 1 jour | 5 |
| **Backend API** | 3 jours | 6-11 |
| **Frontend Pages** | 10 jours | 12-23 |
| **Responsive & Animations** | 3 jours | 24-25 |
| **Tests & Deploy** | 3 jours | 26-28 |
| **TOTAL** | **21 jours** | **28 tâches** |

---

## 🎯 Ordre de priorité

### Sprint 1 (MVP) - Semaine 1-2
1. ✅ Setup + Dépendances
2. ✅ Backend : Auth + Cours API
3. ✅ Frontend : Landing + Login + Dashboard
4. ✅ IA Assistant (Hugging Face)

### Sprint 2 (Features) - Semaine 3
5. ✅ Page cours + Éditeur code
6. ✅ Gamification (badges, XP)
7. ✅ Page progression

### Sprint 3 (Polish) - Semaine 4
8. ✅ Responsive design
9. ✅ Animations
10. ✅ Tests & Deploy

---

## 📝 Conventions de code

### Commentaires FR + Emojis obligatoires

```jsx
// ✅ BON
// 🔐 Vérification du token JWT
const verifyToken = (token) => {
  // 🔍 Décodage du token
  const decoded = jwt.verify(token, SECRET);
  return decoded;
};

// ❌ MAUVAIS (pas de commentaire)
const verifyToken = (token) => {
  const decoded = jwt.verify(token, SECRET);
  return decoded;
};
```

### Structure de fichier

```jsx
// 🎨 Imports
import React from 'react';
import { Button } from './ui/Button';

// 📊 État et variables
const [data, setData] = useState([]);

// 🔧 Fonctions utilitaires
const handleClick = () => {
  // ...
};

// 🎨 Rendu JSX
return (
  <div>
    {/* Contenu */}
  </div>
);
```

---

## 🚀 Prochaine étape

**Commencez par la Tâche 1 : Setup initial !**

```bash
# 🎯 Créer la structure
mkdir frontend backend database

# 🌿 Créer la branche feature
git checkout -b feature/setup-initial

# ▶️ Continuer avec l'installation des dépendances
```

---

[📊 Business Plan](./BUSINESS_PLAN.md) | [🎨 Figma Prompt](./FIGMA_PROMPT.md) | [⬅ Retour README](../README.md)
