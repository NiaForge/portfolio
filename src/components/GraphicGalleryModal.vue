<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  category: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])
const previewIndex = ref(null)
const closeButton = ref(null)

const activeImage = computed(() =>
  previewIndex.value === null ? null : props.category.images[previewIndex.value]
)

const imageSrc = (image) =>
  `${import.meta.env.BASE_URL}${image.replace(/^\//, '')}`

const openPreview = (index) => {
  previewIndex.value = index
}

const closePreview = () => {
  previewIndex.value = null
}

const previousImage = () => {
  previewIndex.value =
    (previewIndex.value - 1 + props.category.images.length) % props.category.images.length
}

const nextImage = () => {
  previewIndex.value = (previewIndex.value + 1) % props.category.images.length
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    emit('close')
    return
  }

  if (previewIndex.value === null) return
  if (event.key === 'ArrowLeft') previousImage()
  if (event.key === 'ArrowRight') nextImage()
}

watch(
  () => props.category.id,
  () => {
    previewIndex.value = null
  }
)

onMounted(async () => {
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', handleKeydown)
  await nextTick()
  closeButton.value?.focus()
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal" appear>
      <div class="modal-backdrop" role="presentation" @click.self="emit('close')">
        <section
          class="gallery-modal"
          :style="{ '--color': category.color }"
          role="dialog"
          aria-modal="true"
          :aria-label="`${category.title} 作品圖庫`"
        >
          <header class="modal-header">
            <div>
              <p class="modal-kicker">Graphic Works</p>
              <h2>{{ category.title }}</h2>
              <p>{{ category.images.length }} 件作品</p>
            </div>
            <button
              ref="closeButton"
              class="icon-button close-modal"
              type="button"
              aria-label="關閉作品圖庫"
              @click="emit('close')"
            >
              ×
            </button>
          </header>

          <div class="gallery-grid">
            <button
              v-for="(image, index) in category.images"
              :key="image"
              class="gallery-item"
              type="button"
              :aria-label="`預覽 ${category.title} 作品 ${index + 1}`"
              @click="openPreview(index)"
            >
              <img
                :src="imageSrc(image)"
                :alt="`${category.title} 作品 ${index + 1}`"
                loading="lazy"
              />
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
            </button>
          </div>

          <Transition name="preview">
            <div v-if="activeImage" class="image-preview" @click.self="closePreview">
              <div class="preview-toolbar">
                <span>{{ previewIndex + 1 }} / {{ category.images.length }}</span>
                <button class="icon-button" type="button" aria-label="返回縮圖列表" @click="closePreview">
                  ×
                </button>
              </div>

              <button
                class="nav-button previous"
                type="button"
                aria-label="上一張"
                @click="previousImage"
              >
                ‹
              </button>
              <div class="preview-canvas" @click.self="closePreview">
                <img
                  :src="imageSrc(activeImage)"
                  :alt="`${category.title} 作品 ${previewIndex + 1}`"
                />
              </div>
              <button class="nav-button next" type="button" aria-label="下一張" @click="nextImage">
                ›
              </button>
            </div>
          </Transition>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 2rem;
  background: rgba(4, 4, 12, 0.82);
  backdrop-filter: blur(14px);
}

.gallery-modal {
  position: relative;
  width: min(1120px, 100%);
  max-height: min(88vh, 900px);
  overflow: auto;
  background: #0d0d1a;
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 24px;
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.6);
}

.modal-header {
  position: sticky;
  z-index: 2;
  top: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 1.7rem;
  background: rgba(13, 13, 26, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
}

.modal-kicker {
  margin: 0 0 0.25rem;
  color: var(--color);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.modal-header h2 {
  margin: 0;
  color: #f1f5f9;
  font-size: clamp(1.5rem, 3vw, 2rem);
}

.modal-header p:last-child {
  margin: 0.3rem 0 0;
  color: #64748b;
  font-size: 0.85rem;
}

.icon-button,
.nav-button {
  display: grid;
  place-items: center;
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  cursor: pointer;
  transition: 0.2s ease;
}

.icon-button {
  width: 2.6rem;
  height: 2.6rem;
  flex: 0 0 auto;
  border-radius: 50%;
  font-size: 1.65rem;
  line-height: 1;
}

.icon-button:hover,
.nav-button:hover {
  color: white;
  background: var(--color);
  border-color: var(--color);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  padding: 1.5rem;
}

.gallery-item {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  padding: 0;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 14px;
  cursor: zoom-in;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease, filter 0.35s ease;
}

.gallery-item span {
  position: absolute;
  right: 0.65rem;
  bottom: 0.55rem;
  padding: 0.2rem 0.45rem;
  color: white;
  background: rgba(5, 5, 14, 0.72);
  border-radius: 5px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
}

.gallery-item:hover img,
.gallery-item:focus-visible img {
  transform: scale(1.045);
  filter: brightness(1.08);
}

.gallery-item:focus-visible {
  outline: 2px solid var(--color);
  outline-offset: 3px;
}

.image-preview {
  position: fixed;
  z-index: 3;
  inset: 0;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: rgba(3, 3, 10, 0.94);
  backdrop-filter: blur(18px);
  scrollbar-gutter: stable;
}

.preview-canvas {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 5rem 6rem 3rem;
}

.preview-canvas img {
  display: block;
  max-width: 100%;
  height: auto;
  flex: 0 0 auto;
  border-radius: 10px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.55);
}

.preview-toolbar {
  position: fixed;
  z-index: 2;
  top: 1.5rem;
  right: 1.5rem;
  left: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  color: #94a3b8;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
}

.nav-button {
  position: fixed;
  z-index: 2;
  top: 50%;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  font-size: 2rem;
  transform: translateY(-50%);
}

.previous { left: 1.5rem; }
.next { right: 1.5rem; }

.modal-enter-active,
.modal-leave-active,
.preview-enter-active,
.preview-leave-active {
  transition: opacity 0.24s ease;
}

.modal-enter-active .gallery-modal,
.modal-leave-active .gallery-modal {
  transition: transform 0.24s ease;
}

.modal-enter-from,
.modal-leave-to,
.preview-enter-from,
.preview-leave-to {
  opacity: 0;
}

.modal-enter-from .gallery-modal,
.modal-leave-to .gallery-modal {
  transform: translateY(12px) scale(0.985);
}

@media (max-width: 900px) {
  .gallery-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 640px) {
  .modal-backdrop { padding: 0; }
  .gallery-modal { height: 100%; max-height: none; border: 0; border-radius: 0; }
  .modal-header { padding: 1.2rem; }
  .gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.7rem; padding: 1rem; }
  .preview-canvas { padding: 5rem 1rem 5.5rem; }
  .nav-button { top: auto; bottom: 1rem; transform: none; }
  .previous { left: calc(50% - 4rem); }
  .next { right: calc(50% - 4rem); }
}

@media (prefers-reduced-motion: reduce) {
  .modal-enter-active,
  .modal-leave-active,
  .preview-enter-active,
  .preview-leave-active,
  .modal-enter-active .gallery-modal,
  .modal-leave-active .gallery-modal { transition: none; }
}
</style>
