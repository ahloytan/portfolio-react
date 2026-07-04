import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { robots } from 'vite-plugin-robots'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    robots({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/private/', '/admin/'],
        },
      ],
    }),
    Sitemap({
      hostname: 'https://ahloytan.netlify.app',
    })
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output:{
          manualChunks(id) {
              if (id.includes('node_modules')) {
                  return id.toString().split('node_modules/')[1].split('/')[0].toString();
              }
          }
      }
    }
  },
  resolve: {
    alias: {
      assets: "../../dist",
    },
  },
})
