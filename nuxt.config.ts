// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/icon'],
  runtimeConfig: {
    spotifyID: process.env.SPOTIFY_CLIENT_ID,
    spotifyKey: process.env.SPOTIFY_CLIENT_SECRET
  }
})