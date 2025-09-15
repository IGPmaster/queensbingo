import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { m as msgTranslate, r as regLink, g as games } from "../server.mjs";
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
  __name: "all-games",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-even lg:py-10" }, _attrs))}><div class="row bgr_red lg:mb-4 pt-20"><div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-10 items-center mx-auto p-4"><div class="col-span-full lg:col-span-6"><p class="gamesSectionHead text-center lg:text-left">${ssrInterpolate(((_a = unref(msgTranslate)) == null ? void 0 : _a.all_games) || "All Games")}</p></div><div class="lg:block lg:col-span-2"><div class=""><a${ssrRenderAttr("href", unref(regLink))} class="waves-effect waves-light btn-flat center hz-hollow"><i class="material-icons right">arrow_forward</i>Sign Up </a></div></div></div></div><div class="px-4 sm:px-6 md:px-0"><div class="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"><!--[-->`);
      ssrRenderList(unref(games), (game) => {
        _push(`<div class="${ssrRenderClass("item " + game.id)}"><div class=""><div class="show show-first first-content-border"><a${ssrRenderAttr("href", unref(regLink))} target="_blank"><img class="responsive-img item-qqq min-w-full"${ssrRenderAttr("src", game.image)}${ssrRenderAttr("alt", "Image of " + game.gameName + " online slot. " + game.description)}${ssrRenderAttr("title", game.gameName + " - " + game.id)}></a><div class="mask"><a${ssrRenderAttr("href", unref(regLink))} target="_blank"><div class="gameDescr">`);
        if (game && game.description && game.description.length > 0) {
          _push(`<div>${ssrInterpolate(game.description)}</div>`);
        } else {
          _push(`<i class="large material-icons">play_arrow</i>`);
        }
        _push(`</div></a></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/all-games.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=all-games-BMaGhhzM.js.map
