# 🎨 Prompt Figma - Design System RevisAI

**Date de création :** 28 octobre 2025  
**Projet :** RevisAI - Plateforme d'apprentissage IA  
**Destinataire :** Figma AI / Designer UI/UX

---

## 🎯 Prompt complet pour Figma

```
Crée un prototype de design system complet et moderne pour une plateforme d'apprentissage en ligne révolutionnaire utilisant l'IA.

=== CONTEXTE DU PROJET ===
Nom : RevisAI
Type : Plateforme éducative SaaS avec IA intégrée
Public cible : Étudiants (18-35 ans) et professionnels en reconversion
Style : Moderne, minimaliste, engageant, gamifié

=== STACK TECHNIQUE (à refléter dans le design) ===
Frontend : React.js (interfaces composants, SPA fluide)
Backend : Node.js (API REST moderne)
Base de données : PostgreSQL (données structurées fiables)
IA/ML : 
- OpenAI GPT-4 (assistant conversationnel)
- TensorFlow.js (modèles prédictifs côté client)
- Python FastAPI (microservices ML côté serveur)

=== PALETTE DE COULEURS ===
Primaire : #6366F1 (Indigo vif - confiance, technologie)
Secondaire : #8B5CF6 (Violet - créativité, IA)
Accent : #10B981 (Vert émeraude - succès, progression)
Neutre : #1F2937 (Gris foncé), #F9FAFB (Gris clair)
Alert : #EF4444 (Rouge), #F59E0B (Orange)

=== TYPOGRAPHIE ===
Headers : Inter Bold (moderne, lisible)
Body : Inter Regular
Code : JetBrains Mono (pour extraits de code)

=== PAGES À CRÉER (12 écrans) ===

1. LANDING PAGE (Homepage)
   - Hero section avec animation
   - Proposition de valeur claire
   - 3 features principales (IA Assistant, Parcours adaptatifs, Gamification)
   - CTA "Commencer gratuitement"
   - Témoignages étudiants
   - Footer avec liens

2. SIGN UP / LOGIN
   - Formulaire simple et moderne
   - Option "Continuer avec Google/GitHub"
   - Illustration IA côté droit
   - Mode sombre/clair toggle

3. ONBOARDING (3 étapes)
   - Étape 1 : Choix du domaine (Dev, Data, Design, Business)
   - Étape 2 : Quiz de niveau (slider interactif)
   - Étape 3 : Objectifs personnalisés
   - Progress bar en haut

4. DASHBOARD PRINCIPAL
   - Sidebar gauche : Navigation (Mes cours, Progression, Assistant IA, Communauté)
   - Barre progression globale (XP, niveau, streak)
   - Section "Continuer l'apprentissage" (3 cards cours en cours)
   - Section "Recommandations IA" (suggestions personnalisées)
   - Widget stats : Temps d'apprentissage, badges débloqués
   - Assistant IA floating button (bottom-right)

5. PAGE COURS INDIVIDUEL
   - Vidéo/contenu principal (large)
   - Sidebar droite : Table des matières chapitres
   - Barre progression cours
   - Section "Exercice pratique" avec éditeur de code intégré
   - Bouton "Demander à l'IA" en évidence
   - Zone commentaires/questions en bas

6. ASSISTANT IA (Chat Interface)
   - Interface chat moderne (type ChatGPT)
   - Messages de l'IA avec avatar robot
   - Messages utilisateur avec avatar perso
   - Input avec suggestions intelligentes
   - Boutons quick actions : "Explique", "Donne un exemple", "Quiz moi"
   - Historique conversations sidebar gauche

7. ÉDITEUR DE CODE INTERACTIF
   - Split view : code gauche, résultat droite
   - Syntax highlighting
   - Bouton "Vérifier avec IA"
   - Feedback IA en temps réel (annotations code)
   - Console output en bas
   - Bouton "Solution" (si bloqué)

8. PAGE PROGRESSION & ANALYTICS
   - Graph progression dans le temps (Chart.js style)
   - Heatmap activité (type GitHub)
   - Statistiques détaillées (temps, complétion, scores)
   - Badges débloqués avec animations
   - Leaderboard (top 10 apprenants)
   - Prédiction IA : "Tu vas terminer ce parcours en X jours"

9. GAMIFICATION & BADGES
   - Collection badges (grille)
   - Badges locked/unlocked avec effets
   - Système de points XP visualisé
   - Streaks (jours consécutifs) avec flamme
   - Défis hebdomadaires (cards)
   - Récompenses à venir

10. CERTIFICATIONS
    - Liste certifications disponibles
    - Cards avec : nom, durée, niveau requis
    - Progress bar par certification
    - Bouton "Commencer l'examen"
    - Preview certificat (design officiel)

11. PROFIL UTILISATEUR
    - Photo + bannière
    - Bio éditable
    - Stats globales (XP total, cours complétés, temps)
    - Badges affichés
    - Parcours suivis
    - Certifications obtenues
    - Bouton "Partager profil"

12. SETTINGS
    - Profil (édition infos)
    - Préférences apprentissage (vitesse vidéo, notifications)
    - Abonnement (Freemium/Pro) avec upgrade CTA
    - Mode sombre/clair
    - Langues
    - Déconnexion

=== COMPOSANTS UI RÉUTILISABLES ===
- Buttons (primaire, secondaire, outline, icon)
- Cards (cours, stats, recommandations)
- Input fields (text, password, search)
- Progress bars (linéaire, circulaire)
- Badges (niveau, achievements)
- Notifications/Toasts
- Modals/Dialogs
- Navigation (sidebar, topbar)
- Avatar components
- Loading states (skeletons)
- Empty states avec illustrations

=== INTERACTIONS & ANIMATIONS ===
- Hover states sur tous les boutons/cards
- Loading spinners pour appels API
- Transitions fluides entre pages
- Progress bars animées
- Confettis quand badge débloqué
- Smooth scroll
- Drag & drop pour réorganiser

=== ÉTAT VIDE (Empty States) ===
- "Aucun cours commencé" → CTA "Explorer les cours"
- "Aucun badge" → Illustration motivante
- "Historique IA vide" → Suggestions de questions

=== RESPONSIVE ===
- Desktop : 1920x1080 (principal)
- Tablet : 768x1024 (sidebar collapse)
- Mobile : 375x812 (navigation bottom)

=== ICONOGRAPHIE ===
Bibliothèque : Font Awesome 6 (icônes vectorielles professionnelles)
⚠️ IMPORTANT : Pas d'ASCII art, uniquement des vraies icônes vectorielles
Style : Solid (remplissage) et Regular (outline)
Taille : 1x à 4x selon contexte

=== ACCESSIBILITÉ ===
- Contraste WCAG AA minimum
- Focus states visibles
- Textes alternatifs sur images
- Tailles de police min 16px

=== LIVRABLES ATTENDUS ===
1. Design System (couleurs, typo, composants)
2. 12 écrans desktop en haute fidélité
3. Version mobile responsive (3-4 écrans clés)
4. Prototype interactif avec transitions
5. Export développeur (spacings, couleurs en code)

=== INSPIRATION & RÉFÉRENCES ===
- Duolingo (gamification)
- Coursera (structure cours)
- ChatGPT (interface IA)
- Linear (design moderne minimaliste)
- Notion (navigation & layout)

=== PHILOSOPHIE DESIGN ===
"Simple, mais pas simpliste. Moderne sans être froid. Engageant sans être infantile. L'IA doit être omniprésente mais jamais intrusive."

Privilégie les micro-interactions, les états de transition fluides, et une hiérarchie visuelle claire. L'utilisateur doit toujours savoir où il est et ce qu'il peut faire.
```

