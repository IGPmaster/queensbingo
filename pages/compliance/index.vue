<template>
    <div>
        <div class="bg-white py-10">
            <div class="container mx-auto px-0">
                <div class="g-btn-wrapper mt-10 md:mt-20 flex flex-wrap justify-center">
                    <button v-for="(value, key) in globalContent" :key="key" @click="handleClick(key)"
                        class="h-10 px-4 md:px-8 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 uppercase text-xs md:text-base">
                        {{ msgTranslate?.[value] || value }}
                    </button>
                </div>

                <div class="px-4">
                    <div v-html="htmlContent"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

function updateCode(key, globalContent) {
    const code = globalContent[key];
    return code; // Return the code value
}

async function fetchContent(code) {
    try {
        // Use the optimized fetchCachedContent function with KV caching
        const htmlContent = await fetchCachedContent(code, lang.value);
        return htmlContent;
    } catch (error) {
        console.error('Error fetching compliance content:', error);
        return '';
    }
}

import { ref, onMounted } from 'vue';
import { msgTranslate, globalContent, loadLang, loadTranslations, fetchCachedContent, lang, PP_API_URL, WHITELABEL_ID } from '~/composables/globalData';
import { useAsyncData } from '#app';

const htmlContent = ref('');

onMounted(async () => {
    try {
        htmlContent.value = await fetchContent('aboutus');
        await loadTranslations();
        await loadLang();
    } catch (error) {
        console.error('Error:', error);
    }
});

const handleClick = async (key) => {
    const code = updateCode(key, globalContent.value);
    htmlContent.value = await fetchContent(code);
};

// Add async data loading
await useAsyncData('translations', async () => {
  try {
    await loadLang();
  } catch (error) {
    console.error('Error loading translations:', error);
  }
});
</script>

<style scoped></style>
