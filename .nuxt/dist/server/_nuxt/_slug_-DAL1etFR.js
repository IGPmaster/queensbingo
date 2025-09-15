import { _ as __nuxt_component_0 } from "./nuxt-link-BwA2waJh.js";
import { ref, withAsyncContext, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { m as msgTranslate, l as loadLang } from "../server.mjs";
import "hookable";
import { u as useAsyncData } from "./asyncData-DjIsNNZu.js";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "ufo";
import "ofetch";
import "unctx";
import "h3";
import "@unhead/vue";
import "@unhead/shared";
import "unhead";
import "radix3";
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    route.params.slug;
    const htmlContent = ref("");
    [__temp, __restore] = withAsyncContext(async () => useAsyncData("translations", async () => {
      try {
        await loadLang();
      } catch (error) {
        console.error("Error loading translations:", error);
      }
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class=""><div class="container mx-auto bg-white pt-32"><div class="px-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/compliance",
        class: "flex justify-center gap-4 p-2 border rounded border-primary text-gray-800 text-center w-1/2 md:w-1/5 cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<i class="material-icons"${_scopeId}>arrow_back</i> ${ssrInterpolate(((_a = unref(msgTranslate)) == null ? void 0 : _a.legal) || "Legal")}`);
          } else {
            return [
              createVNode("i", { class: "material-icons" }, "arrow_back"),
              createTextVNode(" " + toDisplayString(((_b = unref(msgTranslate)) == null ? void 0 : _b.legal) || "Legal"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class=""><div>${htmlContent.value ?? ""}</div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compliance/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-DAL1etFR.js.map
