<template>
        <MainBanner />
        <NewGames />
        <PopularGames />
        <SlotGames />
        <div class="section py-10">
            <div class="sm:container mx-auto px-4 sm:px-6 md:px-8">
                <div v-for="promotion in promotionsPosts" :key="promotion.id">
                    <div class="overflow-hidden">
                        <div v-html="promotion.content.rendered" class="break-words"></div>
                    </div>
                </div>
            </div>
        </div>


</template>
<script setup>
import { onMounted } from 'vue';
// import {fetchGames, fetchFooterIcons, fetchFooterText, promotionsPosts } from '~/composables/globalData';

const myPromotionsPosts = useFetch(() => fetchPromotions());

</script>

<style scoped></style>