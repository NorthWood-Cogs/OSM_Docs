import { defineUserConfig } from 'vuepress'
import { head, navbarEn, sidebarEn } from './configs'
import { defaultTheme } from '@vuepress/theme-default'
import { pwaPlugin } from 'vuepress-plugin-pwa2'


export default defineUserConfig({
    base: '/OSM_Docs/',
    head,
    dest: "./docs",
    // site-level locales config
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Northwood Moderation Guide',
            description: 'The one and only mod document for SCP:SL.',
        }
    },
    shouldPrefetch: false,
      // configure default theme
  theme: defaultTheme({
    logo: '/images/nw_logo_letters.png',
    docsDir: 'docs',

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbarEn,
        // sidebar
        sidebar: sidebarEn
      },
    }
  }),
plugins: [
  pwaPlugin({showInstall: true, cacheHTML: true, themeColor: "#ff1100", maxSize: 4096, update: "available"}),
 ]
})

