<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  actionLabel: {
    type: String,
    default: '查看作品'
  }
})

const emit = defineEmits(['view-detail'])

const handleViewDetail = () => {
  emit('view-detail', props.project.id)
}

const isImagePath = (image = '') =>
  /\.(avif|gif|jpe?g|png|svg|webp)$/i.test(image) || image.startsWith('http')

const imageSrc = (image) => {
  if (image.startsWith('http')) return image
  return `${import.meta.env.BASE_URL}${image.replace(/^\//, '')}`
}
</script>

<template>
  <article
    class="project-card"
    :style="{ '--color': project.color }"
    role="button"
    tabindex="0"
    :aria-label="`${project.title}－${actionLabel}`"
    @click="handleViewDetail"
    @keydown.enter.prevent="handleViewDetail"
    @keydown.space.prevent="handleViewDetail"
  >
    <div class="card-top">
      <!-- 放入圖片區塊 -->
      <div class="card-image">
        <img v-if="isImagePath(project.image)" :src="imageSrc(project.image)" :alt="project.title" />
        <span v-else class="material-symbols-rounded project-placeholder" aria-hidden="true">image</span>
      </div>
    </div>

    <h3 class="project-title">{{ project.title }}</h3>
    <p class="project-subtitle">{{ project.subtitle }}</p>
    <p class="project-desc">{{ project.description }}</p>

    <div class="project-tech">
      <span class="tech-tag" v-for="tech in project.tech.slice(0, 3)" :key="tech">{{ tech }}</span>
      <span class="tech-more" v-if="project.tech.length > 3"></span>
    </div>

    <div class="card-footer">
      <button class="view-btn" type="button" @click.stop="handleViewDetail">
        {{ actionLabel }} →
      </button>
    </div>

    <div class="card-glow"></div>
  </article>
</template>

<style scoped>
.project-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 1.8rem;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  cursor: pointer;
  outline: none;
}

.project-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--color);
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05);
}

.project-card:focus-visible {
  border-color: var(--color);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color) 25%, transparent);
}

.project-card:hover::after {
  opacity: 1;
}

.card-glow {
  position: absolute;
  bottom: -50px;
  right: -30px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: var(--color);
  opacity: 0;
  filter: blur(60px);
  transition: opacity 0.4s;
  pointer-events: none;
}

.project-card:hover .card-glow {
  opacity: 0.08;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.4rem;
}

.card-image {
  width: 100%;
  height: 180px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 0.5rem;
  background: rgba(255,255,255,0.05);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .card-image img {
  transform: scale(1.05);
}

.project-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 3.5rem;
  color: var(--color);
}

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #f1f5f9;
  margin: 0;
  line-height: 1.2;
}

.project-subtitle {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--color);
  margin: 0;
  letter-spacing: 0.04em;
}

.project-desc {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.2rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  font-size: 0.72rem;
  font-weight: 500;
}

.tech-more {
  color: #475569;
  font-size: 0.72rem;
  padding: 0.2rem 0.4rem;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0.6rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.view-btn {
  background: var(--color);
  color: white;
  border: none;
  padding: 0.5rem 1.1rem;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.02em;
}

.view-btn:hover {
  filter: brightness(1.15);
  transform: translateX(2px);
}
</style>
