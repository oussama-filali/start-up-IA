// 🔝 Composant Navbar - Layout RevisAI
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faComments, faTrophy, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../ui/Button';
import { useState } from 'react';

/**
 * 🎨 Barre de navigation principale
 */
export const Navbar = ({ isLoggedIn, onLogout }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* 📚 Logo */}
          <div className="text-2xl font-bold gradient-text">
            RevisAI
          </div>

          {/* 🖥️ Navigation Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-dark hover:text-primary transition">
              Accueil
            </a>
            <a href="/courses" className="text-dark hover:text-primary transition">
              Cours
            </a>
            {isLoggedIn && (
              <>
                <a href="/dashboard" className="text-dark hover:text-primary transition">
                  Dashboard
                </a>
                <a href="/ai-chat" className="text-dark hover:text-primary transition">
                  IA Assistant
                </a>
              </>
            )}
          </div>

          {/* 🔐 Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Button variant="outline" size="md">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Profil
                </Button>
                <Button variant="secondary" size="md" onClick={onLogout}>
                  Déconnexion
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="md">Connexion</Button>
                <Button variant="primary" size="md">Inscription</Button>
              </>
            )}
          </div>

          {/* 📱 Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-primary text-2xl"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* 📱 Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden mt-4 pb-4 border-t pt-4"
          >
            <a href="/" className="block py-2 text-dark hover:text-primary">
              Accueil
            </a>
            <a href="/courses" className="block py-2 text-dark hover:text-primary">
              Cours
            </a>
            {isLoggedIn && (
              <>
                <a href="/dashboard" className="block py-2 text-dark hover:text-primary">
                  Dashboard
                </a>
                <a href="/ai-chat" className="block py-2 text-dark hover:text-primary">
                  IA Assistant
                </a>
              </>
            )}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
