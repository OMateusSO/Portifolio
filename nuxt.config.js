
export default {
  // Configurações de cabeçalho
  head: {
    title: 'Meu Site Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Configurações do módulo
  modules: [
    // Módulo do Tailwind CSS
    '@nuxtjs/tailwindcss',
  ],

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'AA',
        path: '/',
        component: resolve(__dirname, 'pages/custom-page.vue')
      })
    }
  },

  // Adicionando Vuetify como um módulo de compilação
  buildModules: ['@nuxtjs/vuetify'],

  // Configurando o módulo do Vuetify
  vuetify: {
    // Opções gerais do Vuetify
    defaultAssets: false, // Desativa a inclusão automática de fontes, ícones etc.
    treeShake: true, // Ativa a remoção de código não utilizado para reduzir o tamanho do pacote

    // Tema personalizado do Vuetify
    theme: {
      dark: false, // Define o modo escuro como falso
      themes: {
        light: {
          primary: '#1976D2', // Cor primária
          secondary: '#424242', // Cor secundária
          accent: '#82B1FF', // Cor de destaque
          error: '#FF5252', // Cor de erro
          info: '#2196F3', // Cor de informação
          success: '#4CAF50', // Cor de sucesso
          warning: '#FFC107' // Cor de aviso
        },
        dark: {
          primary: '#2196F3', // Cor primária no modo escuro
        },
      },
    },
  }
}
