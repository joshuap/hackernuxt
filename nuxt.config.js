import webpack from 'webpack'

const {
  HONEYBADGER_API_KEY
} = process.env

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hackernuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project for egghead course' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Load CSS files
  */
  css: [
  'tachyons/css/tachyons.min.css',
  // 'tachyons-debug/css/tachyons-debug.min.css',
  '~/assets/main.css'
  ],

  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new webpack.EnvironmentPlugin(
        JSON.parse(
          JSON.stringify({
            HONEYBADGER_API_KEY: HONEYBADGER_API_KEY
          })
        )
      )
    ],
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
    }
  },
  plugins: [
    '~/plugins/filters',
    { src: '~/plugins/honeybadger', mode: 'client' }
  ],
  // router: {
  //   linkActiveClass: "active-nav-link"
  // }
}

