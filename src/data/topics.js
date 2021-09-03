const topicsList = [
  // Psychologie

  {
    title: "Profils héroïques, profils fusionnels",
    category: "Psychologie",
  },
  {
    title: "Effet Pygmalion",
    category: "Psychologie",
  },
  {
    title: "Effet Barnum",
    category: "Psychologie",
  },
  {
    title: "Effet Lucifer",
    category: "Psychologie",
  },
  {
    title: "Pensée Bayesienne et Accord Toltèque N°2",
    category: "Psychologie",
  },
  {
    title: "Triangle de Karpman",
    category: "Psychologie",
  },
  {
    title: "Pyramide des besoins",
    category: "Psychologie",
  },
  {
    title: "Loi de Parkinson",
    category: "Psychologie",
  },
  {
    title: "Générer de la dopamine en criant",
    category: "Psychologie",
  },
  {
    title: "Coller des étiquettes sur les participants (au sens figuré)",
    category: "Psychologie",
  },
  {
    title: "Laisser le choix avec une 'fausse' liberté",
    category: "Psychologie",
  },
  {
    title: "Système de moules et raccourcis heuristiques",
    category: "Psychologie",
  },
  {
    title: "Crise de l'identité",
    category: "Psychologie",
  },
  {
    title: "Intelligences multiples",
    category: "Psychologie",
  },
  {
    title: "Ne rien gaspiller",
    category: "Psychologie",
  },
  {
    title: "Trouver une récompense immédiate",
    category: "Psychologie",
  },

  // COGNITIF

  {
    title: "Provoquer le \"flow\" ",
    category: "Cognitif",
  },
  {
    title: "Mémoriser grâce à Deezer",
    category: "Cognitif",
  },
  {
    title: "Mémoriser grâce à Minecraft",
    category: "Cognitif",
  },
  {
    title: "Rythmes de sommeil et pics d'attention",
    category: "Cognitif",
  },
  {
    title: "Utiliser plusieurs supports sensitifs",
    category: "Cognitif",
  },
  {
    title: "Auditif VS Visuel",
    category: "Cognitif",
  },
  {
    title: "La mémoire de travail",
    category: "Cognitif",
  },
  {
    title: "Le mouvement quand on apprend",
    category: "Cognitif",
  },

  // SOCIOLOGIQUE

  {
    title: "Qu'est-ce que la sociologie ?",
    category: "Sociologique",
  },
  {
    title: "Faire adopter une idée",
    category: "Sociologique",
  },
  {
    title: "Conformisme de Asch",
    category: "Sociologique",
  },
  {
    title: "Surfer sur la vague ?",
    category: "Sociologique",
  },
  {
    title: "L'effet de mode avec la courbe de Gauss",
    category: "Sociologique",
  },
  {
    title: "Dilemme du prisonnier",
    category: "Sociologique",
  },
  {
    title: "Effet Banister",
    category: "Sociologique",
  },
  {
    title: "Différences culturelles Nord / Sud",
    category: "Sociologique",
  },
  {
    title: "Relation moi enfant, moi adulte, moi parent",
    category: "Sociologique",
  },
  {
    title: "Motivation chez les adultes",
    category: "Sociologique",
  },
  {
    title: "Motivation chez les enfants",
    category: "Sociologique",
  },
  {
    title: "Les enfants, rois de l'apprentissage ?",
    category: "Sociologique",
  },

  // Freins à l'apprentissage
  {
    title: "Vouloir former des gens obéissants",
    category: "Frein",
  },
  {
    title: "Juger la valeur d'une personne sur son orthographe",
    category: "Frein",
  },
  {
    title: "La peur de l'échec",
    category: "Frein",
  },
  {
    title: "Confondre évaluation et correction",
    category: "Frein",
  },
  {
    title: "La place du formateur",
    category: "Frein",
  },
  {
    title: "Education impersonelle",
    category: "Frein",
  },
  {
    title: "L'impuissance apprise",
    category: "Frein",
  },
  {
    title: "Compétition destructrice",
    category: "Frein",
  },
  {
    title: "La récompense",
    category: "Frein",
  },
  {
    title: "Ne pas capter l'attention",
    category: "Frein",
  },
  {
    title: "Faire taire la curiosité",
    category: "Frein",
  },
  {
    title: "Préparer un cours pour impressionner les collègues",
    category: "Frein",
  },
  {
    title: "Les effets de groupe",
    category: "Frein",
  },
  {
    title: "Fatiguer le cerveau inutilement",
    category: "Frein",
  },
  {
    title: "Imposer une vision de la réalité",
    category: "Frein",
  },
  {
    title: "La zone de confort",
    category: "Frein",
  },

  // Bonnes pratiques
  {
    title: "Shu ha Ri",
    category: "Bonnes pratiques",
  },
  {
    title: "Duck learning",
    category: "Bonnes pratiques",
  },
  {
    title: "Proposer des excercices dont le résultat pourra servir l'humanité",
    category: "Bonnes pratiques",
  },
  {
    title: "Utiliser le principe de la Pente Douce",
    category: "Bonnes pratiques",
  },
  {
    title: "Utiliser l'approche du Cercle d'or de Simon Sinek",
    category: "Bonnes pratiques",
  },
  {
    title: "Exploiter les 4 étapes de l'apprentissage",
    category: "Bonnes pratiques",
  },
  {
    title: "Utiliser la technique du texte à trou",
    category: "Bonnes pratiques",
  },
  {
    title: "Proposer des exercices collaboratifs",
    category: "Bonnes pratiques",
  },
  {
    title: "Utiliser la méthode Pomodoro",
    category: "Bonnes pratiques",
  },
  {
    title: "Utiliser les couleurs",
    category: "Bonnes pratiques",
  },
  {
    title: "Utiliser le Storytelling",
    category: "Bonnes pratiques",
  },
  {
    title: "Apprendre en jouant",
    category: "Bonnes pratiques",
  },
  {
    title: "Apprendre par la chanson",
    category: "Bonnes pratiques",
  },
  {
    title: "Utiliser des images",
    category: "Bonnes pratiques",
  },
  {
    title: "Encourager les activités extra-scolaires",
    category: "Bonnes pratiques",
  },
  {
    title: "Apprentissage en autonomie",
    category: "Bonnes pratiques",
  },
  {
    title: "Rendre le cours attractif",
    category: "Bonnes pratiques",
  },
  {
    title: "Adopter une démarche de communication non violente",
    category: "Bonnes pratiques",
  },
  {
    title: "Adapter le cours au domaine pour pratiquer",
    category: "Bonnes pratiques",
  },
  {
    title: "Proposer des exercices concrets",
    category: "Bonnes pratiques",
  },
  {
    title: "Fonctionner par association",
    category: "Bonnes pratiques",
  },
  {
    title: "Outils collaboratifs (Beekast, Kahoot, Wooclap)",
    category: "Bonnes pratiques",
  },
  {
    title: "Surprendre en créant la surprise",
    category: "Bonnes pratiques",
  },
  {
    title: "Gérer la fatigue des apprenant.e.s",
    category: "Bonnes pratiques",
  },
  {
    title: "Orienter les formé.e.s sur la recherche des connaissances plutôt que des notes",
    category: "Bonnes pratiques",
  },
  {
    title: "Demander un feedback, indispensable !",
    category: "Bonnes pratiques",
  },
  {
    title: "Sonder les participants sur leurs attentes",
    category: "Bonnes pratiques",
  },
  {
    title: "Améliorer sa communication orale",
    category: "Bonnes pratiques",
  },
  {
    title: "Améliorer sa qualité de persuasion",
    category: "Bonnes pratiques",
  },
  {
    title: "Maîtriser la communication non verbale",
    category: "Bonnes pratiques",
  },
  {
    title: "Avous-nous le droit à l'erreur en tant que formateurice ?",
    category: "Bonnes pratiques",
  },
  {
    title: "Prendre soin de soi en tant que formateurice",
    category: "Bonnes pratiques",
  },
  {
    title: "Comment améliorer la qualité de l'évaluation",
    category: "Bonnes pratiques",
  },
  {
    title: "Comment bien gérer ses ressources et données",
    category: "Bonnes pratiques",
  },
  {
    title: "Comment bien gérer le suivi de chaque formé.e ?",
    category: "Bonnes pratiques",
  },
  {
    title: "Proposer des Ice Breaking Game adaptés",
    category: "Bonnes pratiques",
  },
  {
    title: "Proposer des votes pondérés",
    category: "Bonnes pratiques",
  },
  {
    title: "La place de l'humour dans les formations",
    category: "Bonnes pratiques",
  },
  {
    title: "Tenir ses engagements",
    category: "Bonnes pratiques",
  },
  {
    title: "Attribuer des rôles aléatoires",
    category: "Bonnes pratiques",
  },
  {
    title: "Célébrer les réussites",
    category: "Bonnes pratiques",
  },
  {
    title: "Créer des exercices efficaces",
    category: "Bonnes pratiques",
  },

  // Exemples
  {
    title: "Une fille de 6 ans gère l'achat d'une piscine pour son école",
    category: "Exemple",
  },
  {
    title: "GAELIS, mise en situation",
    category: "Exemple",
  },
  {
    title: "Donner un nom amusant à la formation",
    category: "Exemple",
  },
  {
    title: "Organiser une course d'orientation/Escape game pour apprendre l'Histoire",
    category: "Exemple",
  },
  {
    title: "Associer des images de Dixit avec des notions du cours",
    category: "Exemple",
  },
  {
    title: "Neurofeedback",
    category: "Exemple",
  },
  {
    title: "Méthode Montessori",
    category: "Exemple",
  },
  {
    title: "Duolingo",
    category: "Exemple",
  },
  {
    title: "Flaschards",
    category: "Exemple",
  },
  {
    title: "Mooc (Cours en ligne)",
    category: "Exemple",
  },
  {
    title: "Marshmallow Challenge",
    category: "Exemple",
  },
  {
    title: "Forum d'entraide (Stack Overflow)",
    category: "Exemple",
  },
  {
    title: "Méthode de Singapour",
    category: "Exemple",
  },
  {
    title: "Système éducatif en Finlande",
    category: "Exemple",
  },
  {
    title: "Manuels scolaires en Russie et en Amérique",
    category: "Exemple",
  },
  {
    title: "Boulier d'abaccus",
    category: "Exemple",
  },
  {
    title: "Corée, musée de la connaissance avec Hubo Einstein",
    category: "Exemple",
  },
  {
    title: "Changer de langue d'enseignement ? (Espéranto ?)",
    category: "Exemple",
  },

  // Memorisation
  {
    title: "Courbe d'oubli",
    category: "Memorisation",
  },
  {
    title: "Serial Position Effect",
    category: "Memorisation",
  },
  {
    title: "Crochet de mémoire",
    category: "Memorisation",
  },
  {
    title: "Palais mental",
    category: "Memorisation",
  },
  {
    title: "Mémoriser grâce aux sens",
    category: "Memorisation",
  },
  {
    title: "Comment marche la mémoire ?",
    category: "Memorisation",
  },
  {
    title: "Comment mémoriser Pi ?",
    category: "Memorisation",
  },


  // Personnalités

  {
    title: "Idriss Aberkane : L'âge de la connaissance",
    category: "Personnalités",
  },
  {
    title: "Jean-Yves Ponce - Comment devenir un champion de la mémoire",
    category: "Personnalités",
  },
  {
    title: "Julien Estier - Comment travailler avec les jeunes générations",
    category: "Personnalités",
  },
  {
    title: "Céline Alvarez - Comment mettre en lumière le potentiel des enfants",
    category: "Personnalités",
  },
];

export default topicsList;
