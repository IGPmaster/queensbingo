import { ref } from 'vue';

// Site-specific configuration
export const SITE_CONFIG = {
    siteName: 'QueensBingo',
    gtmId: 'GTM-WZ28D5Z2',
};

export const lang = ref('');
export const tracker = ref('');
export const jurisdictionCode = ref('');
export const footerIcons = ref([]);
export const footerText = ref([]);
export const globalContent = ref({
  'About Us': 'aboutus',
  'Terms and conditions': 'terms',
  'Privacy Policy': 'privacy',
  'Bonus Policy': 'bonus',
  'Responsible Gaming': 'responsible',
  'Licence': 'license',
  'Payouts': 'payouts',
  'Depositing': 'deposits',
  'Cashing Out': 'withdrawals',
  'FAQ': 'faq',
  'Contact Us': 'contact',
});

// ProgressPlay data:
export const WHITELABEL_ID = 188;
export const PP_API_URL = 'https://content.progressplay.net/api23/api/';
const PP_PROMOTIONS_API = `${PP_API_URL}PromotionsInfo?whitelabelId=${WHITELABEL_ID}&country=`;
export const PP_LOBBY_LINK = 'https://www.queensbingo.com';
//const KV_GAMES = `https://content.progressplay.net/api23/api/game?whitelabelId=${WHITELABEL_ID}`; // Test API

// WP-REST-API:
const WP_API = 'https://headless.queensbingo.com/wp-json/wp/v2/';

//CloudFlare Workers KV data:
// ⚠️ NOTE: KV_GAMES will be overridden by LOCAL functions below for VPN compatibility
const KV_GAMES_EXTERNAL = 'https://access-ppgames.tech1960.workers.dev/';
const FILTERED_BY_NAME_KV = 'https://access-filterbyname.tech1960.workers.dev/';
const CF_GEO_WORKER = 'https://cf-geo-lookup.tech1960.workers.dev/';
const KV_SUPPORTED_COUNTRIES = "https://access-supportedcountries.tech1960.workers.dev/";
const REST_COUNTRY_KV = "https://access-restcountries.tech1960.workers.dev/";
const IGP_SUPPORTED_COUNTRIES = "https://igp-supported-countries.tech1960.workers.dev/";
const KV_TRANSLATIONS ="https://access-translations.tech1960.workers.dev/";

// EU Countries for proper fallback logic
const EU_COUNTRIES = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 
  'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 
  'SI', 'ES', 'SE', 'GB'  // Include UK as well
];

// Cache optimization variables
let gamesCache = null;
let gamesCacheTime = 0;
let gamesRequestInFlight = null; // Prevent simultaneous requests
let contentCache = new Map(); // Cache for compliance content
const footerContentCache = new Map();

// Optimized cache durations
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes for promotions
const GAMES_CACHE_DURATION = 2 * 60 * 60 * 1000; // 2 hours for games (rarely change)
const CONTENT_CACHE_DURATION = 4 * 60 * 60 * 1000; // 4 hours for compliance content (very rarely changes)

const games = ref([]);
const newGames = ref([]);
const filterByName = ref([]);
const popularGames = ref([]);
const casinoGames = ref([]);
const jackpotGames = ref([]);
const slotGames = ref([]);
const liveGames = ref([]);
const scratchGames = ref([]);
const blackjackGames = ref([]);
const rouletteGames = ref([]);
const regLink = ref([null]);
const loginLink = ref([null]);
const msgTranslate = ref({});
const pp_promotions = ref([]);
const promotionsPosts = ref([]);
const countryCode = ref('');
const countryName = ref('');
const countries = ref('');
const country = ref('');
const countryNotSupported = ref(false);
const countriesData = ref([]);

