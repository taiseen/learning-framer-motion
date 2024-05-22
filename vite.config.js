import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],

  // for development mode
  server: {
    port: 5000,
    open: true, // open browser
  },

})
