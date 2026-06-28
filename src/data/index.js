import lottieDevelopment from '@/assets/1.lottie?url'
import lottieVisual from '@/assets/2.lottie?url'
import lottieExplore from '@/assets/3.lottie?url'

export const skills = [
  {
    id: 1,
    title: '網頁開發',
    description: '透過程式與設計結合，打造良好的使用體驗。',
    animation: lottieDevelopment,
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'Vue',
      'RWD'
    ]
  },
  {
    id: 2,
    title: '視覺創作',
    description: '運用視覺語言，讓想法更容易被理解與感受。',
    animation: lottieVisual,
    tags: [
      'Figma',
      'Photoshop',
      'Pr/ AE',
      'Illustrator'
    ]
  },
  {
    id: 3,
    title: '持續探索中',
    description: '保持學習與嘗試，探索不同領域的創作形式。',
    animation: lottieExplore,
    tags: [
      'Blender',
      'Clip Studio Paint',
      '3D Art',
      'AI Tools'
    ]
  }
];
export const projects = [
  {
    id: 1,
    title: '清水眷村文化園區',
    subtitle: 'Qingshui Military Village',
    description: '以清晰的資訊層級與視覺導覽，讓使用者輕鬆認識眷村文化與園區特色。',
    fullDescription: '這是一個以地方文化為主題的園區介紹網站，將歷史背景、空間特色與參訪資訊整合在同一個瀏覽體驗中。',
    overview: [
      '專案從「如何讓地方文化資料更好讀」出發，重新整理大量文字與圖像。',
      '透過分區內容、明確導覽與視覺焦點，降低使用者尋找重點資訊的成本。',
      '主要包含園區簡介、文化主題內容、圖像展示與行動裝置版面。'
    ],
    features: ['園區文化介紹', '圖文內容編排', '清楚的頁面導覽', '重點資訊卡片', 'RWD 響應式版面'],
    tech: ['Vue 3', 'HTML', 'CSS', 'JavaScript', 'RWD'],
    responsibilities: ['UI Design', 'RWD', '內容層級規劃'],
    collaboration: '團隊合作',
    image: 'IMG/ogimg.webp',
    color: '#06b6d4',
    github: null,
    demo: 'https://nchu-11503-qingshui-qrt-village.pages.dev/',
    featured: true,
  },
  {
    id: 2,
    title: '都市尋羽',
    subtitle: 'Task Management App',
    description: '以城市導覽為路徑，帶領使用者認識台灣候鳥與牽徙足跡。',
    fullDescription: '「都市尋羽」將鳥類知識與城市地景結合，透過主題頁面與動態路由，讓內容不只是資料列表，而是可以深入探索的線上導覽。',
    overview: [
      '以都是和鳥類生態為核心，將分散的生態內容整理成容易瀏覽的專題網站。',
      '解決傳統知識頁面資訊密度高、使用者難以建立閱讀路徑的問題。',
      '透過主題分類、鳥類資訊與路由切換，提供連貫的探索體驗。'
    ],
    features: ['都市和鳥鳥類生態主題導覽', '鳥類資訊展示', '動態路由切換', 'Query Params 狀態同步', '元件化頁面', 'RWD 響應式設計'],
    tech: ['Vue 3', 'Vue Router', 'JavaScript', 'CSS', 'RWD'],
    responsibilities: ['UI Design', 'Vue Frontend Development', '路由規劃', 'RWD'],
    collaboration: '個人完成',
    image: 'IMG/bird.webp',
    color: '#f59e0b',
    github: 'https://github.com/NiaForge/frontend-assignments',
    demo: 'https://niaforge.github.io/frontend-assignments/Urban-Avian/#/',
    featured: true,
  },
  {
    id: 3,
    title: '植物收藏展示',
    subtitle: 'Plant Collection Exhibition',
    description: '用 Vue 3 整理植物收藏，透過可重複使用的元件展示每株植物的特色。',
    fullDescription: '作為 Vue 3 的入門專案，從資料陣列、元件拆分到畫面渲染，建立一個易於擴充的植物收藏展示頁。',
    overview: [
      '將個人植物收藏整理為結構化資料，並以卡片方式呈現。',
      '解決靜態頁面新增內容時必須重複撰寫 HTML 的問題。',
      '透過 Vue 元件與資料綁定，讓展示內容更容易維護。'
    ],
    features: ['植物卡片展示', '資料陣列渲染', '分類資訊排版'],
    tech: ['Vue 3', 'JavaScript', 'CSS', 'Vite'],
    responsibilities: ['UI Design', 'Vue Frontend Development'],
    collaboration: '個人完成',
    image: 'IMG/P.webp',
    color: '#10b981',
    github: 'https://github.com/NiaForge/frontend-assignments.git',
    demo: 'https://niaforge.github.io/frontend-assignments/Potted-Plants/',
    featured: false,
  },
  {
    id: 4,
    title: 'Microsoft 仿切作業',
    subtitle: 'Static Clone Page',
    description: '使用純 HTML 與 CSS 進行微軟官網的切版練習。',
    fullDescription: '根據設計稿完成部落格卡片切版，專注在 Flexbox 佈局邏輯、內容對齊與不同螢幕寬度下的閱讀性。',
    overview: [
      '以實際卡片設計稿作為切版練習，建立穩定的排版結構。',
      '解決圖片、標題、摘要長度不同時的對齊與延展問題。',
      '完成可重複套用的文章卡片與響應式排版。'
    ],
    features: ['Flexbox 卡片排版', '圖文比例控制', '多列自適應佈局', '內容對齊', 'RWD 響應式版面'],
    tech: ['HTML', 'CSS', 'Flexbox', 'RWD'],
    responsibilities: ['Frontend Development', '設計稿還原', '排版規劃', 'RWD'],
    collaboration: '個人完成',
    image: 'IMG/M.webp',
    color: '#ef4444',
    github: 'https://github.com/NiaForge/frontend-assignments.git',
    demo: 'https://niaforge.github.io/frontend-assignments/Microsoft-Clone/',
    featured: true,
  },
  {
    id: 5,
    title: 'Flexbox RWD - PLAVE',
    subtitle: 'Responsive Idol Profile Layout',
    description: '使用 Flexbox 與 RWD 技術，打造 PLAVE 虛擬男團的響應式成員介紹頁。',
    fullDescription: '以虛擬男團 PLAVE 為主題進行的快速響應式（RWD）切版練習。專案核心在於活用 Flexbox 彈性排版，並深入實作網頁互動細節，如漢堡條選單以及 `:before`、`:after` 偽元素（Pseudo-elements）的視覺點綴。',
    overview: [
      '解決網頁在不同行動裝置螢幕尺寸下，圖文容易破版或排列混亂的問題。',
      '透過純 CSS 實作精緻的 hover 動效與選單切換，提升介面的視覺層次感。'
    ],
    features: ['Flexbox 彈性網格排版', '漢堡條行動版導覽選單', '偽元素視覺裝飾應用', 'Hover 縮放與漸變特效', 'RWD 全裝置響應式支援'],
    tech: ['HTML', 'CSS'],
    responsibilities: ['UI Design', 'Frontend Development', 'RWD'],
    collaboration: '個人完成',
    image: 'IMG/main.jpg',
    color: '#8b5cf6',
    github: 'https://github.com/NiaForge/frontend-assignments',
    demo: 'https://niaforge.github.io/frontend-assignments/flex-class/',
    featured: false,
  },
  {
    id: 6,
    title: '酷炫猜拳小遊戲',
    subtitle: 'Rock Paper Scissors Game',
    description: '結合 3D 卡牌翻轉與三戰兩勝制的互動猜拳遊戲，兼具精美視覺與完整邏輯。',
    fullDescription: '遵循結構化函式封裝，更導入了現代前端美學與進階的賽制狀態控制，將傳統遊戲轉化為極具懸念與沉浸感的互動作品。',
    overview: [
      '將傳統的猜拳邏輯（getComputerChoice、judge、playGame）進行模組化與結構化封裝。',
      '為了解決單次勝負的枯燥感，進階改良為更具競技感的「三戰兩勝制」，並搭配視覺化的圓點指示燈。',
      '結合現代前端視覺特效，打破死板的文字輸出，大幅提升遊戲的互動性與節奏感。'
    ],
    features: [
      'Glassmorphism 玻璃擬態 UI',
      'CSS 3D 卡牌翻轉動畫 (preserve-3d)',
      '未知卡牌懸念設計',
      '三戰兩勝制計分系統 (score-dot)',
      '全螢幕最終勝負特效 (Overlay)',
      '回合制按鈕鎖定機制',
      'RWD 響應式版面'
    ],
    tech: ['HTML', 'CSS (3D Transforms)', 'JavaScript', 'DOM API', 'Template Literals'],
    responsibilities: ['視覺與動畫設計 (UI/UX)', '邏輯封裝與狀態控制', '3D 卡牌翻轉特效實作', '響應式切版'],
    collaboration: '個人完成 (透過與 AI 迭代協作優化體驗)',
    image: 'IMG/RPS.jpg',
    color: '	#0080FF',
    github: 'https://github.com/NiaForge/frontend-assignments',
    demo: 'https://niaforge.github.io/frontend-assignments/RPS/',
    featured: false,
  },
  // {
  //   id: 10,
  //   title: '天氣小卡',
  //   subtitle: 'E-Commerce Platform',
  //   description: '完成商品管理與總價計算，並在重新整理頁面後保留購物車內容。',
  //   fullDescription: '這是一個以原生 JavaScript 建立的購物車練習，重點在於將使用者操作、資料狀態與畫面更新整合成完整流程。',
  //   overview: [
  //     '專案模擬常見的電商購物車情境，從商品操作練習 DOM 與狀態管理。',
  //     '解決數量變動後價格不同步，以及重新整理頁面後資料流失的問題。',
  //     '使用者可新增、修改與刪除商品，系統會即時重新計算總價。'
  //   ],
  //   features: ['商品新增', '修改數量', '刪除商品', '即時計算總價', 'LocalStorage 儲存', 'RWD 響應式版面'],
  //   tech: ['HTML', 'CSS', 'JavaScript', 'DOM API', 'LocalStorage'],
  //   responsibilities: ['UI Design', 'Frontend Development', 'DOM 互動邏輯', 'RWD'],
  //   collaboration: '個人完成',
  //   image: '🛒',
  //   color: '#6366f1',
  //   github: null,
  //   demo: null,
  //   featured: false,
  // },
]

