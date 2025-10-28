@echo off
REM 🗄️ Script d'installation PostgreSQL - RevisAI

echo.
echo ========================================
echo 🗄️  RevisAI - Installation Database
echo ========================================
echo.

REM Vérifier si PostgreSQL est installé
where psql >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ❌ PostgreSQL n'est pas installé ou pas dans le PATH
    echo.
    echo 📥 Téléchargez PostgreSQL: https://www.postgresql.org/download/windows/
    echo.
    pause
    exit /b 1
)

echo ✅ PostgreSQL détecté
echo.

REM Demander les credentials
set /p DB_USER="Utilisateur PostgreSQL (défaut: postgres): " || set DB_USER=postgres
set /p DB_PASSWORD="Mot de passe PostgreSQL: "

echo.
echo 📦 Création de la base de données...

REM Créer la database
psql -U %DB_USER% -c "CREATE DATABASE revisai_db;" 2>nul
if %ERRORLEVEL% EQU 0 (
    echo ✅ Database 'revisai_db' créée
) else (
    echo ⚠️  Database existe déjà ou erreur de connexion
)

echo.
echo 📋 Exécution du schema SQL...

REM Exécuter le schema
psql -U %DB_USER% -d revisai_db -f database\schema.sql

if %ERRORLEVEL% EQU 0 (
    echo ✅ Schema exécuté avec succès
) else (
    echo ❌ Erreur lors de l'exécution du schema
    pause
    exit /b 1
)

echo.
echo ========================================
echo ✅ Installation terminée !
echo ========================================
echo.
echo 🔗 Connexion: postgresql://%DB_USER%:***@localhost:5432/revisai_db
echo.
echo 📝 N'oubliez pas de mettre à jour backend/.env avec:
echo    DB_USER=%DB_USER%
echo    DB_PASSWORD=VOTRE_MOT_DE_PASSE
echo    DB_NAME=revisai_db
echo.

pause
