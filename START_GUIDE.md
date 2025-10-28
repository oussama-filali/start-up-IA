# 📖 Guide de démarrage - RevisAI

## 🚀 Démarrer le projet

### Option 1 : Windows (Script BAT)
```bash
# Double-cliquez sur start.bat
# OU
start.bat
```

### Option 2 : Linux/Mac (Script Shell)
```bash
chmod +x start.sh
./start.sh
```

### Option 3 : Manuel (Deux terminaux séparés)

**Terminal 1 - Backend :**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend :**
```bash
cd frontend
npm run dev
```

---

## 🌍 URLs

- **Frontend** : http://localhost:5173
- **Backend** : http://localhost:5000
- **API Documentation** : http://localhost:5000/

---

## ⚙️ Configuration

### Backend (.env)

```env
# Base de données
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=admin
DB_NAME=revisai_db

# Sécurité
JWT_SECRET=revisai_secret_key_b2tp_2025_super_secure_changez_moi

# IA
HUGGINGFACE_API_KEY=hf_your_key_here

# CORS
CORS_ORIGIN=http://localhost:5173
```

### Frontend (.env.local)

```env
VITE_API_URL=http://localhost:5000
```

---

## 📚 Structure du projet

```
start-up-IA/
├── frontend/               # 🎨 React + Vite + Tailwind
│   ├── src/
│   │   ├── components/     # 🔧 Composants réutilisables
│   │   ├── pages/          # 📄 Pages
│   │   ├── lib/            # 📚 Utilitaires (API client)
│   │   ├── App.jsx         # 🎯 Router principal
│   │   └── index.css       # 🎨 Styles globaux
│   └── package.json
│
├── backend/                # 🏗️ Express + PostgreSQL
│   ├── server.js           # 🚀 Point d'entrée
│   ├── config/
│   │   └── database.js     # 🗄️ Config DB
│   ├── routes/             # 🛣️ Routes API
│   ├── middlewares/        # 🛡️ Middlewares
│   ├── .env                # 🔒 Variables secrètes
│   └── package.json
│
└── database/               # 🗄️ Scripts SQL
    └── schema.sql          # 📋 Schema DB
```

---

## 🧪 Test de l'API

### Test Backend uniquement

```bash
curl http://localhost:5000/
```

Réponse attendue :
```json
{
  "message": "✅ API RevisAI fonctionne !",
  "version": "1.0.0",
  "endpoints": {
    "auth": "/api/auth",
    "courses": "/api/courses",
    "ai": "/api/ai",
    "gamification": "/api/gamification"
  }
}
```

---

## ⚠️ Problèmes courants

### ❌ "Port déjà utilisé"

**Port 5000 occupé (Backend) :**
```bash
# Trouver le processus
netstat -ano | findstr :5000

# Tuer le processus (remplacer PID)
taskkill /PID <PID> /F
```

**Port 5173 occupé (Frontend) :**
```bash
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### ❌ "Cannot connect to database"

1. Vérifier que PostgreSQL est démarré
2. Vérifier les variables `.env` du backend
3. Créer la base de données :
```bash
psql -U postgres
CREATE DATABASE revisai_db;
```

4. Exécuter le schema :
```bash
psql -U postgres -d revisai_db -f database/schema.sql
```

---

## 📝 Prochaines étapes

1. ✅ Setup complet
2. ✅ Backend API de base
3. ⏳ Landing page frontend
4. ⏳ Login/Signup
5. ⏳ Dashboard utilisateur

---

## 🔗 Ressources

- [Vite Documentation](https://vitejs.dev)
- [Express Documentation](https://expressjs.com)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Framer Motion](https://www.framer.com/motion)
- [Hugging Face Inference API](https://huggingface.co/inference-api)

---

**Bon développement ! 🚀**
