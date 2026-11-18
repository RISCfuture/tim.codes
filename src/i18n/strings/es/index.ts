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
  notFound: {
    title: 'Página no encontrada',
    message: 'Esa página no existe. Puede que se haya movido o que el enlace sea incorrecto.',
    homeLink: 'Ir a la página de inicio',
  },
  project: {
    type: {
      app: 'aplicación',
      library: 'biblioteca',
      plugin: 'plugin',
      tool: 'herramienta',
      website: 'sitio web',
    },
    websiteType: {
      docs: 'documentación',
      download: 'descargar',
      live: 'en vivo',
      marketing: 'página del producto',
      source: 'código fuente',
    },
    language: {
      CSS: 'CSS',
      HTML: 'HTML',
      cpp: 'C++',
      ruby: 'Ruby',
      swift: 'Swift',
      typeScript: 'TypeScript',
    },
    library: {
      rails: 'Ruby on Rails',
      swiftUI: 'SwiftUI',
      vapor: 'Vapor',
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
    CTAHelper: {
      description:
        'Aplica las correcciones de altitud por baja temperatura de la FAA a las altitudes publicadas de una aproximación instrumental',
      achievements: [
        'Corrige todas las altitudes de una aproximación a partir del METAR actual del aeropuerto, siguiendo el método de AIP ENR 1.8',
        'Incluye una base de datos de navegación por ciclo AIRAC, combinada desde cuatro fuentes de la FAA y verificada con SHA-256 antes de importarla',
        'Busca aproximaciones por identificador, ciudad o aeropuerto más cercano, con favoritos y recientes',
      ],
    },
    SubTrack: {
      description:
        'Una aplicación de macOS que elimina las pistas de audio y subtítulos que no quieres de tus vídeos copiándolas, sin recodificar',
      achievements: [
        'Copia sin alterar las pistas que conservas, de modo que un rip de Blu-ray de dos horas adelgaza en segundos y sin pérdida de calidad',
        'Un único conjunto de reglas para idiomas, comentarios y mezclas alternativas se aplica a toda una cola de archivos',
        'Incorpora una compilación de FFmpeg firmada y enlazada estáticamente, con ajustes que se sincronizan mediante tu propia cuenta de iCloud',
      ],
    },
    zili: {
      description:
        'Una app para iOS y macOS para aprender a leer y escribir chino, organizada según los niveles de vocabulario HSK',
      achievements: [
        'Las tarjetas practican en la dirección que elijas: inglés↔chino, pinyin o hanzi, pronunciación o trazos',
        'La práctica de trazos anima cada carácter y califica los trazos según el orden y la dirección correctos',
        'Los cuestionarios de escritura y escucha usan frases del HSK, con un diccionario táctil en toda la app',
      ],
    },
    zephyr: {
      description:
        'Un cliente de Dropbox de código abierto para macOS que pone tus archivos en la barra lateral del Finder sin replicarlos en el disco',
      achievements: [
        'Construido sobre el modelo de File Provider replicado de macOS, así que una cuenta de un terabyte no ocupa espacio local hasta que abres un archivo',
        'El Finder muestra miniaturas reales de imágenes que este Mac nunca ha descargado, y los cambios externos llegan en segundos',
        'Cada transferencia se verifica contra el hash de contenido de Dropbox, y las subidas por fragmentos se reanudan si el proceso muere',
      ],
    },
    measurementKit: {
      description:
        'Aritmética, unidades y dimensiones que el tipo Measurement de Foundation deja fuera',
      achievements: [
        'Sesenta operadores entre dimensiones responden en la unidad que habrías escrito: 120 nudos durante dos horas son 240 millas náuticas',
        'Añade las dimensiones que Foundation omite: fuerza, pendiente, densidad, velocidad angular y caudal volumétrico y másico',
        'Dividir dos temperaturas, o mezclar un rumbo magnético con uno verdadero, es un error de compilación en vez de un fallo silencioso',
      ],
    },
    xcuiTestKit: {
      description:
        'Utilidades compartidas de XCUITest que evitan que las pruebas de interfaz de iOS, macOS, watchOS y visionOS fallen de forma intermitente en una CI lenta',
      achievements: [
        'Se recupera de los fallos del servidor de accesibilidad que causan la mayoría de las intermitencias en una CI lenta, reiniciando la app y reintentando',
        'La pulsación con marco estable y las comprobaciones de foco del teclado eliminan las causas más habituales de interacciones inestables',
        'Los tiempos de espera se escalan mediante una variable de entorno, de modo que la misma suite corre rápido en local y con paciencia en CI',
      ],
    },
    swiftGeomagnetism: {
      description:
        'Declinación, inclinación e intensidad magnéticas para Swift, a partir del World Magnetic Model',
      achievements: [
        'Incluye WMM2025 y carga cualquier archivo de coeficientes de la NOAA, así que un modelo futuro funciona sin actualizar la biblioteca',
        'Una biblioteca opcional añade el WMMHR2025 de alta resolución sin aumentar el tamaño de las apps que no lo usan',
        'Validada con los valores de prueba publicados por la NOAA, a unos 0,6 µs por evaluación en Apple silicon',
      ],
    },
    swiftAIXM: {
      description:
        'Lee aeródromos, pistas y obstáculos de conjuntos de datos AIXM 5.1 y OFMX de open flightmaps',
      achievements: [
        'Procesa en streaming conjuntos de datos de varios cientos de megabytes, como la AIP del Reino Unido, sin cargarlos en memoria',
        'Lee AIXM 5.1 y el dialecto OFMX de AIXM 4.5 en un único modelo Codable construido con Measurements y enums',
        'Resuelve los time slices de AIXM para cualquier fecha de vigencia e informa de los códigos ajenos a las listas de AIXM en lugar de aceptarlos',
      ],
    },
    xcuiPromoKit: {
      description:
        'Crea vistas previas y capturas para la App Store a partir de las pruebas de UI de la propia app y las verifica según las reglas de Apple',
      achievements: [
        'Marca los tramos de una ejecución guionizada de XCUITest que vale la pena conservar, registrando toques y capturando imágenes fijas',
        'Renderiza vistas previas y capturas con texto mediante Remotion a partir de un storyboard JSON, con el estilo del propio CSS de la app',
        'Comprueba los textos, el storyboard y los medios renderizados según los requisitos de Apple antes de subir nada',
      ],
    },
    logTenAssistant: {
      description:
        'Una app para Mac que audita un cuaderno de vuelo de LogTen frente a los datos de vuelo registrados y las reglas de vigencia de 14 CFR part 61',
      achievements: [
        'Compara las entradas del cuaderno entre sí, con sus grupos inteligentes y con las trazas de FlySto y ADS-B',
        'Las correcciones propuestas se revisan, se respaldan, se aplican mediante la importación de LogTen y después se verifican',
        'Enumera los vuelos que incumplen alguna de las once reglas de vigencia de part 61, leyendo solo copias instantáneas del cuaderno',
      ],
    },
    aviationMCP: {
      description:
        'Un servidor MCP público que ofrece a los asistentes de IA datos aeronáuticos de la FAA y planificación de performance',
      achievements: [
        '21 herramientas cubren aeropuertos, navegación, procedimientos, espacio aéreo, obstáculos, meteorología, NOTAMs y terreno',
        'Planifica la performance de despegue, aterrizaje y ascenso del Cirrus SF50 y el SR22',
        'Conserva los registros válidos cuando una fuente solo se analiza en parte y marca su cobertura como parcial',
      ],
    },
    c525N1Computer: {
      description:
        'Una recreación para X-Plane 12 del Safe Flight N1 Computer del TorqueSim CitationJet 525',
      achievements: [
        'Lee la temperatura del aire de impacto y la altitud de presión, y consulta la tabla de empuje del manual de vuelo',
        'Reproduce el comportamiento descrito en el suplemento del manual de vuelo del Cessna 525 aprobado por la FAA',
        'Funciona en macOS, Windows y Linux, y se mantiene actualizado mediante SkunkCrafts Updater',
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