export async function handleTracker() {
  const params = new URLSearchParams(window.location.search);
  const trackerFromURL = params.get('tracker');
  const trackerFromCookie = getCookie('tracker');

  if (trackerFromURL) {
    setCookie('tracker', trackerFromURL, 30, 'None', true);
    return trackerFromURL;
  } else if (trackerFromCookie) {
    return trackerFromCookie;
  } else {
    return 'untracked-user';
  }
}

export async function checkCountry() {
  try {
    const workerResponse = await fetch(CF_GEO_WORKER);
    const workerData = await workerResponse.json();
    const countryCodeValue = workerData.countryCode;

    if (!countryCode.value.includes(countryCodeValue)) {
      countryName.value = workerData.countryName;
      countryNotSupported.value = true;
    }
  } catch (error) {
    console.error('Error checking country:', error);
  }
}

function getFallbackCountry(geoData) {
  if (!geoData) {
    console.log('🌍 FALLBACK: No geo data, defaulting to CA');
    return 'CA';
  }

  const { countryCode, continent } = geoData;
  console.log('🌍 FALLBACK: Processing fallback for', countryCode, 'continent:', continent);

  // Primary check: Use continent data from CloudFlare
  if (continent === 'EU') {
    console.log('🌍 FALLBACK: EU continent detected, using IE');
    return 'IE';
  }

  // Backup check: If continent data is missing, check against EU countries array
  if (!continent || continent === 'Unknown') {
    console.log('🌍 FALLBACK: No continent data, checking EU countries array');
    if (EU_COUNTRIES.includes(countryCode)) {
      console.log('🌍 FALLBACK: Found', countryCode, 'in EU countries array, using IE');
      return 'IE';
    }
  }

  // Default fallback for non-EU countries
  console.log('🌍 FALLBACK: Non-EU country, using CA');
  return 'CA';
}

export async function loadLang() {
  if (typeof window !== 'undefined') {
    let langParam = new URLSearchParams(window.location.search).get('lang');
    if (langParam) {
      lang.value = langParam.toUpperCase();
      // Set the 'lang' cookie with the selected language for one month
      setCookie('lang', lang.value, 30, 'None', true);
    } else {
      let cookieLang = getCookie('lang');
      if (cookieLang) {
        lang.value = cookieLang.toUpperCase();
      } else {
        // Get the country code from the GEO API
        try {
          const workerResponse = await fetch(CF_GEO_WORKER);
          const geoData = await workerResponse.json();
          const originalLang = geoData?.countryCode || 'CA';
          
          console.log('🌍 LANG: Detected country:', originalLang);
          console.log('🌍 LANG: Continent:', geoData?.continent);

          // Check if the country code is in the API response
          const [supportedCountries, igpSupportedCountries] = await Promise.all([
            fetch(KV_SUPPORTED_COUNTRIES).then(r => r.json()),
            fetch(IGP_SUPPORTED_COUNTRIES).then(r => r.json())
          ]);

          const foundLangKV = supportedCountries.find(c => c.countryIntlCode === originalLang);
          const foundLangIGP = Object.values(igpSupportedCountries).flat().includes(originalLang);
          
          if (foundLangKV && foundLangIGP) {
            console.log('🌍 LANG: Country', originalLang, 'is supported, using it');
            lang.value = originalLang;
            // Store validation status for CA Playtech filtering
            if (typeof window !== 'undefined') {
              window.__isRealCountry = true;
              window.__originalDetectedCountry = originalLang;
            }
          } else {
            const fallbackCountry = getFallbackCountry(geoData);
            console.log('🌍 LANG: Country', originalLang, 'not supported, falling back to', fallbackCountry);
            lang.value = fallbackCountry;
            // Store validation status for CA Playtech filtering
            if (typeof window !== 'undefined') {
              window.__isRealCountry = false;
              window.__originalDetectedCountry = originalLang;
            }
          }

          // Set the 'lang' cookie to the selected language for one month
          setCookie('lang', lang.value, 30, 'None', true);
        } catch (error) {
          console.error('❌ LANG: Error in loadLang:', error);
          lang.value = 'CA'; // Ultimate fallback
        }
      }
    }
    // Fetch the country data based on the selected language
    await fetchCountry();
    console.log('🌍 LANG: Final language set to:', lang.value);
  }
}

