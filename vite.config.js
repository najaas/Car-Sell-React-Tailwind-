import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  build: {
    rollupOptions: {
      external: ['aos/dist/aos.css']
    }
  },
  // Add this section for GitHub Pages deployment
  base: '/Car-Sell-React-Tailwind/',  // Ensure this matches your repository name
});
