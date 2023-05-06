// noinspection JSLastCommaInArrayLiteral,JSLastCommaInObjectLiteral
export default {

	router: {
		middleware: 'authenticated',
	},

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
    '@/plugins/common',
		{
			src: '@/plugins/sockets',
			ssr: false,
		}
  ],

  // Auto import components.
  components: false,

  // Modules for dev and build (recommended)
  buildModules: [
    ['@/modules/icons', [
      {
        folder: './assets/icons',
        result: './components/dynamic/Icons.vue',
      },
    ]],
  ],

  // Настройка роутера
  // router: {
  //   base: '/school-project/',
  // },

  // Обработчики на стороне сервера
  serverMiddleware: [
    {
      path: '/frontend-api',
      handler: '@/server/application.js',
    },
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
		'@nuxtjs/axios',
		'@/modules/sockets',
  ],

	axios: {
		baseURL: '/frontend-api',
	},

  build: {
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
  },
};
