// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@element-plus/nuxt',
        'nuxt-bootstrap-icons',
    ],
    css: [
        'normalize.css',
        '~/assets/scss/all.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "~/assets/scss/mixins/breakpoints" as *;
                    `
                }
            }
        }
    },
})
