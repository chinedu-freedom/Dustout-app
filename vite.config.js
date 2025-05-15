import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Dustout-app/', // <-- IMPORTANT: replace with your GitHub repo name
  plugins: [tailwindcss()],
})
