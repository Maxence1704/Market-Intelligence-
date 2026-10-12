import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages base — change if repo name different
// For https://username.github.io/market-intelligence/ → base: '/market-intelligence/'
// For custom domain or root → base: '/'
export default defineConfig({
  plugins: [react()],
  base: './',
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
