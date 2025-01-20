import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@common': path.resolve(__dirname, './src/components/common'),
      '@views': path.resolve(__dirname, './src/views'),
      "@types": path.resolve(__dirname, './src/types'),
      "@stores": path.resolve(__dirname, './src/stores'),
    },
  },
})
