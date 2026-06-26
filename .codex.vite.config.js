import { defineConfig, mergeConfig } from 'vite'
import baseConfig from './vite.config.js'

export default defineConfig(({ command, mode }) => {
  const resolvedBaseConfig = typeof baseConfig === 'function'
    ? baseConfig({ command, mode })
    : baseConfig

  return mergeConfig(resolvedBaseConfig, {
    cacheDir: '.vite-cache',
    server: {
      open: false,
    },
  })
})
