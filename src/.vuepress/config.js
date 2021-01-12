const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'DescicloGames Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#333333' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'viewport', content:'width=device-width, initial-scale=1.0'}],
	['link',{ rel:'icon', type:'image/png', href:'https://raw.githubusercontent.com/DescicloGames/mafagafight/main/docs/assets/gui/icon.png'}]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Home',
        link: 'https://desciclogames.github.io'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/DescicloGames'
      },
      {
        text: 'Play Now!',
        link: 'https://desciclogames.github.io/mafagafight'
      },
  ],
    displayAllHeaders: true,
    logo: 'https://cdn.discordapp.com/attachments/758930205405872138/798360265728065546/uncgloogo-128.png',
    sidebar: {
      '/': 'auto'
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/theme-default',
    '@vuepress/vuepress-plugin-container',
    '@vuepress/plugin-last-updated',
    '@vuepress/plugin-register-components',
    '@vuepress/active-header-links'
  ]
}
