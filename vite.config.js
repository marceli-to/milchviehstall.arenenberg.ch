import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { viteSingleFile } from 'vite-plugin-singlefile'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: 'milchviehstall.arenenberg.ch.test',
  }
})