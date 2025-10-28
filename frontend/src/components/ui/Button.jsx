// 🔘 Composant Button réutilisable - Design System RevisAI
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * 🎨 Composant Button avec variants et tailles personnalisées
 * @param {string} variant - 'primary' | 'secondary' | 'outline'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {object} icon - Icône Font Awesome (ex: faRocket)
 * @param {function} onClick - Fonction au clic
 * @param {string} children - Contenu du bouton
 */
export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  icon,
  disabled = false,
  type = 'button'
}) => {
  // 🎨 Classes Tailwind selon variant
  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-white',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10',
  };
  
  // 📏 Tailles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: !disabled ? 1.02 : 1 }}
      whileTap={{ scale: !disabled ? 0.98 : 1 }}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`
        rounded-lg font-medium transition-all duration-200
        flex items-center justify-center gap-2
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </motion.button>
  );
};
