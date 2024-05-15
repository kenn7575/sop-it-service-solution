import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@components": '/src/components',
      "@data": '/src/data',
      "@layouts": '/src/layouts',
      "@pages": '/src/pages',
      "@services": '/src/services',
      "@stores": '/src/stores',
      "types": "/src/types",
    }
  }
})
