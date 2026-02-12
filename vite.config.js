import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Urban_harvests-/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        products: 'products.html',
        blog: 'blog.html',
        signup: 'signup.html',
        '404': '404.html'
      }
    }
  }
})
