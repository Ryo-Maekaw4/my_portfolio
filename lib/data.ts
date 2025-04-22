import { PersonalInfo, Project, Skill, WorkExperience, Education, SocialLink } from './types';

// ポートフォリオデータ
export const personalInfo: PersonalInfo = {
  name: '山田 太郎',
  title: 'ソフトウェアエンジニア',
  bio: 'フロントエンド開発とバックエンド開発の経験を持つフルスタックエンジニアです。ユーザー体験を大切にした、パフォーマンスの高いウェブアプリケーションの開発に情熱を持っています。',
  location: '東京, 日本',
  email: 'contact@example.com',
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/',
      icon: 'Github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/',
      icon: 'Linkedin',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/',
      icon: 'Twitter',
    },
  ],
  resumeUrl: '/resume.pdf',
};

export const skills: Skill[] = [
  { name: 'React', level: 90, icon: 'Code', category: 'frontend' },
  { name: 'TypeScript', level: 85, icon: 'FileCode', category: 'frontend' },
  { name: 'Next.js', level: 80, icon: 'Globe', category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, icon: 'Paintbrush', category: 'frontend' },
  { name: 'Node.js', level: 75, icon: 'Server', category: 'backend' },
  { name: 'Express', level: 70, icon: 'Server', category: 'backend' },
  { name: 'PostgreSQL', level: 65, icon: 'Database', category: 'backend' },
  { name: 'MongoDB', level: 60, icon: 'Database', category: 'backend' },
  { name: 'Docker', level: 75, icon: 'Container', category: 'devops' },
  { name: 'AWS', level: 65, icon: 'Cloud', category: 'devops' },
  { name: 'Git', level: 85, icon: 'Git', category: 'devops' },
  { name: 'CI/CD', level: 70, icon: 'Workflow', category: 'devops' },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'ポートフォリオサイト',
    description: 'Next.js と Tailwind CSS を使用したポートフォリオサイト',
    longDescription: 'Next.js、Tailwind CSS、shadcn/ui コンポーネントを使用して構築された、完全レスポンシブなポートフォリオサイトです。ダークモードとライトモードの切り替えに対応しています。',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'タスク管理アプリ',
    description: 'React と Redux を使用したタスク管理アプリケーション',
    longDescription: 'React、Redux、TypeScript を使用して構築された、ドラッグアンドドロップ機能を持つタスク管理アプリケーションです。ユーザー認証やデータの永続化にも対応しています。',
    technologies: ['React', 'Redux', 'TypeScript', 'Firebase'],
    imageUrl: 'https://images.pexels.com/photos/6956353/pexels-photo-6956353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Eコマースプラットフォーム',
    description: 'MERN スタックを使用した Eコマース プラットフォーム',
    longDescription: 'MongoDB、Express、React、Node.js を使用して構築された、フル機能を備えた Eコマース プラットフォームです。ユーザー認証、商品検索、ショッピングカート、決済処理などの機能を提供します。',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe'],
    imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: 'project-4',
    title: '天気予報アプリ',
    description: 'React と OpenWeather API を使用した天気予報アプリ',
    longDescription: 'React と OpenWeather API を使用して構築された、リアルタイムの天気情報を提供するアプリケーションです。位置情報の取得や、7日間の天気予報の表示に対応しています。',
    technologies: ['React', 'JavaScript', 'REST API', 'CSS'],
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
    featured: false,
  },
];

export const workExperiences: WorkExperience[] = [
  {
    id: 'exp-1',
    company: '株式会社テックイノベーション',
    position: 'シニアフロントエンドエンジニア',
    startDate: '2022-04',
    endDate: null,
    description: 'React と TypeScript を使用した大規模 SPA の開発と保守。Agile/Scrum 手法を採用し、フロントエンドチームをリード。パフォーマンス最適化とアクセシビリティの向上に取り組みました。',
    technologies: ['React', 'TypeScript', 'Next.js', 'Redux', 'Jest', 'Cypress'],
  },
  {
    id: 'exp-2',
    company: '株式会社ウェブソリューションズ',
    position: 'フルスタックエンジニア',
    startDate: '2019-07',
    endDate: '2022-03',
    description: 'Node.js と Express を使用したバックエンド API の設計と実装。React を使用したフロントエンド開発も担当。CIパイプラインの構築や Docker を使用した開発環境の整備も行いました。',
    technologies: ['Node.js', 'Express', 'React', 'MongoDB', 'Docker', 'AWS'],
  },
  {
    id: 'exp-3',
    company: '株式会社デジタルクリエイト',
    position: 'ウェブデベロッパー',
    startDate: '2017-01',
    endDate: '2019-06',
    description: 'PHP と Laravel を使用したウェブアプリケーションの開発。データベース設計やフロントエンド開発も担当。チーム開発の経験を積み、アジャイル開発手法を学びました。',
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'jQuery', 'HTML/CSS'],
  },
];

export const education: Education[] = [
  {
    institution: '東京工科大学',
    degree: '情報工学科 学士',
    startDate: '2013-04',
    endDate: '2017-03',
    description: 'コンピュータサイエンスとソフトウェア工学を専攻。在学中にプログラミングコンテストで入賞経験あり。',
  },
];