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
      title: 'Casimboo Casino - Premium Online & Mobile Slots Await',
      meta: [
        { name: 'description', content: "Enjoy seamless mobile gaming with Casimboo's mobile slots. Play popular titles like Thunderstruck 2 on the go and never miss a chance to win big!" }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    }
  },
});

