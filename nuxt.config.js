export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pinia-example-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/bridge',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // '@nuxtjs/composition-api/module',
    // set `disableVuex` to false if you need to use Vuex alongside Pinia
    ['@pinia/nuxt', { disableVuex: true }],
  ],

  build: {
    transpile: [
      //
      // '@pinia/nuxt',
      'pinia',
      'vue-demi',
    ],
  },

  alias: {
    // pinia: 'pinia/dist/pinia.esm-bundler.js',
    // '@vue/composition-api/dist/vue-composition-api.esm.js': '@vue/composition-api',
  },

  bridge: {
    nitro: true,
    // capi: false,
  },
}
