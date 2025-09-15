<template>
    <div>
        <div class="container mx-auto pt-20">
            <h1 class="text-center text-white">{{ msgTranslate?.promotions || 'Promotions' }}</h1>
        </div>
        
        <div v-if="loading" class="text-center py-10">
            <p class="text-white">Loading promotions...</p>
        </div>
        
        <div v-else-if="error" class="text-center py-10">
            <p class="text-white">Error loading promotions. Please try again later.</p>
        </div>
        
        <div v-else-if="pp_promotions && pp_promotions.length > 0" class="container mx-auto">
        <div class="p-5 grid grid-cols-1 lg:grid-cols-2 my-10 bg-gray-300 shadow-black shadow-lg rounded-lg items-center" 
            v-for="promo in pp_promotions" :key="promo.code">
            <a :href="regLink">
                <img class="rounded-lg w-full"
                    :src="promo.bigImageUrl"
                    :alt="'Promotion banner: ' + promo.name + '. ' + promo.title + '. ' + promo.subTitle"
                    :title="promo.name + '. ' + promo.title">
           
            </a>
            <div class="info md:px-10 px-4 grid grid-cols-1 justify-between">
                <h2 class="text-3xl py-4 md:pt-0 uppercase">{{ promo.title }}</h2>
               
                <h5 class="text-xl uppercase pb-4 md:py-10">{{ promo.subTitle }}</h5>
                
                <!-- <div v-html="promo.htmlSummary" class="truncate"></div> -->
                <a :href="regLink" class="text-center py-3 mt-2 px-8 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 uppercase">{{ msgTranslate?.see_more || 'See More' }}</a>
                <div v-if="promo.disclaimer !== null">
                    <!-- <div v-text="promo.disclaimer" class="text-sm/[10px] py-5 text-slate-800/60 italic leading-normal"></div> -->

                    <div v-html="promo.disclaimer" class="text-sm/[10px] py-5 text-slate-800/60 italic leading-normal"></div>
                            
                    <span class="text-sm/[12px] text-slate-800/75">
                                 <a 
                                    :href="PP_LOBBY_LINK + 'promotions?code=' + promo.code" 
                                    class="text-sm/[10px] py-5 text-slate-800/60 italic leading-normal"
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    Full Terms Apply
                                </a>
                            </span>

                    
                </div>
            </div>
        </div>
        </div>
        
        <div v-else class="text-center py-10">
            <p class="text-white">No promotions available for your region.</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { fetchApiPromotions, pp_promotions, loadLang, msgTranslate, regLink, loginLink, PP_LOBBY_LINK } from '~/composables/globalData'

const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    console.log('🎁 PROMOTIONS PAGE: Starting client-side data load')
    await loadLang()
    await fetchApiPromotions()
    console.log('✅ PROMOTIONS PAGE: Data loaded successfully')
  } catch (err) {
    console.error('❌ PROMOTIONS PAGE: Error loading data:', err)
    error.value = err
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.article {
    color: black !important;
}
h2, h3, h4, h5, h6, p, .promotionPage {
    color: darkslategray !important;
}
</style>