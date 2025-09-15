<template>
    <div v-if="loading" class="loading-placeholder" >
      <svg class="spinner" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle>
      </svg>
    </div>

  <div v-else v-for="promo in promotionsPosts" :key="promo.id" class="head-banner h-100">
    <div class="w-full">
      <a :href="regLink" style="margin-bottom: -5px;" v-if="promo.acf && promo.yoast_head_json">
        <picture>
          <source media="(min-width: 992px)" :srcset="promo.acf.image_full || '../static/casimboo_loading.webp'"
            :alt="promo.yoast_head_json.description" :title="promo.yoast_head_json.og_title">
          <img :src="promo.acf.image_small || '../static/casimboo_loading.webp'" class="w-full h-auto"
            :alt="promo.yoast_head_json.description" :title="promo.yoast_head_json.og_title"
            style="min-width: 100vw; padding-top:4rem;" width="1920" height="400">
        </picture>
      </a>
    </div>

    <div>
      <div class="container mx-auto text-center sig_terms lg:py-5 lg:w-3/4">
        <div class="px-5 [&_p]:leading-tight" v-html="promo.acf.sig_terms"></div>
      </div>
      <div class="container mx-auto">
        <div class="flex justify-center lg:pb-5 py-3">
          <img class="lg:w-2/6 w-7/8 place-items-center" :src="promo.acf.trust_icons"
            alt="100% Licensed and fast payouts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted, defineEmits } from 'vue';
const loading = ref(true);

import { promotionsPosts, regLink, fetchPromotions } from '~/composables/globalData';

// Define emit
const emit = defineEmits(['loaded']);

onMounted(async () => {
  try {
    await fetchPromotions();
    loading.value = false;
  } catch (error) {
    console.error('Error fetching promotions:', error);
  }
  loading.value = false;
  emit('loaded');
});

</script>

<style scoped>
/* Mobile styles (max-width: 767px) */
.loading-placeholder {
  min-height: 119vw;
}

/* Tablet styles (min-width: 768px) */
@media (min-width: 768px) {
  .loading-placeholder {
    min-height: 100vw;
  }
}

/* Desktop styles (min-width: 992px) */
@media (min-width: 992px) {
  .loading-placeholder {
    min-height: 36vw;
  }
}

/* Large Desktop styles (min-width: 1920px) */
@media (min-width: 1920px) {
  .loading-placeholder {
    min-height: 33vw;
  }
}

/* Xtreme Desktop styles (min-width: 2400px and up) */
@media (min-width: 2400px) {
  .loading-placeholder {
    min-height: 31vw;
  }
}
.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2;
  position: absolute;
  top: 25%;
  left: 50%;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
}

.spinner .path {
  stroke: white;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

.head-banner {
  opacity: 0;
  transition: opacity .5s ease-in;
}

.head-banner {
  opacity: 1;
}
</style>