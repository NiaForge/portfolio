<script setup>
import { ref, computed } from 'vue'
import SkillCard from '@/components/SkillCard.vue'
import { skills } from '@/data/index.js'

const categories = ['全部', ...new Set(skills.map(s => s.category))]
const activeCategory = ref('全部')

const filteredSkills = computed(() => {
  if (activeCategory.value === '全部') return skills
  return skills.filter(s => s.category === activeCategory.value)
})
</script>

<template>
  <div class="page-container">
    <div class="page-header">
      <span class="section-label">// 我的技能樹</span>
      <h1 class="page-title">技能清單</h1>
      <p class="page-subtitle">持續學習中的技術棧，數字代表熟悉程度</p>
    </div>

    <div class="filter-tabs">
      <button
        v-for="cat in categories"
        :key="cat"
        class="filter-tab"
        :class="{ active: activeCategory === cat }"
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <TransitionGroup name="skill-list" tag="div" class="skills-grid">
      <SkillCard
        v-for="skill in filteredSkills"
        :key="skill.id"
        :skill="skill"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.page-header {
  margin-bottom: 2.5rem;
}

.filter-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
}

.filter-tab {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.09);
  color: #64748b;
  padding: 0.45rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: 'Space Grotesk', sans-serif;
  transition: all 0.2s;
}

.filter-tab:hover {
  color: #e2e8f0;
  border-color: rgba(255,255,255,0.2);
}

.filter-tab.active {
  background: rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.4);
  color: #a5b4fc;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

.skill-list-enter-active,
.skill-list-leave-active {
  transition: all 0.3s ease;
}

.skill-list-enter-from,
.skill-list-leave-to {
  opacity: 0;
  transform: scale(0.92);
}

.skill-list-move {
  transition: transform 0.3s ease;
}
</style>
