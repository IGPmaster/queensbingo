<template>
	<div class="section-odd py-10 lg:py-10">
		<div class="row bgr_red lg:mb-4">
			<div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-10 items-center mx-auto p-4">
				<div class="col-span-full lg:col-span-6">
					<p class="gamesSectionHead text-center lg:text-left">{{ msgTranslate?.slot_games || 'Slot Games' }}</p>
				</div>
				<div class="lg:block lg:col-span-2">
					<div class="">
						<NuxtLink to="/slot-games" class="cas-btn">
							{{ msgTranslate?.see_more || 'See More' }} {{ msgTranslate?.slot_games || 'Slot Games' }}
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
				<div v-for="game in slotGames.slice(-12).reverse()" :key="game.id" :class="'item ' + game.id">
					<div class="">
						<div class="show show-first first-content-border">
							<a :href="regLink" target="_blank">
								<img class="responsive-img item-qqq min-w-full" :src="game.image" @error="game.image = 'newGameImg.jpg'" 
									:alt="'Image of ' + game.gameName + ' online slot. ' + game.description"
									:title="game.gameName + ' - ' + game.id" />
							</a>
							<div class='mask'>
								<a :href="regLink" target="_blank">
									<div class="gameDescr">
										<div v-if="slotGame && game.description && game.description.length > 0"
											v-text="game.description"></div>
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
import { slotGames, msgTranslate, regLink, loginLink, loadLang } from '~/composables/globalData';

const loading = ref(true);

// Define emit
const emit = defineEmits(['loaded']);

onMounted(() => {
	// No API call, just UI state
	loading.value = false;
	emit('loaded');
});

// Single call for both SSR and client
await useAsyncData('slot-games-data', async () => {
  try {
    await loadLang();
    await fetchGames(); // ✅ Only call needed
  } catch (error) {
    console.error('Error loading slot games data:', error);
  }
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
</style>
