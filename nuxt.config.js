export default {
  head: {
    title: 'SCH Project',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico?' }
    ]
  },

  // Можно подключать другие css модули из npm
  // просто указав имя модуля.
  css: [
    '@/assets/styles/main'
  ],

  // Можно указать локальные плагины, которые
  // будут вызываться при запуске.
  plugins: [
    '@/plugins/all'
  ],

  // Auto import components.
  components: true,

  // Modules for dev and build (recommended)
  buildModules: [
    ['@/modules/icons', [
      {
        folder: './assets/icons',
        result: './components/dynamic/Icons.vue',
      },
    ]],
  ],

  router: {
    base: '/school-project/',
  },

  // Обработчики на стороне сервера
  serverMiddleware: [
    {
      path: '/api',
      handler: '@/server/application.js',
    },
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  build: {
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
  },
};
