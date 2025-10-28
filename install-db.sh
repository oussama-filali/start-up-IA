#!/bin/bash
# 🗄️ Script d'installation PostgreSQL - RevisAI (Linux/Mac)

echo ""
echo "========================================"
echo "🗄️  RevisAI - Installation Database"
echo "========================================"
echo ""

# Vérifier si PostgreSQL est installé
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL n'est pas installé"
    echo ""
    echo "📥 Installation:"
    echo "  Ubuntu/Debian: sudo apt install postgresql"
    echo "  Mac: brew install postgresql"
    echo ""
    exit 1
fi

echo "✅ PostgreSQL détecté"
echo ""

# Demander les credentials
read -p "Utilisateur PostgreSQL (défaut: postgres): " DB_USER
DB_USER=${DB_USER:-postgres}

read -sp "Mot de passe PostgreSQL: " DB_PASSWORD
echo ""
echo ""

echo "📦 Création de la base de données..."

# Créer la database
PGPASSWORD=$DB_PASSWORD psql -U $DB_USER -c "CREATE DATABASE revisai_db;" 2>/dev/null
if [ $? -eq 0 ]; then
    echo "✅ Database 'revisai_db' créée"
else
    echo "⚠️  Database existe déjà ou erreur de connexion"
fi

echo ""
echo "📋 Exécution du schema SQL..."

# Exécuter le schema
PGPASSWORD=$DB_PASSWORD psql -U $DB_USER -d revisai_db -f database/schema.sql

if [ $? -eq 0 ]; then
    echo "✅ Schema exécuté avec succès"
else
    echo "❌ Erreur lors de l'exécution du schema"
    exit 1
fi

echo ""
echo "========================================"
echo "✅ Installation terminée !"
echo "========================================"
echo ""
echo "🔗 Connexion: postgresql://$DB_USER:***@localhost:5432/revisai_db"
echo ""
echo "📝 N'oubliez pas de mettre à jour backend/.env avec:"
echo "   DB_USER=$DB_USER"
echo "   DB_PASSWORD=VOTRE_MOT_DE_PASSE"
echo "   DB_NAME=revisai_db"
echo ""
