# 🔑 Guide Configuration - Variables d'environnement

## 🤖 Obtenir une clé API Hugging Face (GRATUIT)

### Étape 1: Créer un compte
1. Va sur https://huggingface.co/join
2. Inscris-toi gratuitement (email + mot de passe)
3. Vérifie ton email

### Étape 2: Générer un Access Token
1. Va sur https://huggingface.co/settings/tokens
2. Clique sur "New token"
3. Nom du token: `RevisAI`
4. Type: **Read** (suffisant pour l'API Inference)
5. Clique sur "Generate"
6. **COPIE** le token (commence par `hf_...`)

### Étape 3: Configurer le Backend
Ouvre `backend/.env` et colle ton token:
```env
HUGGINGFACE_API_KEY=hf_VotreCléIci
```

---

## 🔐 Générer un JWT Secret sécurisé

### Option 1: Node.js
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### Option 2: PowerShell
```powershell
[Convert]::ToBase64String((1..64 | ForEach-Object { Get-Random -Maximum 256 }))
```

### Option 3: En ligne
https://randomkeygen.com/ (256-bit)

Copie le secret généré dans `backend/.env`:
```env
JWT_SECRET=VotreSecretIciTresLongEtAleatoire
```

---

## 🗄️ Configuration PostgreSQL

### Si PostgreSQL n'est PAS installé:

**Windows:**
1. Télécharge: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
2. Installe (PostgreSQL 16 recommandé)
3. Retiens ton mot de passe `postgres`

**Mac:**
```bash
brew install postgresql@16
brew services start postgresql@16
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

### Créer la database:
```bash
# Windows
install-db.bat

# Linux/Mac
chmod +x install-db.sh
./install-db.sh
```

Configure `backend/.env`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=TonMotDePassePostgreSQL
DB_NAME=revisai_db
```

---

## ✅ Vérification

### Test Backend:
```bash
cd backend
npm run dev
```

Si tout fonctionne, tu verras:
```
✅ Connecté à PostgreSQL
🚀 Serveur RevisAI démarré sur http://localhost:5000
```

### Test Frontend:
```bash
cd frontend
npm run dev
```

Ouvre http://localhost:5173 (ou 5174)

---

## 🔧 Fichier `.env` complet

`backend/.env`:
```env
# 🗄️ PostgreSQL Database
DATABASE_URL=postgresql://postgres:admin@localhost:5432/revisai_db
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=admin
DB_NAME=revisai_db

# 🚀 Serveur
PORT=5000
NODE_ENV=development

# 🔐 Sécurité JWT
JWT_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6

# 🤖 Hugging Face API
HUGGINGFACE_API_KEY=hf_VotreCleIci

# 🌐 CORS
CORS_ORIGIN=http://localhost:5173
```

`frontend/.env.local`:
```env
# 🔌 API Backend
VITE_API_URL=http://localhost:5000

# 🌍 Mode
VITE_MODE=development
```

---

## ⚠️ Sécurité

- ❌ **NE JAMAIS** commit `.env` sur Git
- ✅ `.env` est dans `.gitignore`
- ✅ Partage `.env.example` à la place
- ✅ Change JWT_SECRET en production
- ✅ Change DB_PASSWORD en production

---

## 🆘 Problèmes courants

### "Cannot connect to database"
- Vérifie que PostgreSQL est démarré
- Vérifie DB_USER et DB_PASSWORD dans .env
- Test: `psql -U postgres`

### "Invalid Hugging Face API key"
- Vérifie que la clé commence par `hf_`
- Vérifie qu'elle est bien dans .env
- Test: `echo $HUGGINGFACE_API_KEY`

### "JWT Secret error"
- Vérifie que JWT_SECRET n'est pas vide
- Minimum 32 caractères recommandé

---

**Besoin d'aide ? Check AUDIT_28_OCT.md** 📖
