import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: 'milchviehstall.arenenberg.ch.test'
  },
  build: {
    outDir: 'public'
  }
})