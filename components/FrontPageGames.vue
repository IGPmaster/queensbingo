<template>
    <div class="section-odd lg:py-10">
        <div class="row bgr_red lg:mb-4">
            <div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-10 items-center mx-auto p-4">
                <div class="col-span-full lg:col-span-6">
                    <p class="gamesSectionHead text-center lg:text-left">{{ msgTranslate?.new_games || 'New Games' }}</p>
                </div>
                <div class="lg:block lg:col-span-2">
                    <div class="">
                        <NuxtLink to="/all-games" class="waves-effect waves-light btn-flat center hz-hollow">
                            <i class="material-icons right">arrow_forward</i>{{ msgTranslate?.see_more || 'See More' }} {{ msgTranslate?.new_games || 'New Games' }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4 sm:px-6 md:px-0">
            <div class="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <!-- <div v-for="game in games.slice(-12).reverse()" :key="game.id" :class="'item ' + game.id"> -->
                <div v-for="game in games.filter(game => game.gameFilters?.includes('New')).slice(-12).reverse()"
                    :key="game.id" :class="'item ' + game.id">
                    <div class="">
                        <div class="show show-first first-content-border">
                            <a :href="regLink" target="_blank">
                                <img class="responsive-img item-qqq min-w-full" :src="game.image"
                                    :alt="'Image of ' + game.gameName + ' online slot. ' + game.description"
                                    :title="game.gameName + ' - ' + game.id" />
                            </a>
                            <div class='mask'>
                                <a :href="regLink" target="_blank">
                                    <div class="gameDescr">
                                        <div v-if="newGame && game.description && game.description.length > 0"
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

    <div class="section-even lg:py-10">
            <div class="row bgr_red lg:mb-4">
                <div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-10 items-center mx-auto p-4">
                    <div class="col-span-full lg:col-span-6">
                        <p class="gamesSectionHead text-center lg:text-left">{{ msgTranslate?.popular_games || 'Popular Games' }}</p>
                    </div>
                    <div class="lg:block lg:col-span-2">
                        <div class="">
                            <NuxtLink to="/popular-games" class="waves-effect waves-light btn-flat center hz-hollow">
                                <i class="material-icons right">arrow_forward</i>{{ msgTranslate?.see_more || 'See More' }} {{ msgTranslate?.popular_games || 'Popular Games' }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-4 sm:px-6 md:px-0">
                <div class="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <!-- <div v-for="game in games.slice(-12).reverse()" :key="game.id" :class="'item ' + game.id"> -->
                    <div v-for="game in games.filter(game => game.gameFilters?.includes('Featured')).slice(-12)"
                        :key="game.id" :class="'item ' + game.id">
                        <div class="">
                            <div class="show show-first first-content-border">
                                <a :href="regLink" target="_blank">
                                    <img class="responsive-img item-qqq" :src="game.image"
                                        :alt="'Image of ' + game.gameName + ' online slot. ' + game.description"
                                        :title="game.gameName + ' - ' + game.id" />
                                </a>
                                <div class='mask'>
                                    <a :href="regLink" target="_blank">
                                        <div class="gameDescr">
                                            <div v-if="newGame && game.description && game.description.length > 0"
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
const { data: games } = await useFetch('https://content.progressplay.net/api23/api/game?whitelabelId=188')
async function fetchFilterByName() {
    try {
        const response = await fetch(FILTERED_BY_NAME_KV);
        const data = await response.json();
        filterByName.value = data;
    } catch (error) {
        console.error('Error fetching filterByName:', error);
    }
}

async function fetchGames() {
    try {
        await fetchFilterByName();
        const response = await fetch(KV_GAMES);
        const data = await response.json();

        // Add your logic for processing the games data here
        const filteredGames = data.filter(game => {
            const hasName = filterByName.value.some(name => game.gameName.toLowerCase().includes(name.toLowerCase()));
            const hasId = filterByName.value.some(id => game.gameId == id);

            // Check for jurisdictionCode and excluded countries
            const isExcludedJurisdiction = game.excludedJurisdictions?.includes(jurisdictionCode.value);
            const isExcludedCountry = game.excludedCountries?.includes(lang.value);

            return !(hasName || hasId || isExcludedJurisdiction || isExcludedCountry);
        });

        games.value = filteredGames;
        newGames.value = filteredGames.filter(game => game.gameFilters?.includes('New'));
        popularGames.value = filteredGames.filter(game => game.gameFilters?.includes('Featured'));
        casinoGames.value = filteredGames.filter(game => game.gameType?.includes('Casino'));
        slotGames.value = filteredGames.filter(game => game.gameType?.includes('Slots'));
        jackpotGames.value = filteredGames.filter(game => game.gameType?.includes('Jackpots'));
        liveGames.value = filteredGames.filter(game => game.gameType?.includes('Live'));
        scratchGames.value = filteredGames.filter(game => game.gameName?.toLowerCase().includes('scratch'));
        blackjackGames.value = filteredGames.filter(game => game.gameFilters?.includes('Blackjack'));
        rouletteGames.value = filteredGames.filter(game => game.gameFilters?.includes('Roulette'));
        // // Construct LOBBY links:
        // let tracker = 'IGP';

        //     if (process.client) {
        //     tracker = getCookie('tracker') || 'untrackedUser';
        // }
        regLink.value = `${PP_LOBBY_LINK}?tracker=${tracker}&country=${lang.value}/#registration`;
        loginLink.value = `${PP_LOBBY_LINK}?tracker=${tracker}&country=${lang.value}/#login`;
    } catch (error) {
        console.error('Error fetching games:', error);
    }
}


</script>

<style scoped></style>