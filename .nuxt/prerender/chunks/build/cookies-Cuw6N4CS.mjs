import { mergeProps, useSSRContext } from 'file:///Users/irek/sites/queensbingo/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///Users/irek/sites/queensbingo/node_modules/vue/server-renderer/index.mjs';
import { u as useCookieConsent } from './useCookieConsent-n_xe8OZG.mjs';
import { u as useHead } from '../_/index.mjs';
import './server.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/h3/dist/index.mjs';
import 'file:///Users/irek/sites/queensbingo/node_modules/devalue/index.js';
import 'file:///Users/irek/sites/queensbingo/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
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

const _sfc_main = {
  __name: "cookies",
  __ssrInlineRender: true,
  setup(__props) {
    useCookieConsent();
    useHead({
      title: "Cookie Policy - Queen's Bingo",
      meta: [
        {
          name: "description",
          content: "Learn about how we use cookies and manage your preferences at QueensBingo.com."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8 bg-primary_bg text-primary pt-24" }, _attrs))}><h1 class="text-3xl font-bold mb-6">Cookie Policy</h1><section class="mb-8"><h2 class="text-2xl font-semibold mb-4">What Are Cookies?</h2><p class="mb-4"> Cookies are small text files that are stored on your device when you visit our website. They help make your browsing experience better and provide us with insights to improve our service. </p></section><section class="mb-8"><h2 class="text-2xl font-semibold mb-4">Types of Cookies We Use</h2><div class="mb-6"><h3 class="text-xl font-semibold mb-3">Necessary Cookies</h3><p class="mb-2">These cookies are essential for the website to function properly.</p><ul class="list-disc ml-6 mb-4"><li><strong>PHPSESSID:</strong> Session cookie for basic website functionality <br><span class="text-primary/70">Duration: Session</span></li></ul></div><div class="mb-6"><h3 class="text-xl font-semibold mb-3">Affiliate Tracking Cookies</h3><p class="mb-2">Used to credit our partners when you visit gaming sites.</p><ul class="list-disc ml-6 mb-4"><li><strong>affiliateTracker:</strong> Stores a unique identifier for affiliate tracking <br><span class="text-primary/70">Duration: 30 days</span><br><span class="text-primary/70">Purpose: Business operations and partner payments</span></li></ul></div><div class="mb-6"><h3 class="text-xl font-semibold mb-3">Analytics Cookies (Optional)</h3><p class="mb-2">Help us understand how visitors use our website.</p><ul class="list-disc ml-6 mb-4"><li><strong>Analytics cookies:</strong> Anonymous usage statistics <br><span class="text-primary/70">Duration: Varies</span><br><span class="text-primary/70">Purpose: Website improvement and user experience optimization</span></li></ul></div></section><section class="mb-8"><h2 class="text-2xl font-semibold mb-4">Managing Your Cookie Preferences</h2><p class="mb-4">You can manage your cookie preferences in several ways:</p><ul class="list-disc ml-6 mb-4"><li>Using our cookie consent banner when you first visit the site</li><li>Clicking the &quot;Manage Cookies&quot; button below to update your preferences</li><li>Through your browser settings (note: this might affect website functionality)</li></ul><button class="bg-secondary hover:bg-secondary/90 text-primary px-6 py-2 rounded text-sm transition-colors"> Manage Cookies </button></section><section class="mb-8"><h2 class="text-2xl font-semibold mb-4">Do Not Track</h2><p class="mb-4"> We respect the &quot;Do Not Track&quot; browser setting. If enabled, we will not set any analytics cookies, even if you&#39;ve previously consented to them. </p></section><section class="mb-8"><h2 class="text-2xl font-semibold mb-4">Updates to This Policy</h2><p class="mb-4"> We may update this cookie policy as we add or remove features from our website. Any changes will be reflected on this page. </p><p class="text-sm text-primary/70">Last updated: ${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString())}</p></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compliance/cookies.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cookies-Cuw6N4CS.mjs.map
