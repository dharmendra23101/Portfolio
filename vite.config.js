import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Use this if deploying to https://dharmendra23101.github.io/Portfolio/
})