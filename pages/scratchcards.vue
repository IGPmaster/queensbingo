<template>
	<div class="section-even lg:py-10">
		<div class="row bgr_red lg:mb-4 pt-20">
			<div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-10 items-center mx-auto p-4">
				<div class="col-span-full lg:col-span-6">
					<p class="gamesSectionHead text-center lg:text-left">{{ msgTranslate?.scratchcards_games || 'Scratchcards' }}</p>
				</div>
				<div class="lg:block lg:col-span-2">
					<div class="">
						<a :href="regLink" class="waves-effect waves-light btn-flat center hz-hollow">
							<i class="material-icons right">arrow_forward</i>Sign Up
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="px-4 sm:px-6 md:px-0">
			<div class="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
				<div v-for="game in scratchGames" :key="game.id" :class="'item ' + game.id">
					<div class="">
						<div class="show show-first first-content-border">
							<a :href="regLink" target="_blank">
								<img 
									class="responsive-img item-qqq min-w-full" 
									:src="game.image" 
									@error="game.image = 'newGameImg.jpg'" 
									:alt="'Image of ' + game.gameName + ' online scratchcards. ' + game.description"
									:title="game.gameName + ' - ' + game.id" />
							</a>
							<div class='mask'>
								<a :href="regLink" target="_blank">
									<div class="gameDescr">
										<div v-if="game && game.description && game.description.length > 0"
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
import { onMounted } from 'vue';
import { fetchGames, scratchGames, msgTranslate, regLink, loginLink, loadLang } from '~/composables/globalData';
import { useAsyncData } from '#app';

onMounted(async () => {
	try {
		await fetchGames();
		await loadLang();
	} catch (error) {
		console.error('Error:', error);
	}
});
</script>

<style scoped>

</style>