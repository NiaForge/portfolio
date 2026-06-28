<script setup>
defineProps({
  project: {
    type: Object,
    default: null
  }
})

const isImagePath = (image = '') =>
  /\.(avif|gif|jpe?g|png|svg|webp)$/i.test(image) || image.startsWith('http')

const imageSrc = (image) => {
  if (image.startsWith('http')) return image
  return `${import.meta.env.BASE_URL}${image.replace(/^\//, '')}`
}
</script>

<template>
  <article v-if="project" class="project-detail" :style="{ '--color': project.color }">
    <header class="hero-banner">
      <div class="hero-visual">
        <img
          v-if="isImagePath(project.image)"
          :src="imageSrc(project.image)"
          :alt="`${project.title} 專案截圖`"
        />
        <span v-else class="hero-emoji" aria-hidden="true">{{ project.image }}</span>
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <p class="detail-subtitle">{{ project.subtitle }}</p>
        <h1 class="detail-title">{{ project.title }}</h1>
        <p class="hero-description">{{ project.description }}</p>

        <div v-if="project.demo || project.github" class="hero-actions">
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="link-btn demo-btn"
          >
            Live Demo <span aria-hidden="true">↗</span>
          </a>
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="link-btn github-btn"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>

    <div class="detail-body">
      <section class="detail-section">
        <div class="section-heading">
          <span class="section-number">01</span>
          <h2 class="section-title">專案介紹</h2>
        </div>
        <p class="detail-full-desc">{{ project.fullDescription }}</p>
        <div v-if="project.overview?.length" class="overview-list">
          <p v-for="item in project.overview" :key="item">{{ item }}</p>
        </div>
      </section>

      <section class="detail-section">
        <div class="section-heading">
          <span class="section-number">02</span>
          <h2 class="section-title">功能特色</h2>
        </div>
        <ul class="feature-grid">
          <li v-for="feature in project.features" :key="feature">
            <span class="check" aria-hidden="true">✓</span>
            {{ feature }}
          </li>
        </ul>
      </section>

      <section class="detail-section">
        <div class="section-heading">
          <span class="section-number">03</span>
          <h2 class="section-title">使用技術</h2>
        </div>
        <div class="tech-grid">
          <span v-for="tech in project.tech" :key="tech" class="tech-badge">{{ tech }}</span>
        </div>
      </section>

      <section class="detail-section">
        <div class="section-heading">
          <span class="section-number">04</span>
          <h2 class="section-title">我的負責</h2>
        </div>
        <div class="responsibility-grid">
          <span v-for="item in project.responsibilities" :key="item">{{ item }}</span>
        </div>
        <p v-if="project.collaboration" class="collaboration">
          <span>合作方式</span>{{ project.collaboration }}
        </p>
      </section>

      <section class="detail-section link-section">
        <div class="section-heading">
          <span class="section-number">05</span>
          <h2 class="section-title">專案連結</h2>
        </div>
        <p class="link-copy">歡迎查看完整程式碼與實際操作效果。</p>
        <div v-if="project.github || project.demo" class="links">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="link-btn github-btn"
          >
            <span aria-hidden="true">⬡</span> GitHub 原始碼
          </a>
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="link-btn demo-btn"
          >
            <span aria-hidden="true">▶</span> 線上 Demo
          </a>
        </div>
        <p v-else class="link-pending">專案連結整理中</p>
      </section>
    </div>
  </article>

  <div v-else class="not-found">
    <p>找不到此作品 😢</p>
  </div>
</template>

<style scoped>
.project-detail {
  width: 100%;
  min-width: 0;
}

.hero-banner {
  overflow: hidden;
  margin-bottom: 2.5rem;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
}

.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 8;
  min-height: 280px;
  overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--color) 18%, #111120), #0b0b16);
}

.hero-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: auto 0 0;
  height: 45%;
  background: linear-gradient(to bottom, transparent, rgba(8, 8, 18, 0.72));
  pointer-events: none;
}

.hero-emoji {
  font-size: clamp(5rem, 12vw, 9rem);
  filter: drop-shadow(0 18px 34px rgba(0, 0, 0, 0.45));
}

.hero-content {
  padding: 2.2rem;
}

.detail-title {
  margin: 0 0 0.8rem;
  color: #f1f5f9;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
}

.detail-subtitle {
  margin: 0 0 0.65rem;
  color: var(--color);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-description {
  max-width: 650px;
  margin: 0;
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.8;
}

.hero-actions,
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
}

.detail-body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.detail-section {
  padding: 1.8rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
}

.section-heading {
  display: flex;
  align-items: baseline;
  gap: 0.8rem;
  margin-bottom: 1.25rem;
}

.section-number {
  color: var(--color);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  font-weight: 700;
}

.section-title {
  margin: 0;
  color: #e2e8f0;
  font-size: 1.15rem;
  font-weight: 700;
}

.detail-full-desc,
.overview-list p,
.link-copy {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.85;
}

.detail-full-desc,
.link-copy {
  margin: 0;
}

.overview-list {
  display: grid;
  gap: 0.8rem;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.overview-list p {
  position: relative;
  margin: 0;
  padding-left: 1rem;
}

.overview-list p::before {
  content: '';
  position: absolute;
  top: 0.78em;
  left: 0;
  width: 4px;
  height: 4px;
  background: var(--color);
  border-radius: 50%;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.feature-grid li {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: #cbd5e1;
  font-size: 0.9rem;
}

.check {
  display: inline-grid;
  width: 1.35rem;
  height: 1.35rem;
  flex: 0 0 1.35rem;
  place-items: center;
  color: var(--color);
  background: color-mix(in srgb, var(--color) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--color) 30%, transparent);
  border-radius: 50%;
  font-size: 0.72rem;
}

.tech-grid,
.responsibility-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.tech-badge,
.responsibility-grid span {
  padding: 0.45rem 0.9rem;
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  transition: 0.2s ease;
}

.tech-badge:hover {
  color: white;
  background: var(--color);
  border-color: var(--color);
}

.collaboration {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin: 1.2rem 0 0;
  color: #cbd5e1;
  font-size: 0.88rem;
}

.collaboration span {
  color: #64748b;
  font-size: 0.78rem;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.7rem 1.3rem;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s;
}

.github-btn {
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.github-btn:hover {
  background: rgba(255, 255, 255, 0.14);
  transform: translateY(-2px);
}

.demo-btn {
  color: white;
  background: var(--color);
  border: 1px solid var(--color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.demo-btn:hover {
  filter: brightness(1.15);
  transform: translateY(-2px);
}

.link-pending {
  display: inline-block;
  margin: 1.2rem 0 0;
  padding: 0.55rem 0.8rem;
  color: #64748b;
  background: rgba(255, 255, 255, 0.035);
  border-radius: 8px;
  font-size: 0.82rem;
}

.not-found {
  padding: 4rem;
  color: #475569;
  font-size: 1.2rem;
  text-align: center;
}

@media (max-width: 640px) {
  .hero-visual {
    min-height: 210px;
    aspect-ratio: 4 / 3;
  }

  .hero-content,
  .detail-section {
    padding: 1.35rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .hero-actions .link-btn,
  .links .link-btn {
    flex: 1 1 140px;
  }
}
</style>
