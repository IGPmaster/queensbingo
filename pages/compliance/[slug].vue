<template>
    <div>
        <div class="">
            <div class="container mx-auto bg-white pt-32">
            <div class="px-4">
                <NuxtLink to="/compliance" class="flex justify-center gap-4 p-2 border rounded border-primary text-gray-800 text-center w-1/2 md:w-1/5 cursor-pointer">
                    <i class="material-icons">arrow_back</i>
                    {{ msgTranslate?.legal || 'Legal' }}
                      </NuxtLink>
                <div class="">
                    <div v-html="htmlContent"></div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { msgTranslate, globalContent, loadTranslations, loadLang, fetchCachedContent, lang, PP_API_URL, WHITELABEL_ID } from '~/composables/globalData';
import { useAsyncData } from '#app';

const route = useRoute();
const slug = route.params.slug;

async function fetchContent(slug) {
    try {
        // Use the optimized fetchCachedContent function with KV caching
        const htmlContent = await fetchCachedContent(slug, lang.value);
        return htmlContent;
    } catch (error) {
        console.error('Error fetching compliance content:', error);
        return '';
    }
}

const htmlContent = ref('');

onMounted(async () => {
    try {
        htmlContent.value = await fetchContent(slug);
        await loadTranslations();
        await loadLang();
    } catch (error) {
        console.error('Error:', error);
    }
});

const handleClick = async (key) => {
    const code = updateCode(key, globalContent.value); // Use globalContent.value here
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
