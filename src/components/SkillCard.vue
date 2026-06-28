<script setup>
defineProps({
  skill: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="skill-row">
    <div class="skill-panel">
      <h2 class="skill-title">{{ skill.title }}</h2>
      <p class="skill-desc">{{ skill.description }}</p>

      <ul class="skill-tags" :aria-label="`${skill.title}技能`">
        <li
          v-for="tag in skill.tags"
          :key="tag"
          class="skill-tag"
        >
          {{ tag }}
        </li>
      </ul>
    </div>

    <div class="skill-animation" aria-hidden="true">
      <dotlottie-wc
        :src="skill.animation"
        speed="1"
        mode="forward"
        autoplay
        loop
      ></dotlottie-wc>
    </div>
  </article>
</template>

<style scoped>
.skill-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(250px, 0.8fr);
  align-items: center;
  gap: clamp(1.25rem, 4vw, 3.5rem);
  min-height: 285px;
}

.skill-panel {
  min-width: 0;
  min-height: 210px;
  padding: clamp(1.35rem, 3vw, 2rem);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.018)),
    rgba(255, 255, 255, 0.03);
  box-shadow: 0 18px 55px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(12px);
  position: relative;
  overflow: hidden;
  transition:
    transform 0.28s ease,
    border-color 0.28s ease,
    background 0.28s ease,
    box-shadow 0.28s ease;
}

.skill-panel::before {
  content: 'const service = {';
  display: block;
  color: #818cf8;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  margin-bottom: 1.1rem;
}

.skill-panel::after {
  content: '}';
  position: absolute;
  right: 1.35rem;
  bottom: 1rem;
  color: rgba(129, 140, 248, 0.34);
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.05rem;
  font-weight: 700;
}

.skill-row:hover .skill-panel {
  transform: translateY(-6px);
  border-color: rgba(129, 140, 248, 0.28);
  background:
    linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(255, 255, 255, 0.026)),
    rgba(255, 255, 255, 0.038);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.34);
}

.skill-title {
  color: #f8fafc;
  font-size: clamp(1.55rem, 3vw, 2.35rem);
  font-weight: 800;
  line-height: 1.18;
  letter-spacing: 0;
  margin: 0 0 0.9rem;
  transition: color 0.28s ease;
}

.skill-row:hover .skill-title {
  color: #ffffff;
}

.skill-desc {
  color: #a7b0c4;
  font-size: clamp(0.95rem, 1.4vw, 1.05rem);
  font-weight: 600;
  line-height: 1.75;
  margin: 0 0 1.25rem;
  max-width: 520px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  list-style: none;
  margin: 0;
  padding: 0 1.6rem 0 0;
}

.skill-tag {
  color: #cbd5e1;
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(129, 140, 248, 0.16);
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 600;
  line-height: 1;
  padding: 0.5rem 0.85rem;
  transition:
    color 0.24s ease,
    border-color 0.24s ease,
    background 0.24s ease,
    transform 0.24s ease;
}

.skill-row:hover .skill-tag {
  color: #c7d2fe;
  border-color: rgba(129, 140, 248, 0.34);
  background: rgba(99, 102, 241, 0.13);
}

.skill-tag:hover {
  transform: translateY(-2px);
}

.skill-animation {
  display: grid;
  place-items: center;
  min-height: 250px;
  transition:
    transform 0.35s ease,
    filter 0.35s ease;
}

.skill-row:hover .skill-animation {
  transform: translateY(-8px) scale(1.03);
  filter: drop-shadow(0 24px 35px rgba(99, 102, 241, 0.16));
}

.skill-animation dotlottie-wc {
  display: block;
  width: min(300px, 100%);
  height: min(300px, 58vw);
}

@media (max-width: 720px) {
  .skill-row {
    grid-template-columns: 1fr;
    gap: 0.85rem;
    min-height: 0;
  }

  .skill-panel {
    min-height: 0;
    padding: 1.2rem;
  }

  .skill-desc {
    margin-bottom: 1.15rem;
  }

  .skill-animation {
    min-height: 190px;
  }

  .skill-animation dotlottie-wc {
    width: min(220px, 100%);
    height: 190px;
  }
}
</style>
