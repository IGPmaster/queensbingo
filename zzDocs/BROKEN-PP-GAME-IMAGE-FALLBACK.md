# Broken PP Game Image Fallback Fix

**Date:** 2026-03-26
**Affects:** Homepage game sections, all category pages, all-games page

## Problem

Some games from the ProgressPlay API have image URLs that return 404. The previous fallback behaviour set `game.image = 'newGameImg.jpg'`, which created ugly rows of identical placeholder tiles across the game grids.

## Solution

Remove broken-image games from the grid entirely and let working games backfill the slots. On homepage sections (which show 12 games), the grid stays full because the computed pulls from the larger pool. On category pages, broken games simply disappear.

## How It Works

### Homepage Section Components (5 files)

**Files:** `NewGames.vue`, `PopularGames.vue`, `SlotGames.vue`, `CasinoGames.vue`, `JackpotGames.vue`

Each component:
1. Maintains a `failedImages` Set ref
2. Has an `onImageError(game)` handler that adds the game ID to the Set
3. A `displayedGames` computed filters out failed IDs **before** slicing to 12:
   ```js
   [...sourceGames.value].reverse().filter(g => !failedImages.value.has(g.id)).slice(0, 12)
   ```
   This means the grid always shows 12 games (backfilled from deeper in the pool).

### FrontPageGames.vue (special case)

**File:** `components/FrontPageGames.vue`

This component has TWO game sections (New Games + Popular Games) with inline filtering and its own direct API fetch. Each section has its own:
- `failedNewImages` / `failedPopularImages` Set refs
- `onNewImageError()` / `onPopularImageError()` handlers
- `displayedNewGames` / `displayedPopularGames` computeds

### Category Pages (8 files)

**Files:** `pages/slot-games.vue`, `popular-games.vue`, `casino-games.vue`, `jackpot-games.vue`, `live-games.vue`, `blackjack-games.vue`, `roulette-games.vue`, `scratchcards.vue`

Each page:
1. Adds `ref` and `computed` imports
2. Adds `failedImages` Set, `onImageError()` function, and `visibleGames` computed
3. Template `v-for` iterates `visibleGames` instead of the raw games ref
4. `@error` calls `onImageError(game)` instead of swapping to placeholder

### All-Games Page

**File:** `pages/all-games.vue`

Same pattern as category pages but using `games` as the source for the `visibleGames` computed.

## Additional Changes

### server/api/pp/games.js (new file)

Nuxt server route for local dev — Cloudflare Functions don't run with `nuxi dev`. Proxies to the ProgressPlay API (whitelabelId=188) with the same headers as the production Cloudflare Function, falls back to the CloudFlare worker on failure. 8-second timeout via AbortController.

### composables/globalData.js (SSR URL fix)

```js
// Before
const KV_GAMES_PRIMARY = '/api/pp/games';
const KV_GAMES_FALLBACK = '/api/worker/games';

// After
const KV_GAMES_PRIMARY = process.client ? '/api/pp/games' : 'https://content.progressplay.net/api23/api/game?whitelabelId=188';
const KV_GAMES_FALLBACK = process.client ? '/api/worker/games' : 'https://access-ppgames.tech1960.workers.dev/';
```

Relative paths (`/api/pp/games`) don't work during SSR because there's no browser origin. Client-side keeps the relative paths (routed through Cloudflare Functions); server-side uses absolute URLs.

## Files Changed (17 total)

| # | File | Change |
|---|------|--------|
| 1-5 | `components/{New,Popular,Slot,Casino,Jackpot}Games.vue` | failedImages + displayedGames computed + backfill |
| 6 | `components/FrontPageGames.vue` | failedImages for both New + Popular sections |
| 7-14 | `pages/{slot,popular,casino,jackpot,live,blackjack,roulette}-games.vue`, `scratchcards.vue` | failedImages + visibleGames computed |
| 15 | `pages/all-games.vue` | failedImages + visibleGames computed |
| 16 | `composables/globalData.js` | SSR-safe fetch URLs |
| 17 | `server/api/pp/games.js` | New — local dev proxy |

## Verification

1. Run `npx nuxi dev` — games load on homepage and category pages
2. Open DevTools Network tab — find a game image that 404s and verify it disappears from the grid (no placeholder)
3. Homepage sections still show 12 games (backfilled from pool)
4. Category pages simply remove broken entries

## QueensBingo-Specific Notes

Unlike jazzy (which uses a shared `GameCard.vue` component with an emit pattern), queensbingo uses inline `<img>` tags everywhere — both in homepage components and category pages. This makes the pattern simpler: each file has its own `failedImages` Set and `onImageError()` handler directly, with no parent-child emit coordination needed.

Homepage components show 12 games (not 16 like jazzy) due to the 6-column grid layout.
