<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import ResumeSection from '@/components/ResumeSection.vue'
import { projects } from '@/data/index.js'

const tags = ['持續學習', '樂於協作', '態度積極', '團隊合作', '設計思維']
const splineViewerScriptId = 'spline-viewer-script'
const splineViewerSrc = 'https://unpkg.com/@splinetool/viewer@1.12.98/build/spline-viewer.js'
const splineSceneUrl = 'https://prod.spline.design/OoOVDF6-bLGyLCaS/scene.splinecode'


const router = useRouter()
const servicesSection = ref(null)

const featuredProjects = computed(() => projects.filter(p => p.featured))

const goToDetail = (id) => {
  router.push(`/projects/${id}`)
}

const scrollToServices = () => {
  servicesSection.value?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

const scrollToResume = () => {
  document.getElementById('resume')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

onMounted(() => {
  if (document.getElementById(splineViewerScriptId)) return

  const script = document.createElement('script')
  script.id = splineViewerScriptId
  script.type = 'module'
  script.src = splineViewerSrc
  document.head.appendChild(script)
})
</script>

<template>
  <div class="page-container home-page">
    <div class="home-hero">
      <span class="section-label">// 歡迎來到我的作品集</span>
      <div class="profile-card">
        <div class="avatar-wrapper">
          <div class="avatar"></div>
          <div class="avatar-ring"></div>
          <div class="status-dot"></div>
        </div>
        <div class="profile-info">
          <h1 class="profile-name">李宜</h1>
          <p class="profile-title">Frontend Developer & UI Enthusiast</p>
          <p class="profile-bio">喜歡把設計變成真正能互動的產品，<br>相信好的介面來自理解使用者與持續優化</p>
          <div class="profile-tags">
            <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
          </div>
          <div class="profile-actions">
            <RouterLink to="/projects" class="btn btn-primary">查看作品 🎨</RouterLink>
            <button class="btn btn-outline" type="button" @click="scrollToResume">
              查看履歷 ↓
            </button>
          </div>
        </div>

        <div class="hero-spline">
          <spline-viewer
            :url="splineSceneUrl"
            title="Spline interactive scene"
          ></spline-viewer>
        </div>
      </div>

      <button
        class="hero-scroll-btn"
        type="button"
        aria-label="前往技能項目"
        @click="scrollToServices"
      >
        <span class="hero-scroll-chevron" aria-hidden="true"></span>
      </button>
    </div>

    <section ref="servicesSection" class="home-services">
      <div class="services-inner">
        <span class="services-label">// 技能項目</span>
        <h2 class="services-title">Skills</h2>
        <div class="services-grid">
          <article class="service-card">
            <h3>設計</h3>
            <p>UI 設計 / Figma / 動態設計 / Blender</p>
          </article>
          <article class="service-card">
            <h3>開發</h3>
            <p>Vue 3 / JavaScript / HTML / CSS / Git</p>
          </article>
          <article class="service-card">
            <h3>協作</h3>
            <p>跨團隊溝通 / 問題解決 / 設計交付</p>
          </article>
        </div>
      </div>
    </section>

    <div class="home-featured">
      <span class="section-label">// 精選作品</span>
      <h2 class="home-section-title">近期專案</h2>
      <div class="featured-grid">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.id"
          :project="project"
          @view-detail="goToDetail"
        />
      </div>
      <RouterLink to="/projects" class="view-all-btn">查看全部作品 →</RouterLink>
    </div>

    <ResumeSection />
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1440px;
  padding-top: 1.25rem;
}

.home-hero {
  min-height: min(800px, calc(100vh - 110px));
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.hero-scroll-btn {
  width: 3.15rem;
  height: 3.15rem;
  align-self: center;
  display: grid;
  place-items: center;
  margin-top: clamp(0.6rem, 2vw, 1.25rem);
  border: 1px solid rgba(129, 140, 248, 0.34);
  border-radius: 999px;
  background:
    linear-gradient(135deg, rgba(99, 102, 241, 0.14), rgba(6, 182, 212, 0.06)),
    rgba(255, 255, 255, 0.035);
  color: #c7d2fe;
  cursor: pointer;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(12px);
  transition:
    transform 0.24s ease,
    border-color 0.24s ease,
    background 0.24s ease,
    box-shadow 0.24s ease;
  animation: hero-scroll-bounce 1.8s ease-in-out infinite;
}

.hero-scroll-btn:hover {
  transform: translateY(3px);
  border-color: rgba(165, 180, 252, 0.62);
  background:
    linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(6, 182, 212, 0.1)),
    rgba(255, 255, 255, 0.055);
  box-shadow: 0 16px 42px rgba(99, 102, 241, 0.16);
}

.hero-scroll-btn:focus-visible {
  outline: 2px solid #a5b4fc;
  outline-offset: 4px;
}

.hero-scroll-chevron {
  width: 0.85rem;
  height: 0.85rem;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: translateY(-2px) rotate(45deg);
}

@keyframes hero-scroll-bounce {
  0%, 100% {
    translate: 0 0;
  }
  50% {
    translate: 0 8px;
  }
}

.home-featured {
  position: relative;
}

.home-services {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: 4.8rem 2rem;
  background:
    linear-gradient(135deg, rgba(99, 102, 241, 0.16), transparent 42%),
    radial-gradient(circle at 82% 22%, rgba(139, 92, 246, 0.18), transparent 32%),
    #0d0d1a;
  position: relative;
  overflow: hidden;
}

.home-services::before {
  content: '</>';
  position: absolute;
  right: 8vw;
  top: 2.5rem;
  color: rgba(99, 102, 241, 0.1);
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(5rem, 12vw, 10rem);
  font-weight: 800;
  line-height: 1;
  pointer-events: none;
}

.services-inner {
  max-width: 1120px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.services-label {
  display: block;
  color: #818cf8;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.services-title {
  color: #f1f5f9;
  font-size: clamp(2.6rem, 6vw, 4.2rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  margin: 0 0 2.4rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.service-card {
  min-height: 168px;
  padding: 1.35rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.035);
  color: #e2e8f0;
  box-shadow: 0 18px 55px rgba(0, 0, 0, 0.26);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: 'const service = {';
  display: block;
  color: #818cf8;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  font-weight: 600;
  margin-bottom: 1.1rem;
}

.service-card::after {
  content: '}';
  position: absolute;
  right: 1.25rem;
  bottom: 1rem;
  color: rgba(129, 140, 248, 0.34);
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  font-weight: 700;
}

.service-card h3 {
  color: #f8fafc;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.25;
  margin: 0 0 0.85rem;
}

.service-card p {
  color: #94a3b8;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.92rem;
  font-weight: 500;
  line-height: 1.7;
  margin: 0;
}

.home-section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.8rem;
}

.home-featured :deep(.project-card) {
  min-height: 440px;
  padding: 1.6rem;
}

.home-featured :deep(.card-image) {
  height: 230px;
  border-radius: 14px;
}

.home-featured :deep(.project-title) {
  font-size: 1.35rem;
}

.home-featured :deep(.project-desc) {
  font-size: 0.9rem;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  color: #6366f1;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  gap: 0.3rem;
  position: absolute;
  top: 0.15rem;
  right: 0;
}

.view-all-btn:hover {
  color: #a5b4fc;
  transform: translateX(4px);
}

.profile-card {
  display: grid;
  grid-template-columns: minmax(340px, 0.92fr) minmax(460px, 1fr);
  gap: clamp(2rem, 5vw, 5.5rem);
  align-items: stretch;
  flex: 1;
  width: 100%;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 0;
  backdrop-filter: none;
  position: relative;
  overflow: visible;
}

.profile-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.05) 0%, transparent 60%);
  pointer-events: none;
}

