import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Juandr0.github.io/DoggyDaycare",
  plugins: [react()],
})
