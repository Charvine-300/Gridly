// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
  ],
  css: [
    '@/assets/styles/main.scss'
  ],
  vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@import "@/assets/styles/variables.scss";',
            },
          },
        },
      },
      app: {
        head: {
          link: [
            {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
            },
          ],
        },
      },
      runtimeConfig: {
        private: {
          unsplashBaseURL: process.env.UNSPLASH_BASE_URL,
          unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY, // This will be kept private
        }
      },
})
