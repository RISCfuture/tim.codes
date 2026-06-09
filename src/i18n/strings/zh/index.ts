import merge from 'lodash-es/merge'

import en from '../en'
import type { DefaultLocaleMessageSchema, LocaleMessages } from 'vue-i18n'

const zh: LocaleMessages<DefaultLocaleMessageSchema> = {
  bio: {
    occupation: {
      flightInstructor: 'FAA 飞行教员',
      groundInstructor: 'FAA 地面教员',
      ATP: 'FAA 航线运输飞行员',
      CPL: 'FAA 商用飞行员',
      dev: '网页开发工程师',
    },
    accomplishment: {
      ATP: {
        AMEL: '陆上多发飞机',
        ASEL: '陆上单发飞机',
        SF50: 'Cirrus SF50 Vision Jet',
        B737: 'Boeing 737 NG',
      },
      CPL: {
        AMES: '水上多发飞机',
        ASES: '水上单发飞机',
        GLI: '滑翔机',
      },
      groundInstructor: {
        advanced: '高级',
        instrument: '仪表',
      },
      flightInstructor: {
        ASE: '单发飞机',
        'IFR-A': '仪表飞机',
      },
    },
  },
  meta: {
    description: 'Tim Morgan：软件工程师、商业飞行员',
  },
  localeSwitcher: {
    label: '语言',
  },
  header: {
    nav: '主导航',
    links: {
      home: '主页',
      projects: '项目',
      resume: '简历',
    },
  },
  footer: {
    text: '所有内容、代码及图片（标识图形除外）版权所有 ©2011–{year} Tim Morgan。保留所有权利。{link}',
    linkText: '在 GitHub 上查看本网站的源代码。',
  },
  project: {
    type: {
      app: '应用',
      gem: 'gem',
      library: '库',
      tool: '工具',
      website: '网站',
    },
    websiteType: {
      download: '下载',
      live: '在线访问',
      source: '源代码',
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
      tradCoded: '手工编写',
      vibeCoded: 'AI 氛围编程',
    },
    badBehavior: {
      description: '扫描你的电子飞行日志，查找可能违反联邦航空条例的情况',
      achievements: [
        '自动适配 LogTen Pro 数据库中的自定义字段',
        '校验复杂的 12 个月仪表飞行近期经历宽限期',
      ],
    },
    closestNDB: {
      description: '一个虽无实用价值却颇为有趣的网页，告诉你离当前位置最近的无方向性信标在哪里',
      achievements: [
        '利用你的 GPS 位置，显示与全球 300 多个现存 NDB 的距离和方位',
        '带旋转指针的动画 ADF 仪表，并呈现地道的摩尔斯电码',
      ],
    },
    FART: {
      description: '帮助飞行员评估拟飞航班风险等级的简易问卷',
      achievements: [
        '使用标准化的 FAA 问卷计算个性化风险评分',
        '基于单一代码库、具备自适应界面的原生 iOS 与 macOS 应用',
      ],
    },
    flyweight: {
      description: '一个让乘客以私密方式向我提供重量与平衡信息的网站',
      achievements: [
        '乘客录入体重时，通过 WebSocket 连接实时更新',
        '每次飞行结束一周后自动清除所有乘客数据',
        '乘客无需注册账户',
      ],
    },
    fourtiles: {
      description: '一款通过组合方块来拼出单词的趣味游戏。',
      achievements: [
        '由五个单词各拆分为四个方块，自动生成 4,000 个独特谜题',
        '自动在本地保存进度，并在你返回时恢复游戏',
        '方块组合带来流畅的动画与生动的视觉反馈',
      ],
    },
    ICrashedMyPlane: {
      description: '一种生动的方式，帮助你在飞机失事后理清 NTSB 830 条例',
      achievements: [
        '看似简单的前端，背后由精巧的树遍历算法驱动',
        '大量运用 Vue 过渡动画，带来流畅的类原生应用体验',
        '响应式设计并支持深色模式',
      ],
    },
    learnMorseCode: {
      description: '一款有趣、鼓励人心且略带督促意味的摩尔斯电码教学工具',
      achievements: [
        '所有摩尔斯电码音频与图示均由程序生成，不使用任何素材文件',
        '大量运用 Vue 过渡动画，带来流畅的类原生应用体验',
        '响应式设计并支持深色模式',
      ],
    },
    SF50Told: {
      description: '为 Cirrus SF50 Vision Jet 计算性能数据的 SwiftUI 应用',
      achievements: [
        'SF50 起飞与着陆性能的数学模型',
        '在高网络连接以及低网络连接（飞行途中）环境下均可使用',
        '在设备本地解析并存储 FAA 航空数据',
      ],
    },
    swiftMETAR: {
      description: '解析 METAR 与 TAF 气象信息的 Swift 库',
      achievements: [
        '对 METAR 与 TAF 报文进行强类型化、严格解析',
        '可解析 49 种 METAR 备注类型，涵盖龙卷风活动到积冰等情况',
      ],
    },
    swiftNASR: {
      description: '加载并解析 FAA 航空数据分发（FADDS）文件的 Swift 库',
      achievements: [
        '通过读取格式规范文件，自动适配 FAA 的格式变更',
        '为 50 多种航空数据类型（燃油规格、ARFF 等级等）提供类型安全的访问',
      ],
    },
    IPInbound: {
      description: '帮助飞行员沿 IP 至目标航段飞行，精确到达目标时间',
      achievements: ['带航向与速度引导的实时倒计时', '已在 iOS App Store 上架'],
    },
    swiftAirmen: {
      description: '面向 FAA 飞行人员认证数据库的 Swift 解析器',
      achievements: [
        '解析 FAA 飞行人员认证可发布数据库文件',
        '对飞行员证书与等级数据提供类型安全的访问',
      ],
    },
    swiftNMEA: {
      description: '一个 Swift 原生、强类型的 NMEA 语句解析与解读器',
      achievements: ['面向实时 GPS 数据处理的流式解析器', 'NMEA 语句类型的强类型表示'],
    },
    garminACE: {
      description: '面向 Garmin Aviation Checklist Editor 所生成 .ace 文件的 Swift 解析器',
      achievements: [
        '对 Garmin 检查单文件进行往返编码与解码',
        '可将检查单重新序列化为 JSON 或其他格式的 Codable 模型架构',
      ],
    },
    approachVisualizer: {
      description: '使用 BabylonJS 对仪表进近程序进行三维可视化',
      achievements: ['借助 BabylonJS 实时三维渲染进近航迹', '解析并可视化 FAA 编码仪表飞行程序'],
    },
    streamingCSV: {
      description: '面向 Swift 的高性能、低内存占用 CSV 读写器',
      achievements: [
        '逐行处理文件，无需将整个数据集载入内存',
        '支持以类型化的行访问方式进行读取与写入',
      ],
    },
    streamingLZMA: {
      description: '符合 Swift 习惯的流式 LZMA 与 XZ（LZMA2）压缩库',
      achievements: [
        '无需将完整文件载入内存即可进行流式压缩与解压',
        '同时支持 LZMA 与 XZ（LZMA2）格式',
      ],
    },
    swiftCIFP: {
      description: '解析 FAA 编码仪表飞行程序的 Swift 库',
      achievements: ['对 SID、STAR 及仪表进近进行强类型解析', '识别复飞航段及相关跑道'],
    },
    swiftGeographic: {
      description: 'Swift 原生的地理坐标转换',
      achievements: [
        '在 UTM、UPS、MGRS 与地理坐标之间相互转换',
        '横轴墨卡托与极球面投影的 Swift 原生实现',
      ],
    },
    swiftDOF: {
      description: '面向 Swift 的 FAA 数字障碍物文件（DOF）解析器',
      achievements: ['以类型安全的表示解析 FAA 障碍物数据', '支持流式解析以提升内存效率'],
    },
    swiftR2: {
      description: '面向 Swift 的 Cloudflare R2 客户端',
      achievements: [
        '面向 Cloudflare R2 对象存储的 Swift 原生客户端',
        '采用 async/await API，并支持分片上传',
      ],
    },
    swiftACD: {
      description: 'Swift 原生的 FAA 与 EUROCONTROL 航空器性能数据解析器',
      achievements: [
        '同时解析 FAA（ACD）与 EUROCONTROL（APD）航空器性能数据集',
        '以强类型的 Swift 方式访问航空器性能特征',
      ],
    },
    gitHubUpdateChecker: {
      description: '一个类似 Sparkle、由 GitHub 发布版本驱动的 macOS 软件更新框架',
      achievements: [
        '检查 GitHub 发布版本以发现更新，并以 Sparkle 的方式通知用户',
        '可直接集成到 macOS 应用的软件更新框架',
      ],
    },
  },
  resume: {
    present: '至今',
    references: '如有需要，可提供推荐人。',
    address: {
      city: '加利福尼亚州旧金山',
      country: '美国',
      omitted: '[已略去]',
    },
    objective: {
      header: '求职意向：',
      content:
        '希望加入一家渴求充满热情的程序员与快速学习者的中小型初创公司，担任软件工程师。' +
        '尤其热衷于网页与应用开发、代码质量，以及把事情做得更好。',
    },
    jobProjects: {
      trusted: {
        messaging: {
          title: 'Trusted Messaging',
          description: '用于支持对话的 Sunshine 与 Front 之间的数据互通',
        },
      },
      square: {
        squash: {
          title: 'Squash',
          description: '错误跟踪与堆栈跟踪分析，已开源',
        },
        shuttle: {
          title: 'Shuttle',
          description: '国际化（i18n）流水线与翻译软件，已开源',
        },
        other: {
          title: '众多面向用户的内部网站',
        },
      },
      recurly: {
        gateway: {
          title: 'Recurly Gateway',
          description: '用于支付处理的 Chase Orbital 网关',
        },
      },
      scribd: {
        jumpfrog: {
          title: 'Jumpfrog',
          description: '错误跟踪与堆栈跟踪分析',
        },
      },
      tickle: {
        leo: {
          title: 'Leo',
          description: '广告投放平台与广告分析',
        },
        filter: {
          title: '不良内容过滤系统',
        },
      },
    },
    jobs: {
      header: '职业经历',
      locations: {
        sf: '旧金山',
        seattle: '西雅图',
      },
      identifiers: {
        amazon: {
          title: 'Software Development Engineer II',
          company: 'Amazon.com',
          description: '运输团队的程序员，负责实现面向进出港货运的网页可视化服务及 Oracle 后端。',
        },
        tickle: {
          title: 'Software Engineer',
          company: 'Tickle.com',
          description: '为 Tickle.com 国际站点编写支付处理，并用 Rails 重写了广告投放系统。',
        },
        scribd: {
          title: 'Senior Developer',
          company: 'Scribd',
          description:
            'Scribd.com 后端开发工程师；负责店面、支付处理、网站功能、数据库优化、' +
            '规范的 Rails 风格，并提供专家建议。',
        },
        recurly: {
          title: 'Senior Developer',
          company: 'Recurly',
          description:
            '资深 Ruby on Rails 开发工程师；用 Rails 编写了第二代支付网关。' +
            '负责后端重构、架构与设计。',
        },
        square: {
          title: 'Software Engineer — Tools',
          company: 'Square',
          description:
            'Square 首位内部工具开发工程师，专注于开发者工具与本地化基础设施。' +
            '设计、构建并发布了多个重要工程项目，既在内部使用，也已开源。',
        },
        OMG: {
          title: 'Staff Software Engineer',
          company: 'One Medical Group',
          description: '新业务团队软件工程师，为入驻流程开发新功能与新产品。',
        },
        google: {
          title: 'Senior Software Engineer',
          company: 'Google',
          description:
            'Cloud Identity 团队软件工程师，该团队负责管理内部与外部 HTTP 及流式连接的访问控制。',
        },
        trusted: {
          title: 'Software Engineer',
          company: 'Trusted Health',
          description:
            '临床医护数据团队软件工程师，开发用于改善护士与运营人员之间消息沟通的软件，' +
            '并优化护士入职体验。',
        },
        occupier: {
          title: 'Staff Software Engineer',
          company: 'Occupier',
          description: '租约管理团队资深软件工程师，负责构建帮助客户管理其租约组合的功能。',
        },
        adept: {
          title: 'Software Engineer',
          company: 'Adept',
          description: '工程负责人，负责构建协助研究人员与员工进行 AI 分析与微调的内部工具。',
        },
        hamilton: {
          title: 'Founding Software Engineer',
          company: 'Hamilton AI',
          description: '运用 AI 构建一个 Part 135 运营商平台的主要部分。',
        },
      },
    },
    supportingExperience: {
      header: '补充经历',
      content: [
        '持有 FAA 航线运输飞行员执照（2024 年）（FAA 私用飞行员执照 2007 年）。',
        '作为《Inside Mac Games》的资深撰稿人，专注于飞行模拟器与音频硬件，' +
          '撰写了二十余篇专题文章和一百多篇新闻报道。',
        '创办并经营 Beloit College 电影制作社，并以社长身份主导完成了三部校内外的长篇纪录片。',
      ],
    },
    education: {
      header: '教育背景',
      concentration: {
        cs: '计算机科学',
        physics: '物理学',
      },
      institution: {
        beloit: {
          location: '威斯康星州贝洛伊特',
        },
      },
    },
  },
}

export default merge({}, en, zh)
