import { ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, m as msgTranslate, h as pp_promotions, r as regLink, P as PP_LOBBY_LINK } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "@unhead/vue";
import "@unhead/shared";
import "unhead";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(true);
    const error = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-77dc0b87><div class="container mx-auto pt-20" data-v-77dc0b87><h1 class="text-center text-white" data-v-77dc0b87>${ssrInterpolate(((_a = unref(msgTranslate)) == null ? void 0 : _a.promotions) || "Promotions")}</h1></div>`);
      if (loading.value) {
        _push(`<div class="text-center py-10" data-v-77dc0b87><p class="text-white" data-v-77dc0b87>Loading promotions...</p></div>`);
      } else if (error.value) {
        _push(`<div class="text-center py-10" data-v-77dc0b87><p class="text-white" data-v-77dc0b87>Error loading promotions. Please try again later.</p></div>`);
      } else if (unref(pp_promotions) && unref(pp_promotions).length > 0) {
        _push(`<div class="container mx-auto" data-v-77dc0b87><!--[-->`);
        ssrRenderList(unref(pp_promotions), (promo) => {
          var _a2;
          _push(`<div class="p-5 grid grid-cols-1 lg:grid-cols-2 my-10 bg-gray-300 shadow-black shadow-lg rounded-lg items-center" data-v-77dc0b87><a${ssrRenderAttr("href", unref(regLink))} data-v-77dc0b87><img class="rounded-lg w-full"${ssrRenderAttr("src", promo.bigImageUrl)}${ssrRenderAttr("alt", "Promotion banner: " + promo.name + ". " + promo.title + ". " + promo.subTitle)}${ssrRenderAttr("title", promo.name + ". " + promo.title)} data-v-77dc0b87></a><div class="info md:px-10 px-4 grid grid-cols-1 justify-between" data-v-77dc0b87><h2 class="text-3xl py-4 md:pt-0 uppercase" data-v-77dc0b87>${ssrInterpolate(promo.title)}</h2><h5 class="text-xl uppercase pb-4 md:py-10" data-v-77dc0b87>${ssrInterpolate(promo.subTitle)}</h5><a${ssrRenderAttr("href", unref(regLink))} class="text-center py-3 mt-2 px-8 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 uppercase" data-v-77dc0b87>${ssrInterpolate(((_a2 = unref(msgTranslate)) == null ? void 0 : _a2.see_more) || "See More")}</a>`);
          if (promo.disclaimer !== null) {
            _push(`<div data-v-77dc0b87><div class="text-sm/[10px] py-5 text-slate-800/60 italic leading-normal" data-v-77dc0b87>${promo.disclaimer ?? ""}</div><span class="text-sm/[12px] text-slate-800/75" data-v-77dc0b87><a${ssrRenderAttr("href", unref(PP_LOBBY_LINK) + "promotions?code=" + promo.code)} class="text-sm/[10px] py-5 text-slate-800/60 italic leading-normal" target="_blank" rel="noopener noreferrer" data-v-77dc0b87> Full Terms Apply </a></span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-10" data-v-77dc0b87><p class="text-white" data-v-77dc0b87>No promotions available for your region.</p></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/promotions/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-77dc0b87"]]);
export {
  index as default
};
//# sourceMappingURL=index-DrXDPn3M.js.map
