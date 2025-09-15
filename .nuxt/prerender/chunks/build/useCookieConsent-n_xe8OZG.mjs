import { ref, watch } from 'file:///Users/irek/sites/queensbingo/node_modules/vue/index.mjs';
import { x as getCookie, P as PP_LOBBY_LINK } from './server.mjs';

const globalShowBanner = ref(false);
const globalPreferences = ref({
  necessary: true,
  analytics: true,
  affiliate: true
});
const globalIsPreferencesOpen = ref(false);
const hasUserMadeChoice = ref(false);
function useCookieConsent() {
  const showBanner = globalShowBanner;
  const isPreferencesOpen = globalIsPreferencesOpen;
  const pendingTracker = ref(null);
  const regLink = ref("");
  const loginLink = ref("");
  const playLink = ref("");
  const preferences = globalPreferences;
  const cookieCategories = [
    {
      id: "necessary",
      label: "Necessary Cookies",
      description: "Essential for website functionality. These cookies are required and cannot be disabled.",
      required: true
    },
    {
      id: "analytics",
      label: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website. These cookies collect anonymous information.",
      required: false
    },
    {
      id: "affiliate",
      label: "Affiliate Tracking",
      description: "Essential for our business operations. We use a unique identifier stored for 30 days to credit our partners when you visit gaming sites. No personal data is collected.",
      required: true
    }
  ];
  const updateLobbyLinks = (tracker) => {
    const urlParams = new URLSearchParams((void 0).location.search);
    const btag = urlParams.get("btag");
    const affid = urlParams.get("affid");
    let finalTracker = urlParams.get("tracker");
    if (!finalTracker) {
      finalTracker = tracker || getCookie("affiliateTracker");
    }
    let queryParams = [];
    if (finalTracker)
      queryParams.push(`tracker=${finalTracker}`);
    if (btag)
      queryParams.push(`btag=${btag}`);
    if (affid)
      queryParams.push(`affid=${affid}`);
    const queryString = queryParams.join("&");
    const queryStringWithQuestionMark = queryString ? `?${queryString}` : "";
    regLink.value = `${PP_LOBBY_LINK}${queryStringWithQuestionMark}#registration`;
    loginLink.value = `${PP_LOBBY_LINK}${queryStringWithQuestionMark}#login`;
    playLink.value = `${PP_LOBBY_LINK}${queryStringWithQuestionMark}#play/`;
  };
  const setAffiliateTracking = (tracker) => {
    if (!tracker) {
      updateLobbyLinks(null);
      return;
    }
    const expiryDate = /* @__PURE__ */ new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    (void 0).cookie = `affiliateTracker=${tracker}; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Strict; Secure`;
    try {
      localStorage.setItem("affiliateTracker", tracker);
    } catch (e) {
      console.warn("Failed to store affiliate tracker in localStorage:", e);
    }
    updateLobbyLinks(tracker);
  };
  const handleAnalytics = (enabled) => {
    return;
  };
  const saveToLocalStorage = (prefs) => {
    if (!hasUserMadeChoice.value)
      return;
    if (!prefs.analytics)
      ;
    localStorage.setItem("cookieConsent", JSON.stringify({
      preferences: prefs,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      version: "1.0"
    }));
    if (pendingTracker.value) {
      setAffiliateTracking(pendingTracker.value);
    } else {
      const existingTracker = getCookie("affiliateTracker") || localStorage.getItem("affiliateTracker");
      updateLobbyLinks(existingTracker);
    }
    handleAnalytics(prefs.analytics);
  };
  const handleAcceptAll = () => {
    hasUserMadeChoice.value = true;
    const allAccepted = {
      necessary: true,
      analytics: true,
      affiliate: true
    };
    preferences.value = allAccepted;
    saveToLocalStorage(allAccepted);
    showBanner.value = false;
  };
  const handleDeclineAll = () => {
    hasUserMadeChoice.value = true;
    const allDeclined = {
      necessary: true,
      analytics: false,
      affiliate: true
    };
    preferences.value = allDeclined;
    saveToLocalStorage(allDeclined);
    showBanner.value = false;
  };
  const savePreferences = () => {
    hasUserMadeChoice.value = true;
    const finalPreferences = {
      ...preferences.value,
      necessary: true,
      affiliate: true
      // Always keep affiliate tracking enabled
    };
    preferences.value = finalPreferences;
    saveToLocalStorage(finalPreferences);
    showBanner.value = false;
    isPreferencesOpen.value = false;
  };
  const handleOpenPreferences = () => {
    isPreferencesOpen.value = true;
    if (!localStorage.getItem("cookieConsent")) {
      preferences.value = {
        necessary: true,
        analytics: true,
        affiliate: true
      };
    } else {
      try {
        const { preferences: savedPreferences } = JSON.parse(localStorage.getItem("cookieConsent"));
        preferences.value = {
          ...savedPreferences,
          necessary: true,
          affiliate: true
          // Always keep affiliate tracking enabled
        };
      } catch (e) {
        preferences.value = {
          necessary: true,
          analytics: true,
          affiliate: true
        };
      }
    }
  };
  const getConsentStatus = () => {
    const savedConsent = localStorage.getItem("cookieConsent");
    if (!savedConsent)
      return null;
    try {
      return JSON.parse(savedConsent);
    } catch (e) {
      return null;
    }
  };
  const withdrawConsent = () => {
    localStorage.removeItem("cookieConsent");
    preferences.value = {
      necessary: true,
      analytics: false,
      affiliate: true
    };
    updateLobbyLinks(null);
    showBanner.value = true;
  };
  watch(preferences, (newPrefs) => {
    return;
  }, { deep: true });
  return {
    showBanner,
    isPreferencesOpen,
    preferences,
    cookieCategories,
    handleAcceptAll,
    handleDeclineAll,
    savePreferences,
    handleOpenPreferences,
    withdrawConsent,
    getConsentStatus,
    regLink,
    loginLink,
    playLink
  };
}

export { useCookieConsent as u };
//# sourceMappingURL=useCookieConsent-n_xe8OZG.mjs.map
