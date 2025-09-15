import { ref, withAsyncContext, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { a as globalContent, m as msgTranslate, l as loadLang } from "../server.mjs";
import "hookable";
import { u as useAsyncData } from "./asyncData-DjIsNNZu.js";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "ofetch";
import "unctx";
import "h3";
import "@unhead/vue";
import "@unhead/shared";
import "unhead";
import "vue-router";
import "radix3";
import "ufo";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const htmlContent = ref("");
    [__temp, __restore] = withAsyncContext(async () => useAsyncData("translations", async () => {
      try {
        await loadLang();
      } catch (error) {
        console.error("Error loading translations:", error);
      }
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-white py-10"><div class="container mx-auto px-0"><div class="g-btn-wrapper mt-10 md:mt-20 flex flex-wrap justify-center"><!--[-->`);
      ssrRenderList(unref(globalContent), (value, key) => {
        var _a;
        _push(`<button class="h-10 px-4 md:px-8 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 uppercase text-xs md:text-base">${ssrInterpolate(((_a = unref(msgTranslate)) == null ? void 0 : _a[value]) || value)}</button>`);
      });
      _push(`<!--]--></div><div class="px-4"><div>${htmlContent.value ?? ""}</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compliance/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-NpI1siox.js.map
