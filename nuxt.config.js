import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
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

  components: true,

  buildModules: [
    // '@nuxt/bridge',
    // '@nuxtjs/composition-api/module',
    // set `disableVuex` to false if you need to use Vuex alongside Pinia
    ['@pinia/nuxt', { disableVuex: true }],
  ],

  build: {
    transpile: [
      //
      // '@pinia/nuxt',
      // 'pinia',
      // 'vue-demi',
    ],
  },

  alias: {
    // pinia: 'pinia/dist/pinia.esm-bundler.js',
    // '@vue/composition-api/dist/vue-composition-api.esm.js': '@vue/composition-api',
  },

  bridge: {
    // nitro: true,
    // capi: false,
  },
})
