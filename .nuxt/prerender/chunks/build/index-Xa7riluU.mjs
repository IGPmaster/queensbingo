import { a as buildAssetsURL } from '../_/renderer.mjs';
import { unref, useSSRContext, ref, mergeProps, withAsyncContext, withCtx, createTextVNode, toDisplayString, createVNode } from 'file:///Users/irek/sites/queensbingo/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderClass } from 'file:///Users/irek/sites/queensbingo/node_modules/vue/server-renderer/index.mjs';
import { d as fetchPromotions, p as promotionsPosts, r as regLink, _ as _export_sfc, l as loadLang, f as fetchGames, m as msgTranslate, n as newGames, b as popularGames, s as slotGames } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BwA2waJh.mjs';
import { u as useAsyncData } from './asyncData-DjIsNNZu.mjs';
import { u as useFetch } from './fetch-BacJTO93.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/h3/dist/index.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/devalue/index.js';
import 'file:///Users/irek/sites/queensbingo/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/destr/dist/index.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/hookable/dist/index.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/klona/dist/index.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/scule/dist/index.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/defu/dist/defu.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/ohash/dist/index.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/ufo/dist/index.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/irek/sites/queensbingo/node_modules/pathe/dist/index.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/unhead/dist/index.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/unctx/dist/index.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$4 = {
  __name: "MainBanner",
  __ssrInlineRender: true,
  emits: ["loaded"],
  setup(__props, { emit: __emit }) {
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      if (loading.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading-placeholder" }, _attrs))} data-v-64c6a3d1><svg class="spinner" viewBox="0 0 50 50" data-v-64c6a3d1><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3" data-v-64c6a3d1></circle></svg></div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(promotionsPosts), (promo) => {
          var _a;
          _push(`<div class="head-banner h-100" data-v-64c6a3d1><div class="w-full" data-v-64c6a3d1>`);
          if (promo.acf && promo.yoast_head_json) {
            _push(`<a${ssrRenderAttr("href", unref(regLink))} style="${ssrRenderStyle({ "margin-bottom": "-5px" })}" data-v-64c6a3d1><picture data-v-64c6a3d1><source media="(min-width: 992px)"${ssrRenderAttr("srcset", promo.acf.image_full || "../static/casimboo_loading.webp")}${ssrRenderAttr("alt", promo.yoast_head_json.description)}${ssrRenderAttr("title", promo.yoast_head_json.og_title)} data-v-64c6a3d1><img${ssrRenderAttr("src", promo.acf.image_small || "../static/casimboo_loading.webp")} class="w-full h-auto"${ssrRenderAttr("alt", promo.yoast_head_json.description)}${ssrRenderAttr("title", promo.yoast_head_json.og_title)} style="${ssrRenderStyle({ "min-width": "100vw", "padding-top": "4rem" })}" width="1920" height="400" data-v-64c6a3d1></picture></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div data-v-64c6a3d1><div class="container mx-auto text-center sig_terms lg:py-5 lg:w-3/4" data-v-64c6a3d1><div class="px-5 [&amp;_p]:leading-tight" data-v-64c6a3d1>${(_a = promo.acf.sig_terms) != null ? _a : ""}</div></div><div class="container mx-auto" data-v-64c6a3d1><div class="flex justify-center lg:pb-5 py-3" data-v-64c6a3d1><img class="lg:w-2/6 w-7/8 place-items-center"${ssrRenderAttr("src", promo.acf.trust_icons)} alt="100% Licensed and fast payouts" data-v-64c6a3d1></div></div></div></div>`);
        });
        _push(`<!--]-->`);
      }
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainBanner.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-64c6a3d1"]]);
const _imports_0 = "" + buildAssetsURL("bingo-room-1.CgjF3woD.webp");
const _imports_1 = "" + buildAssetsURL("bingo-room-2.BXhfKYxx.webp");
const _imports_2 = "" + buildAssetsURL("bingo-room-3.DSWemBm1.webp");
const _imports_3 = "" + buildAssetsURL("bingo-room-4.CUU-hb_b.webp");
const _imports_4 = "" + buildAssetsURL("bingo-room-5.ICpgh3k1.webp");
const _imports_5 = "" + buildAssetsURL("bingo-room-6.C-Q1fnwA.webp");
const _sfc_main$3 = {
  __name: "NewGames",
  __ssrInlineRender: true,
  emits: ["loaded"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const loading = ref(true);
    [__temp, __restore] = withAsyncContext(async () => useAsyncData("new-games-data", async () => {
      try {
        await loadLang();
        await fetchGames();
      } catch (error) {
        console.error("Error loading new games data:", error);
      }
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><div class="container mx-auto px-4 py-6" data-v-e8183aa0><h1 class="text-center text-2xl sm:text-3xl lg:text-4xl font-bold" data-v-e8183aa0>New Online Bingo Site Buzzing With Fun!</h1><p class="text-center" data-v-e8183aa0>Play our sweet and sticky bingo games and spin our delicious slots! Check out the finger-licking specials waiting for you in our promotions jar.</p></div><div class="container mx-auto px-4 py-6" data-v-e8183aa0><div class="grid grid-cols-2 lg:grid-cols-3 gap-4" data-v-e8183aa0><a${ssrRenderAttr("href", unref(regLink))} target="_blank" rel="noopener" data-v-e8183aa0><img${ssrRenderAttr("src", _imports_0)} alt="Image 1" class="w-full h-auto object-cover rounded transition-transform duration-300 hover:scale-105" data-v-e8183aa0></a><a${ssrRenderAttr("href", unref(regLink))} target="_blank" rel="noopener" data-v-e8183aa0><img${ssrRenderAttr("src", _imports_1)} alt="Image 2" class="w-full h-auto object-cover rounded" data-v-e8183aa0></a><a${ssrRenderAttr("href", unref(regLink))} target="_blank" rel="noopener" data-v-e8183aa0><img${ssrRenderAttr("src", _imports_2)} alt="Image 3" class="w-full h-auto object-cover rounded" data-v-e8183aa0></a><a${ssrRenderAttr("href", unref(regLink))} target="_blank" rel="noopener" data-v-e8183aa0><img${ssrRenderAttr("src", _imports_3)} alt="Image 4" class="w-full h-auto object-cover rounded" data-v-e8183aa0></a><a${ssrRenderAttr("href", unref(regLink))} target="_blank" rel="noopener" data-v-e8183aa0><img${ssrRenderAttr("src", _imports_4)} alt="Image 5" class="w-full h-auto object-cover rounded" data-v-e8183aa0></a><img${ssrRenderAttr("src", _imports_5)} alt="Image 6" class="w-full h-auto object-cover rounded" data-v-e8183aa0></div></div><div class="section-odd py-10 lg:py-10" data-v-e8183aa0><div class="row bgr_red lg:mb-4" data-v-e8183aa0><div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-10 items-center mx-auto p-4" data-v-e8183aa0><div class="col-span-full lg:col-span-6" data-v-e8183aa0><p class="gamesSectionHead text-center lg:text-left" data-v-e8183aa0>${ssrInterpolate(((_a = unref(msgTranslate)) == null ? void 0 : _a.new_games) || "New Games")}</p></div><div class="lg:block lg:col-span-2" data-v-e8183aa0><div class="" data-v-e8183aa0>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/all-games",
        class: "cas-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.see_more) || "See More")} ${ssrInterpolate(((_b = unref(msgTranslate)) == null ? void 0 : _b.new_games) || "New Games")} <i class="material-icons right" style="${ssrRenderStyle({ "font-size": "16px" })}" data-v-e8183aa0${_scopeId}>arrow_forward</i>`);
          } else {
            return [
              createTextVNode(toDisplayString(((_c = unref(msgTranslate)) == null ? void 0 : _c.see_more) || "See More") + " " + toDisplayString(((_d = unref(msgTranslate)) == null ? void 0 : _d.new_games) || "New Games") + " ", 1),
              createVNode("i", {
                class: "material-icons right",
                style: { "font-size": "16px" }
              }, "arrow_forward")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
      if (loading.value) {
        _push(`<div class="loading-placeholder" data-v-e8183aa0><svg class="spinner" viewBox="0 0 50 50" data-v-e8183aa0><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3" data-v-e8183aa0></circle></svg></div>`);
      } else {
        _push(`<div class="px-4 sm:px-6 md:px-0" data-v-e8183aa0><div class="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" data-v-e8183aa0><!--[-->`);
        ssrRenderList(unref(newGames).slice(-12).reverse(), (game) => {
          _push(`<div class="${ssrRenderClass("item " + game.id)}" data-v-e8183aa0><div class="" data-v-e8183aa0><div class="show show-first first-content-border" data-v-e8183aa0><a${ssrRenderAttr("href", unref(regLink))} target="_blank" data-v-e8183aa0><img class="responsive-img item-qqq min-w-full"${ssrRenderAttr("src", game.image)}${ssrRenderAttr("alt", "Image of " + game.gameName + " online slot. " + game.description)}${ssrRenderAttr("title", game.gameName + " - " + game.id)} data-v-e8183aa0></a><div class="mask" data-v-e8183aa0><a${ssrRenderAttr("href", unref(regLink))} target="_blank" data-v-e8183aa0><div class="gameDescr" data-v-e8183aa0>`);
          if (_ctx.newGame && game.description && game.description.length > 0) {
            _push(`<div data-v-e8183aa0>${ssrInterpolate(game.description)}</div>`);
          } else {
            _push(`<i class="large material-icons" data-v-e8183aa0>play_arrow</i>`);
          }
          _push(`</div></a></div></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewGames.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e8183aa0"]]);
const _sfc_main$2 = {
  __name: "PopularGames",
  __ssrInlineRender: true,
  emits: ["loaded"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const loading = ref(true);
    [__temp, __restore] = withAsyncContext(async () => useAsyncData("popular-games-data", async () => {
      try {
        await loadLang();
        await fetchGames();
      } catch (error) {
        console.error("Error loading popular games data:", error);
      }
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-even py-10 lg:py-10" }, _attrs))} data-v-95572b16><div class="row bgr_red lg:mb-4" data-v-95572b16><div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-10 items-center mx-auto p-4" data-v-95572b16><div class="col-span-full lg:col-span-6" data-v-95572b16><p class="gamesSectionHead text-center lg:text-left" data-v-95572b16>${ssrInterpolate(((_a = unref(msgTranslate)) == null ? void 0 : _a.popular_games) || "Popular Games")}</p></div><div class="lg:block lg:col-span-2" data-v-95572b16><div class="" data-v-95572b16>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/popular-games",
        class: "cas-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.see_more) || "See More")} ${ssrInterpolate(((_b = unref(msgTranslate)) == null ? void 0 : _b.popular_games) || "Popular Games")} <i class="material-icons right" style="${ssrRenderStyle({ "font-size": "16px" })}" data-v-95572b16${_scopeId}>arrow_forward</i>`);
          } else {
            return [
              createTextVNode(toDisplayString(((_c = unref(msgTranslate)) == null ? void 0 : _c.see_more) || "See More") + " " + toDisplayString(((_d = unref(msgTranslate)) == null ? void 0 : _d.popular_games) || "Popular Games") + " ", 1),
              createVNode("i", {
                class: "material-icons right",
                style: { "font-size": "16px" }
              }, "arrow_forward")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
      if (loading.value) {
        _push(`<div class="loading-placeholder" data-v-95572b16><svg class="spinner" viewBox="0 0 50 50" data-v-95572b16><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3" data-v-95572b16></circle></svg></div>`);
      } else {
        _push(`<div class="px-4 sm:px-6 md:px-0" data-v-95572b16><div class="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" data-v-95572b16><!--[-->`);
        ssrRenderList(unref(popularGames).slice(-12).reverse(), (game) => {
          _push(`<div class="${ssrRenderClass("item " + game.id)}" data-v-95572b16><div class="" data-v-95572b16><div class="show show-first first-content-border" data-v-95572b16><a${ssrRenderAttr("href", unref(regLink))} target="_blank" data-v-95572b16><img class="responsive-img item-qqq min-w-full"${ssrRenderAttr("src", game.image)}${ssrRenderAttr("alt", "Image of " + game.gameName + " online slot. " + game.description)}${ssrRenderAttr("title", game.gameName + " - " + game.id)} data-v-95572b16></a><div class="mask" data-v-95572b16><a${ssrRenderAttr("href", unref(regLink))} target="_blank" data-v-95572b16><div class="gameDescr" data-v-95572b16>`);
          if (_ctx.popularGame && game.description && game.description.length > 0) {
            _push(`<div data-v-95572b16>${ssrInterpolate(game.description)}</div>`);
          } else {
            _push(`<i class="large material-icons" data-v-95572b16>play_arrow</i>`);
          }
          _push(`</div></a></div></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopularGames.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-95572b16"]]);
const _sfc_main$1 = {
  __name: "SlotGames",
  __ssrInlineRender: true,
  emits: ["loaded"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const loading = ref(true);
    [__temp, __restore] = withAsyncContext(async () => useAsyncData("slot-games-data", async () => {
      try {
        await loadLang();
        await fetchGames();
      } catch (error) {
        console.error("Error loading slot games data:", error);
      }
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-odd py-10 lg:py-10" }, _attrs))} data-v-7fa6892c><div class="row bgr_red lg:mb-4" data-v-7fa6892c><div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-10 items-center mx-auto p-4" data-v-7fa6892c><div class="col-span-full lg:col-span-6" data-v-7fa6892c><p class="gamesSectionHead text-center lg:text-left" data-v-7fa6892c>${ssrInterpolate(((_a = unref(msgTranslate)) == null ? void 0 : _a.slot_games) || "Slot Games")}</p></div><div class="lg:block lg:col-span-2" data-v-7fa6892c><div class="" data-v-7fa6892c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/slot-games",
        class: "cas-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.see_more) || "See More")} ${ssrInterpolate(((_b = unref(msgTranslate)) == null ? void 0 : _b.slot_games) || "Slot Games")} <i class="material-icons right" style="${ssrRenderStyle({ "font-size": "16px" })}" data-v-7fa6892c${_scopeId}>arrow_forward</i>`);
          } else {
            return [
              createTextVNode(toDisplayString(((_c = unref(msgTranslate)) == null ? void 0 : _c.see_more) || "See More") + " " + toDisplayString(((_d = unref(msgTranslate)) == null ? void 0 : _d.slot_games) || "Slot Games") + " ", 1),
              createVNode("i", {
                class: "material-icons right",
                style: { "font-size": "16px" }
              }, "arrow_forward")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
      if (loading.value) {
        _push(`<div class="loading-placeholder" data-v-7fa6892c><svg class="spinner" viewBox="0 0 50 50" data-v-7fa6892c><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3" data-v-7fa6892c></circle></svg></div>`);
      } else {
        _push(`<div class="px-4 sm:px-6 md:px-0" data-v-7fa6892c><div class="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" data-v-7fa6892c><!--[-->`);
        ssrRenderList(unref(slotGames).slice(-12).reverse(), (game) => {
          _push(`<div class="${ssrRenderClass("item " + game.id)}" data-v-7fa6892c><div class="" data-v-7fa6892c><div class="show show-first first-content-border" data-v-7fa6892c><a${ssrRenderAttr("href", unref(regLink))} target="_blank" data-v-7fa6892c><img class="responsive-img item-qqq min-w-full"${ssrRenderAttr("src", game.image)}${ssrRenderAttr("alt", "Image of " + game.gameName + " online slot. " + game.description)}${ssrRenderAttr("title", game.gameName + " - " + game.id)} data-v-7fa6892c></a><div class="mask" data-v-7fa6892c><a${ssrRenderAttr("href", unref(regLink))} target="_blank" data-v-7fa6892c><div class="gameDescr" data-v-7fa6892c>`);
          if (_ctx.slotGame && game.description && game.description.length > 0) {
            _push(`<div data-v-7fa6892c>${ssrInterpolate(game.description)}</div>`);
          } else {
            _push(`<i class="large material-icons" data-v-7fa6892c>play_arrow</i>`);
          }
          _push(`</div></a></div></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SlotGames.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7fa6892c"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useFetch(() => fetchPromotions(), "$PslAyef5YX");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainBanner = __nuxt_component_0;
      const _component_NewGames = __nuxt_component_1;
      const _component_PopularGames = __nuxt_component_2;
      const _component_SlotGames = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_MainBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_NewGames, null, null, _parent));
      _push(ssrRenderComponent(_component_PopularGames, null, null, _parent));
      _push(ssrRenderComponent(_component_SlotGames, null, null, _parent));
      _push(`<div class="section py-10"><div class="sm:container mx-auto px-4 sm:px-6 md:px-8"><!--[-->`);
      ssrRenderList("promotionsPosts" in _ctx ? _ctx.promotionsPosts : unref(promotionsPosts), (promotion) => {
        var _a;
        _push(`<div><div class="overflow-hidden"><div class="break-words">${(_a = promotion.content.rendered) != null ? _a : ""}</div></div></div>`);
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Xa7riluU.mjs.map
