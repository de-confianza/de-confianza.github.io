// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  baseURL: "/",
  buildAssetsDir: "res",
  devtools: { enabled: true },
  nitro: {
    output: { 
        publicDir: 'public'
      }
  },
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
      exposeConfig: true,
      viewer: true,
      // and more...
    }
})
