const path = require("path");

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'calendar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.resolve.alias["~assets"] = path.join(this.options.rootDir, "assets");
    },

    vendor: [
      '~/plugins/vuetify.js'
    ],
  },
  modules: [
    ["@nuxtjs/google-analytics", {
      id: "UA-123725662-1"
    }]
  ],
  plugins: [
    "~plugins/vuetify.js",
    { src: "~/plugins/localStorage", ssr: false },
    "~/plugins/fireauth.js"
  ],
  css: [
    '~/assets/style/app.styl'
  ],
}
