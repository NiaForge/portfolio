<script setup>
import { onMounted } from 'vue'
import SkillCard from '@/components/SkillCard.vue'
import { skills } from '@/data/index.js'

const lottieScriptId = 'dotlottie-wc-script'
const lottieScriptSrc = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.14/dist/dotlottie-wc.js'

onMounted(() => {
  if (document.getElementById(lottieScriptId)) return

  const script = document.createElement('script')
  script.id = lottieScriptId
  script.type = 'module'
  script.src = lottieScriptSrc
  document.head.appendChild(script)
})
</script>

<template>
  <div class="page-container skills-page">
    <div class="page-header">
      <span class="section-label">// Skills</span>
      <h1 class="page-title">技能清單</h1>
      <p class="page-subtitle">整理我目前能投入實作的能力，也保留正在探索的創作方向。</p>
    </div>

    <div class="skills-list">
      <SkillCard
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      />
    </div>
  </div>
</template>

<style scoped>
.skills-page {
  max-width: 1120px;
}

.page-header {
  margin-bottom: 2rem;
}

.page-subtitle {
  max-width: 560px;
}

.skills-list {
  display: grid;
  gap: 1.25rem;
}

@media (max-width: 640px) {
  .page-header {
    margin-bottom: 1.5rem;
  }
}
</style>
