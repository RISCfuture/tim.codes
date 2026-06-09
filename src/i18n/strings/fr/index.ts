import merge from 'lodash-es/merge'

import en from '../en'
import type { DefaultLocaleMessageSchema, LocaleMessages } from 'vue-i18n'

const fr: LocaleMessages<DefaultLocaleMessageSchema> = {
  bio: {
    occupation: {
      flightInstructor: 'Instructeur de vol FAA (CFI)',
      groundInstructor: 'Instructeur théorique FAA',
      ATP: 'FAA ATP (pilote de ligne)',
      CPL: 'FAA CPL (pilote professionnel)',
      dev: 'Développeur web',
    },
    accomplishment: {
      ATP: {
        AMEL: 'Avion multimoteur terre',
        ASEL: 'Avion monomoteur terre',
        SF50: 'Cirrus SF50 Vision Jet',
        B737: 'Boeing 737 NG',
      },
      CPL: {
        AMES: 'Avion multimoteur mer',
        ASES: 'Avion monomoteur mer',
        GLI: 'Planeur',
      },
      groundInstructor: {
        advanced: 'Avancé',
        instrument: 'Vol aux instruments',
      },
      flightInstructor: {
        ASE: 'Avion monomoteur',
        'IFR-A': 'Vol aux instruments (avion)',
      },
    },
  },
  meta: {
    description: 'Tim Morgan : ingénieur logiciel, pilote',
  },
  localeSwitcher: {
    label: 'Langue',
  },
  header: {
    nav: 'Navigation principale',
    links: {
      home: 'Accueil',
      projects: 'Projets',
      resume: 'CV',
    },
  },
  footer: {
    text: "Tout le contenu, le code et les images (à l'exception des logos) sont protégés par le droit d'auteur ©2011–{year} Tim Morgan. Tous droits réservés. {link}",
    linkText: 'Voir le code source de ce site sur GitHub.',
  },
  project: {
    type: {
      app: 'application',
      gem: 'gem',
      library: 'bibliothèque',
      tool: 'outil',
      website: 'site web',
    },
    websiteType: {
      download: 'télécharger',
      live: 'en ligne',
      source: 'source',
    },
    language: {
      C: 'C',
      CSS: 'CSS',
      ES5: 'ES5',
      ES2015: 'ES2015',
      HTML: 'HTML',
      objectiveC: 'Objective-C',
      ruby: 'Ruby',
      swift: 'Swift',
      typeScript: 'TypeScript',
    },
    library: {
      bootstrap: 'Bootstrap',
      jQuery: 'jQuery',
      rails: 'Ruby on Rails',
      stimulus: 'Stimulus + Turbo + Hotwire',
      swiftUI: 'SwiftUI',
      vueJS: 'Vue.js',
    },
  },
  projects: {
    sections: {
      tradCoded: 'Trad-Coded',
      vibeCoded: 'Vibe-Coded',
    },
    badBehavior: {
      description:
        "Analyse votre carnet de vol numérique à la recherche d'éventuelles infractions à la réglementation aérienne fédérale",
      achievements: [
        "S'adapte automatiquement aux champs personnalisés des bases de données LogTen Pro",
        "Valide les périodes de tolérance complexes de l'expérience récente IFR sur 12 mois",
      ],
    },
    closestNDB: {
      description:
        "Une page web inutile mais divertissante qui vous indique l'emplacement de la radiobalise non directionnelle (NDB) la plus proche de votre position actuelle",
      achievements: [
        'Affiche la distance et le relèvement vers plus de 300 NDB encore en service dans le monde grâce à votre position GPS',
        'Instrument ADF animé avec aiguille rotative et restitution fidèle du code morse',
      ],
    },
    FART: {
      description:
        "Questionnaire simple pour aider les pilotes à évaluer le niveau de risque d'un vol envisagé",
      achievements: [
        'Calcule des scores de risque personnalisés à partir du questionnaire standardisé de la FAA',
        'Applications iOS et macOS natives à partir d’une base de code unique, avec des interfaces adaptatives',
      ],
    },
    flyweight: {
      description:
        'Un site web qui permet aux passagers de me communiquer discrètement les informations de masse et centrage',
      achievements: [
        'Mises à jour en temps réel lorsque les passagers saisissent leur masse, via des connexions WebSocket',
        'Supprime automatiquement toutes les données des passagers une semaine après chaque vol',
        'Aucun compte requis pour les passagers',
      ],
    },
    fourtiles: {
      description: 'Un jeu amusant où vous formez des mots en combinant des tuiles.',
      achievements: [
        '4 000 puzzles uniques générés automatiquement à partir de cinq mots découpés chacun en quatre tuiles',
        'Enregistre automatiquement la progression en local et reprend les parties à votre retour',
        'Animations fluides et retour visuel captivant pour les combinaisons de tuiles',
      ],
    },
    ICrashedMyPlane: {
      description:
        'Une manière ludique de naviguer dans la réglementation NTSB 830 après le crash de votre avion',
      achievements: [
        "Une interface en apparence simple, animée par de puissants algorithmes de parcours d'arbre",
        'Usage intensif des transitions Vue pour une expérience fluide proche d’une application native',
        'Conception responsive et prise en charge du mode sombre',
      ],
    },
    learnMorseCode: {
      description:
        'Un outil amusant, encourageant et légèrement insistant pour apprendre le code morse',
      achievements: [
        "Tout l'audio et les pictogrammes du code morse sont générés de façon programmatique ; aucune ressource n'est utilisée",
        'Usage intensif des transitions Vue pour une expérience fluide proche d’une application native',
        'Conception responsive et prise en charge du mode sombre',
      ],
    },
    SF50Told: {
      description:
        'Application SwiftUI qui calcule les données de performance du Cirrus SF50 Vision Jet',
      achievements: [
        'Modèle mathématique des performances au décollage et à l’atterrissage du SF50',
        'Utilisable aussi bien avec une bonne connectivité qu’en environnement à faible connectivité (en vol)',
        'Analyse et stockage des données aéronautiques de la FAA directement sur l’appareil',
      ],
    },
    swiftMETAR: {
      description: 'Bibliothèque Swift qui analyse les informations météorologiques METAR et TAF',
      achievements: [
        'Typage fort et analyse stricte des chaînes METAR et TAF',
        "Analyse 49 types de remarques METAR différents, de l'activité tornadique à l'accrétion de givre",
      ],
    },
    swiftNASR: {
      description:
        'Bibliothèque Swift qui charge et analyse les fichiers FAA Aeronautical Data Distribution (FADDS)',
      achievements: [
        "S'adapte automatiquement aux changements de format de la FAA en lisant les fichiers de spécification de structure",
        'Fournit un accès typé à plus de 50 types de données aéronautiques (spécifications carburant, classes ARFF, etc.)',
      ],
    },
    IPInbound: {
      description:
        "Aide les pilotes à effectuer un trajet du point initial (IP) jusqu'à l'objectif à une heure d'arrivée précise",
      achievements: [
        'Compte à rebours en temps réel avec guidage de cap et de vitesse',
        "Disponible sur l'App Store iOS",
      ],
    },
    swiftAirmen: {
      description:
        'Analyseur Swift pour la base de données de certification des navigants de la FAA',
      achievements: [
        'Analyse les fichiers de la base de données publiable de certification des navigants de la FAA',
        'Accès typé aux données de licences et qualifications de pilote',
      ],
    },
    swiftNMEA: {
      description: 'Un analyseur et interpréteur de phrases NMEA natif Swift et fortement typé',
      achievements: [
        'Analyseur en flux pour le traitement des données GPS en temps réel',
        'Représentations fortement typées des types de phrases NMEA',
      ],
    },
    garminACE: {
      description:
        "Analyseur Swift pour les fichiers .ace de l'éditeur de check-lists Garmin Aviation Checklist Editor",
      achievements: [
        'Encodage et décodage aller-retour des fichiers de check-lists Garmin',
        'Schéma de modèle Codable pour re-sérialiser les check-lists en JSON ou dans d’autres formats',
      ],
    },
    approachVisualizer: {
      description:
        'Visualisation 3D des procédures d’approche aux instruments à l’aide de BabylonJS',
      achievements: [
        'Rendu 3D en temps réel des trajectoires d’approche avec BabylonJS',
        'Analyse et visualise les procédures de vol aux instruments codées de la FAA',
      ],
    },
    streamingCSV: {
      description: 'Lecteur et générateur de CSV performant et économe en mémoire pour Swift',
      achievements: [
        "Traite les fichiers ligne par ligne sans charger l'ensemble des données en mémoire",
        'Prend en charge la lecture et l’écriture avec un accès typé aux lignes',
      ],
    },
    streamingLZMA: {
      description: 'Bibliothèque de compression LZMA et XZ (LZMA2) en flux, idiomatique pour Swift',
      achievements: [
        'Compression et décompression en flux sans charger les fichiers entiers en mémoire',
        'Prend en charge les formats LZMA et XZ (LZMA2)',
      ],
    },
    swiftCIFP: {
      description:
        'Bibliothèque Swift qui analyse les procédures de vol aux instruments codées (CIFP) de la FAA',
      achievements: [
        'Analyse fortement typée des SID, STAR et approches aux instruments',
        'Identifie les segments d’approche interrompue et les pistes associées',
      ],
    },
    swiftGeographic: {
      description: 'Conversions de coordonnées géographiques natives en Swift',
      achievements: [
        'Convertit entre les coordonnées UTM, UPS, MGRS et géographiques',
        'Implémentations Swift natives des projections Mercator transverse et stéréographique polaire',
      ],
    },
    swiftDOF: {
      description: 'Analyseur du fichier numérique des obstacles (DOF) de la FAA pour Swift',
      achievements: [
        'Analyse les données d’obstacles de la FAA avec des représentations typées',
        'Prend en charge l’analyse en flux pour une meilleure efficacité mémoire',
      ],
    },
    swiftR2: {
      description: 'Un client Cloudflare R2 pour Swift',
      achievements: [
        'Client Swift natif pour le stockage d’objets Cloudflare R2',
        'API async/await avec prise en charge des envois multipart',
      ],
    },
    swiftACD: {
      description:
        'Analyseur natif Swift pour les données de performance des aéronefs de la FAA et d’EUROCONTROL',
      achievements: [
        'Analyse les jeux de données de performance des aéronefs de la FAA (ACD) et d’EUROCONTROL (APD)',
        'Accès Swift fortement typé aux caractéristiques de performance des aéronefs',
      ],
    },
    gitHubUpdateChecker: {
      description:
        'Un framework de mise à jour logicielle pour macOS, à la manière de Sparkle, propulsé par les releases GitHub',
      achievements: [
        'Vérifie les releases GitHub pour détecter les mises à jour et avertit les utilisateurs, façon Sparkle',
        'Framework de mise à jour logicielle clé en main pour les applications macOS',
      ],
    },
  },
  resume: {
    present: 'Présent',
    references: 'Références disponibles sur demande.',
    address: {
      country: 'États-Unis',
      omitted: '[omis]',
    },
    objective: {
      header: 'Objectif :',
      content:
        'Ingénieur logiciel au sein d’une startup de petite à moyenne taille en ' +
        'quête de programmeurs passionnés et de personnes qui apprennent vite. ' +
        'Particulièrement enthousiasmé par le développement web et applicatif, la ' +
        'qualité du code et l’amélioration continue.',
    },
    jobProjects: {
      trusted: {
        messaging: {
          title: 'Trusted Messaging',
          description: 'échange entre Sunshine et Front pour les conversations de support',
        },
      },
      square: {
        squash: {
          title: 'Squash',
          description: 'suivi des erreurs et analyse de traces d’appels, en open source',
        },
        shuttle: {
          title: 'Shuttle',
          description: 'pipeline i18n et logiciel de traduction, en open source',
        },
        other: {
          title: 'de nombreux sites web internes destinés aux utilisateurs',
        },
      },
      recurly: {
        gateway: {
          title: 'Recurly Gateway',
          description: 'passerelle Chase Orbital pour le traitement des paiements',
        },
      },
      scribd: {
        jumpfrog: {
          title: 'Jumpfrog',
          description: 'suivi des erreurs et analyse de traces d’appels',
        },
      },
      tickle: {
        leo: {
          title: 'Leo',
          description: 'plateforme de diffusion publicitaire et analyse des annonces',
        },
        filter: {
          title: 'système de filtrage des contenus répréhensibles',
        },
      },
    },
    jobs: {
      header: 'Parcours professionnel',
      identifiers: {
        amazon: {
          title: 'Software Development Engineer II',
          company: 'Amazon.com',
          description:
            'Programmeur pour l’équipe Transport, chargé de la mise en œuvre de ' +
            'services de visibilité sur le web et de back-ends Oracle pour le fret ' +
            'entrant et sortant.',
        },
        tickle: {
          title: 'Software Engineer',
          company: 'Tickle.com',
          description:
            'A développé le traitement des paiements pour les sites ' +
            'internationaux de Tickle.com et réécrit un système de diffusion ' +
            'publicitaire en Rails.',
        },
        scribd: {
          title: 'Senior Developer',
          company: 'Scribd',
          description:
            'Développeur back-end pour Scribd.com ; boutique en ligne, traitement ' +
            'des paiements, fonctionnalités du site, optimisations de base de ' +
            'données, bonnes pratiques Rails et conseil expert.',
        },
        recurly: {
          title: 'Senior Developer',
          company: 'Recurly',
          description:
            'Développeur Ruby on Rails expert ; a développé une passerelle de ' +
            'paiement de deuxième génération en Rails. Refactorisation back-end, ' +
            'architecture et conception.',
        },
        square: {
          title: 'Software Engineer — Tools',
          company: 'Square',
          description:
            'Premier développeur d’outils internes chez Square, axé sur l’outillage ' +
            'destiné aux développeurs et l’infrastructure de localisation. A conçu, ' +
            'développé et lancé des projets d’ingénierie majeurs utilisés en interne ' +
            'et publiés en open source.',
        },
        OMG: {
          title: 'Staff Software Engineer',
          company: 'One Medical Group',
          description:
            'Ingénieur logiciel au sein de l’équipe New Services, développant de ' +
            'nouvelles fonctionnalités et produits pour le parcours d’intégration.',
        },
        google: {
          title: 'Senior Software Engineer',
          company: 'Google',
          description:
            'Ingénieur logiciel au sein de l’équipe Cloud Identity, qui gère le ' +
            'contrôle d’accès des connexions HTTP et en flux, internes comme externes.',
        },
        trusted: {
          title: 'Software Engineer',
          company: 'Trusted Health',
          description:
            'Ingénieur logiciel pour l’équipe Clinician Data, développant des ' +
            'logiciels pour améliorer la messagerie entre le personnel infirmier et ' +
            'les équipes opérationnelles, ainsi que l’expérience d’intégration des ' +
            'infirmiers.',
        },
        occupier: {
          title: 'Staff Software Engineer',
          company: 'Occupier',
          description:
            'Ingénieur logiciel principal au sein de l’équipe Lease Admin, chargé ' +
            'de développer des fonctionnalités aidant les clients à gérer leur ' +
            'portefeuille de baux.',
        },
        adept: {
          title: 'Software Engineer',
          company: 'Adept',
          description:
            'Responsable technique chargé de développer l’outillage interne aidant ' +
            'les chercheurs et les employés dans l’analyse et le réglage fin de l’IA.',
        },
        hamilton: {
          title: 'Founding Software Engineer',
          company: 'Hamilton AI',
          description:
            'Utilisation de l’IA pour développer des pans majeurs d’une plateforme ' +
            'pour exploitant part 135.',
        },
      },
    },
    supportingExperience: {
      header: 'Expérience complémentaire',
      content: [
        'Titulaire du certificat FAA ATP (pilote de ligne) (2024) (pilote privé FAA 2007).',
        'A rédigé plus de vingt articles de fond et plus de 100 actualités pour ' +
          'Inside Mac Games en tant que rédacteur principal, spécialisé dans les ' +
          'simulateurs de vol et le matériel audio.',
        'A fondé et dirigé le club de cinéma du Beloit College et, en tant que ' +
          'président, a mené la réalisation de trois documentaires de long métrage ' +
          'sur le campus et en dehors.',
      ],
    },
    education: {
      header: 'Formation',
      concentration: {
        cs: 'Informatique',
        physics: 'Physique',
      },
    },
  },
}

export default merge({}, en, fr)
