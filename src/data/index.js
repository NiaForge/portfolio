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
    image: '/img/bird.jpg',
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
