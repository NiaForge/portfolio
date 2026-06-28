<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import GraphicGalleryModal from '@/components/GraphicGalleryModal.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { graphicWorks, projects } from '@/data/index.js'


const router = useRouter()
const activeGraphicWork = ref(null)
const portfolioItems = [
  ...projects.map((project) => ({ ...project, itemType: 'project' })),
  ...graphicWorks.map((work) => ({ ...work, itemType: 'graphic' }))
]

const openItem = (item) => {
  if (item.itemType === 'graphic') {
    activeGraphicWork.value = item
    return
  }

  router.push(`/projects/${item.id}`)
}
</script>

<template>
  <div class="page-container">
    <div class="page-header">
      <span class="section-label">// 我的作品</span>
      <h1 class="page-title">作品集</h1>
      <p class="page-subtitle">
        {{ projects.length }} 個程式專案 · {{ graphicWorks.length }} 組圖片作品
      </p>
    </div>

    <div class="projects-grid">
      <ProjectCard
        v-for="item in portfolioItems"
        :key="item.id"
        :project="item"
        :action-label="item.itemType === 'graphic' ? '查看圖片' : '查看作品'"
        @view-detail="openItem(item)"
      />
    </div>

    <GraphicGalleryModal
      v-if="activeGraphicWork"
      :category="activeGraphicWork"
      @close="activeGraphicWork = null"
    />
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

@media (max-width: 480px) {
  .projects-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>

