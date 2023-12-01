// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxt/content','@nuxtjs/i18n','nuxt-simple-sitemap','nuxt-simple-robots'/*'@nuxtjs/supabase'*/],
  // ...其他配置...
  content: {
    documentDriven: true,
    // 其他配置项...
  },
  i18n: {
    // These are the languages you want to support in your application
    locales: [
      { code: 'en',name:'English', iso: 'en-US', file: 'en-US.js' },
      { code: 'zh', name:'简体中文 (Chinese)',iso: 'zh-CN', file: 'zh-CN.js' },
      // Add other languages here
    ],
    defaultLocale: 'en',
    // This is the directory where you'll keep your translation files
    langDir: 'locales/',
    // This is the strategy to use for the localization
    // 'prefix_except_default' means that the default language won't have a prefix in the URL
    strategy: 'prefix_except_default',
  },
  site: {
    url: 'https://text-to-video.top',
  },
})

