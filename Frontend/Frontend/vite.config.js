import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', 
    port: 5173, 
    strictPort: true, 
    open: true,
    proxy: {
      "/book": { // Proxy requests to backend
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      }
    }
  }
});

