#!/bin/bash
# 🚀 Script pour démarrer les deux serveurs RevisAI (Linux/Mac)

echo ""
echo "========================================"
echo "🚀 RevisAI - Démarrage complet"
echo "========================================"
echo ""

# 🏗️ Démarrer le backend
echo "🏗️ Lancement du Backend (Port 5000)..."
cd backend && npm run dev &
BACKEND_PID=$!

# ⏰ Attendre que le backend démarre
sleep 3

# 🎨 Démarrer le frontend
echo "🎨 Lancement du Frontend (Port 5173)..."
cd ../frontend && npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Serveurs démarrés :"
echo "   🏗️  Backend  → http://localhost:5000"
echo "   🎨 Frontend → http://localhost:5173"
echo ""
echo "📝 Appuie sur Ctrl+C pour arrêter tous les serveurs"
echo ""

# Attendre que l'utilisateur arrête
wait
