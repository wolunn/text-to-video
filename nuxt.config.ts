// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxt/content'],
  content: {
    documentDriven: true,
    // 其他配置项...
  },
})