async function fetchCountry() {
  try {
    const response = await fetch(KV_SUPPORTED_COUNTRIES);
    if (!response.ok) {
      throw new Error(`Failed to fetch country data (status ${response.status})`);
    }
    const data = await response.json();
    const country = data.find(c => c.countryIntlCode === lang.value);
    if (country) {
      jurisdictionCode.value = country.jurisdictionCode;
    }
  } catch (error) {
    console.error('Error fetching country data:', error);
  }
  await loadTranslations();
}

async function loadTranslations() {
  try {
    const response = await fetch(IGP_SUPPORTED_COUNTRIES);
    const IGP_SUPPORTED_COUNTRIES_KV = await response.json();
    let langCode = lang.value;
    const countryCode = langCode;
    if (!Object.values(IGP_SUPPORTED_COUNTRIES_KV).flat().includes(countryCode)) {
      langCode = 'EN';
    } else {
      for (const [key, value] of Object.entries(IGP_SUPPORTED_COUNTRIES_KV)) {
        if (value.includes(countryCode)) {
          langCode = key.toLowerCase();
          break;
        }
      }
    }

    // Fetch translations from the worker
    const translationsResponse = await fetch(`${KV_TRANSLATIONS}?lang=${langCode}`);
    const allTranslations = await translationsResponse.json();

    msgTranslate.value = allTranslations;
  } catch (error) {
    console.error('Error loading translations:', error);
  }
}

async function fetchApiPromotions() {
  try {
    console.log('🎁 UNIFIED: Starting fetchApiPromotions()');
    console.log('🔍 UNIFIED: lang.value =', lang.value);
    console.log('🔍 UNIFIED: WHITELABEL_ID =', WHITELABEL_ID);
    console.log('🔍 UNIFIED: process.client =', process.client);
    
    // 🎯 CORRECT ARCHITECTURE: EXTERNAL worker for promotions (KV caching)
    const apiUrl = process.client
      ? `https://access-content-pp.tech1960.workers.dev/?type=promotions&whitelabelId=${WHITELABEL_ID}&country=${lang.value}`
      : `${PP_API_URL}PromotionsInfo?whitelabelId=${WHITELABEL_ID}&country=${lang.value}`;
    
    console.log('🎁 PROMOTIONS: Using EXTERNAL worker for KV caching:', apiUrl);
    
    // Add timeout for cold starts and better error handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      console.log('⏰ UNIFIED: Request timeout after 15 seconds');
      controller.abort();
    }, 15000);
    
    const response = await fetch(apiUrl, { 
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      }
    });
    clearTimeout(timeoutId);
    
    console.log('📊 UNIFIED: Response status:', response.status);
    console.log('📊 UNIFIED: Response ok:', response.ok);
    
    if (!response.ok) {
      throw new Error(`Promotions API failed: ${response.status} ${response.statusText}`);
    }
    
    const responseData = await response.json();
    
    // Handle unified response format vs direct API format
    const data = process.client ? responseData.promotions : responseData;
    
    console.log('✅ UNIFIED: Data received:', Array.isArray(data) ? `Array with ${data.length} items` : typeof data);
    console.log('📄 UNIFIED: Data sample:', data ? JSON.stringify(data).substring(0, 200) : 'No data');
    
    pp_promotions.value = data || [];
    console.log('✅ UNIFIED: pp_promotions.value set to:', pp_promotions.value);
  } catch (error) {
    console.error('❌ UNIFIED: Error fetching promotions:', error);
    console.error('❌ UNIFIED: Error stack:', error.stack);
    pp_promotions.value = []; // Ensure it's always an array on error
  }
}

