module.exports = {
	
	mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'whatsvue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Whatsapp clone with Vue.js (using nuxt)' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  
    modules: [
    {
      src: 'firebase',
      options: {
        apiKey: '<API KEY>',
        authDomain: '<AUTH DOMAIN>',
        databaseURL: '<DATABASE URL>',
        projectId: '<PROJECT ID>',
        storageBucket: '<STORAGE BUCKET>',
        messagingSenderId: '<MESSAGING SENDER ID>'
      }
    }
  ],
  
  
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
    }
  }
}
