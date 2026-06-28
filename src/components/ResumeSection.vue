<script setup>
const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`
</script>

<template>
  <section id="resume" class="resume-section" aria-labelledby="resume-title">
    <div class="resume-heading">
      <div>
        <span class="resume-label">// Resume</span>
        <h2 id="resume-title">Resume <span>/ 履歷</span></h2>
      </div>

      <a class="resume-download" :href="resumeUrl" download="Nia-Resume.pdf">
        <span aria-hidden="true">⬇</span>
        Download PDF
      </a>
    </div>

    <div class="resume-grid">
      <article class="resume-card">
        <span class="card-index">01</span>
        <p class="card-kicker">Experience</p>
        <h3>工作經歷</h3>
        <div class="resume-entry">
          <h4>婚紗修圖師 <span>紐約紐約婚紗</span></h4>
          <p class="entry-meta">2024.07 — 2025.12</p>
          <ul class="entry-list">
            <li>負責婚紗人像精修與照片品質控管</li>
            <li>與客戶溝通修圖需求</li>
            <li>協助造型搭配與拍攝現場觀察</li>
            <li>管理案件進度並維持穩定交期</li>
          </ul>
        </div>
        <div class="resume-entry">
          <h4>3D 遊戲美術 <span>形之遊</span></h4>
          <p class="entry-meta">2023.02 — 2023.06</p>
          <ul class="entry-list">
            <li>手遊角色建模與貼圖製作</li>
            <li>配合專案流程完成資產製作與交付</li>
            <li>了解遊戲美術製作管線與團隊協作模式</li>
          </ul>
        </div>
      </article>

      <article class="resume-card">
        <span class="card-index">02</span>
        <p class="card-kicker">Education</p>
        <h3>學歷</h3>
        <div class="resume-entry">
          <h4>銘傳大學</h4>
          <p class="entry-meta">動漫文創學士學位學程</p>
        </div>
        <div class="resume-entry">
          <h4>UIUX 前端網頁設計</h4>
          <p class="entry-meta">學習 3 個月</p>
        </div>
      </article>

      <article class="resume-card contact-card">
        <span class="card-index">03</span>
        <p class="card-kicker">Contact</p>
        <h3>聯絡方式</h3>
        <a class="email-link" href="mailto:apple410039@gmail.com">
          <span>EMAIL</span>
          apple410039@gmail.com
        </a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.resume-section {
  position: relative;
  scroll-margin-top: 110px;
  padding: clamp(2rem, 5vw, 4rem);
  overflow: hidden;
  background:
    radial-gradient(circle at 90% 0%, rgba(139, 92, 246, 0.16), transparent 34%),
    linear-gradient(145deg, rgba(99, 102, 241, 0.08), rgba(255, 255, 255, 0.025));
  border: 1px solid rgba(129, 140, 248, 0.18);
  border-radius: 24px;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
}

.resume-section::after {
  content: 'CV';
  position: absolute;
  right: 2rem;
  bottom: -2.5rem;
  color: rgba(129, 140, 248, 0.045);
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(8rem, 20vw, 15rem);
  font-weight: 800;
  line-height: 1;
  pointer-events: none;
}

.resume-heading {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.resume-label,
.card-kicker,
.card-index,
.entry-meta {
  font-family: 'JetBrains Mono', monospace;
}

.resume-label {
  display: block;
  margin-bottom: 0.5rem;
  color: #818cf8;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.16em;
}

.resume-heading h2 {
  margin: 0;
  color: #f8fafc;
  font-size: clamp(2.1rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
}

.resume-heading h2 span {
  color: #94a3b8;
  font-size: 0.48em;
  font-weight: 600;
  letter-spacing: 0;
}

.resume-download {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.55rem;
  padding: 0.78rem 1.25rem;
  color: white;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 12px;
  box-shadow: 0 8px 26px rgba(99, 102, 241, 0.34);
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.resume-download:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.48);
}

.resume-download:focus-visible {
  outline: 2px solid #c7d2fe;
  outline-offset: 4px;
}

.resume-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.resume-card {
  position: relative;
  min-height: 230px;
  padding: 1.5rem;
  background: rgba(8, 8, 18, 0.48);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
}

.contact-card {
  grid-column: 1 / -1;
  min-height: auto;
}

.card-index {
  position: absolute;
  top: 1.35rem;
  right: 1.35rem;
  color: rgba(165, 180, 252, 0.35);
  font-size: 0.72rem;
}

.card-kicker {
  margin: 0 0 0.35rem;
  color: #818cf8;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.resume-card h3 {
  margin: 0 0 1.35rem;
  color: #f1f5f9;
  font-size: 1.25rem;
}

.resume-entry {
  padding-left: 1rem;
  border-left: 2px solid rgba(99, 102, 241, 0.6);
}

.resume-entry + .resume-entry {
  margin-top: 1.5rem;
}

.resume-entry h4 {
  margin: 0 0 0.2rem;
  color: #e2e8f0;
  font-size: 1rem;
}

.resume-entry h4 span {
  margin-left: 0.35rem;
  color: #a5b4fc;
  font-size: 0.82rem;
  font-weight: 600;
}

.entry-meta {
  margin: 0 0 0.75rem;
  color: #64748b;
  font-size: 0.72rem;
}

.resume-entry > p:last-child {
  margin: 0;
  color: #94a3b8;
  font-size: 0.88rem;
  line-height: 1.75;
}

.entry-list {
  display: grid;
  gap: 0.4rem;
  margin: 0;
  padding-left: 1.15rem;
  color: #94a3b8;
  font-size: 0.84rem;
  line-height: 1.6;
}

.entry-list li::marker {
  color: #818cf8;
}

.email-link {
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 0.8rem;
  color: #c7d2fe;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.email-link span {
  padding: 0.4rem 0.75rem;
  color: #c7d2fe;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(129, 140, 248, 0.24);
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
}

.email-link:hover {
  color: #fff;
}

@media (max-width: 720px) {
  .resume-section {
    padding: 1.4rem;
    border-radius: 18px;
  }

  .resume-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .resume-download {
    width: 100%;
    justify-content: center;
  }

  .resume-grid {
    grid-template-columns: 1fr;
  }

  .contact-card {
    grid-column: auto;
  }

  .email-link {
    align-items: flex-start;
    flex-direction: column;
    overflow-wrap: anywhere;
  }
}
</style>