export const graphicWorks = [
  {
    id: 'graphic-photoshop',
    title: 'Photoshop',
    subtitle: 'Photo Editing & Compositing',
    description: '影像合成、照片調色與視覺效果創作。',
    image: 'IMG/graphic/photoshop/p01.webp',
    color: '#31a8ff',
    tech: ['Photoshop', 'Compositing', 'Retouching'],
    images: [
      'IMG/graphic/photoshop/p01.webp',
      'IMG/graphic/photoshop/p02.webp',
      'IMG/graphic/photoshop/p03.webp',
      'IMG/graphic/photoshop/p05.webp',
      'IMG/graphic/photoshop/p06.webp',
      'IMG/graphic/photoshop/p08.webp',
      'IMG/graphic/photoshop/p09.webp',
      'IMG/graphic/photoshop/p10.webp'
    ]
  },
  {
    id: 'graphic-illustrator',
    title: 'Illustrator',
    subtitle: 'Vector & Graphic Design',
    description: '向量插畫、圖形設計與品牌視覺練習。',
    image: 'IMG/graphic/illustrator/ai01.webp',
    color: '#ff9a00',
    tech: ['Illustrator', 'Vector Art', 'Layout'],
    images: [
      'IMG/graphic/illustrator/ai01.webp',
      'IMG/graphic/illustrator/ai02.webp',
      'IMG/graphic/illustrator/ai03.webp',
      'IMG/graphic/illustrator/ai04.webp',
      'IMG/graphic/illustrator/ai05.webp',
      'IMG/graphic/illustrator/ai06.webp',
      'IMG/graphic/illustrator/ai07.webp'
    ]
  },
  {
    id: 'graphic-analysis',
    title: 'Design Analysis',
    subtitle: 'Visual Study & Analysis',
    description: '從構圖、色彩與資訊層級拆解設計案例。',
    image: 'IMG/graphic/analysis/analysis01.webp',
    color: '#a78bfa',
    tech: ['Visual Analysis', 'Composition', 'Typography'],
    images: [
      'IMG/graphic/analysis/analysis01.webp',
      'IMG/graphic/analysis/analysis02.webp',
      'IMG/graphic/analysis/analysis03.webp'
    ]
  }
]
