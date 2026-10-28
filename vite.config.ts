import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Rutas relativas: el build funciona igual en Netlify, Cloudflare Pages
  // o GitHub Pages (que sirve en /nombre-del-repo/).
  base: './',
  plugins: [react(), tailwindcss()],
})
