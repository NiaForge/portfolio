<script setup>
import { computed } from 'vue'

const props = defineProps({
  skill: {
    type: Object,
    required: true
  }
})
//技能分類
const categoryColors = {
  Frontend: '#6366f1',
  UIUX: '#10b981',
  視覺設計: '#f59e0b',
  Tools: '#06b6d4',
  Design: '#ec4899',
  media: '#8b5cf6',
}

const categoryColor = computed(() => categoryColors[props.skill.category] || '#6366f1')

const levelLabel = computed(() => {
  const labels = ['', '初學者', '基礎', '熟練', '進階', '專家']
  return labels[props.skill.level]
})
</script>

<template>
  <div class="skill-card" :style="{ '--accent': categoryColor }">
    <div class="skill-header">
      <span class="skill-category">{{ skill.category }}</span>
      <div class="skill-stars">
        <span
          v-for="i in 5"
          :key="i"
          class="star"
          :class="{ filled: i <= skill.level }"
        >★</span>
      </div>
    </div>
    <h3 class="skill-name">{{ skill.name }}</h3>
    <p class="skill-desc">{{ skill.description }}</p>
    <div class="skill-bar">
      <div class="skill-fill" :style="{ width: (skill.level / 5 * 100) + '%' }"></div>
    </div>
    <span class="skill-level-label">{{ levelLabel }}</span>
  </div>
</template>

<style scoped>
.skill-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent);
  opacity: 0;
  transition: opacity 0.3s;
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255,255,255,0.15);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3);
}

.skill-card:hover::before {
  opacity: 1;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.skill-category {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(255,255,255,0.05);
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
}

.skill-stars {
  display: flex;
  gap: 2px;
}

.star {
  color: rgba(255,255,255,0.15);
  font-size: 0.9rem;
  transition: color 0.2s;
}

.star.filled {
  color: var(--accent);
}

.skill-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: #f1f5f9;
  margin: 0 0 0.5rem;
}

.skill-desc {
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0 0 1rem;
}

.skill-bar {
  height: 4px;
  background: rgba(255,255,255,0.08);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.skill-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 4px;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-level-label {
  font-size: 0.72rem;
  color: var(--accent);
  font-weight: 600;
}
</style>
