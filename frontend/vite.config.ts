import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({ 
  server: {
    port :5173,
    host :'http://ec2-18-209-148-149.compute-1.amazonaws.com/',
    hmr: {
      overlay: false
    }
  },
  optimizeDeps: {
    include: [
      '@nimbus-ds/patterns',
      '@nimbus-ds/components',
      '@nimbus-ds/styles',
    ],
  },
  plugins: [
    svgr(),
    react(),
    nodePolyfills({
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