export async function fetchPromotions() {
    try {
        const response = await fetch(`${WP_API}promotions`);
		const data = await response.json();
		const filteredData = data.filter((item) => {
		  const geoTarget = item.acf.geo_target_country_sel;
		  return geoTarget && geoTarget.includes(lang.value);
		});
		
		// If no posts are found for the selected country, include the CA post
		if (filteredData.length === 0) {
		  const caPosts = data.filter((item) => {
			const geoTarget = item.acf.geo_target_country_sel;
			return geoTarget && geoTarget.includes('IE');
		  });
		  filteredData.push(...caPosts);
		}
		promotionsPosts.value = filteredData;
	 } catch (error) {
		console.log(error);
	}
}

async function fetchFilterByName() {
  try {
    const response = await fetch(FILTERED_BY_NAME_KV);
    const data = await response.json();
    filterByName.value = data;
  } catch (error) {
    console.error('Error fetching filterByName:', error);
  }
}

// SILVER BULLET VPN FIX: Local CloudFlare Functions for games
const KV_GAMES_PRIMARY = '/api/pp/games';
const KV_GAMES_FALLBACK = '/api/worker/games';

async function updateLinks() {
  const tracker = getCookie('tracker');
  const langCookie = getCookie('lang');
  if (tracker){
    regLink.value = `${PP_LOBBY_LINK}?tracker=${tracker}&/#registration`;
    loginLink.value = `${PP_LOBBY_LINK}?tracker=${tracker}&/#login`;
  } else {
    regLink.value = `${PP_LOBBY_LINK}#registration`;
    loginLink.value = `${PP_LOBBY_LINK}#login`;
  }
}

async function fetchGames() {
  try {
    // 1. Check cache FIRST (before Worker call)
    const now = Date.now();
    if (gamesCache && (now - gamesCacheTime) < GAMES_CACHE_DURATION) {
      console.log('🎮 GAMES: Using cached games data');
      // Set all game categories from cache
      games.value = gamesCache.games;
      newGames.value = gamesCache.newGames;
      popularGames.value = gamesCache.popularGames;
      casinoGames.value = gamesCache.casinoGames;
      slotGames.value = gamesCache.slotGames;
      jackpotGames.value = gamesCache.jackpotGames;
      liveGames.value = gamesCache.liveGames;
      scratchGames.value = gamesCache.scratchGames;
      blackjackGames.value = gamesCache.blackjackGames;
      rouletteGames.value = gamesCache.rouletteGames;
      await updateLinks();
      return; // No Worker call needed!
    }
    
    // 2. Check if request already in flight (prevent duplicate calls)
    if (gamesRequestInFlight) {
      console.log('🎮 GAMES: Request already in progress, waiting...');
      await gamesRequestInFlight;
      // After waiting, use data from completed request
      if (gamesCache) {
        console.log('🎮 GAMES: Using data from completed request');
        games.value = gamesCache.games;
        newGames.value = gamesCache.newGames;
        popularGames.value = gamesCache.popularGames;
        casinoGames.value = gamesCache.casinoGames;
        slotGames.value = gamesCache.slotGames;
        jackpotGames.value = gamesCache.jackpotGames;
        liveGames.value = gamesCache.liveGames;
        scratchGames.value = gamesCache.scratchGames;
        blackjackGames.value = gamesCache.blackjackGames;
        rouletteGames.value = gamesCache.rouletteGames;
        await updateLinks();
      }
      return; // No duplicate Worker call!
    }
    
    // 3. Start new request (only one at a time)
    console.log('🎮 GAMES: Fetching fresh games data...');
    gamesRequestInFlight = actuallyFetchGames();
    await gamesRequestInFlight;
    gamesRequestInFlight = null;

  } catch (error) {
    console.error('❌ GAMES: Error fetching games:', error);
    gamesRequestInFlight = null; // Reset on error
  }
}

