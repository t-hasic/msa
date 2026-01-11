import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Output directory for production build
    outDir: 'dist',
    // Generate static assets with hashed filenames for cache busting
    assetsDir: 'assets',
    // Ensure clean output
    emptyOutDir: true,
  },
  // Base path - use './' for relative paths (works on Athena)
  base: './',
})
