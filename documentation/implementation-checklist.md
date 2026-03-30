# Implementation Checklist for Queens Bingo

## Completed

### Base URL Migration
- [x] Changed base URL from `www.queensbingo.com` to `play.queensbingo.com`
- [x] Updated `PP_LOBBY_LINK` in `globalData.js`
- [x] Updated Promotions link in `layouts/default.vue`
- [x] Updated Referer/Origin headers in `server/api/pp/games.js`

### Registration/Login Link Format
- [x] Changed link format from `#registration`/`#login` to `?nav=registration`/`?nav=login`
- [x] Updated `updateLinks()` in `globalData.js`
- [x] Updated `useCookieConsent.js`
- [x] Updated `FrontPageGames.vue`

### Affiliate Tracking Fix
- [x] Replaced `handleTracker()` with generic `handleParameter()` in `globalData.js`
- [x] Added SSR guard (`typeof window === 'undefined'` check)
- [x] Now captures `tracker`, `btag`, and `affid` from URL params
- [x] Persists all params to cookies (30-day expiry)
- [x] All affiliate params appended to registration/login links

### Build Artifacts Cleanup
- [x] Removed `.nuxt/` and `.output/` from git tracking
- [x] Added `.nuxt` and `.output` to `.gitignore`

### GTM Configuration
- [x] SITE_CONFIG.gtmId set to `GTM-WZ28D5Z2` in `globalData.js`
- [x] `nuxt.config.ts` configured with runtime config

## Testing

### Affiliate Tracking
- [ ] Test with `?tracker=test123&btag=test456&affid=test789`
- [ ] Verify params persist to cookies across page loads
- [ ] Verify registration/login links include all affiliate params
- [ ] Test with no params (links should just have `?nav=registration`)

### GTM
- [ ] Verify GTM loads correctly
- [ ] Check dataLayer contains affiliate information
- [ ] Test full user journey (affiliate link → registration)

### Cross-browser
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile devices

## Site Configuration
- **Site Name**: Queens Bingo
- **GTM ID**: GTM-WZ28D5Z2
- **Base URL**: https://play.queensbingo.com
- **Whitelabel ID**: 188
- **Hosting**: Cloudflare Pages 