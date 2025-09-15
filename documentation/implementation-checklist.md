# Implementation Checklist for Casino Sites

## Pre-Implementation
- [ ] Clone the repository for the target site
- [ ] Create a new feature branch: `git checkout -b feature/affiliate-gtm-enhancement`
- [ ] Verify current file structure matches Casimboo (reference site)

## Phase 1: Code Updates

### Update `useCookieConsent.js`
- [ ] Update `setAffiliateTracking()` function with enhanced cookie attributes and localStorage backup
- [ ] Modify `updateLobbyLinks()` to prioritize URL parameters over cookies
- [ ] Update `onMounted()` to check URL parameters first
- [ ] Ensure tracker handling is uniform across all lifecycle methods
- [ ] Update `watch` effect for preferences to maintain behavior consistency

### Check GTM Configuration 
- [ ] Verify the SITE_CONFIG.gtmId in `globalData.js` is correct for this site
- [ ] Ensure `nuxt.config.ts` imports and uses SITE_CONFIG properly
- [ ] Update `vue-gtm.client.js` to include affiliate parameters in the dataLayer
- [ ] Add runtime configuration to `nuxt.config.ts` if needed

## Phase 2: Testing

### Affiliate Tracking Testing
- [ ] Test with URL parameter `?tracker=test123`
- [ ] Verify URL parameters override existing cookies
- [ ] Check cookie attributes (SameSite=Strict, Secure)
- [ ] Test localStorage backup by clearing cookies
- [ ] Test tracking works without user consent

### GTM Testing
- [ ] Verify GTM loads correctly
- [ ] Check dataLayer contains affiliate information
- [ ] Test all affiliate parameters (`tracker`, `btag`, `affid`)
- [ ] Validate full user journey (affiliate link → registration)

## Phase 3: Cross-browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Test on mobile devices

## Deployment
- [ ] Create pull request for review
- [ ] Address any review comments
- [ ] Merge changes
- [ ] Monitor post-deployment

## Site-Specific Configuration

### Current Site Information
- Site Name: _________________
- GTM ID: _________________
- Special Requirements: _________________

### Notes and Issues
_Document any site-specific issues or configuration requirements here_ 