import merge from 'lodash-es/merge'

import en from '../en'
import type { DefaultLocaleMessageSchema, LocaleMessages } from 'vue-i18n'

const de: LocaleMessages<DefaultLocaleMessageSchema> = {
  bio: {
    occupation: {
      flightInstructor: 'FAA-Fluglehrer (CFI)',
      groundInstructor: 'FAA-Theorielehrer',
      ATP: 'FAA ATP',
      CPL: 'FAA CPL',
      dev: 'Webentwickler',
    },
    accomplishment: {
      ATP: {
        AMEL: 'Mehrmotorige Landflugzeuge',
        ASEL: 'Einmotorige Landflugzeuge',
        SF50: 'Cirrus SF50 Vision Jet',
        B737: 'Boeing 737 NG',
      },
      CPL: {
        AMES: 'Mehrmotorige Wasserflugzeuge',
        ASES: 'Einmotorige Wasserflugzeuge',
        GLI: 'Segelflugzeug',
      },
      groundInstructor: {
        advanced: 'Fortgeschritten',
        instrument: 'Instrumentenflug',
      },
      flightInstructor: {
        ASE: 'Einmotorige Flugzeuge',
        'IFR-A': 'Instrumentenflug Flugzeug',
      },
    },
  },
  meta: {
    description: 'Tim Morgan: Softwareentwickler, FAA-Berufspilot',
  },
  localeSwitcher: {
    label: 'Sprache',
  },
  header: {
    nav: 'Hauptnavigation',
    links: {
      home: 'Start',
      projects: 'Projekte',
      resume: 'Lebenslauf',
    },
  },
  footer: {
    text: 'Alle Inhalte, Codes und Bilder (außer Logos) urheberrechtlich geschützt ©2011–{year} Tim Morgan. Alle Rechte vorbehalten. {link}',
    linkText: 'Den Quellcode dieser Website auf GitHub ansehen.',
  },
  project: {
    type: {
      app: 'App',
      gem: 'Gem',
      library: 'Bibliothek',
      tool: 'Werkzeug',
      website: 'Website',
    },
    websiteType: {
      download: 'Download',
      live: 'Live',
      source: 'Quellcode',
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
        'Durchsucht Ihr digitales Flugbuch nach möglichen Verstößen gegen die Luftfahrtvorschriften',
      achievements: [
        'Passt sich automatisch an benutzerdefinierte Felder in LogTen-Pro-Datenbanken an',
        'Prüft komplexe 12-monatige Übergangsfristen für die IFR-Aktualität',
      ],
    },
    closestNDB: {
      description:
        'Eine nutzlose, aber unterhaltsame Webseite, die Ihnen anzeigt, wo sich das nächstgelegene ungerichtete Funkfeuer von Ihrem aktuellen Standort aus befindet',
      achievements: [
        'Zeigt Entfernung und Peilung zu über 300 verbleibenden NDBs weltweit anhand Ihres GPS-Standorts an',
        'Animiertes ADF-Instrument mit rotierender Nadel und authentischer Morsecode-Darstellung',
      ],
    },
    FART: {
      description:
        'Einfacher Fragebogen, der Piloten hilft, das Risikoniveau eines geplanten Fluges einzuschätzen',
      achievements: [
        'Berechnet personalisierte Risikowerte anhand eines standardisierten FAA-Fragebogens',
        'Native iOS- und macOS-Apps aus einer einzigen Codebasis mit adaptiven Oberflächen',
      ],
    },
    flyweight: {
      description:
        'Eine Website, über die Passagiere mir auf diskrete Weise Informationen zu Gewicht und Schwerpunktlage übermitteln können',
      achievements: [
        'Echtzeit-Aktualisierungen, wenn Passagiere ihr Gewicht über WebSocket-Verbindungen hinzufügen',
        'Löscht alle Passagierdaten automatisch eine Woche nach jedem Flug',
        'Kein Konto für Passagiere erforderlich',
      ],
    },
    fourtiles: {
      description:
        'Ein unterhaltsames Spiel, bei dem man durch Kombinieren von Kacheln Wörter bildet.',
      achievements: [
        '4.000 einzigartige Rätsel, automatisch erzeugt aus fünf Wörtern, die jeweils in vier Kacheln aufgeteilt sind',
        'Speichert den Fortschritt automatisch lokal und setzt das Spiel bei Ihrer Rückkehr fort',
        'Flüssige Animationen und ansprechendes visuelles Feedback für Kachelkombinationen',
      ],
    },
    ICrashedMyPlane: {
      description:
        'Ein ansprechender Weg, um nach einem Flugzeugabsturz die NTSB-830-Vorschriften zu durchlaufen',
      achievements: [
        'Scheinbar einfaches Frontend, angetrieben von ausgefeilten Baum-Durchlauf-Algorithmen',
        'Umfangreicher Einsatz von Vue-Transitions für ein flüssiges, app-ähnliches Erlebnis',
        'Responsives Design und Unterstützung für den Dunkelmodus',
      ],
    },
    learnMorseCode: {
      description:
        'Ein unterhaltsames, bestärkendes und leicht forderndes Werkzeug zum Erlernen des Morsecodes',
      achievements: [
        'Sämtliche Morsecode-Audios und -Piktogramme werden programmatisch erzeugt; es werden keine Assets verwendet',
        'Umfangreicher Einsatz von Vue-Transitions für ein flüssiges, app-ähnliches Erlebnis',
        'Responsives Design und Unterstützung für den Dunkelmodus',
      ],
    },
    SF50Told: {
      description: 'SwiftUI-App, die Leistungsdaten für den Cirrus SF50 Vision Jet berechnet',
      achievements: [
        'Mathematisches Modell der Start- und Landeleistung des SF50',
        'Nutzbar sowohl bei guter als auch bei schlechter Konnektivität (im Flug)',
        'Verarbeitung und Speicherung von FAA-Luftfahrtdaten auf dem Gerät',
      ],
    },
    swiftMETAR: {
      description: 'Swift-Bibliothek, die METAR- und TAF-Wetterinformationen parst',
      achievements: [
        'Strenge Typisierung und strikte Verarbeitung von METAR- und TAF-Strings',
        'Parst 49 verschiedene METAR-Bemerkungstypen, von Tornadoaktivität bis Eisansatz',
      ],
    },
    swiftNASR: {
      description:
        'Swift-Bibliothek, die FAA-Aeronautical-Data-Distribution-Dateien (FADDS) lädt und parst',
      achievements: [
        'Passt sich automatisch an FAA-Formatänderungen an, indem sie Layout-Spezifikationsdateien einliest',
        'Bietet typsicheren Zugriff auf über 50 Luftfahrtdatentypen (Kraftstoffspezifikationen, ARFF-Klassen usw.)',
      ],
    },
    IPInbound: {
      description:
        'Hilft Piloten, einen IP-to-Target-Anflug exakt zur vorgegebenen Zeit über dem Ziel zu fliegen',
      achievements: [
        'Echtzeit-Countdown-Timer mit Kurs- und Geschwindigkeitsführung',
        'Im iOS App Store verfügbar',
      ],
    },
    swiftAirmen: {
      description: 'Swift-Parser für die FAA-Datenbank der Luftfahrtpersonal-Zertifizierungen',
      achievements: [
        'Parst die freigegebenen Dateien der FAA-Luftfahrtpersonal-Zertifizierungsdatenbank',
        'Typsicherer Zugriff auf Daten zu Pilotenscheinen und -berechtigungen',
      ],
    },
    swiftNMEA: {
      description:
        'Ein Swift-nativer, streng typisierter Parser und Interpreter für NMEA-Datensätze',
      achievements: [
        'Streaming-Parser für die Echtzeitverarbeitung von GPS-Daten',
        'Streng typisierte Darstellungen von NMEA-Datensatztypen',
      ],
    },
    garminACE: {
      description: 'Swift-Parser für .ace-Dateien des Garmin Aviation Checklist Editor',
      achievements: [
        'Verlustfreies Kodieren und Dekodieren von Garmin-Checklisten-Dateien',
        'Codable-Modellschema zum erneuten Serialisieren von Checklisten nach JSON oder in andere Formate',
      ],
    },
    approachVisualizer: {
      description: '3D-Visualisierung von Instrumentenanflugverfahren mit BabylonJS',
      achievements: [
        'Echtzeit-3D-Darstellung von Anflugpfaden mit BabylonJS',
        'Parst und visualisiert kodierte Instrumentenflugverfahren der FAA',
      ],
    },
    streamingCSV: {
      description: 'Leistungsstarker, speichereffizienter CSV-Reader und -Writer für Swift',
      achievements: [
        'Verarbeitet Dateien Zeile für Zeile, ohne ganze Datensätze in den Speicher zu laden',
        'Unterstützt sowohl Lesen als auch Schreiben mit typisiertem Zeilenzugriff',
      ],
    },
    streamingLZMA: {
      description: 'Swift-idiomatische Streaming-Bibliothek zur LZMA- und XZ-Komprimierung (LZMA2)',
      achievements: [
        'Streaming-Komprimierung und -Dekomprimierung, ohne vollständige Dateien in den Speicher zu laden',
        'Unterstützt sowohl das LZMA- als auch das XZ-Format (LZMA2)',
      ],
    },
    swiftCIFP: {
      description: 'Swift-Bibliothek, die FAA Coded Instrument Flight Procedures parst',
      achievements: [
        'Streng typisierte Verarbeitung von SIDs, STARs und Instrumentenanflügen',
        'Identifiziert Fehlanflugsegmente und zugehörige Pisten',
      ],
    },
    swiftGeographic: {
      description: 'Swift-native Umrechnungen geografischer Koordinaten',
      achievements: [
        'Rechnet zwischen UTM-, UPS-, MGRS- und geografischen Koordinaten um',
        'Native Swift-Implementierungen der Transversalen Mercator- und Polar-Stereografischen Projektion',
      ],
    },
    swiftDOF: {
      description: 'Parser für die FAA Digital Obstacle File (DOF) in Swift',
      achievements: [
        'Parst FAA-Hindernisdaten mit typsicheren Darstellungen',
        'Unterstützt Streaming-Parsing für Speichereffizienz',
      ],
    },
    swiftR2: {
      description: 'Ein Cloudflare-R2-Client für Swift',
      achievements: [
        'Nativer Swift-Client für den Cloudflare-R2-Objektspeicher',
        'Async/await-API mit Unterstützung für mehrteilige Uploads',
      ],
    },
    swiftACD: {
      description: 'Swift-nativer Parser für Flugzeugleistungsdaten von FAA und EUROCONTROL',
      achievements: [
        'Parst Flugzeugleistungsdatensätze von FAA (ACD) und EUROCONTROL (APD)',
        'Streng typisierter Swift-Zugriff auf Flugleistungsmerkmale',
      ],
    },
    gitHubUpdateChecker: {
      description:
        'Ein macOS-Framework für Software-Updates wie Sparkle, gestützt auf GitHub-Releases',
      achievements: [
        'Prüft GitHub-Releases auf Updates und benachrichtigt Nutzer im Sparkle-Stil',
        'Sofort einsetzbares Software-Update-Framework für macOS-Apps',
      ],
    },
  },
  resume: {
    present: 'Heute',
    references: 'Referenzen auf Anfrage erhältlich.',
    address: {
      country: 'USA',
      omitted: '[ausgelassen]',
    },
    objective: {
      header: 'Ziel:',
      content:
        'Softwareentwickler bei einem kleinen bis mittelgroßen Start-up, das ' +
        'leidenschaftliche Programmierer und schnelle Lerner sucht. Besonders ' +
        'begeistert von Web- und Anwendungsentwicklung, Codequalität und der ' +
        'kontinuierlichen Verbesserung von Dingen.',
    },
    jobProjects: {
      trusted: {
        messaging: {
          title: 'Trusted Messaging',
          description: 'Schnittstelle zwischen Sunshine und Front für Support-Konversationen',
        },
      },
      square: {
        squash: {
          title: 'Squash',
          description: 'Fehlerverfolgung und Stacktrace-Analyse, als Open Source veröffentlicht',
        },
        shuttle: {
          title: 'Shuttle',
          description: 'i18n-Pipeline und Übersetzersoftware, als Open Source veröffentlicht',
        },
        other: {
          title: 'zahlreiche interne, benutzerorientierte Websites',
        },
      },
      recurly: {
        gateway: {
          title: 'Recurly Gateway',
          description: 'Chase-Orbital-Gateway für die Zahlungsabwicklung',
        },
      },
      scribd: {
        jumpfrog: {
          title: 'Jumpfrog',
          description: 'Fehlerverfolgung und Stacktrace-Analyse',
        },
      },
      tickle: {
        leo: {
          title: 'Leo',
          description: 'Ad-Serving-Plattform und Anzeigenanalyse',
        },
        filter: {
          title: 'System zur Filterung anstößiger Inhalte',
        },
      },
    },
    jobs: {
      header: 'Beruflicher Werdegang',
      identifiers: {
        amazon: {
          title: 'Software Development Engineer II',
          company: 'Amazon.com',
          description:
            'Programmierer im Transportation-Team, verantwortlich für die ' +
            'Implementierung webbasierter Tracking-Dienste und Oracle-Backends für ' +
            'ein- und ausgehende Frachten.',
        },
        tickle: {
          title: 'Software Engineer',
          company: 'Tickle.com',
          description:
            'Entwickelte die Zahlungsabwicklung für die internationalen ' +
            'Tickle.com-Websites und schrieb ein Ad-Serving-System in Rails neu.',
        },
        scribd: {
          title: 'Senior Developer',
          company: 'Scribd',
          description:
            'Backend-Entwickler für Scribd.com; Storefront, Zahlungsabwicklung, ' +
            'Website-Funktionen, Datenbankoptimierungen, sauberer Rails-Stil und ' +
            'fachkundige Beratung.',
        },
        recurly: {
          title: 'Senior Developer',
          company: 'Recurly',
          description:
            'Erfahrener Ruby-on-Rails-Entwickler; entwickelte das ' +
            'Zahlungs-Gateway der zweiten Generation in Rails. Backend-Refactoring, ' +
            'Architektur, Design.',
        },
        square: {
          title: 'Software Engineer — Tools',
          company: 'Square',
          description:
            'Erster Entwickler für interne Tools bei Square, mit Schwerpunkt auf ' +
            'Entwickler-Tooling und Lokalisierungsinfrastruktur. Konzipierte, ' +
            'entwickelte und veröffentlichte bedeutende Engineering-Projekte, die ' +
            'intern genutzt und als Open Source bereitgestellt wurden.',
        },
        OMG: {
          title: 'Staff Software Engineer',
          company: 'One Medical Group',
          description:
            'Softwareentwickler im New-Services-Team, zuständig für die ' +
            'Entwicklung neuer Funktionen und Produkte für den Onboarding-Prozess.',
        },
        google: {
          title: 'Senior Software Engineer',
          company: 'Google',
          description:
            'Softwareentwickler im Cloud-Identity-Team, das die Zugriffssteuerung ' +
            'für interne und externe HTTP- und Streaming-Verbindungen verwaltet.',
        },
        trusted: {
          title: 'Software Engineer',
          company: 'Trusted Health',
          description:
            'Softwareentwickler im Clinician-Data-Team; entwickelte Software zur ' +
            'Verbesserung der Kommunikation zwischen Pflegekräften und ' +
            'Betriebspersonal sowie zur Verbesserung des Onboarding-Erlebnisses für ' +
            'Pflegekräfte.',
        },
        occupier: {
          title: 'Staff Software Engineer',
          company: 'Occupier',
          description:
            'Staff Software Engineer im Lease-Admin-Team, verantwortlich für die ' +
            'Entwicklung von Funktionen, die Kunden bei der Verwaltung ihres ' +
            'Mietvertragsportfolios unterstützen.',
        },
        adept: {
          title: 'Software Engineer',
          company: 'Adept',
          description:
            'Engineering-Lead, verantwortlich für die Entwicklung interner Tools, ' +
            'die Forschende und Mitarbeitende bei der KI-Analyse und beim ' +
            'Fine-Tuning unterstützten.',
        },
        hamilton: {
          title: 'Founding Software Engineer',
          company: 'Hamilton AI',
          description:
            'Einsatz von KI zum Aufbau wesentlicher Teile einer Plattform für einen Part-135-Betreiber.',
        },
      },
    },
    supportingExperience: {
      header: 'Ergänzende Erfahrung',
      content: [
        'Inhaber eines FAA-ATP-Pilotenscheins (2024) (FAA-Privatpilot 2007).',
        'Verfasste als Senior Writer über zwanzig Feature-Artikel und über 100 ' +
          'Nachrichtenartikel für Inside Mac Games mit Schwerpunkt auf ' +
          'Flugsimulatoren und Audio-Hardware.',
        'Gründete und leitete den Filmmaking Club des Beloit College und ' +
          'initiierte als Präsident die Produktion von drei abendfüllenden ' +
          'Dokumentarfilmen auf und außerhalb des Campus.',
      ],
    },
    education: {
      header: 'Ausbildung',
      concentration: {
        cs: 'Informatik',
        physics: 'Physik',
      },
    },
  },
}

export default merge({}, en, de)
