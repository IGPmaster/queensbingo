import { createGtm } from "@gtm-support/vue-gtm";
import { SITE_CONFIG } from '~/composables/globalData';

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window === 'undefined') return;

    try {
        // Check if script tags with GTM are already in the document
        const existingScripts = document.querySelectorAll('script[src*="googletagmanager.com"]');
        if (existingScripts.length > 0) {
            console.warn('GTM scripts already exist in document:', existingScripts.length);
            
            // Remove any script tags that don't match our configured GTM ID
            existingScripts.forEach(script => {
                const src = script.src;
                if (!src.includes(SITE_CONFIG.gtmId)) {
                    console.log('Removing non-matching GTM script:', src);
                    script.parentNode.removeChild(script);
                } else {
                    console.log('Found correct GTM script:', src);
                }
            });
            
            // Check for duplicate scripts with the correct ID
            const correctScripts = document.querySelectorAll(`script[src*="${SITE_CONFIG.gtmId}"]`);
            if (correctScripts.length > 1) {
                console.log(`Found ${correctScripts.length} duplicate GTM scripts with correct ID. Keeping only one.`);
                // Keep only the first script with our GTM ID and remove the rest
                for (let i = 1; i < correctScripts.length; i++) {
                    correctScripts[i].parentNode.removeChild(correctScripts[i]);
                }
            }
        }
        
        // Specifically remove the G-MJZ2NWLG26 script if it exists
        function removeGA4Script() {
            const ga4Script = document.querySelector('script[src*="G-MJZ2NWLG26"]');
            if (ga4Script) {
                console.log('Removing GA4 script (G-MJZ2NWLG26)');
                ga4Script.parentNode.removeChild(ga4Script);
            }
            
            // Also remove any gtag scripts
            const gtagScripts = document.querySelectorAll('script[src*="gtag/js"]');
            gtagScripts.forEach(script => {
                console.log('Removing gtag script:', script.src);
                script.parentNode.removeChild(script);
            });
        }
        
        // Call immediately and also set up a MutationObserver to watch for script additions
        removeGA4Script();
        
        // Set up observer to remove scripts that might be added dynamically
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === 'childList' && mutation.addedNodes.length) {
                    for (const node of mutation.addedNodes) {
                        if (node.tagName === 'SCRIPT' && 
                            (node.src.includes('G-MJZ2NWLG26') || node.src.includes('gtag/js'))) {
                            console.log('Detected dynamic addition of GA4/gtag script, removing:', node.src);
                            node.parentNode.removeChild(node);
                        }
                    }
                }
            }
        });
        
        // Start observing the document with the configured parameters
        observer.observe(document.documentElement, { childList: true, subtree: true });
        
        // Initialize dataLayer with default consent state
        window.dataLayer = window.dataLayer || [];
        
        // Get affiliate tracking parameters 
        const urlParams = new URLSearchParams(window.location.search);
        const tracker = urlParams.get('tracker') || localStorage.getItem('affiliateTracker') || document.cookie.split(';').find(c => c.trim().startsWith('affiliateTracker='))?.split('=')[1] || '';
        const btag = urlParams.get('btag') || '';
        const affid = urlParams.get('affid') || '';
        
        window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            'event': 'gtm.js',
            'site_name': SITE_CONFIG.siteName,
            // Add affiliate tracking information to dataLayer
            'affiliate_tracker': tracker,
            'affiliate_btag': btag,
            'affiliate_id': affid,
            // Default consent state - wait for user input
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'functionality_storage': 'granted',
            'personalization_storage': 'denied',
            'security_storage': 'granted'
        });

        // Create GTM instance
        const gtmInstance = createGtm({
            id: SITE_CONFIG.gtmId,
            defer: true,
            compatibility: false,
            enabled: true,
            debug: process.env.NODE_ENV !== 'production',
            loadScript: false,
            vueRouter: useRouter(),
            trackOnNextTick: false,
        });

        // Add GTM instance to app
        nuxtApp.vueApp.use(gtmInstance);

        // Function to initialize GTM
        window.initializeGTM = () => {
            try {
                // Check if GTM script is already loaded
                if (document.querySelector(`script[src*="${SITE_CONFIG.gtmId}"]`)) {
                    console.log('GTM script already loaded');
                    return;
                }
                
                // Load GTM script
                const script = document.createElement('script');
                script.async = true;
                script.src = `https://www.googletagmanager.com/gtm.js?id=${SITE_CONFIG.gtmId}`;
                
                // Add success handler
                script.onload = () => {
                    console.log('GTM script loaded successfully');
                    
                    // Get current affiliate tracking parameters
                    const urlParams = new URLSearchParams(window.location.search);
                    const tracker = urlParams.get('tracker') || localStorage.getItem('affiliateTracker') || document.cookie.split(';').find(c => c.trim().startsWith('affiliateTracker='))?.split('=')[1] || '';
                    const btag = urlParams.get('btag') || '';
                    const affid = urlParams.get('affid') || '';
                    
                    // Push initial pageview after script loads with affiliate data
                    window.dataLayer.push({
                        'event': 'pageview',
                        'page_path': window.location.pathname,
                        'affiliate_tracker': tracker,
                        'affiliate_btag': btag, 
                        'affiliate_id': affid
                    });
                };
                
                // Add error handler
                script.onerror = (error) => {
                    console.warn('Failed to load GTM script:', error);
                };
                
                document.head.appendChild(script);

                // Add noscript iframe for better tracking coverage
                // First check if one already exists
                const existingIframe = document.querySelector(`iframe[src*="${SITE_CONFIG.gtmId}"]`);
                if (!existingIframe) {
                    const noscript = document.createElement('noscript');
                    const iframe = document.createElement('iframe');
                    iframe.src = `https://www.googletagmanager.com/ns.html?id=${SITE_CONFIG.gtmId}`;
                    iframe.height = '0';
                    iframe.width = '0';
                    iframe.style.display = 'none';
                    iframe.style.visibility = 'hidden';
                    noscript.appendChild(iframe);
                    document.body.appendChild(noscript);
                }
            } catch (error) {
                console.warn('Error initializing GTM:', error);
            }
        };

        // Check if consent is already granted
        const savedConsent = localStorage.getItem('cookieConsent');
        if (savedConsent) {
            try {
                const { preferences } = JSON.parse(savedConsent);
                if (preferences.analytics) {
                    window.initializeGTM();
                }
            } catch (error) {
                console.warn('Error checking consent status:', error);
            }
        }
    } catch (error) {
        console.warn('Error setting up GTM:', error);
    }
});
