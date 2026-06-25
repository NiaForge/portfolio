export const skills = [
  // === 前端開發 (Frontend) ===
  {
    id: 1,
    name: 'Vue.js',
    level: 2,
    category: 'Frontend',
    description: 'Vue 3 Composition API、Vue Router 路由管理'
  },
  {
    id: 2,
    name: 'JavaScript',
    level: 2,
    category: 'Frontend',
    description: 'ES6+ 語法、非同步處理 (Async/Await)、DOM 操作'
  },
  {
    id: 3,
    name: 'CSS / SCSS',
    level: 4,
    category: 'Frontend',
    description: 'RWD 響應式網頁、CSS 動態特效、Flexbox/Grid 佈局'
  },
  {
    id: 4,
    name: 'HTML5',
    level: 4,
    category: 'Frontend',
    description: '語意化標籤運用、SEO 結構優化、DOM 樹狀結構維護'
  },
  // === 數位與 UI/UX 設計 (UI/UX Design) ===
  {
    id: 5,
    name: 'Figma',
    level: 2,
    category: 'UIUX',
    description: 'UI 介面原型設計、Component 組件庫建立與維護'
  },
  // === 視覺與影像處理 (Visual Design) ===
  {
    id: 6,
    name: 'Photoshop',
    level: 4,
    category: '視覺設計',
    description: '高級影像合成、色彩調整、商業修圖與視覺素材精細處理'
  },
  {
    id: 7,
    name: 'Illustrator',
    level: 3,
    category: '視覺設計',
    description: '向量圖表繪製、視覺 Icon 設計、品牌視覺規範延伸'
  },
  { id: 8, 
    name: 'Clip Studio Paint', 
    level: 4, 
    category: '視覺設計', 
    description: '數位插畫創作、角色視覺設計、風格分鏡繪製與創意構圖' 
  },
  // === 影音多媒體 (Multimedia) ===
  { id: 9, 
    name: 'Pr/ AE', 
    level: 3, 
    category: 'media', 
    description: '影片剪輯、動態影像企劃、基礎轉場特效與音訊流暢度控制' 
  },
  // === 開發工具與部署 (DevOps / Tools) ===
  {
    id: 10,
    name: 'Git / GitHub',
    level: 2,
    category: 'Tools',
    description: 'Git 版本控制、Git Flow 分支策略、GitHub Pages 靜態部署'
  },
];

export const projects = [
  {
    id: 1,
    title: '清水眷村文化園區',
    subtitle: 'Weather Dashboard',
    description: '輸入學生成績資料，自動計算平均與極值、過濾不及格名單，並依分數降序輸出帶有等第標籤的排序陣列。',
    fullDescription: '運用到function函式、解構賦值&展開運算子、陣列應用',
    tech: ['HTML', 'CSS', 'JS'],
    image: '📋',
    color: '#06b6d4',
    github: 'https://github.com',
    demo: 'https://nchu-11503-qingshui-qrt-village.pages.dev/',
    likes: 0,
    featured: false,
    year: 2026,
  },
  {
    id: 2,
    title: '都市尋羽',
    subtitle: 'Task Management App',
    description: '台灣候鳥遷徙城市導覽',
    fullDescription: '專案結構、導入 (Import)、Router、查詢參數 (Query Params)',
    tech: ['Vue 3'],
    image: '🪽',
    color: '#f59e0b',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    likes: 0,
    featured: true,
    year: 2026,
  },
  {
    id: 3,
    title: '購物車清單',
    subtitle: 'E-Commerce Platform',
    description: '具備新增商品項目、商品數、訂單歷史紀錄功能。',
    fullDescription: '使用到DOM',
    tech: ['HTML', 'CSS', 'JS'],
    image: '🛒',
    color: '#6366f1',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    likes: 0,
    featured: true,
    year: 2026,
  },
  
  {
    id: 4,
    title: '植物收藏展示',
    subtitle: 'Plant Collection Exhibition',
    description: '建立第一個 Vue 專案',
    fullDescription: 'vue 3 環境',
    tech: ['Vue 3'],
    image: '🌱',
    color: '#10b981',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    likes: 0,
    featured: false,
    year: 2026,
  },
  {
    id: 5,
    title: 'FLEX切版練習',
    subtitle: 'FLEX cutting board practice',
    description: 'flex 卡片排版技巧',
    fullDescription: '使用 Flex 完成設計稿中的部落格文章卡片排版。',
    tech: ['HTML', 'CSS', 'flex'],
    image: '🟪',
    color: '#8b5cf6',
    github: 'https://github.com/NiaForge/my-homework',
    demo: 'https://demo.example.com',
    likes: 0,
    featured: true,
    year: 2026,
  },
  {
    id: 6,
    title: 'BMI計算器',
    subtitle: 'BMI calculation',
    description: '適用於 18 歲以上的成年人,計算BMI是否再理想範圍',
    fullDescription: '運用到function函式、比較與邏輯運算子、return',
    tech: ['HTML', 'CSS', 'JS'],
    image: '💪',
    color: '#ef4444',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    likes: 0,
    featured: false,
    year: 2026,
  },
]
