import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// FIX pour ton repo: maxence1704.github.io/Market-Intelligence-/
// Le base DOIT correspondre exactement au nom du repo
export default defineConfig({
  plugins: [react()],
  base: '/Market-Intelligence-/', // <-- IMPORTANT pour ton repo
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  preview: {
    port: 4173,
    host: '0.0.0.0'
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'esnext'
  }
})
