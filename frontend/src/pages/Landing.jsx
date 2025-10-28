// 🏠 Landing Page - RevisAI
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faBrain, faTrophy, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

/**
 * 🏠 Page d'accueil avec hero section et features
 */
export const Landing = () => {
  return (
    <div className="min-h-screen bg-light">
      {/* 🎯 Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 py-20 text-center"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
          Apprends avec l'IA 🚀
        </h1>
        
        <p className="text-xl text-dark/70 mb-8 max-w-2xl mx-auto">
          Une plateforme révolutionnaire qui personnalise ton apprentissage 
          grâce à l'intelligence artificielle. Code, data, design... tout ce que tu veux apprendre.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" icon={faArrowRight}>
            Commencer gratuitement
          </Button>
          <Button variant="outline" size="lg">
            En savoir plus
          </Button>
        </div>
      </motion.section>

      {/* ✨ Features Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Pourquoi RevisAI ?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={faBrain}
            title="Assistant IA 24/7"
            description="Pose tes questions à tout moment et obtiens des réponses personnalisées"
          />
          <FeatureCard 
            icon={faStar}
            title="Parcours adaptatifs"
            description="Le contenu s'adapte à ton niveau et ta vitesse d'apprentissage"
          />
          <FeatureCard 
            icon={faTrophy}
            title="Gamification"
            description="Badges, XP et défis pour rester motivé et progresser"
          />
        </div>
      </section>

      {/* 📊 Stats Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">10k+</h3>
              <p>Utilisateurs actifs</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p>Cours disponibles</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">95%</h3>
              <p>Taux de satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔽 CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Prêt à commencer ?</h2>
        <p className="text-lg text-dark/70 mb-8">Inscris-toi gratuitement et accède à tous les cours</p>
        <Button variant="primary" size="lg" icon={faRocket}>
          Créer un compte
        </Button>
      </section>
    </div>
  );
};

// 🎴 Composant FeatureCard
const FeatureCard = ({ icon, title, description }) => (
  <Card>
    <div className="text-5xl mb-4 text-primary">
      <FontAwesomeIcon icon={icon} />
    </div>
    <h3 className="text-2xl font-bold mb-2 text-dark">{title}</h3>
    <p className="text-dark/70">{description}</p>
  </Card>
);
