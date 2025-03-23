import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // When using a custom domain like graphai.ca, the base path should be '/'
  // If deploying to GitHub Pages subdirectory (github.io/graphai), use '/graphai/'
  base: '/',
})
