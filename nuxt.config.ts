export default defineNuxtConfig({
  // Keep SSR true for Cloudflare Pages
  ssr: true,
  nitro: {
    preset: 'cloudflare-pages',
    output: {
      dir: '.output',
      publicDir: '.output/public'
    },
    prerender: {
      fallback: true,
      crawlLinks: true,     // Add this to prerender linked pages
      routes: ['/']         // Add this to ensure root is prerendered
    }
  },
  // Use ISR (Incremental Static Regeneration) for all routes
  routeRules: {
    '/**': { isr: true }
  },
  // Add this experimental feature for better Cloudflare Pages compatibility
  experimental: {
    payloadExtraction: false
  },
  css: ['~/assets/main.css', '~/static/style.css'],
  plugins: [
    '~/plugins/language.js',
    '~/plugins/hreflang.js',
  ],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: "Queen's Bingo",
      meta: [
        { name: 'description', content: "Enjoy our bingo games and slots!" }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    }
  },
});

