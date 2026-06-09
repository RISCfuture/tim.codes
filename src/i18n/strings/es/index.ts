import merge from 'lodash-es/merge'

import en from '../en'
import type { DefaultLocaleMessageSchema, LocaleMessages } from 'vue-i18n'

const es: LocaleMessages<DefaultLocaleMessageSchema> = {
  bio: {
    occupation: {
      flightInstructor: 'Instructor de vuelo FAA',
      groundInstructor: 'Instructor en tierra FAA',
      ATP: 'ATP de la FAA',
      CPL: 'Piloto comercial FAA',
      dev: 'Desarrollador web',
    },
    accomplishment: {
      ATP: {
        AMEL: 'Avión multimotor terrestre',
        ASEL: 'Avión monomotor terrestre',
        SF50: 'Cirrus SF50 Vision Jet',
        B737: 'Boeing 737 NG',
      },
      CPL: {
        AMES: 'Avión multimotor marítimo',
        ASES: 'Avión monomotor marítimo',
        GLI: 'Planeador',
      },
      groundInstructor: {
        advanced: 'Avanzado',
        instrument: 'Vuelo instrumental',
      },
      flightInstructor: {
        ASE: 'Avión monomotor',
        'IFR-A': 'Vuelo instrumental en avión',
      },
    },
  },
  meta: {
    description: 'Tim Morgan: ingeniero de software, piloto comercial',
  },
  localeSwitcher: {
    label: 'Idioma',
  },
  header: {
    nav: 'Navegación principal',
    links: {
      home: 'Inicio',
      projects: 'Proyectos',
      resume: 'Currículum',
    },
  },
  footer: {
    text: 'Todo el contenido, el código y las imágenes (salvo los logotipos) son propiedad intelectual ©2011–{year} de Tim Morgan. Todos los derechos reservados. {link}',
    linkText: 'Ver el código fuente de esta web en GitHub.',
  },
  project: {
    type: {
      app: 'aplicación',
      gem: 'gem',
      library: 'biblioteca',
      tool: 'herramienta',
      website: 'sitio web',
    },
    websiteType: {
      download: 'descargar',
      live: 'en vivo',
      source: 'código fuente',
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
      tradCoded: 'Programación tradicional',
      vibeCoded: 'Programación con IA',
    },
    badBehavior: {
      description:
        'Examina tu cuaderno de vuelo digital en busca de posibles infracciones de la normativa federal de aviación',
      achievements: [
        'Se adapta automáticamente a los campos personalizados de las bases de datos de LogTen Pro',
        'Valida los complejos periodos de gracia de la vigencia de IFR de 12 meses',
      ],
    },
    closestNDB: {
      description:
        'Una página web inútil pero entretenida que te indica dónde está el radiofaro no direccional más cercano a tu ubicación actual',
      achievements: [
        'Muestra la distancia y el rumbo a más de 300 NDB que quedan en el mundo a partir de tu ubicación GPS',
        'Instrumento ADF animado con aguja giratoria y representación auténtica del código morse',
      ],
    },
    FART: {
      description:
        'Cuestionario sencillo que ayuda a los pilotos a evaluar el nivel de riesgo de un vuelo previsto',
      achievements: [
        'Calcula puntuaciones de riesgo personalizadas mediante un cuestionario estandarizado de la FAA',
        'Aplicaciones nativas para iOS y macOS desde una única base de código con interfaces adaptativas',
      ],
    },
    flyweight: {
      description:
        'Una web que permite a los pasajeros facilitarme la información de peso y centrado de forma discreta',
      achievements: [
        'Actualizaciones en tiempo real cuando los pasajeros añaden su peso mediante conexiones WebSocket',
        'Elimina automáticamente todos los datos de los pasajeros una semana después de cada vuelo',
        'No se requiere cuenta para los pasajeros',
      ],
    },
    fourtiles: {
      description: 'Un juego divertido en el que formas palabras combinando fichas.',
      achievements: [
        '4000 puzles únicos generados automáticamente a partir de cinco palabras divididas en cuatro fichas cada una',
        'Guarda automáticamente el progreso de forma local y reanuda las partidas cuando vuelves',
        'Animaciones fluidas y respuesta visual atractiva al combinar fichas',
      ],
    },
    ICrashedMyPlane: {
      description:
        'Una forma amena de orientarte por la normativa 830 de la NTSB después de estrellar tu avión',
      achievements: [
        'Interfaz aparentemente sencilla impulsada por sofisticados algoritmos de recorrido de árboles',
        'Uso extensivo de las transiciones de Vue para una experiencia fluida, como la de una app',
        'Diseño adaptable y compatibilidad con el modo oscuro',
      ],
    },
    learnMorseCode: {
      description:
        'Una herramienta divertida, alentadora y un poco insistente para aprender código morse',
      achievements: [
        'Todo el audio y los pictogramas del código morse se generan mediante programación; no se usan recursos prediseñados',
        'Uso extensivo de las transiciones de Vue para una experiencia fluida, como la de una app',
        'Diseño adaptable y compatibilidad con el modo oscuro',
      ],
    },
    SF50Told: {
      description:
        'Aplicación de SwiftUI que calcula los datos de rendimiento del Cirrus SF50 Vision Jet',
      achievements: [
        'Modelo matemático del rendimiento de despegue y aterrizaje del SF50',
        'Utilizable tanto en entornos con buena conectividad como con baja conectividad (en vuelo)',
        'Análisis y almacenamiento en el dispositivo de los datos aeronáuticos de la FAA',
      ],
    },
    swiftMETAR: {
      description: 'Biblioteca de Swift que analiza la información meteorológica METAR y TAF',
      achievements: [
        'Tipado fuerte y análisis estricto de las cadenas METAR y TAF',
        'Analiza 49 tipos distintos de comentarios METAR, desde la actividad tornádica hasta la acumulación de hielo',
      ],
    },
    swiftNASR: {
      description:
        'Biblioteca de Swift que carga y analiza los archivos de distribución de datos aeronáuticos de la FAA (FADDS)',
      achievements: [
        'Se adapta automáticamente a los cambios de formato de la FAA leyendo los archivos de especificación del diseño',
        'Ofrece acceso con seguridad de tipos a más de 50 tipos de datos aeronáuticos (especificaciones de combustible, clases ARFF, etc.)',
      ],
    },
    IPInbound: {
      description:
        'Ayuda a los pilotos a volar un tramo del punto inicial al objetivo con una hora sobre el objetivo precisa',
      achievements: [
        'Cuenta atrás en tiempo real con guía de rumbo y velocidad',
        'Disponible en la App Store de iOS',
      ],
    },
    swiftAirmen: {
      description: 'Analizador en Swift de la base de datos de certificación de pilotos de la FAA',
      achievements: [
        'Analiza los archivos de la base de datos divulgable de certificación de pilotos de la FAA',
        'Acceso con seguridad de tipos a los datos de certificados y habilitaciones de los pilotos',
      ],
    },
    swiftNMEA: {
      description:
        'Un analizador e intérprete de sentencias NMEA nativo de Swift y con tipado fuerte',
      achievements: [
        'Analizador en flujo para el procesamiento de datos GPS en tiempo real',
        'Representaciones con tipado fuerte de los tipos de sentencias NMEA',
      ],
    },
    garminACE: {
      description: 'Analizador en Swift de los archivos .ace del Garmin Aviation Checklist Editor',
      achievements: [
        'Codificación y descodificación de ida y vuelta de los archivos de listas de comprobación de Garmin',
        'Esquema de modelo Codable para volver a serializar las listas de comprobación a JSON u otros formatos',
      ],
    },
    approachVisualizer: {
      description:
        'Visualización en 3D de los procedimientos de aproximación instrumental mediante BabylonJS',
      achievements: [
        'Renderizado en 3D en tiempo real de las trayectorias de aproximación con BabylonJS',
        'Analiza y visualiza los procedimientos de vuelo instrumental codificados de la FAA',
      ],
    },
    streamingCSV: {
      description: 'Lector y escritor de CSV de alto rendimiento y eficiente en memoria para Swift',
      achievements: [
        'Procesa los archivos fila a fila sin cargar conjuntos de datos completos en memoria',
        'Admite tanto la lectura como la escritura con acceso tipado a las filas',
      ],
    },
    streamingLZMA: {
      description: 'Biblioteca de compresión LZMA y XZ (LZMA2) en flujo, idiomática de Swift',
      achievements: [
        'Compresión y descompresión en flujo sin cargar los archivos completos en memoria',
        'Admite los formatos LZMA y XZ (LZMA2)',
      ],
    },
    swiftCIFP: {
      description:
        'Biblioteca de Swift que analiza los procedimientos de vuelo instrumental codificados de la FAA',
      achievements: [
        'Análisis con tipado fuerte de SID, STAR y aproximaciones instrumentales',
        'Identifica los segmentos de aproximación frustrada y las pistas asociadas',
      ],
    },
    swiftGeographic: {
      description: 'Conversiones de coordenadas geográficas nativas de Swift',
      achievements: [
        'Convierte entre coordenadas UTM, UPS, MGRS y geográficas',
        'Implementaciones nativas en Swift de las proyecciones Mercator transversa y estereográfica polar',
      ],
    },
    swiftDOF: {
      description: 'Analizador para Swift del archivo digital de obstáculos (DOF) de la FAA',
      achievements: [
        'Analiza los datos de obstáculos de la FAA con representaciones de seguridad de tipos',
        'Admite el análisis en flujo para una mayor eficiencia de memoria',
      ],
    },
    swiftR2: {
      description: 'Un cliente de Cloudflare R2 para Swift',
      achievements: [
        'Cliente nativo en Swift para el almacenamiento de objetos Cloudflare R2',
        'API con async/await y compatibilidad con cargas multiparte',
      ],
    },
    swiftACD: {
      description:
        'Analizador nativo de Swift para los datos de rendimiento de aeronaves de la FAA y EUROCONTROL',
      achievements: [
        'Analiza los conjuntos de datos de rendimiento de aeronaves tanto de la FAA (ACD) como de EUROCONTROL (APD)',
        'Acceso con tipado fuerte en Swift a las características de rendimiento de las aeronaves',
      ],
    },
    gitHubUpdateChecker: {
      description:
        'Un framework de actualización de software para macOS al estilo de Sparkle, impulsado por las versiones de GitHub',
      achievements: [
        'Comprueba las versiones de GitHub en busca de actualizaciones y avisa a los usuarios, al estilo de Sparkle',
        'Framework de actualización de software listo para usar en aplicaciones de macOS',
      ],
    },
  },
  resume: {
    present: 'Actualidad',
    references: 'Referencias disponibles a petición.',
    address: {
      country: 'EE. UU.',
      omitted: '[omitido]',
    },
    objective: {
      header: 'Objetivo:',
      content:
        'Ingeniero de software en una startup pequeña o mediana que necesite ' +
        'programadores apasionados y de aprendizaje rápido. Me entusiasman especialmente el ' +
        'desarrollo web y de aplicaciones, la calidad del código y mejorar las cosas.',
    },
    jobProjects: {
      trusted: {
        messaging: {
          title: 'Trusted Messaging',
          description: 'intercambio entre Sunshine y Front para las conversaciones de soporte',
        },
      },
      square: {
        squash: {
          title: 'Squash',
          description: 'seguimiento de errores y análisis de trazas de pila, de código abierto',
        },
        shuttle: {
          title: 'Shuttle',
          description: 'canalización de i18n y software de traducción, de código abierto',
        },
        other: {
          title: 'numerosos sitios web internos de cara al usuario',
        },
      },
      recurly: {
        gateway: {
          title: 'Recurly Gateway',
          description: 'pasarela Chase Orbital para el procesamiento de pagos',
        },
      },
      scribd: {
        jumpfrog: {
          title: 'Jumpfrog',
          description: 'seguimiento de errores y análisis de trazas de pila',
        },
      },
      tickle: {
        leo: {
          title: 'Leo',
          description: 'plataforma de publicación y análisis de anuncios',
        },
        filter: {
          title: 'sistema de filtrado de contenido inapropiado',
        },
      },
    },
    jobs: {
      header: 'Trayectoria profesional',
      identifiers: {
        amazon: {
          title: 'Software Development Engineer II',
          company: 'Amazon.com',
          description:
            'Programador para el equipo de Transporte, encargado de ' +
            'implementar servicios web de visibilidad y back-ends de Oracle para ' +
            'la carga entrante y saliente.',
        },
        tickle: {
          title: 'Software Engineer',
          company: 'Tickle.com',
          description:
            'Desarrollé el procesamiento de pagos para los sitios web internacionales de Tickle.com ' +
            'y reescribí un sistema de publicación de anuncios en Rails.',
        },
        scribd: {
          title: 'Senior Developer',
          company: 'Scribd',
          description:
            'Desarrollador back-end de Scribd.com: tienda en línea, procesamiento ' +
            'de pagos, funcionalidades del sitio web, optimizaciones de la base de datos, estilo ' +
            'Rails adecuado y asesoramiento experto.',
        },
        recurly: {
          title: 'Senior Developer',
          company: 'Recurly',
          description:
            'Desarrollador experto de Ruby on Rails; desarrollé la pasarela ' +
            'de pago de segunda generación en Rails. Refactorización del back-end, arquitectura y diseño.',
        },
        square: {
          title: 'Software Engineer — Tools',
          company: 'Square',
          description:
            'Primer desarrollador de herramientas internas de Square, con ' +
            'un enfoque en las herramientas para desarrolladores y la infraestructura de localización. Diseñé, ' +
            'desarrollé y lancé importantes proyectos de ingeniería que se usaron ' +
            'internamente y se liberaron como código abierto.',
        },
        OMG: {
          title: 'Staff Software Engineer',
          company: 'One Medical Group',
          description:
            'Ingeniero de software en el equipo de Nuevos Servicios, desarrollando ' +
            'nuevas funcionalidades y productos para el flujo de incorporación.',
        },
        google: {
          title: 'Senior Software Engineer',
          company: 'Google',
          description:
            'Ingeniero de software en el equipo de Cloud Identity, que gestiona ' +
            'el control de acceso de las conexiones HTTP y de streaming internas y externas.',
        },
        trusted: {
          title: 'Software Engineer',
          company: 'Trusted Health',
          description:
            'Ingeniero de software para el equipo de Datos Clínicos, desarrollando ' +
            'software para mejorar la mensajería entre el personal de enfermería y el de operaciones, ' +
            'así como mejorar la experiencia de incorporación del personal de enfermería.',
        },
        occupier: {
          title: 'Staff Software Engineer',
          company: 'Occupier',
          description:
            'Ingeniero de software sénior en el equipo de Administración de Arrendamientos, ' +
            'encargado de desarrollar funcionalidades para ayudar a los clientes a gestionar su cartera ' +
            'de arrendamientos.',
        },
        adept: {
          title: 'Software Engineer',
          company: 'Adept',
          description:
            'Líder de ingeniería encargado de desarrollar herramientas internas que ayudaban a ' +
            'investigadores y empleados con el análisis y el ajuste fino de la IA.',
        },
        hamilton: {
          title: 'Founding Software Engineer',
          company: 'Hamilton AI',
          description:
            'Uso de la IA para desarrollar partes importantes de la plataforma de un operador part-135.',
        },
      },
    },
    supportingExperience: {
      header: 'Experiencia complementaria',
      content: [
        'Certificado de piloto de transporte de línea aérea (ATP) de la FAA (2024) (privado 2007).',
        'Escribí más de veinte artículos de fondo y más de 100 noticias para Inside ' +
          'Mac Games como redactor sénior especializado en simuladores de vuelo y ' +
          'hardware de audio.',
        'Fundé y dirigí el club de cine de Beloit College y, como presidente, ' +
          'lideré la creación de tres documentales de largometraje dentro y ' +
          'fuera del campus.',
      ],
    },
    education: {
      header: 'Formación académica',
      concentration: {
        cs: 'Informática',
        physics: 'Física',
      },
    },
  },
}

export default merge({}, en, es)
