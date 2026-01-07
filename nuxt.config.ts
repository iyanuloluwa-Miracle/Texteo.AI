import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Texteo.ai',
      titleTemplate: '%s - AI-Powered Social Media Content Generator',
      meta: [
        { name: 'description', content: 'Create engaging social media posts in seconds with AI. Generate high-quality content for LinkedIn, Twitter, and Instagram.' },
        { property: 'og:title', content: 'Texteo.ai - AI-Powered Social Media Content Generator' },
        { property: 'og:description', content: 'Create engaging social media posts in seconds with AI. Generate high-quality content for LinkedIn, Twitter, and Instagram.' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images/logo/texteo 2.png'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap'
        }
      ]
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});