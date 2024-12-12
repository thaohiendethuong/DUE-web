import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/DUE-web', // Update this to match your repository's GitHub Pages path
});