---

## 📋 Guide d'utilisation du prompt

### 🎯 Où utiliser ce prompt ?

1. **Figma AI** : Copier-coller directement dans l'outil
2. **Designer freelance** : Partager comme brief complet
3. **Équipe design** : Document de référence pour le design system

### ✅ Checklist avant envoi

- [ ] Vérifier que les 12 écrans sont bien listés
- [ ] Confirmer la palette de couleurs (#6366F1, #8B5CF6, #10B981)
- [ ] Valider le stack technique (React, Node.js, PostgreSQL, GPT-4)
- [ ] S'assurer que les composants réutilisables sont mentionnés
- [ ] Vérifier les références d'inspiration

### 📊 Résumé des livrables attendus

| Livrable | Quantité | Format |
|----------|:--------:|--------|
| **Design System** | 1 | Figma file avec variables |
| **Écrans Desktop** | 12 | 1920x1080px haute fidélité |
| **Écrans Mobile** | 3-4 | 375x812px responsive |
| **Prototype interactif** | 1 | Figma prototype avec transitions |
| **Export dev** | 1 | Tokens CSS/Tailwind |

### 🎨 Palette de couleurs (détaillée)

```css
/* Couleurs principales */
--primary: #6366F1;        /* Indigo - Boutons principaux, liens */
--secondary: #8B5CF6;      /* Violet - Éléments IA, badges premium */
--accent: #10B981;         /* Vert - Succès, validation, progression */

/* Neutres */
--gray-900: #1F2937;       /* Texte principal */
--gray-700: #374151;       /* Texte secondaire */
--gray-500: #6B7280;       /* Texte désactivé */
--gray-100: #F3F4F6;       /* Backgrounds */
--gray-50: #F9FAFB;        /* Backgrounds clairs */

/* Alerts */
--error: #EF4444;          /* Erreurs */
--warning: #F59E0B;        /* Avertissements */
--info: #3B82F6;           /* Informations */
--success: #10B981;        /* Succès */

/* Gradients */
--gradient-primary: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
--gradient-success: linear-gradient(135deg, #10B981 0%, #34D399 100%);
```

### 🔤 Typographie (spécifications)

```css
/* Headers */
--font-heading: 'Inter', -apple-system, sans-serif;
--font-weight-heading: 700;

/* Body */
--font-body: 'Inter', -apple-system, sans-serif;
--font-weight-body: 400;

/* Code */
--font-code: 'JetBrains Mono', 'Fira Code', monospace;

/* Tailles */
--text-xs: 12px;     /* Captions, labels */
--text-sm: 14px;     /* Body small */
--text-base: 16px;   /* Body principal */
--text-lg: 18px;     /* Lead text */
--text-xl: 20px;     /* Titre section */
--text-2xl: 24px;    /* Titre card */
--text-3xl: 30px;    /* Titre page */
--text-4xl: 36px;    /* Hero titre */
--text-5xl: 48px;    /* Landing hero */
```

### 📐 Spacing & Layout

```css
/* Spacing système 8px */
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-5: 40px;
--space-6: 48px;
--space-8: 64px;
--space-10: 80px;

/* Border radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

---

## 🚀 Prochaines étapes

### Phase 1 : Design System (Semaine 1)
- [ ] Créer les tokens de couleurs
- [ ] Définir la typographie
- [ ] Créer les composants de base (buttons, inputs, cards)
- [ ] Documenter les espacements et grilles

### Phase 2 : Wireframes (Semaine 2)
- [ ] Créer les wireframes low-fi des 12 écrans
- [ ] Valider la navigation et architecture
- [ ] Définir les flux utilisateurs
- [ ] Itérer sur les retours

### Phase 3 : Haute Fidélité (Semaine 3-4)
- [ ] Appliquer le design system aux 12 écrans
- [ ] Créer les illustrations et assets
- [ ] Ajouter les micro-interactions
- [ ] Version mobile responsive

### Phase 4 : Prototype & Handoff (Semaine 5)
- [ ] Créer le prototype interactif Figma
- [ ] Tester l'UX avec utilisateurs
- [ ] Préparer les exports pour développeurs
- [ ] Documentation technique du design system

---

## 📚 Ressources complémentaires

### Outils recommandés
- **Figma** : Design principal
- **FigJam** : Brainstorming et wireframes
- **Illustrator/Affinity** : Illustrations custom
- **Lottie** : Animations JSON
- **Iconoir/Heroicons** : Bibliothèques d'icônes

### Plugins Figma utiles
- **Unsplash** : Images
- **Iconify** : Icônes
- **Stark** : Accessibilité (contraste)
- **Content Reel** : Contenu factice
- **Auto Layout** : Responsive design

### Références de design
- [Dribbble - EdTech designs](https://dribbble.com/tags/edtech)
- [Behance - Learning platforms](https://behance.net/search?search=learning+platform)
- [Mobbin - Educational apps](https://mobbin.com/browse/ios/education)
- [Figma Community - Design Systems](https://www.figma.com/community/design-systems)

---

## 🎯 Points de validation

### Design System
- [ ] Palette de couleurs complète et contrastée (WCAG AA)
- [ ] Typographie avec hiérarchie claire
- [ ] Composants réutilisables documentés
- [ ] États (hover, active, disabled, focus)
- [ ] Dark mode + Light mode

### UX
- [ ] Navigation intuitive et cohérente
- [ ] Feedback visuel pour chaque action
- [ ] États vides avec CTAs clairs
- [ ] Loading states pour async operations
- [ ] Error handling avec messages explicites

### Accessibilité
- [ ] Contraste minimum 4.5:1 (texte)
- [ ] Taille de texte minimum 16px
- [ ] Focus states visibles
- [ ] Navigable au clavier
- [ ] Alt text sur toutes les images

### Responsive
- [ ] Grille flexible (12 colonnes)
- [ ] Breakpoints définis (mobile, tablet, desktop)
- [ ] Navigation adaptée par device
- [ ] Touch targets min 44x44px (mobile)
- [ ] Performance (images optimisées)

---

## 📞 Contact & Support

Pour toute question sur ce prompt ou le design system :

- 📧 **Email design** : design@revisai.com
- 💬 **Slack** : #design-revisai
- 📁 **Figma** : [Lien vers fichier Figma]
- 📝 **Feedback** : [Google Form de feedback]

---

<div align="center">

**Fait avec ❤️ par l'équipe B2TP**

*"Le design est l'ambassadeur silencieux de votre marque" - Paul Rand*

</div>
