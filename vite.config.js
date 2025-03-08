import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 6000, // Adjust the warning limit to 6MB (6000 KB)
  },
});
