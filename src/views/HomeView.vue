<script setup>
import { computed } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/index.js'

const tags = ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'UI/UX']

const props = defineProps({
  favorites: { type: Object, default: () => new Set() }
})

defineEmits(['toggle-favorite'])

const router = useRouter()

const featuredProjects = computed(() => projects.filter(p => p.featured))

const stats = [
 { value: '6+', label: '完成專案' },
  { value: '10+', label: '掌握技術' },
  { value: '100+', label: '報錯與修復' },
  { value: '∞', label: '咖啡因' },
]

const goToDetail = (id) => {
  router.push(`/projects/${id}`)
}
</script>

<template>
  <div class="page-container home-page">
    <div class="home-hero">
      <span class="section-label">// 歡迎來到我的作品集</span>
      <div class="profile-card">
        <div class="avatar-wrapper">
          <div class="avatar"></div>
          <div class="avatar-ring"></div>
          <div class="status-dot"></div>
        </div>
        <div class="profile-info">
          <h1 class="profile-name">李宜</h1>
          <p class="profile-title">Frontend Developer & UI Enthusiast</p>
          <p class="profile-bio">這個人很無聊，不知道要寫甚麼!</p>
          <div class="profile-tags">
            <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
          </div>
          <div class="profile-actions">
            <RouterLink to="/projects" class="btn btn-primary">查看作品 🎨</RouterLink>
            <RouterLink to="/skills" class="btn btn-outline">技能清單 ⚡</RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="home-stats">
      <div class="stat-card" v-for="stat in stats" :key="stat.label">
        <span class="stat-number">{{ stat.value }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </div>

    <div class="home-featured">
      <span class="section-label">// 精選作品</span>
      <h2 class="home-section-title">近期專案</h2>
      <div class="featured-grid">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.id"
          :project="project"
          :is-favorited="favorites.has(project.id)"
          @toggle-favorite="$emit('toggle-favorite', $event)"
          @view-detail="goToDetail"
        />
      </div>
      <RouterLink to="/projects" class="view-all-btn">查看全部作品 →</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.home-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.stat-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px;
  padding: 1.8rem;
  text-align: center;
  transition: transform 0.2s;
}

.stat-card:hover { transform: translateY(-4px); }

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: #6366f1;
  line-height: 1;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.82rem;
  color: #64748b;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.home-section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 1.8rem;
  letter-spacing: -0.02em;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.2rem;
  margin-bottom: 2rem;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  color: #6366f1;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  gap: 0.3rem;
}

.view-all-btn:hover {
  color: #a5b4fc;
  transform: translateX(4px);
}

@media (max-width: 640px) {
  .home-stats { grid-template-columns: repeat(2, 1fr); }
}

.profile-card {
  display: flex;
  gap: 3rem;
  align-items: center;
  padding: 3rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 24px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.profile-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.05) 0%, transparent 60%);
  pointer-events: none;
}

.avatar-wrapper {
  position: relative;
  flex-shrink: 0;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-image: url(/src/assets/img/main.jpg);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
  color: white;
  position: relative;
  z-index: 2;
}

.avatar-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #ec4899, #06b6d4);
  z-index: 1;
  animation: spin 8s linear infinite;
  mask: radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 2px));
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 2px));
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.status-dot {
  position: absolute;
  bottom: 6px;
  right: 6px;
  width: 16px;
  height: 16px;
  background: #10b981;
  border-radius: 50%;
  border: 3px solid #0a0a14;
  z-index: 3;
  animation: blink 2s ease infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.profile-name {
  font-size: 2.5rem;
  font-weight: 800;
  color: #f1f5f9;
  margin: 0 0 0.3rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.profile-title {
  font-family: 'JetBrains Mono', monospace;
  color: #6366f1;
  font-size: 1rem;
  margin: 0 0 1rem;
  letter-spacing: 0.05em;
}

.profile-bio {
  color: #94a3b8;
  line-height: 1.7;
  margin: 0 0 1.2rem;
  max-width: 480px;
}

.profile-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.25);
  color: #a5b4fc;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.profile-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.7rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.25s;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.btn-primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
}

.btn-outline {
  border: 1px solid rgba(99, 102, 241, 0.4);
  color: #a5b4fc;
}

.btn-outline:hover {
  background: rgba(99, 102, 241, 0.1);
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .profile-card { flex-direction: column; text-align: center; padding: 2rem 1.5rem; gap: 1.5rem; }
  .profile-name { font-size: 2rem; }
  .profile-tags, .profile-actions { justify-content: center; }
}
</style>