.profile-info {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 0;
  padding-block: clamp(2rem, 6vw, 5rem);
  text-align: left;
}

.profile-info > * {
  width: 100%;
  max-width: 480px;
}

.hero-spline {
  position: relative;
  z-index: 2;
  min-width: 0;
  width: 100%;
  max-width: 660px;
  justify-self: end;
  min-height: 560px;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: transparent;
  box-shadow: none;
}

.hero-spline spline-viewer {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 16px;
  background: transparent;
}

.avatar-wrapper {
  position: relative;
  display: none;
  flex-shrink: 0;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-image: url(../assets/img/user.webp);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
  color: white;
  position: relative;
  z-index: 2;
}

.avatar-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #ec4899, #06b6d4);
  z-index: 1;
  animation: spin 8s linear infinite;
  mask: radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 2px));
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 2px));
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.status-dot {
  position: absolute;
  bottom: 6px;
  right: 6px;
  width: 16px;
  height: 16px;
  background: #10b981;
  border-radius: 50%;
  border: 3px solid #0a0a14;
  z-index: 3;
  animation: blink 2s ease infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.profile-name {
  font-size: 2.5rem;
  font-weight: 800;
  color: #f1f5f9;
  margin: 0 0 0.3rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.profile-title {
  font-family: 'JetBrains Mono', monospace;
  color: #6366f1;
  font-size: 1rem;
  margin: 0 0 1rem;
  letter-spacing: 0.05em;
}

.profile-bio {
  color: #94a3b8;
  line-height: 1.7;
  margin: 0 auto 1.2rem;
  max-width: 480px;
}

.profile-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.25);
  color: #a5b4fc;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.profile-actions {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  border: 0;
  padding: 0.7rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.25s;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  font-family: inherit;
}

.btn-primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
}

.btn-outline {
  background: transparent;
  border: 1px solid rgba(99, 102, 241, 0.4);
  color: #a5b4fc;
}

.btn-outline:hover {
  background: rgba(99, 102, 241, 0.1);
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .home-page {
    gap: 1.6rem;
    padding: 1.5rem 1.25rem 2.5rem;
  }

  .home-hero {
    min-height: 0;
  }

  .hero-scroll-btn {
    margin-top: 0.2rem;
  }

  .featured-grid {
    grid-template-columns: 1fr;
  }

  .home-featured :deep(.project-card) {
    min-height: 0;
  }

  .home-featured :deep(.card-image) {
    height: 190px;
  }

  .view-all-btn {
    position: static;
    margin-top: 0.2rem;
  }

  .home-services {
    padding: 2.2rem 1.25rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .services-title {
    margin-bottom: 1.8rem;
  }

  .profile-card {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0;
    gap: 1.35rem;
  }
  .profile-info {
    padding-block: 0;
  }
  .avatar-wrapper {
    display: block;
    margin-inline: auto;
  }
  .hero-spline { display: none; }
  .profile-name { font-size: 2rem; }
  .profile-tags, .profile-actions { justify-content: flex-start; }
}

@media (min-width: 641px) and (max-width: 1180px) {
  .featured-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .home-featured :deep(.card-image) {
    height: 210px;
  }
}

@media (min-width: 641px) and (max-width: 767px) {
  .profile-card {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .profile-info {
    align-items: center;
    padding-block: 2rem;
  }

  .profile-tags,
  .profile-actions {
    justify-content: flex-start;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .hero-spline {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1180px) {
  .profile-card {
    grid-template-columns: minmax(280px, 0.95fr) minmax(340px, 0.95fr);
    gap: 2rem;
  }

  .hero-spline {
    max-width: 520px;
    min-height: 460px;
  }

  .services-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-scroll-btn {
    animation: none;
  }
}
</style>
