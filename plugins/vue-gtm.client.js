import { createGtm } from "@gtm-support/vue-gtm";

export default defineNuxtPlugin ((nuxtApp) => {
    nuxtApp.vueApp.use(createGtm({
        id: 'GTM-NQV9C6X',
        defer: false,
        compatibility: false,
        enabled: true,
        debug: false,
        loadscript: true,
        vueRouter: useRouter(),
        trackOnNextTick: false,
    }))
})
