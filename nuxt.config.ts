// Import required Nuxt dependencies
import { defineNuxtConfig } from 'nuxt/config'

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
  // Route rules for CloudFlare Functions and ISR
  routeRules: {
    '/api/**': { prerender: false }, // CloudFlare Functions should not be prerendered
    '/**': { isr: true } // Use ISR for all other routes
  },
  // Add this experimental feature for better Cloudflare Pages compatibility
  experimental: {
    payloadExtraction: false
  },
  css: ['~/assets/main.css'],
  plugins: [
    '~/plugins/language.js',
    '~/plugins/vue-gtm.client.js',
  ],
  modules: ['@nuxtjs/tailwindcss'],
  // Ensure runtime config options are available
  runtimeConfig: {
    public: {
      // This will be available on both server and client
      siteConfigImported: true
    }
  },
  app: {
    head: {
      title: "Queen's Bingo - New Online Bingo Site Buzzing With Fun!",
      meta: [
        { name: 'description', content: "Play our sweet and sticky bingo games and spin our delicious slots! Check out the specials waiting for you in our promotions jar." }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Add these lines for font preloading
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;500;700&family=News+Cycle:wght@400;700&display=swap'
        },
        { 
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ],
      // Prevent any direct script tags in the head
      script: []
    }
  },
});