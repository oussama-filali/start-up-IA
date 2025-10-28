// ⌨️ Composant Input réutilisable - Design System RevisAI

/**
 * 🎨 Composant Input pour formulaires
 * @param {string} type - Type d'input (text, email, password, etc.)
 * @param {string} placeholder - Placeholder
 * @param {string} value - Valeur actuelle
 * @param {function} onChange - Callback changement
 * @param {string} label - Label de l'input
 * @param {string} error - Message d'erreur
 */
export const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  disabled = false,
  required = false,
  icon: Icon
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-dark mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
            <Icon size={20} />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full px-4 py-3 rounded-lg
            border-2 transition-all duration-200
            ${Icon ? 'pl-10' : ''}
            ${error 
              ? 'border-red-500 focus:border-red-600' 
              : 'border-gray-300 focus:border-primary'
            }
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
            focus:outline-none
          `}
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1">❌ {error}</p>
      )}
    </div>
  );
};
