import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  appType: 'spa', // ← 이것이 history fallback을 대체
  server: {
    fs: {
      strict: true
    },
    port:80,
    open:true,
    allowedHosts: ['rladlgus.com'],
  },
  build: {
    outDir: 'dist'
  },
})
