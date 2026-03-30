# Affiliate Tracking and GTM Enhancement Implementation

## Overview
This document outlines the implementation of affiliate tracking and GTM enhancements for Queens Bingo. The implementation prioritizes URL parameters over cookies for affiliate tracking and ensures a standardized GTM implementation using SITE_CONFIG.

## Site Configuration
- **Site Name**: Queens Bingo
- **GTM ID**: GTM-WZ28D5Z2
- **Base URL**: https://play.queensbingo.com
- **Whitelabel ID**: 188

## Affiliate Tracking Logic

### `handleParameter()` in `globalData.js`
A generic function that handles any affiliate parameter (`tracker`, `btag`, `affid`):
1. Checks URL query params first
2. Falls back to cookies
3. Persists URL params to cookies (30-day expiry, SameSite=None, Secure)
4. Includes SSR guard (`typeof window === 'undefined'` check)

### `updateLinks()` in `globalData.js`
Builds registration and login links dynamically:
- Calls `handleParameter()` for `tracker`, `btag`, and `affid`
- Constructs query string from all available params
- Appends `nav=registration` or `nav=login` as query param

### Link Format
Registration and login links use query param format:
- `https://play.queensbingo.com?tracker=xxx&btag=yyy&affid=zzz&nav=registration`
- `https://play.queensbingo.com?tracker=xxx&btag=yyy&affid=zzz&nav=login`

### `useCookieConsent.js`
Also builds reg/login links with affiliate params from cookie consent flow. Uses the same `?nav=registration` / `?nav=login` format.

### `FrontPageGames.vue`
Builds links with tracker and country params using `?nav=` format.

## GTM Implementation
- **SITE_CONFIG Integration**: GTM ID sourced from `SITE_CONFIG.gtmId` in `globalData.js`
- **Enhanced DataLayer**: Affiliate tracking parameters included in dataLayer
- **Nuxt Configuration**: Runtime config ensures SITE_CONFIG is available

## Testing

### Affiliate Tracking
- Test with URL parameters: `?tracker=test123&btag=test456&affid=test789`
- Verify URL params persist to cookies
- Verify cookies are picked up on subsequent visits without URL params
- Check registration/login links contain all affiliate params
- Test affiliate tracking works on page load without consent

### GTM
- Verify GTM loads correctly
- Check dataLayer contains affiliate information
- Test full user journey from affiliate link to registration

## Troubleshooting
- **Missing Affiliate Parameters**: Check `handleParameter()` is being called for all three params
- **GTM Not Loading**: Check SITE_CONFIG.gtmId matches GTM-WZ28D5Z2
- **Tracking Not Persisting**: Verify cookie attributes (SameSite=None, Secure) work in current browser
- **SSR Errors**: Ensure `handleParameter()` SSR guard is in place 