// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxt/content','@nuxtjs/i18n'],
  content: {
    documentDriven: true,
    // 其他配置项...
  },
  i18n: {
    // These are the languages you want to support in your application
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.js' },
      { code: 'fr', iso: 'fr-FR', file: 'fr-FR.js' },
      // Add other languages here
    ],
    defaultLocale: 'en',
    // This is the directory where you'll keep your translation files
    langDir: 'locales/',
    // This is the strategy to use for the localization
    // 'prefix_except_default' means that the default language won't have a prefix in the URL
    strategy: 'prefix_except_default',
  },
})

