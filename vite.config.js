import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: '/portfolio/',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => ['spline-viewer', 'dotlottie-wc'].includes(tag)
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    open: true
  }
})