async function actuallyFetchGames() {
  try {
    await fetchFilterByName();
    
    // Triple-fallback strategy for maximum compatibility
    let data = null;
    
    try {
      // 1. Try local CloudFlare Function first
      console.log('🎮 GAMES: Trying local function:', KV_GAMES_PRIMARY);
      const response = await fetch(KV_GAMES_PRIMARY);
      if (response.ok) {
        console.log('✅ GAMES: Local games function succeeded');
        data = await response.json();
      } else {
        throw new Error(`Local function failed: ${response.status}`);
      }
    } catch (error) {
      console.log('⚠️ GAMES: Local function failed, trying fallback');
      
      try {
        // 2. Try local worker fallback
        console.log('🎮 GAMES: Trying local worker fallback:', KV_GAMES_FALLBACK);
        const response = await fetch(KV_GAMES_FALLBACK);
        if (response.ok) {
          console.log('✅ GAMES: Local worker fallback succeeded');
          data = await response.json();
        } else {
          throw new Error(`Local worker failed: ${response.status}`);
        }
      } catch (fallbackError) {
        console.log('⚠️ GAMES: Local worker failed, trying external worker');
        
        try {
          // 3. Final fallback to external worker
          const externalWorker = `${KV_GAMES_EXTERNAL}?whitelabelId=${WHITELABEL_ID}&country=${lang.value}`;
          console.log('🎮 GAMES: Trying external worker:', externalWorker);
          const response = await fetch(externalWorker);
          if (response.ok) {
            console.log('✅ GAMES: External worker succeeded');
            data = await response.json();
          } else {
            throw new Error(`External worker failed: ${response.status}`);
          }
        } catch (externalError) {
          console.error('❌ GAMES: All fallbacks failed:', externalError);
          return []; // Graceful degradation
        }
      }
    }

    if (!data || !Array.isArray(data)) {
      console.error('❌ GAMES: Invalid data received');
      return [];
    }

    // Add your logic for processing the games data here
    const filteredGames = data.filter(game => {
      const hasName = filterByName.value.some(name => game.gameName.toLowerCase().includes(name.toLowerCase()));
      const hasId = filterByName.value.some(id => game.gameId == id);

      // Check for jurisdictionCode and excluded countries
      const isExcludedJurisdiction = game.excludedJurisdictions?.includes(jurisdictionCode.value);
      const isExcludedCountry = game.excludedCountries?.includes(lang.value);

      // CA Playtech filtering - only for REAL CA users, not fallback CA
      let isPlaytechExcluded = false;
      if (lang.value === 'CA') {
        // Check if this is a real CA user vs fallback CA user
        const isRealCountry = window.__isRealCountry;
        const originalDetectedCountry = window.__originalDetectedCountry;
        
        if (isRealCountry && originalDetectedCountry === 'CA') {
          const isPlaytech = game.provider?.toLowerCase() === 'playtech' || 
                            game.subProvider?.toLowerCase() === 'playtech';
          if (isPlaytech) {
            console.log('🇨🇦 PLAYTECH: Filtering out Playtech game for real CA:', game.gameName);
            isPlaytechExcluded = true;
          }
        } else {
          console.log('🇨🇦 PLAYTECH: Fallback CA user - including Playtech games');
        }
      }

      return !(hasName || hasId || isExcludedJurisdiction || isExcludedCountry || isPlaytechExcluded);
    });

    // Set all game categories
    games.value = filteredGames;
    newGames.value = filteredGames.filter(game => game.gameFilters?.includes('New'));
    popularGames.value = filteredGames.filter(game => game.gameFilters?.includes('Popular') || game.gameFilters?.includes('Featured'));
    casinoGames.value = filteredGames.filter(game => game.gameType?.includes('Casino'));
    slotGames.value = filteredGames.filter(game => game.gameType?.includes('Slots'));
    jackpotGames.value = filteredGames.filter(game => game.gameType?.includes('Jackpots'));
    liveGames.value = filteredGames.filter(game => game.gameType?.includes('Live'));
    scratchGames.value = filteredGames.filter(game => game.gameName?.toLowerCase().includes('scratch'));
    blackjackGames.value = filteredGames.filter(game => game.gameFilters?.includes('Blackjack'));
    rouletteGames.value = filteredGames.filter(game => game.gameFilters?.includes('Roulette'));

    // Cache the processed games data to reduce Worker load
    gamesCache = {
      games: games.value,
      newGames: newGames.value,
      popularGames: popularGames.value,
      casinoGames: casinoGames.value,
      slotGames: slotGames.value,
      jackpotGames: jackpotGames.value,
      liveGames: liveGames.value,
      scratchGames: scratchGames.value,
      blackjackGames: blackjackGames.value,
      rouletteGames: rouletteGames.value
    };
    gamesCacheTime = Date.now();
    
    console.log('✅ GAMES: Games data cached successfully for', GAMES_CACHE_DURATION / 60000, 'minutes');

    await updateLinks();

  } catch (error) {
    console.error('❌ GAMES: Error fetching games:', error);
    // Don't clear existing games on error, just log it
    throw error; // Re-throw to be caught by fetchGames()
  }
}

