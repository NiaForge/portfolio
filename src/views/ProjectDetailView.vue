<script setup>
import { computed } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import ProjectDetail from '@/components/ProjectDetail.vue'
import { projects } from '@/data/index.js'

const route = useRoute()
const router = useRouter()

const currentId = computed(() => Number(route.params.id))
const currentIndex = computed(() => projects.findIndex(p => p.id === currentId.value))
const currentProject = computed(() => projects[currentIndex.value] || null)

const prevProject = computed(() => projects[currentIndex.value - 1] || null)
const nextProject = computed(() => projects[currentIndex.value + 1] || null)

const relatedProjects = computed(() =>
  projects.filter(p => p.id !== currentId.value).slice(0, 3)
)

const navigate = (dir) => {
  const target = dir === -1 ? prevProject.value : nextProject.value
  if (target) router.push(`/projects/${target.id}`)
}
</script>

<template>
  <div class="page-container detail-page">
    <div class="back-bar">
      <button class="back-btn" @click="router.push('/projects')">← 返回作品列表</button>
      <div class="nav-arrows">
        <button class="arrow-btn" @click="navigate(-1)" :disabled="!prevProject">‹ 上一個</button>
        <button class="arrow-btn" @click="navigate(1)" :disabled="!nextProject">下一個 ›</button>
      </div>
    </div>

    <div class="detail-layout">
      <ProjectDetail :project="currentProject" />

      <aside class="detail-sidebar" v-if="relatedProjects.length">
        <h3 class="sidebar-title">其他作品</h3>
        <div class="sidebar-list">
          <RouterLink
            v-for="p in relatedProjects"
            :key="p.id"
            :to="`/projects/${p.id}`"
            class="sidebar-item"
          >
            <span class="sidebar-emoji">{{ p.image }}</span>
            <div>
              <div class="sidebar-name">{{ p.title }}</div>
              <div class="sidebar-sub">{{ p.subtitle }}</div>
            </div>
          </RouterLink>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.detail-page {
  padding-bottom: 6rem;
}

.back-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.back-btn {
  background: none;
  border: 1px solid rgba(255,255,255,0.1);
  color: #94a3b8;
  padding: 0.5rem 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  transition: all 0.2s;
}

.back-btn:hover {
  color: #e2e8f0;
  border-color: rgba(255,255,255,0.25);
  background: rgba(255,255,255,0.04);
}

.nav-arrows {
  display: flex;
  gap: 0.5rem;
}

.arrow-btn {
  background: none;
  border: 1px solid rgba(255,255,255,0.1);
  color: #64748b;
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.82rem;
  font-family: 'Space Grotesk', sans-serif;
  transition: all 0.2s;
}

.arrow-btn:not(:disabled):hover {
  color: #e2e8f0;
  border-color: rgba(255,255,255,0.25);
}

.arrow-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.detail-layout {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 3rem;
  align-items: start;
}

.detail-sidebar {
  position: sticky;
  top: 100px;
}

.sidebar-title {
  font-size: 0.8rem;
  font-weight: 700;
  color: #475569;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.sidebar-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.9rem 1rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s;
}

.sidebar-item:hover {
  background: rgba(255,255,255,0.05);
  border-color: rgba(255,255,255,0.14);
  transform: translateX(3px);
}

.sidebar-emoji {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.sidebar-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: #cbd5e1;
  margin-bottom: 0.1rem;
}

.sidebar-sub {
  font-size: 0.72rem;
  color: #475569;
  font-family: 'JetBrains Mono', monospace;
}

@media (max-width: 900px) {
  .detail-layout {
    grid-template-columns: 1fr;
  }

  .detail-sidebar {
    position: static;
    order: -1;
  }

  .sidebar-list {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .sidebar-item {
    flex: 1;
    min-width: 200px;
  }
}
</style>
