<template>
  <!-- Head-only component: renders nothing -->
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '#imports';

// Canonical in the served form: Cloudflare Pages 308s /page -> /page/ for
// prerendered routes, so the slashed URL is the one Google must index.
const SITE_URL = 'https://www.queensbingo.com';
const route = useRoute();
const canonical = computed(() => {
  const key = route.path.replace(/\/$/, '') || '/';
  return SITE_URL + (key === '/' ? '/' : key + '/');
});

useHead({
  link: [{ rel: 'canonical', href: canonical }],
});
</script>