export async function fetchSupportedCountries() {
  const response = await fetch(IGP_SUPPORTED_COUNTRIES);
  return await response.json();
}

export async function fetchAllCountries() {
  const response = await fetch(REST_COUNTRY_KV);
  return await response.json();
}

export async function fetchCountriesData() {
  const IGP_SUPPORTED_COUNTRIES_KV = await fetchSupportedCountries();
  const allCountriesData = await fetchAllCountries();
  const countries = [];

  for (const [language, countryCodes] of Object.entries(IGP_SUPPORTED_COUNTRIES_KV)) {
    for (const countryCode of countryCodes) {
      const countryData = allCountriesData.find(c => c.cca2 === countryCode);

      if (!countryData) {
        continue;
      }

      countries.push({
        name: countryData.name.common,
        code: countryData.cca2,
        language: countryData.languages ? Object.values(countryData.languages)[0] : '',
        flagUrl: countryData.flags ? Object.values(countryData.flags)[1] : ''
      });
    }
  }

  return countries.filter(country => country.language !== '');
}

// Optimized footer content functions using external workers for KV caching
async function fetchFooterContent(lang) {
  const cacheKey = `footer_${lang}`;
  
  if (footerContentCache.has(cacheKey)) {
    const cached = footerContentCache.get(cacheKey);
    footerIcons.value = cached.footericon || [];
    footerText.value = cached.footertext || [];
    console.log('📄 FOOTER: Using cached footer content');
    return;
  }

  try {
    console.log('📄 FOOTER: Fetching from external worker for KV caching');
    
    // Use external worker for proper KV caching
    const apiUrl = process.client
      ? `https://access-content-pp.tech1960.workers.dev/?type=content&codes=footericon,footertext&whitelabelId=${WHITELABEL_ID}&country=${lang || lang.value || 'GB'}`
      : null;

    if (process.client) {
      console.log('🚀 UNIFIED: Fetching footer content (icons + text) in single call');
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      footerIcons.value = data.footericon || [];
      footerText.value = data.footertext || [];
      
      footerContentCache.set(cacheKey, data);
      console.log('✅ UNIFIED: Footer content cached successfully');
    } else {
      // Server-side fallback
      await fetchFooterIconsServer(lang);
      await fetchFooterTextServer(lang);
    }
  } catch (error) {
    console.error('❌ UNIFIED: Error fetching footer content:', error);
    footerIcons.value = [];
    footerText.value = [];
  }
}

// Server-side fallback functions
async function fetchFooterIconsServer(lang) {
  try {
    const response = await fetch(`${PP_API_URL}InfoContent?whitelabelId=${WHITELABEL_ID}&code=footericon`);
    const data = await response.json();
    footerIcons.value = data;
  } catch (error) {
    console.error('❌ Error fetching footer icons:', error);
    footerIcons.value = [];
  }
}

