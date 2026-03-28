import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Proxy all /api requests to your backend running on port 3000
// This avoids CORS issues during development
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
