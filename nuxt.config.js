import { defineNuxtConfig } from '@nuxt/bridge'

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
    // set `disableVuex` to false if you need to use Vuex alongside Pinia
    ['@pinia/nuxt', { disableVuex: true }],
  ],

  build: {
    transpile: [
      // necessary for nuxt bridge
      'pinia',
    ],
  },

  bridge: {
    // nitro: true,
    // capi: false,
  },
})
