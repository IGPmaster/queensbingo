import { a as buildAssetsURL } from '../_/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BwA2waJh.mjs';
import { m as msgTranslate, r as regLink, w as loginLink, u as footerIcons, v as footerText, _ as _export_sfc, o as fetchFooterIcons, q as lang, t as fetchFooterText, l as loadLang } from './server.mjs';
import { ref, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext, withAsyncContext } from 'file:///Users/irek/sites/queensbingo/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderTeleport, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain } from 'file:///Users/irek/sites/queensbingo/node_modules/vue/server-renderer/index.mjs';
import { u as useCookieConsent } from './useCookieConsent-n_xe8OZG.mjs';
import { u as useFetch } from './fetch-BacJTO93.mjs';
import { u as useAsyncData } from './asyncData-DjIsNNZu.mjs';
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

const _imports_1 = "" + buildAssetsURL("queens-bingo-logo.BHNQN9fv.svg");
const _sfc_main$3 = {
  __name: "Footer",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useCookieConsent();
    useFetch(async () => {
      await fetchFooterIcons(lang.value);
      await fetchFooterText(lang.value);
    }, "$oeF46sJglj");
    [__temp, __restore] = withAsyncContext(async () => useAsyncData("translations", async () => {
      try {
        await loadLang();
      } catch (error) {
        console.error("Error loading translations:", error);
      }
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2a048202><footer class="bg-tertiary_dark py-10" data-v-2a048202><div class="row" data-v-2a048202><div class="container mx-auto" data-v-2a048202><ul class="flex flex-wrap justify-center pb-10 gap-8" data-v-2a048202><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.home) || "Home")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.home) || "Home"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/promotions",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.promotions) || "Promotions")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.promotions) || "Promotions"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.legal) || "Legal")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.legal) || "Legal"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/all-games",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.all_games) || "All Games")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.all_games) || "All Games"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/casino-games",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.casino_games) || "Casino Games")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.casino_games) || "Casino Games"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/jackpot-games",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.jackpot_games) || "Jackpot Games")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.jackpot_games) || "Jackpot Games"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/live-games",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.live_games) || "Live Games")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.live_games) || "Live Games"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/popular-games",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.popular_games) || "Popular Games")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.popular_games) || "Popular Games"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/scratchcards",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.scratchcards_games) || "Scratchcards")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.scratchcards_games) || "Scratchcards"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/slot-games",
        class: "uppercase font-light text-sm text-zinc-200 py-2 px-4 bg-stone-800 rounded hover:bg-[#323131] transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.slot_games) || "Slot Games")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.slot_games) || "Slot Games"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><div class="row" data-v-2a048202><div class="container mx-auto footerContainer" data-v-2a048202><ul class="container mx-auto flex list-none flex-wrap text-lg justify-center gap-6 py-8 text-gray-800" data-v-2a048202><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/aboutus",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.aboutus) || "About Us")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.aboutus) || "About Us"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/withdrawals",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.withdrawals) || "Withdrawals")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.withdrawals) || "Withdrawals"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/deposits",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.deposits) || "Deposits")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.deposits) || "Deposits"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/contact",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.contact) || "Contact")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.contact) || "Contact"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/privacy",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.privacy) || "Privacy")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.privacy) || "Privacy"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/responsible",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.responsible) || "Responsible Gaming")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.responsible) || "Responsible Gaming"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/faq",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.faq) || "FAQ")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.faq) || "FAQ"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/payouts",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.payouts) || "Payouts")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.payouts) || "Payouts"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/terms",
        class: "compliance-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.terms) || "Terms")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.terms) || "Terms"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2a048202><button class="compliance-btn" data-v-2a048202>${ssrInterpolate(((_a = unref(msgTranslate)) == null ? void 0 : _a.cookie_settings) || "Cookie Settings")}</button></li></ul><!--[-->`);
      ssrRenderList("footerIcons" in _ctx ? _ctx.footerIcons : unref(footerIcons), (icon) => {
        var _a2;
        _push(`<div data-v-2a048202><div data-v-2a048202>${(_a2 = icon.Html) != null ? _a2 : ""}</div></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList("footerText" in _ctx ? _ctx.footerText : unref(footerText), (text) => {
        var _a2;
        _push(`<div class="py-5" data-v-2a048202><p data-v-2a048202>${(_a2 = text.Html) != null ? _a2 : ""}</p></div>`);
      });
      _push(`<!--]--><div class="flex items-center justify-center" data-v-2a048202><img${ssrRenderAttr("src", _imports_1)} alt="Queens Bingo footer Logo" class="bg-primary_bg w-56 p-5 shadow-md rounded-lg" height="" width="" loading="lazy" data-v-2a048202></div></div></div><div class="w-full fixed bottom-0 lg:hidden" data-v-2a048202><div class="grid grid-cols-2" data-v-2a048202><div class="w-full bg-[#91D342] flex justify-center py-3" data-v-2a048202><a${ssrRenderAttr("href", unref(loginLink))} class="flex items-center gap-4 text-[#313131] font-semibold" data-v-2a048202>${ssrInterpolate(((_b = unref(msgTranslate)) == null ? void 0 : _b.login) || "Login")} <i class="material-icons" data-v-2a048202>arrow_forward</i></a></div><div class="w-full bg-[#3598FB] flex justify-center" data-v-2a048202><a${ssrRenderAttr("href", unref(regLink))} class="flex items-center gap-4 text-[#313131] font-semibold" data-v-2a048202>${ssrInterpolate(((_c = unref(msgTranslate)) == null ? void 0 : _c.sign_up) || "Sign Up")} <i class="material-icons" data-v-2a048202>security</i></a></div></div></div></footer></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2a048202"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='22'%20height='22'%20rx='0.785714'%20fill='%23212633'/%3e%3crect%20x='3.6665'%20y='4.58325'%20width='9.16667'%20height='1.83333'%20rx='0.916667'%20fill='%239498A2'/%3e%3crect%20x='3.6665'%20y='10.0833'%20width='14.6667'%20height='1.83333'%20rx='0.916667'%20fill='%239498A2'/%3e%3crect%20x='3.6665'%20y='15.5833'%20width='11.9167'%20height='1.83333'%20rx='0.916667'%20fill='%239498A2'/%3e%3c/svg%3e";
const _sfc_main$2 = {
  __name: "CookieConsent",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      showBanner,
      isPreferencesOpen,
      preferences,
      cookieCategories,
      handleAcceptAll,
      handleDeclineAll,
      savePreferences,
      handleOpenPreferences
    } = useCookieConsent();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      if (unref(showBanner)) {
        _push(`<div class="fixed bottom-0 left-0 right-0 bg-white p-4 border-t z-50"><div class="max-w-6xl mx-auto"><div class="flex flex-col md:flex-row items-center justify-between gap-4"><div class="space-y-2"><p class="text-xs text-gray-600 max-w-3xl"> We use cookies to ensure our partners are properly credited when you visit gaming sites. This is essential for our service operation and partner payments. We also use analytics cookies to improve our service. </p><p class="text-xs text-gray-500"> Read our `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/compliance/cookies",
          class: "underline hover:text-gray-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Cookie Policy`);
            } else {
              return [
                createTextVNode("Cookie Policy")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` and `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/compliance/privacy",
          class: "underline hover:text-gray-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Privacy Policy`);
            } else {
              return [
                createTextVNode("Privacy Policy")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` for more information. </p></div><div class="flex gap-2"><button class="bg-black hover:bg-gray-800 text-white px-4 py-1.5 rounded text-xs"> Accept All </button><button class="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-1.5 rounded text-xs"> Decline Optional Cookies </button><button class="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-1.5 rounded text-xs"> Manage Preferences </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(isPreferencesOpen)) {
          _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]"><div class="bg-white rounded-lg p-6 max-w-xl w-full mx-4"><div class="flex justify-between items-center mb-4"><h2 class="text-sm font-normal text-gray-900"> Cookie Preferences </h2><button class="text-gray-400 hover:text-gray-600 text-sm"> \u2715 </button></div><div class="space-y-6"><!--[-->`);
          ssrRenderList(unref(cookieCategories), (category) => {
            _push2(`<div class="space-y-1"><div class="flex items-center justify-between"><h4 class="text-xs font-medium text-gray-900">${ssrInterpolate(category.label)}</h4><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(preferences)[category.id]) ? ssrLooseContain(unref(preferences)[category.id], null) : unref(preferences)[category.id]) ? " checked" : ""}${ssrIncludeBooleanAttr(category.required) ? " disabled" : ""} class="sr-only peer"><div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-black"></div></label></div><p class="text-xs text-gray-500">${ssrInterpolate(category.description)}</p></div>`);
          });
          _push2(`<!--]--><div class="text-xs text-gray-500 mb-4"> For more information about how we use cookies, please read our `);
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: "/compliance/cookies",
            class: "underline hover:text-gray-700"
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`Cookie Policy`);
              } else {
                return [
                  createTextVNode("Cookie Policy")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(` and `);
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: "/compliance/privacy",
            class: "underline hover:text-gray-700"
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`Privacy Policy`);
              } else {
                return [
                  createTextVNode("Privacy Policy")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`. </div><button class="w-full bg-black hover:bg-gray-800 text-white px-4 py-1.5 rounded text-xs"> Save Preferences </button></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookieConsent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "SeoKit",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SeoKit.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><nav class="bg-primary_bg fixed z-10 py-4 shadow-lg items-center w-full"><div class="w-full md:px-0"><div class="container md:mx-auto grid grid-cols-3 items-center"><div class="left"><div class="menu-btn items-center" id="menu-btn"><img${ssrRenderAttr("src", _imports_0)} alt="Mobile Menu Button" class="w-9 h-9 pl-4 items-center"><div class="menu bg-secondary_bg rounded text-left w-36 drop-shadow-[0_15px_15px_rgba(0,0,0,0.50)] transition duration-300 ease-in-out transform scale-0 origin-top" id="menu">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.home) || "Home")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.home) || "Home"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/promotions",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.promotions) || "Promotions")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.promotions) || "Promotions"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.legal) || "Legal")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.legal) || "Legal"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/all-games",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.all_games) || "All Games")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.all_games) || "All Games"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/popular-games",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.popular_games) || "Popular Games")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.popular_games) || "Popular Games"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/slot-games",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.slot_games) || "Slot Games")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.slot_games) || "Slot Games"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/casino-games",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.casino_games) || "Casino Games")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.casino_games) || "Casino Games"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/jackpot-games",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.jackpot_games) || "Jackpot Games")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.jackpot_games) || "Jackpot Games"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance/contact",
        class: "menu-item hover:bg-slate-800 px-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.contact) || "Contact")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b2 = unref(msgTranslate)) == null ? void 0 : _b2.contact) || "Contact"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a${ssrRenderAttr("href", unref(regLink))} class="menu-item hover:bg-slate-800 px-5">${ssrInterpolate(((_a = unref(msgTranslate)) == null ? void 0 : _a.login) || "Login")}</a></div></div></div><div class="">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex justify-center",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="Queens Bingo header Logo" class="" width="150" height="45"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "Queens Bingo header Logo",
                class: "",
                width: "150",
                height: "45"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="right"><ul class="grid-cols-2 gap-6 hidden lg:flex right"><li class="items-center"><a${ssrRenderAttr("href", unref(loginLink))} class="login-btn">${ssrInterpolate(((_b = unref(msgTranslate)) == null ? void 0 : _b.login) || "Login")}</a></li><li class="items-center"><a${ssrRenderAttr("href", unref(regLink))} class="reg-btn">${ssrInterpolate(((_c = unref(msgTranslate)) == null ? void 0 : _c.sign_up) || "Sign Up")}</a></li></ul><div class="flex lg:hidden right items-center pr-4"><a${ssrRenderAttr("href", unref(loginLink))} class="cas-btn px-4">Login</a></div></div></div></div></nav>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-tD-SubRA.mjs.map
