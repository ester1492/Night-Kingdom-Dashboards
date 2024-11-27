

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Night-Kingdom-Dashboards/',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  build: {
    rollupOptions: {
      input: 'index.html', 
    },
  },
});
