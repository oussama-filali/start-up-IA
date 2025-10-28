// 🗃️ Composant Card réutilisable - Design System RevisAI
import { motion } from 'framer-motion';

/**
 * 🎨 Composant Card pour afficher du contenu
 * @param {string} className - Classes Tailwind personnalisées
 * @param {React.ReactNode} children - Contenu de la card
 */
export const Card = ({ children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`
        bg-white rounded-xl shadow-lg p-6
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
