<template>
  <div class="container mx-auto px-4 py-6">
<h1 class="text-center text-2xl sm:text-3xl lg:text-4xl font-bold">New Online Bingo Site Buzzing With Fun!</h1>
<p class="text-center">Play our sweet and sticky bingo games and spin our delicious slots! Check out the finger-licking specials waiting for you in our promotions jar.</p>
  </div>
  <div class="container mx-auto px-4 py-6">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <!-- Row 1: 4 images -->
    <a :href="regLink" target="_blank" rel="noopener">
      <img src="/static/bingo/bingo-room-1.webp" alt="Image 1" class="w-full h-auto object-cover rounded" />
    </a>
    <a :href="regLink" target="_blank" rel="noopener">
      <img src="/static/bingo/bingo-room-2.webp" alt="Image 2" class="w-full h-auto object-cover rounded" />
    </a>
    <a :href="regLink" target="_blank" rel="noopener">
      <img src="/static/bingo/bingo-room-3.webp" alt="Image 3" class="w-full h-auto object-cover rounded" />
    </a>
    <a :href="regLink" target="_blank" rel="noopener">
      <img src="/static/bingo/bingo-room-4.webp" alt="Image 4" class="w-full h-auto object-cover rounded" />
    </a>

    <!-- Row 2: image 5 -->
    <a :href="regLink" target="_blank" rel="noopener">
      <img src="/static/bingo/bingo-room-5.webp" alt="Image 5" class="w-full h-auto object-cover rounded" />
    </a>

    <!-- Row 2: image 6 -->
    <a :href="regLink" target="_blank" rel="noopener">
      <img src="/static/bingo/bingo-room-6.webp" alt="Image 6" class="w-full h-auto object-cover rounded" />
    </a>

    <!-- Row 2: merged cell across last 2 columns -->
<div class="col-span-2 bg-primary_bg text-[#F2E8B9] rounded p-10 text-center">
  <h2 class="gamesSectionHead py-4">Come and Taste from the Promotions Jar at Queen's Bingo!</h2>

  
    <p class="text-lg mb-4">
      Enjoy exclusive Bingo Promotions and Free Bingo Rooms!
    </p>
    <p class="text-lg mb-4">
      Sign up to receive our exclusive daily and weekly email offers!
    </p>
    <p class="text-lg mb-4">
      Look out for Queen's Bingo Bonus Code promotions!
    </p>


    <div class="flex justify-center py-4">
      <a :href="regLink" class="reg-btn text-lg md:text-xl">
        {{ msgTranslate?.sign_up || 'Sign Up' }}
      </a>
    </div>
  </div>
</div>
</div>
<div class="section-odd py-10 lg:py-10">
    <div class="row bgr_red lg:mb-4">
    			<div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-10 items-center mx-auto p-4">
    				<div class="col-span-full lg:col-span-6">
    					<p class="gamesSectionHead text-center lg:text-left">{{ msgTranslate?.new_games || 'New Games' }}</p>
    				</div>
    				<div class="lg:block lg:col-span-2">
    					<div class="">
    						<NuxtLink to="/all-games" class="cas-btn">
                                {{ msgTranslate?.see_more || 'See More' }} {{ msgTranslate?.new_games || 'New Games' }}
    							<i class="material-icons right" style="font-size: 16px;">arrow_forward</i>
    						</NuxtLink>
    					</div>
    				</div>
    			</div>
    		</div>

    <div v-if="loading" class="loading-placeholder" >
        <svg class="spinner" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle>
        </svg>
    </div>
        <div v-else class="px-4 sm:px-6 md:px-0">
            <div class="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div v-for="game in newGames.slice(-12).reverse()" :key="game.id" :class="'item ' + game.id">
                    <div class="">
                        <div class="show show-first first-content-border">
                            <a :href="regLink" target="_blank">
                                <img 
                                    class="responsive-img item-qqq min-w-full" 
                                    :src="game.image" 
                                    @error="game.image = 'newGameImg.jpg'" 
                                    :alt="'Image of ' + game.gameName + ' online slot. ' + game.description" 
                                    :title="game.gameName + ' - ' + game.id"  />
                            </a>
                            <div class='mask'>
                                <a :href="regLink" target="_blank">
                                    <div class="gameDescr">
                                        <div v-if="newGame && game.description && game.description.length > 0" v-text="game.description"></div>
                                            <i v-else class="large material-icons">play_arrow</i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import { newGames, msgTranslate, regLink, loginLink, loadLang } from '~/composables/globalData';

const loading = ref(true);

// Define emit
const emit = defineEmits(['loaded']);

onMounted(() => {
    // No API call, just UI state
    loading.value = false;
    emit('loaded');
});

// Single call for both SSR and client
await useAsyncData('new-games-data', async () => {
  try {
    await loadLang();
    await fetchGames(); // ✅ Only call needed
  } catch (error) {
    console.error('Error loading new games data:', error);
  }
});
</script>

<style scoped>
.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2;
  position: absolute;
  margin-top: 100px !important;
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
/* Mobile styles (max-width: 767px) */
.loading-placeholder {
  min-height: 110vh;
}

/* Tablet styles (min-width: 768px) */
@media (min-width: 768px) {
  .loading-placeholder {
    min-height: 50vw;
  }
}

/* Desktop styles (min-width: 992px) */
@media (min-width: 992px) {
  .loading-placeholder {
    min-height: 20vw;
  }
}

/* Large Desktop styles (min-width: 1920px) */
@media (min-width: 1920px) {
  .loading-placeholder {
    min-height: 18vw;
  }
}

/* Xtreme Desktop styles (min-width: 2400px and up) */
@media (min-width: 2400px) {
  .loading-placeholder {
    min-height: 17vw;
  }
}
</style>