# Affiliate Tracking and GTM Enhancement Implementation

## Overview
This document outlines the implementation of affiliate tracking and GTM enhancements across multiple casino sites based on the successful redesign of Jazzy Spins. The implementation prioritizes URL parameters over cookies for affiliate tracking and ensures a standardized GTM implementation using SITE_CONFIG.

## Changes Made to Casimboo

### 1. Updated Affiliate Tracking Logic in `useCookieConsent.js`
- **URL Parameters Prioritization**: Modified code to check URL parameters first, then cookies, and finally localStorage for affiliate tracker.
- **Enhanced Cookie Attributes**: Added SameSite=Strict and Secure attributes to ensure better security.
- **localStorage Backup**: Added a backup in localStorage for the affiliate tracker.
- **Affiliate Tracking as Necessary**: Made affiliate tracking always enabled regardless of consent status.

### 2. Standardized GTM Implementation
- **SITE_CONFIG Integration**: Verified that GTM ID is correctly sourced from SITE_CONFIG in all relevant files.
- **Enhanced DataLayer**: Added affiliate tracking parameters to the dataLayer for better tracking and attribution.
- **Nuxt Configuration**: Added runtime configuration to ensure SITE_CONFIG is available.

## Implementation Plan for Other Sites

### Phase 1: Code Updates (Per Site)
1. **Update `useCookieConsent.js`**:
   - Implement URL parameter prioritization in `updateLobbyLinks()` function
   - Enhance cookie attributes in `setAffiliateTracking()` function
   - Update `onMounted()` to check URL parameters first
   - Add localStorage backup for affiliate tracking

2. **Standardize GTM Implementation**:
   - Verify SITE_CONFIG.gtmId in `globalData.js` is correct for each site
   - Ensure `nuxt.config.ts` correctly imports SITE_CONFIG
   - Update `vue-gtm.client.js` to include affiliate parameters in dataLayer

### Phase 2: Testing (Per Site)
1. **Affiliate Tracking Testing**:
   - Test using URL parameters with values like `?tracker=test123`
   - Verify URL parameters override existing cookies
   - Check cookie attributes are set correctly (Secure, SameSite=Strict)
   - Verify localStorage backup works correctly
   - Test affiliate tracking works on page load without consent

2. **GTM Testing**:
   - Validate GTM events fire correctly with affiliate parameters
   - Use GTM Debug mode to verify dataLayer contains affiliate information
   - Test full user journey from affiliate link to registration

### Phase 3: Cross-browser Testing
- Verify consistent behavior across Chrome, Firefox, Safari, and Edge
- Test on both desktop and mobile devices

## Site-Specific Configuration Values
Update these values for each site:

| Site Name | GTM ID | Notes |
|-----------|--------|-------|
| Casimboo  | GTM-NQV9C6X | Pilot site, implementation complete |
| Site 2    | GTM-XXXXX | Replace with actual GTM ID |
| ...       | ...    | ... |

## Troubleshooting Common Issues
- **Missing Affiliate Parameters**: Ensure all URL parameters (tracker, btag, affid) are correctly extracted and stored
- **GTM Not Loading**: Check SITE_CONFIG.gtmId is correct for each site
- **Tracking Not Persisting**: Verify cookie and localStorage backup functionality
- **Consent Issues**: Remember affiliate tracking should work regardless of consent status

## Implementation Checklist
- [ ] Update useCookieConsent.js
- [ ] Verify SITE_CONFIG.gtmId in globalData.js
- [ ] Update vue-gtm.client.js with affiliate parameters
- [ ] Add runtime configuration to nuxt.config.ts
- [ ] Test affiliate tracking functionality
- [ ] Test GTM implementation
- [ ] Cross-browser testing
- [ ] Document site-specific configurations 