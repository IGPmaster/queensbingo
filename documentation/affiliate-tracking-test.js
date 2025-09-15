/**
 * Affiliate Tracking Test Script
 * 
 * This script helps test the affiliate tracking implementation.
 * Copy/paste into browser console to run tests.
 */

(function() {
  console.log('===== AFFILIATE TRACKING TEST =====');
  
  // Test 1: Check if URL parameters are correctly parsed
  function testURLParameters() {
    console.log('Test 1: URL Parameters');
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    
    console.log('Current URL parameters:');
    console.log('- tracker:', params.get('tracker') || 'not set');
    console.log('- btag:', params.get('btag') || 'not set');
    console.log('- affid:', params.get('affid') || 'not set');
    
    if (!params.get('tracker')) {
      console.log('No tracker parameter found. Add ?tracker=test123 to URL to test.');
    }
  }
  
  // Test 2: Check cookies
  function testCookies() {
    console.log('Test 2: Cookies');
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
      const [name, value] = cookie.trim().split('=');
      acc[name] = value;
      return acc;
    }, {});
    
    console.log('Affiliate Cookie:', cookies['affiliateTracker'] || 'not set');
    
    // Test cookie attributes (requires manual inspection)
    console.log('Cookie attributes (check manually in Application tab):');
    console.log('- Expected: HttpOnly=false, SameSite=Strict, Secure=true');
  }
  
  // Test 3: Check localStorage
  function testLocalStorage() {
    console.log('Test 3: localStorage');
    const trackerLS = localStorage.getItem('affiliateTracker');
    console.log('Affiliate Tracker in localStorage:', trackerLS || 'not set');
    
    const consent = localStorage.getItem('cookieConsent');
    console.log('Consent in localStorage:', consent ? 'set' : 'not set');
    
    if (consent) {
      try {
        const consentObj = JSON.parse(consent);
        console.log('Affiliate consent:', consentObj.preferences.affiliate);
      } catch (e) {
        console.error('Error parsing consent:', e);
      }
    }
  }
  
  // Test 4: Check dataLayer for GTM
  function testDataLayer() {
    console.log('Test 4: GTM dataLayer');
    if (!window.dataLayer) {
      console.error('dataLayer not found. GTM may not be initialized.');
      return;
    }
    
    const affiliateData = window.dataLayer.find(item => 
      item.affiliate_tracker !== undefined || 
      item.affiliate_btag !== undefined || 
      item.affiliate_id !== undefined
    );
    
    if (affiliateData) {
      console.log('Affiliate data found in dataLayer:');
      console.log('- affiliate_tracker:', affiliateData.affiliate_tracker || 'not set');
      console.log('- affiliate_btag:', affiliateData.affiliate_btag || 'not set');
      console.log('- affiliate_id:', affiliateData.affiliate_id || 'not set');
    } else {
      console.warn('No affiliate data found in dataLayer.');
    }
    
    console.log('Total dataLayer events:', window.dataLayer.length);
  }
  
  // Test 5: Check Lobby Links
  function testLobbyLinks() {
    console.log('Test 5: Lobby Links');
    const regLinks = document.querySelectorAll('a[href*="registration"]');
    const loginLinks = document.querySelectorAll('a[href*="login"]');
    
    console.log('Registration links found:', regLinks.length);
    if (regLinks.length > 0) {
      console.log('Sample registration link:', regLinks[0].href);
      const regLinkParams = new URL(regLinks[0].href).search;
      console.log('Parameters:', regLinkParams || 'none');
    }
    
    console.log('Login links found:', loginLinks.length);
    if (loginLinks.length > 0) {
      console.log('Sample login link:', loginLinks[0].href);
      const loginLinkParams = new URL(loginLinks[0].href).search;
      console.log('Parameters:', loginLinkParams || 'none');
    }
  }
  
  // Run all tests
  function runAllTests() {
    testURLParameters();
    console.log('-----------------------');
    testCookies();
    console.log('-----------------------');
    testLocalStorage();
    console.log('-----------------------');
    testDataLayer();
    console.log('-----------------------');
    testLobbyLinks();
  }
  
  // Test utilities
  const testUtils = {
    // Set a test tracker in URL without page reload
    setTestTracker: function(tracker = 'test123') {
      const url = new URL(window.location.href);
      url.searchParams.set('tracker', tracker);
      window.history.replaceState({}, '', url.toString());
      console.log(`Set test tracker: ${tracker}`);
      console.log('Reload page to apply changes and run tests again.');
    },
    
    // Clear affiliate data
    clearAffiliateData: function() {
      // Clear cookies
      document.cookie = 'affiliateTracker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      // Clear localStorage
      localStorage.removeItem('affiliateTracker');
      // Clear URL parameters
      const url = new URL(window.location.href);
      url.searchParams.delete('tracker');
      url.searchParams.delete('btag');
      url.searchParams.delete('affid');
      window.history.replaceState({}, '', url.toString());
      
      console.log('Cleared all affiliate data');
      console.log('Reload page to apply changes and run tests again.');
    }
  };
  
  // Run all tests
  runAllTests();
  
  // Expose test utilities to console
  window.affiliateTests = testUtils;
  console.log('===== TEST COMPLETE =====');
  console.log('Additional test utilities available via window.affiliateTests:');
  console.log('- affiliateTests.setTestTracker("yourtracker")');
  console.log('- affiliateTests.clearAffiliateData()');
})(); 