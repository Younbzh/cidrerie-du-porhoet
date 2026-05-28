export const siteConfig = {
  businessName: "Cidrerie du Porhoët",
  tagline: "Cidre artisanal vivant · Mohon, Morbihan",
  description: "Cidre artisanal non filtré, non pasteurisé, à fermentation naturelle. Thierry Jolivet produit ses cuvées au Manoir de La Ville Quesniac à Mohon (Morbihan).",

  contact: {
    phone: "06 24 93 61 34",
    whatsapp: "33624936134",
    email: "cidrerieduporhoet@gmail.com",
    address: {
      street: "Manoir de La Ville Quesniac",
      city: "Mohon",
      postalCode: "56490",
      region: "Morbihan",
      country: "France"
    }
  },

  social: {
    facebook: "https://www.facebook.com/share/1BYmRb4KTz/",
    instagram: "https://www.instagram.com/cidrerieduporhoet/",
    youtube: "https://www.youtube.com/watch?v=XPwPUg3W9Yw"
  },

  hours: {
    message: "Vente sur les marchés et sur rendez-vous au Manoir de La Ville Quesniac",
    details: [
      { day: "Marchés du Morbihan", hours: "Voir agenda" },
      { day: "Cidrerie à Mohon", hours: "Sur rendez-vous" },
      { day: "Délai de réponse", hours: "Sous 48h" }
    ]
  },

  hero: {
    title: "Le cidre, au rang du vin.",
    subtitle: "Je fabrique mon cidre dans la grange de 1723 du Manoir de La Ville Quesniac, à Mohon. Non filtré, non pasteurisé, fermenté avec les levures des pommes — un cidre vivant, à mettre à votre table.",
    cta: {
      primary: "Nos cuvées",
      secondary: "Nous contacter"
    },
    features: [
      "Non filtré",
      "Non pasteurisé",
      "Levures indigènes"
    ]
  },

  about: {
    title: "Bonjour, je suis Thierry",
    subtitle: "Fondateur de la Cidrerie du Porhoët, artisan cidrier au Manoir de La Ville Quesniac, Mohon (Morbihan)",
    content: [
      "Je suis fils et petit-fils d'agriculteurs bretons. Le cidre — le « vin de pomme » de mes aïeuls — coulait déjà dans les veines de ma famille avant de couler dans mes verres. Reprendre ce fil, le réinterpréter avec l'exigence d'un vigneron : c'était une évidence.",
      "Avant de presser la première pomme, j'ai pris trois ans pour me préparer. Des formations, cinq stages dans des domaines viticoles de Bretagne nantaise, une rencontre déterminante avec Virginie Thomas — sommelière qualifiée de « druidesse des cidres ». Rien n'a été laissé au hasard.",
      "Depuis l'automne 2025, je produis dans la grange de 1723 du Manoir de La Ville Quesniac, propriété familiale depuis 1988. 3 500 bouteilles pour cette première récolte, toutes remplies et étiquetées à la main. Mon cidre n'est pas un produit : c'est une signature."
    ],
    values: [
      {
        title: "Identité bretonne",
        description: "Le Triskell, le Gwenn ha du, la langue bretonne, les fest-noz… et le cidre. Préserver ce marqueur vivant de notre patrimoine est le sens de ma reconversion."
      },
      {
        title: "Méthode viti-cidricole",
        description: "Je travaille le cidre comme on travaille le vin : pas de filtration, pas de pasteurisation, fermentation avec les levures indigènes, prise de mousse naturelle en bouteille."
      },
      {
        title: "Terroir et variétés",
        description: "Les pommiers bretons ont leurs cépages comme la vigne. Je loue des vergers locaux pour un hectare de pommes à caractère — et je cultive moi-même la Marine Auffray à Ménéac."
      },
      {
        title: "Artisan, pas industriel",
        description: "3 500 bouteilles en 2025, 10 000 en 2026 — mais jamais au détriment de l'exigence. Chaque bouteille est remplie et étiquetée à la main."
      }
    ],
    stats: [
      { number: "3 500", label: "bouteilles · récolte 2025" },
      { number: "3", label: "cuvées artisanales" },
      { number: "2ᵉ", label: "prix CiderPunk 2025" }
    ]
  },

  services: {
    title: "Nos cuvées",
    subtitle: "Trois cidres et un jus de pomme — chacun raconte un terroir, une variété, un moment",
    list: [
      {
        name: "Le Kentañ — extra-brut",
        description: "Le premier (en breton). Mon extra-brut, sec et minéral, qui s'est distingué au concours CiderPunk 2025. Il accompagne le poisson, un rôti, une galette de sarrasin — là où on attendrait un vin blanc sec.",
        features: ["Extra-brut", "2ᵉ prix CiderPunk 2025", "Poisson · Rôti · Galette · Sushis", "Minéral & délicat"],
        icon: "Wine",
        photo: "/pomme.jpeg"
      },
      {
        name: "Le Lion en Follery — brut",
        description: "Un clin d'œil à l'histoire de Guilliers, « sans rendre fous ses consommateurs » ! Un brut équilibré, structuré, avec du caractère. Il prend sa place à table comme un vin rouge léger.",
        features: ["Brut", "Structuré & équilibré", "Clin d'œil à Guilliers", "À table comme un vin"],
        icon: "Award",
        photo: "/promotion-cidre.jpeg"
      },
      {
        name: "Marie de Menia — monovariétal",
        description: "Une cuvée monovariétale, fruitée et expressive. La pomme star est la Marine Auffray, que je cultive moi-même à Ménéac. À l'image d'un grand cru, elle raconte un lieu et une saison.",
        features: ["Monovariétal", "Pomme Marine Auffray", "Cultivée à Ménéac", "Fruitée & expressive"],
        icon: "Leaf",
        photo: "/pomme.jpeg"
      },
      {
        name: "Jus de pomme artisanal",
        description: "Le jus de pomme comme on l'a oublié : pur, sans sucre ajouté, sans additif. Pressé à partir des mêmes vergers que mes cidres — pour ceux qui veulent goûter le terroir breton sans alcool.",
        features: ["Sans sucre ajouté", "Sans additif", "Pommes bretonnes locales", "Pour tous"],
        icon: "Droplets",
        photo: "/promotion-cidre.jpeg"
      }
    ]
  },

  whyChooseUs: {
    title: "Ce qui rend mon cidre vivant",
    subtitle: "Ce que je refuse de faire est aussi important que ce que je fais.",
    reasons: [
      {
        title: "Non filtré, non pasteurisé",
        description: "Mon cidre conserve toute sa vie microbienne. Pas de filtration, pas de chaleur. Il évolue, il surprend — c'est ça, un cidre vivant.",
        icon: "Leaf"
      },
      {
        title: "Prise de mousse naturelle",
        description: "L'effervescence naît en bouteille lors d'une seconde fermentation naturelle — sans aucune gazéification artificielle. Comme le champagne, mais pour les pommes bretonnes.",
        icon: "Sparkles"
      },
      {
        title: "Levures indigènes",
        description: "Je n'ajoute aucune levure commerciale. Ce sont les levures sauvages présentes sur les pommes qui conduisent la fermentation — une signature du terroir.",
        icon: "CheckCircle"
      },
      {
        title: "Pommes bretonnes, vergers locaux",
        description: "Un hectare de vergers loués dans les environs de Mohon, des variétés bretonnes traditionnelles. Pressées dans ma grange de 1723 — à deux pas du verger.",
        icon: "MapPin"
      },
      {
        title: "Récompensé au CiderPunk 2025",
        description: "Mon extra-brut Le Kentañ a décroché le 2ᵉ prix au salon du cidre naturel à Rennes en 2025. Une reconnaissance pour la démarche, pas juste pour le produit.",
        icon: "Award"
      },
      {
        title: "Trois ans de préparation",
        description: "Cinq stages en vignobles de Bretagne nantaise, formation auprès d'une sommelière spécialisée. Avant de vous vendre une bouteille, j'ai d'abord appris à la mériter.",
        icon: "Clock"
      }
    ]
  },

  serviceArea: {
    title: "Venez me retrouver",
    description: "Je suis présent sur les marchés locaux du Morbihan et du Centre-Bretagne. Et sur rendez-vous au Manoir de La Ville Quesniac, à Mohon.",
    cities: [
      "Josselin",
      "Malestroit",
      "Ploërmel",
      "La Trinité-Porhoët",
      "Évriguet",
      "Le Roc-Saint-André",
      "Taupont",
      "Épiceries fines",
      "Restaurants",
      "Sur RDV à Mohon"
    ],
    radius: "Et bientôt dans d'autres épiceries fines et restaurants du Morbihan — contactez-moi pour devenir revendeur."
  },

  faq: {
    title: "Vous avez des questions ?",
    subtitle: "Je réponds aux plus fréquentes — et je suis toujours joignable si vous en avez d'autres",
    questions: [
      {
        question: "Où puis-je trouver vos cidres ?",
        answer: "Je suis présent sur les marchés de Josselin, Malestroit, Ploërmel, La Trinité-Porhoët, Évriguet, Le Roc-Saint-André et Taupont. Vous pouvez aussi me contacter directement — je constitue progressivement un réseau d'épiceries fines et de restaurants."
      },
      {
        question: "Qu'est-ce qui différencie votre cidre d'un cidre industriel ?",
        answer: "Mon cidre est vivant : ni filtré, ni pasteurisé. Il fermente avec les levures naturellement présentes sur les pommes, et la mousse naît en bouteille — sans gazéification artificielle. L'industrie cherche la régularité ; moi, je cherche le caractère."
      },
      {
        question: "Comment se déroule la fermentation naturelle ?",
        answer: "Après le pressurage, le jus fermente lentement avec les levures indigènes des pommes. Une fois en bouteille, une seconde fermentation crée l'effervescence naturellement — comme pour le champagne ou le crémant. C'est long, c'est délicat, c'est ce qui fait la différence."
      },
      {
        question: "Comment conserver les bouteilles ?",
        answer: "Conservez-les à la cave, entre 10 et 15 °C, à l'abri de la lumière. Debout ou couché, les deux fonctionnent. Comme pour un bon vin, la patience est récompensée."
      },
      {
        question: "Quels plats accompagnent vos cidres ?",
        answer: "Le Kentañ (extra-brut) est parfait avec du poisson, un rôti, une galette ou des sushis. Le Lion en Follery (brut) se marie avec les fromages et les viandes. La Marie de Menia (monovariétal, fruitée) s'apprécie à l'apéro ou avec des desserts légers. Et le jus de pomme va avec tout !"
      },
      {
        question: "Proposez-vous de la vente directe à la cidrerie ?",
        answer: "Oui, sur rendez-vous. Contactez-moi par téléphone ou email pour convenir d'un passage au Manoir de La Ville Quesniac à Mohon. C'est l'occasion de voir la grange de 1723 et de goûter directement à la source."
      },
      {
        question: "Combien de bouteilles produisez-vous ?",
        answer: "3 500 bouteilles pour la première récolte d'automne 2025, toutes remplies et étiquetées à la main. L'objectif pour 2026 est de passer à 10 000 bouteilles, en maintenant la même exigence artisanale."
      },
      {
        question: "Quelles nouveautés préparez-vous ?",
        answer: "J'explore deux projets : un vinaigre de cidre et une co-fermentation de fruits pour un pétillant naturel alcoolisé à 7°. Le terrain est en cours — comme toujours, je prends le temps de bien faire."
      }
    ]
  },

  finalCTA: {
    title: "Une bolée vous attend",
    subtitle: "Venez me retrouver sur les marchés, ou contactez-moi directement pour commander vos bouteilles",
    buttonText: "Nous contacter"
  },

  seo: {
    title: "Cidrerie du Porhoët – Cidre artisanal vivant à Mohon (Morbihan)",
    description: "Cidre artisanal non filtré, non pasteurisé, à fermentation naturelle. Thierry Jolivet produit ses cuvées au Manoir de La Ville Quesniac à Mohon (56). Trois gammes : Le Kentañ, Le Lion en Follery, Marie de Menia.",
    keywords: [
      "cidre artisanal Morbihan",
      "cidre naturel Bretagne",
      "cidrerie Mohon",
      "cidre non pasteurisé",
      "cidre vivant",
      "Le Kentañ cidre",
      "Marie de Menia",
      "cidre Porhoët",
      "Thierry Jolivet cidrier",
      "cidre naturel 56"
    ]
  },

  schema: {
    type: "LocalBusiness",
    additionalType: "FoodEstablishment",
    priceRange: "€€",
    areaServed: "Morbihan, Bretagne"
  }
};
