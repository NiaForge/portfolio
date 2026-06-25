<script setup>
import { useRouter } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/index.js'


const router = useRouter()
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
      </p>
    </div>

    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @view-detail="goToDetail"
      />
    </div>
  </div>
</template>

<style scoped>
.page-header {
  margin-bottom: 2.5rem;
}


.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.2rem;
}
</style>

