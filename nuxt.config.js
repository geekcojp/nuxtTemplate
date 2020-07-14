export default {
  mode: 'universal',
  srcDir: 'src',
  head: {
    title: 'GEEK nuxtTemplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'page_description',
        name: 'description',
        content: 'GEEK nuxtTemplate description.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: [],
  plugins: [],
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  modules: [],
  build: {
    extend(config, ctx) {}
  }
}
