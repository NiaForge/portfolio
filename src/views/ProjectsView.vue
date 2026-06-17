<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/index.js'

const props = defineProps({
  favorites: { type: Object, default: () => new Set() }
})

const emit = defineEmits(['toggle-favorite'])

const router = useRouter()
const toastMsg = ref('')
let toastTimer = null

const handleFavorite = (id) => {
  const isFav = props.favorites.has(id)
  emit('toggle-favorite', id)

  const project = projects.find(p => p.id === id)
  toastMsg.value = isFav
    ? `💔 已取消收藏《${project.title}》`
    : `❤️ 已收藏《${project.title}》`

  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toastMsg.value = '' }, 2000)
}

const goToDetail = (id) => {
  router.push(`/projects/${id}`)
}
</script>

<template>
  <div class="page-container">
    <div class="page-header">
      <span class="section-label">// 我的作品</span>
      <h1 class="page-title">作品集</h1>
      <p class="page-subtitle">
        {{ projects.length }} 個專案 ·
        <span class="fav-count" v-if="favorites.size > 0">❤️ 已收藏 {{ favorites.size }} 個</span>
        <span v-else>點擊 🤍 加入收藏</span>
      </p>
    </div>

    <div v-if="toastMsg" class="toast">{{ toastMsg }}</div>

    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        :is-favorited="favorites.has(project.id)"
        @toggle-favorite="handleFavorite"
        @view-detail="goToDetail"
      />
    </div>
  </div>
</template>

<style scoped>
.page-header {
  margin-bottom: 2.5rem;
}

.fav-count {
  color: #ec4899;
  font-weight: 600;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.2rem;
}

.toast {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 15, 30, 0.95);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: #e2e8f0;
  padding: 0.8rem 1.6rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 40px rgba(0,0,0,0.5);
  z-index: 9999;
  animation: slideUp 0.3s ease;
  white-space: nowrap;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateX(-50%) translateY(10px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}
</style>
