<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  favoriteCount: {
    type: Number,
    default: 0
  }
})

const menuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { path: '/', label: '首頁', icon: '🏠' },
  { path: '/skills', label: '技能', icon: '⚡' },
  { path: '/projects', label: '作品集', icon: '🎨' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <!-- { '想要加入的 CSS 類別名稱' : 布林值(true/false) } -->
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <RouterLink to="/" class="nav-logo">
        <span class="logo-bracket">&lt;</span>
        <span class="logo-name">Nia.dev</span>
        <span class="logo-bracket">/&gt;</span>
      </RouterLink>

      <button class="hamburger" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }">
        <span></span><span></span><span></span>
      </button>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li v-for="link in navLinks" :key="link.path">
          <RouterLink :to="link.path" class="nav-link" @click="menuOpen = false">
            <span class="link-icon">{{ link.icon }}</span>
            {{ link.label }}
          </RouterLink>
        </li>
        <li class="nav-badge" v-if="favoriteCount > 0">
          <span class="badge">❤️ {{ favoriteCount }}</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.2rem 0;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(10, 10, 20, 0.92);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(99, 102, 241, 0.2);
  padding: 0.8rem 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  text-decoration: none;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  transition: opacity 0.2s;
}

.nav-logo:hover { opacity: 0.8; }

.logo-bracket {
  color: #6366f1;
}

.logo-name {
  color: #e2e8f0;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 0.5rem;
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  color: #94a3b8;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;
  letter-spacing: 0.02em;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #fff;
  background: rgba(99, 102, 241, 0.15);
}

.nav-link.router-link-exact-active {
  color: #a5b4fc;
}

.link-icon {
  font-size: 0.85rem;
}

.badge {
  background: linear-gradient(135deg, #ec4899, #f43f5e);
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #e2e8f0;
  transition: all 0.3s;
}

@media (max-width: 640px) {
  .hamburger { display: flex; }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 10, 20, 0.97);
    flex-direction: column;
    padding: 1rem;
    border-bottom: 1px solid rgba(99, 102, 241, 0.2);
  }

  .nav-links.open { display: flex; }

  .nav-link { width: 100%; justify-content: center; }
}
</style>
