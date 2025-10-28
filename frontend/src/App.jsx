// 🚀 Application principale - RevisAI
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// 📚 Import pages
import { Landing } from './pages/Landing';
import { Navbar } from './components/layout/Navbar';

/**
 * 🎨 Composant App - Router principal
 */
function App() {
  // 🔐 État d'authentification (À remplacer par Zustand store)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔓 Fonction déconnexion
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-light">
        {/* 🔝 Navigation */}
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

        {/* 📄 Routes */}
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* 🚀 À ajouter : Login, Dashboard, Courses, etc. */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
