const { spawn } = require('child_process');
const path = require('path');

console.log('========================================');
console.log(' Démarrage du projet Start-up IA');
console.log('========================================\n');

// Démarrer le backend
console.log('[1/2] Démarrage du Backend...');
const backend = spawn('node', ['server.js'], {
  cwd: path.join(__dirname, 'backend'),
  stdio: 'inherit',
  shell: true
});

// Attendre un peu avant de démarrer le frontend
setTimeout(() => {
  console.log('\n[2/2] Démarrage du Frontend...');
  const frontend = spawn('npm', ['run', 'dev'], {
    cwd: path.join(__dirname, 'frontend'),
    stdio: 'inherit',
    shell: true
  });

  console.log('\n========================================');
  console.log(' Projet démarré avec succès!');
  console.log('========================================');
  console.log(' Backend:  http://localhost:3000');
  console.log(' Frontend: http://localhost:5173');
  console.log('========================================\n');

  frontend.on('error', (error) => {
    console.error('Erreur Frontend:', error);
  });

  frontend.on('exit', (code) => {
    console.log(`Frontend arrêté avec le code ${code}`);
    backend.kill();
    process.exit(code);
  });
}, 2000);

backend.on('error', (error) => {
  console.error('Erreur Backend:', error);
});

backend.on('exit', (code) => {
  console.log(`Backend arrêté avec le code ${code}`);
  process.exit(code);
});

// Gestion de l'arrêt propre
process.on('SIGINT', () => {
  console.log('\n\nArrêt du projet...');
  backend.kill();
  process.exit(0);
});
