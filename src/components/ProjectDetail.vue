<template>
  <div class="project-detail" v-if="project" :style="{ '--color': project.color }">
    <div class="detail-header">
      <div class="detail-emoji">{{ project.image }}</div>
      <div class="detail-meta">
        <span class="detail-year">{{ project.year }}</span>
        <span class="detail-likes">♥ {{ project.likes }}</span>
      </div>
      <h1 class="detail-title">{{ project.title }}</h1>
      <p class="detail-subtitle">{{ project.subtitle }}</p>
    </div>

    <div class="detail-body">
      <section class="detail-section">
        <h2 class="section-title">📖 專案介紹</h2>
        <p class="detail-full-desc">{{ project.fullDescription }}</p>
      </section>

      <section class="detail-section">
        <h2 class="section-title">🛠 使用技術</h2>
        <div class="tech-grid">
          <span class="tech-badge" v-for="tech in project.tech" :key="tech">{{ tech }}</span>
        </div>
      </section>

      <section class="detail-section">
        <h2 class="section-title">🔗 專案連結</h2>
        <div class="links">
          <a :href="project.github" target="_blank" class="link-btn github-btn">
            <span>⬡</span> GitHub 原始碼
          </a>
          <a :href="project.demo" target="_blank" class="link-btn demo-btn">
            <span>▶</span> 線上 Demo
          </a>
        </div>
      </section>
    </div>
  </div>

  <div class="not-found" v-else>
    <p>找不到此作品 😢</p>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    default: null
  }
})
</script>

<style scoped>
.project-detail {
  max-width: 720px;
}

.detail-header {
  margin-bottom: 3rem;
}

.detail-emoji {
  font-size: 4rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 8px 24px rgba(0,0,0,0.4));
  display: block;
}

.detail-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.8rem;
}

.detail-year, .detail-likes {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  background: rgba(255,255,255,0.06);
  padding: 0.25rem 0.7rem;
  border-radius: 6px;
  color: #94a3b8;
  font-weight: 500;
}

.detail-likes { color: #ec4899; }

.detail-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #f1f5f9;
  margin: 0 0 0.4rem;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.detail-subtitle {
  font-family: 'JetBrains Mono', monospace;
  color: var(--color);
  font-size: 1rem;
  margin: 0;
}

.detail-body {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.detail-section {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px;
  padding: 1.8rem;
}

.section-title {
  font-size: 1rem;
  font-weight: 700;
  color: #e2e8f0;
  margin: 0 0 1rem;
  letter-spacing: 0.02em;
}

.detail-full-desc {
  color: #94a3b8;
  line-height: 1.8;
  margin: 0;
  font-size: 0.95rem;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.tech-badge {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  color: #e2e8f0;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s;
}

.tech-badge:hover {
  background: var(--color);
  border-color: var(--color);
  color: white;
}

.links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.4rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.88rem;
  transition: all 0.25s;
}

.github-btn {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  color: #e2e8f0;
}

.github-btn:hover {
  background: rgba(255,255,255,0.14);
  transform: translateY(-2px);
}

.demo-btn {
  background: var(--color);
  color: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.demo-btn:hover {
  filter: brightness(1.15);
  transform: translateY(-2px);
}

.not-found {
  text-align: center;
  color: #475569;
  padding: 4rem;
  font-size: 1.2rem;
}
</style>
