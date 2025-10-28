@echo off
echo ========================================
echo  Demarrage du projet Start-up IA
echo ========================================
echo.

echo [1/2] Demarrage du Backend...
cd backend
start "Backend Server" cmd /k "node server.js"
cd ..

timeout /t 3 /nobreak >nul

echo [2/2] Demarrage du Frontend...
cd frontend
start "Frontend Dev Server" cmd /k "npm run dev"
cd ..

echo.
echo ========================================
echo  Projet demarre avec succes!
echo ========================================
echo  Backend:  http://localhost:3000
echo  Frontend: http://localhost:5173
echo ========================================
