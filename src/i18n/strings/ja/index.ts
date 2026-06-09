import merge from 'lodash-es/merge'

import en from '../en'
import type { DefaultLocaleMessageSchema, LocaleMessages } from 'vue-i18n'

const ja: LocaleMessages<DefaultLocaleMessageSchema> = {
  bio: {
    occupation: {
      flightInstructor: 'FAA 飛行教官（CFI）',
      groundInstructor: 'FAA 地上教官（CGI）',
      ATP: 'FAA 定期運送用操縦士',
      CPL: 'FAA 事業用操縦士',
      dev: 'Web開発者',
    },
    accomplishment: {
      ATP: {
        AMEL: '飛行機 陸上多発',
        ASEL: '飛行機 陸上単発',
        SF50: 'Cirrus SF50 Vision Jet',
        B737: 'Boeing 737 NG',
      },
      CPL: {
        AMES: '飛行機 水上多発',
        ASES: '飛行機 水上単発',
        GLI: '滑空機',
      },
      groundInstructor: {
        advanced: '上級',
        instrument: '計器',
      },
      flightInstructor: {
        ASE: '飛行機 単発',
        'IFR-A': '計器飛行（飛行機）',
      },
    },
  },
  meta: {
    description: 'Tim Morgan: ソフトウェアエンジニア、パイロット',
  },
  localeSwitcher: {
    label: '言語',
  },
  header: {
    nav: 'メインナビゲーション',
    links: {
      home: 'ホーム',
      projects: 'プロジェクト',
      resume: '履歴書',
    },
  },
  footer: {
    text: 'すべてのコンテンツ、コード、画像（ロゴマークを除く）の著作権は©2011–{year} Tim Morgan に帰属します。無断転載を禁じます。{link}',
    linkText: 'このウェブサイトのソースを GitHub で見る。',
  },
  project: {
    type: {
      app: 'アプリ',
      gem: 'gem',
      library: 'ライブラリ',
      tool: 'ツール',
      website: 'ウェブサイト',
    },
    websiteType: {
      download: 'ダウンロード',
      live: 'ライブ',
      source: 'ソース',
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
      tradCoded: '手書きコード',
      vibeCoded: 'バイブコーディング',
    },
    badBehavior: {
      description: 'デジタル飛行記録を解析し、連邦航空規則（FAR）の違反の可能性をチェックします',
      achievements: [
        'LogTen Pro データベースのカスタムフィールドに自動的に対応',
        '複雑な12か月間の計器飛行（IFR）資格維持の猶予期間を検証',
      ],
    },
    closestNDB: {
      description:
        '現在地から最も近い無指向性無線標識（NDB）の位置を教えてくれる、実用性はないが楽しいウェブページ',
      achievements: [
        'GPS の位置情報を使い、世界中に残る300以上の NDB までの距離と方位を表示',
        '回転する指針と本格的なモールス信号の表示を備えたアニメーション ADF 計器',
      ],
    },
    FART: {
      description: 'パイロットが予定するフライトのリスクレベルを評価するためのシンプルな質問票',
      achievements: [
        'FAA の標準化された質問票を用いて個別のリスクスコアを算出',
        '単一のコードベースから iOS と macOS のネイティブアプリを構築し、適応的なインターフェースを提供',
      ],
    },
    flyweight: {
      description: '搭乗者が重量・重心（W&B）情報を控えめな方法で私に伝えられるウェブサイト',
      achievements: [
        'WebSocket 接続により、搭乗者が体重を入力すると即座に反映',
        '各フライトの1週間後にすべての搭乗者データを自動的に消去',
        '搭乗者はアカウント登録不要',
      ],
    },
    fourtiles: {
      description: 'タイルを組み合わせて単語を作る楽しいゲーム。',
      achievements: [
        '4つのタイルに分割した5つの単語から、4,000通りのユニークなパズルを自動生成',
        '進行状況をローカルに自動保存し、再訪時にゲームを再開',
        'タイルの組み合わせに対する滑らかなアニメーションと心地よい視覚的フィードバック',
      ],
    },
    ICrashedMyPlane: {
      description: '墜落後の NTSB 830 規則の対応を、わかりやすく案内してくれるツール',
      achievements: [
        '一見シンプルなフロントエンドを、高度な木探索アルゴリズムが支える',
        'Vue のトランジションを駆使した、アプリのように滑らかな操作感',
        'レスポンシブデザインとダークモードに対応',
      ],
    },
    learnMorseCode: {
      description: 'モールス信号を教える、楽しく前向きで少しおせっかいなツール',
      achievements: [
        'モールス信号の音声と図はすべてプログラムで生成し、アセットを一切使用しない',
        'Vue のトランジションを駆使した、アプリのように滑らかな操作感',
        'レスポンシブデザインとダークモードに対応',
      ],
    },
    SF50Told: {
      description: 'Cirrus SF50 Vision Jet の性能データを計算する SwiftUI アプリ',
      achievements: [
        'SF50 の離着陸性能の数学モデル',
        '通信環境の良い場所でも、通信環境の悪い（飛行中の）場所でも使用可能',
        'FAA の航空データを端末上で解析・保存',
      ],
    },
    swiftMETAR: {
      description: 'METAR および TAF の気象情報を解析する Swift ライブラリ',
      achievements: [
        'METAR および TAF 文字列の厳密な型付けと厳格な解析',
        '竜巻活動から着氷まで、49種類の METAR 補足記事（REMARKS）を解析',
      ],
    },
    swiftNASR: {
      description: 'FAA 航空データ配信（FADDS）ファイルを読み込み・解析する Swift ライブラリ',
      achievements: [
        'レイアウト仕様ファイルを読み取ることで、FAA のフォーマット変更に自動的に対応',
        '50種類以上の航空データ型（燃料仕様、ARFF 区分など）へ型安全にアクセス',
      ],
    },
    IPInbound: {
      description: 'パイロットが IP から目標まで正確なオンタイムオンターゲットで飛行するのを支援',
      achievements: [
        'コースと速度のガイダンスを備えたリアルタイムのカウントダウンタイマー',
        'iOS App Store で提供中',
      ],
    },
    swiftAirmen: {
      description: 'FAA 航空従事者証明データベースの Swift パーサー',
      achievements: [
        'FAA の航空従事者証明の公開可能データベースファイルを解析',
        'パイロットの証明書および資格データへ型安全にアクセス',
      ],
    },
    swiftNMEA: {
      description: 'Swift ネイティブで強い型付けの NMEA センテンスパーサー兼インタプリタ',
      achievements: [
        'リアルタイムの GPS データ処理に対応するストリーミングパーサー',
        'NMEA センテンス型の強い型付け表現',
      ],
    },
    garminACE: {
      description: 'Garmin Aviation Checklist Editor の .ace ファイル向け Swift パーサー',
      achievements: [
        'Garmin のチェックリストファイルのエンコードとデコードを往復で実現',
        'チェックリストを JSON などの形式に再シリアライズできる Codable なモデルスキーマ',
      ],
    },
    approachVisualizer: {
      description: 'BabylonJS を用いた計器進入方式の3D可視化',
      achievements: [
        'BabylonJS による進入経路のリアルタイム3Dレンダリング',
        'FAA のコード化計器飛行方式を解析して可視化',
      ],
    },
    streamingCSV: {
      description: 'Swift 向けの高性能でメモリ効率の良い CSV リーダー兼ライター',
      achievements: [
        'データセット全体をメモリに読み込まず、行単位でファイルを処理',
        '型付き行アクセスによる読み込みと書き込みの両方に対応',
      ],
    },
    streamingLZMA: {
      description: 'Swift らしいストリーミング対応の LZMA / XZ（LZMA2）圧縮ライブラリ',
      achievements: [
        'ファイル全体をメモリに読み込まず、ストリーミングで圧縮・展開',
        'LZMA と XZ（LZMA2）の両形式に対応',
      ],
    },
    swiftCIFP: {
      description: 'FAA のコード化計器飛行方式（CIFP）を解析する Swift ライブラリ',
      achievements: [
        'SID、STAR、計器進入方式の強い型付け解析',
        '進入復行（ミスト・アプローチ）区間と関連する滑走路を識別',
      ],
    },
    swiftGeographic: {
      description: 'Swift ネイティブの地理座標変換',
      achievements: [
        'UTM、UPS、MGRS、地理座標間の変換',
        '横メルカトル図法と極平射図法の Swift ネイティブ実装',
      ],
    },
    swiftDOF: {
      description: 'Swift 向け FAA デジタル障害物ファイル（DOF）パーサー',
      achievements: [
        'FAA の障害物データを型安全な表現で解析',
        'メモリ効率のためのストリーミング解析に対応',
      ],
    },
    swiftR2: {
      description: 'Swift 向け Cloudflare R2 クライアント',
      achievements: [
        'Cloudflare R2 オブジェクトストレージ向けの Swift ネイティブクライアント',
        'マルチパートアップロードに対応した async/await API',
      ],
    },
    swiftACD: {
      description: 'FAA および EUROCONTROL の航空機性能データを解析する Swift ネイティブパーサー',
      achievements: [
        'FAA（ACD）と EUROCONTROL（APD）両方の航空機性能データセットを解析',
        '航空機の性能特性へ Swift から型安全にアクセス',
      ],
    },
    gitHubUpdateChecker: {
      description:
        'GitHub リリースを利用する、Sparkle のような macOS ソフトウェア更新フレームワーク',
      achievements: [
        'GitHub リリースの更新を確認し、Sparkle のようにユーザーへ通知',
        'macOS アプリ向けの導入が容易なソフトウェア更新フレームワーク',
      ],
    },
  },
  resume: {
    present: '現在',
    references: '照会先は要望に応じて提供いたします。',
    address: {
      country: 'アメリカ合衆国',
      omitted: '[非公開]',
      city: 'カリフォルニア州サンフランシスコ',
    },
    objective: {
      header: '希望職種：',
      content:
        '情熱的なプログラマーと早期に学べる人材を求める、中小規模のスタートアップで' +
        'ソフトウェアエンジニアとして働くこと。特にウェブおよびアプリケーション開発、' +
        'コード品質、そして物事をより良くすることに強い関心があります。',
    },
    jobProjects: {
      trusted: {
        messaging: {
          title: 'Trusted Messaging',
          description: 'サポート対応における Sunshine と Front 間の連携',
        },
      },
      square: {
        squash: {
          title: 'Squash',
          description: 'エラー追跡とスタックトレース分析、オープンソース化',
        },
        shuttle: {
          title: 'Shuttle',
          description: 'i18n パイプラインと翻訳者向けソフトウェア、オープンソース化',
        },
        other: {
          title: '多数の社内向けユーザー向けウェブサイト',
        },
      },
      recurly: {
        gateway: {
          title: 'Recurly Gateway',
          description: '決済処理のための Chase Orbital ゲートウェイ',
        },
      },
      scribd: {
        jumpfrog: {
          title: 'Jumpfrog',
          description: 'エラー追跡とスタックトレース分析',
        },
      },
      tickle: {
        leo: {
          title: 'Leo',
          description: '広告配信プラットフォームと広告分析',
        },
        filter: {
          title: '不適切コンテンツのフィルタリングシステム',
        },
      },
    },
    jobs: {
      header: '職務経歴',
      locations: {
        sf: 'サンフランシスコ',
        seattle: 'シアトル',
      },
      identifiers: {
        amazon: {
          title: 'Software Development Engineer II',
          company: 'Amazon.com',
          description:
            '輸送チームのプログラマーとして、入出庫貨物向けの Web ベースの可視化サービスと' +
            'Oracle バックエンドの実装を担当。',
        },
        tickle: {
          title: 'Software Engineer',
          company: 'Tickle.com',
          description:
            '国際版 Tickle.com サイトの決済処理を実装し、広告配信システムを Rails で書き直した。',
        },
        scribd: {
          title: 'Senior Developer',
          company: 'Scribd',
          description:
            'Scribd.com のバックエンド開発者。ストアフロント、決済処理、サイト機能、' +
            'データベース最適化、適切な Rails スタイル、専門的な助言を担当。',
        },
        recurly: {
          title: 'Senior Developer',
          company: 'Recurly',
          description:
            'Ruby on Rails のエキスパート開発者。第二世代の決済ゲートウェイを Rails で実装。' +
            'バックエンドのリファクタリング、アーキテクチャ、設計を担当。',
        },
        square: {
          title: 'Software Engineer — Tools',
          company: 'Square',
          description:
            'Square 初の社内ツール開発者として、開発者向けツールとローカライゼーション基盤に' +
            '注力。社内利用およびオープンソース化された主要なエンジニアリングプロジェクトを' +
            '設計・構築・リリースした。',
        },
        OMG: {
          title: 'Staff Software Engineer',
          company: 'One Medical Group',
          description:
            'New Services チームのソフトウェアエンジニアとして、オンボーディングフローの' +
            '新機能とプロダクトを開発。',
        },
        google: {
          title: 'Senior Software Engineer',
          company: 'Google',
          description:
            'Cloud Identity チームのソフトウェアエンジニア。社内外の HTTP およびストリーミング' +
            '接続のアクセス制御を管理。',
        },
        trusted: {
          title: 'Software Engineer',
          company: 'Trusted Health',
          description:
            'Clinician Data チームのソフトウェアエンジニアとして、看護師と運用スタッフ間の' +
            'メッセージングを改善するソフトウェアを構築し、看護師のオンボーディング体験も' +
            '向上させた。',
        },
        occupier: {
          title: 'Staff Software Engineer',
          company: 'Occupier',
          description:
            'Lease Admin チームのスタッフソフトウェアエンジニアとして、クライアントが' +
            'リースポートフォリオを管理するための機能の構築を担当。',
        },
        adept: {
          title: 'Software Engineer',
          company: 'Adept',
          description:
            'エンジニアリングリードとして、研究者や従業員の AI 分析とファインチューニングを' +
            '支援する社内ツールの構築を担当。',
        },
        hamilton: {
          title: 'Founding Software Engineer',
          company: 'Hamilton AI',
          description: 'AI を活用し、Part 135 運航事業者向けプラットフォームの主要部分を構築。',
        },
      },
    },
    supportingExperience: {
      header: '関連経験',
      content: [
        'FAA 定期運送用操縦士（ATP）の資格を取得（2024年）（FAA 自家用は2007年）。',
        'Inside Mac Games のシニアライターとして、フライトシミュレーターとオーディオ' +
          'ハードウェアを専門に、20本以上の特集記事と100本以上のニュース記事を執筆。',
        'Beloit College 映画制作クラブを設立・運営し、会長として、キャンパス内外で' +
          '3本の長編ドキュメンタリーの制作を主導。',
      ],
    },
    education: {
      header: '学歴',
      concentration: {
        cs: 'コンピュータサイエンス',
        physics: '物理学',
      },
      institution: {
        beloit: {
          location: 'ウィスコンシン州ベロイト',
        },
      },
    },
  },
}

export default merge({}, en, ja)