async function fetchFooterTextServer(lang) {
  try {
    const response = await fetch(`${PP_API_URL}InfoContent?whitelabelId=${WHITELABEL_ID}&code=footertext`);
    const data = await response.json();
    footerText.value = data;
  } catch (error) {
    console.error('❌ Error fetching footer text:', error);
    footerText.value = [];
  }
}

// Legacy functions for backward compatibility
export async function fetchFooterIcons(lang) {
  await fetchFooterContent(lang);
}

export async function fetchFooterText(lang) {
  await fetchFooterContent(lang);
}

// Optimized content caching function for compliance pages
async function fetchCachedContent(code, country = lang.value) {
  // Validate code parameter
  if (!code || code === 'undefined' || typeof code !== 'string') {
    console.error('❌ CONTENT: Invalid code parameter:', { code, type: typeof code });
    return '';
  }
  
  const resolvedCountry = country;
  const cacheKey = `content:${code}:${WHITELABEL_ID}:${resolvedCountry}`;
  const now = Date.now();
  
  // Check cache first
  if (contentCache.has(cacheKey)) {
    const cached = contentCache.get(cacheKey);
    if ((now - cached.timestamp) < CONTENT_CACHE_DURATION) {
      console.log('📄 CONTENT: Using cached content for', code);
      return cached.data;
    }
  }
  
  try {
    console.log('📄 CONTENT: Fetching fresh content for', code);
    console.log('🔍 CONTENT DEBUG: country parameter =', resolvedCountry);
    console.log('🔍 CONTENT DEBUG: lang.value =', lang.value);
    console.log('🔍 CONTENT DEBUG: cache key =', cacheKey);
    console.log('🔍 CONTENT DEBUG: WHITELABEL_ID =', WHITELABEL_ID);
    
    // Use unified Worker for KV caching
    const apiUrl = `https://access-content-pp.tech1960.workers.dev/?type=content&codes=${code}&whitelabelId=${WHITELABEL_ID}&country=${resolvedCountry}`;
    console.log('🔍 CONTENT DEBUG: Full API URL =', apiUrl);
    
    const response = await fetch(apiUrl);
    if (!response.ok) {
      console.error('❌ CONTENT: HTTP error:', response.status, response.statusText);
      return '';
    }
    
    const responseData = await response.json();
    const data = responseData[code];
    const htmlContent = data && data[0] ? data[0].Html : '';
    
    // Cache the result
    contentCache.set(cacheKey, {
      data: htmlContent,
      timestamp: now
    });
    
    console.log('✅ CONTENT: Content cached for', code, 'for', CONTENT_CACHE_DURATION / 60000, 'minutes');
    return htmlContent;
    
  } catch (error) {
    console.error('❌ CONTENT: Error fetching content:', error);
    return '';
  }
}

// Cookie handling functions
function setCookie(name, value, days, sameSite, secure) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  const sameSiteAttribute = sameSite ? '; SameSite=' + sameSite : '';
  const secureAttribute = secure ? '; Secure' : '';
  document.cookie = name + '=' + (value || '') + expires + sameSiteAttribute + secureAttribute + '; path=/';
}

function getCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}


export { 
    //fetchPromotions, 
    fetchApiPromotions, 
    games, 
    newGames, 
    popularGames, 
    jackpotGames, 
    casinoGames, 
    slotGames, 
    scratchGames, 
    liveGames,
    blackjackGames,
    rouletteGames,
    regLink,
    loginLink,
    msgTranslate,
    pp_promotions,
    promotionsPosts,
    countryCode,
    countryName,
    countries,
    country,
    countriesData,
    countryNotSupported,
    fetchGames,
    getCookie, 
    setCookie,
    loadTranslations,
    fetchFooterContent,
    fetchCachedContent
};
