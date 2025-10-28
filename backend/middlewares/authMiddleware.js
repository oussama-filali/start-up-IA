// 🛡️ Middleware d'authentification JWT - RevisAI
import jwt from 'jsonwebtoken';

// 🔐 Vérification du token JWT
export const verifyToken = (req, res, next) => {
  try {
    // 🔍 Récupération du token depuis le header Authorization
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res.status(401).json({ 
        error: '❌ Token manquant',
        message: 'Veuillez vous connecter' 
      });
    }

    // 📝 Format attendu: "Bearer TOKEN"
    const token = authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ 
        error: '❌ Format de token invalide',
        message: 'Format attendu: Bearer TOKEN' 
      });
    }

    // ✅ Vérification et décodage du token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 💾 Ajout des infos utilisateur dans la requête
    req.user = decoded;
    
    next();
  } catch (error) {
    // ⚠️ Token invalide ou expiré
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        error: '❌ Token expiré',
        message: 'Veuillez vous reconnecter' 
      });
    }
    
    return res.status(401).json({ 
      error: '❌ Token invalide',
      message: 'Authentification échouée' 
    });
  }
};

// 🔒 Middleware optionnel (routes publiques avec user si connecté)
export const optionalAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
    }
    
    next();
  } catch (error) {
    // ✅ Continue sans user si token invalide
    next();
  }
};
