// 🏅 Composant Badge réutilisable - Design System RevisAI
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * 🎨 Composant Badge pour afficher des badges gamification
 * @param {string} name - Nom du badge
 * @param {string} description - Description
 * @param {object} icon - Icône Font Awesome
 * @param {number} xpReward - Points XP
 * @param {boolean} unlocked - Si badge débloqué
 */
export const Badge = ({
  name,
  description,
  icon,
  xpReward = 0,
  unlocked = true
}) => {
  return (
    <div className={`
      p-4 rounded-lg text-center
      transition-all duration-200
      ${unlocked 
        ? 'bg-yellow-100 border-2 border-yellow-500' 
        : 'bg-gray-100 border-2 border-gray-300 opacity-50'
      }
    `}>
      <div className="text-4xl mb-2">
        {icon && <FontAwesomeIcon icon={icon} />}
      </div>
      <h3 className="font-bold text-sm text-dark">{name}</h3>
      <p className="text-xs text-gray-600 mt-1">{description}</p>
      {xpReward > 0 && (
        <p className="text-accent font-bold mt-2">+{xpReward} XP</p>
      )}
    </div>
  );
};
