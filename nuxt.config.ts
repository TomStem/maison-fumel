import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      title: 'Le Petit Wren',
    }
  },
  ssr: true,
  devtools: false,
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@primevue/nuxt-module",
    '@nuxtjs/device',
  ],

  imports: {
    dirs: ['composables/**'],
  },

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'nl',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true
    },
    locales: [
      { code: 'nl', name: 'Nederlands', file: 'nl.json' },
      { code: 'fr', name: 'Frans', file: 'fr.json' },
      { code: 'en-gb', name: 'English', file: 'gb.json' }

    ]
  },

  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700],
      "Patrick Hand": [400],
    },
    display: "swap",
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.disable-dark-mode'
        }
      },
    }
  },

  nitro: {
    preset: 'static'
  }
});