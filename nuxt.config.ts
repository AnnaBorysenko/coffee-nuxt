// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        compatibilityDate: '2025-11-19'
    },
    modules: [
        '@nuxt/ui',
        '@pinia/nuxt',
    ],
    css: [
        '~/assets/css/main.css',
        '~/assets/scss/main.scss',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/scss/_variables.scss" as *;',
                },
            },
        },
    },
})
