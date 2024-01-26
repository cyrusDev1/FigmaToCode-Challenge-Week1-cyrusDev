module.exports = {
  buildModules: [
    '@nuxt/image',
    // ...
  ],
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'Medical',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ] 

  },
  /*
  ** Build configuration
  */
  plugins: [
    // ... autres plugins
  ]
}

