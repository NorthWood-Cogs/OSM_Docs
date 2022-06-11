import type { HeadConfig } from '@vuepress/core'
import defineUserConfig from '../config';

let base = '/NW-Docs/'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: base + 'images/nwlogo.png' }],
  ['link', { rel: 'icon', href: base + 'favicon.ico', type: 'image/x-icon' }],
  ['link', { rel: 'manifest', href: base + 'manifest.webmanifest' }],
  ['meta', { name: 'application-name', content: 'NW Mod Guide' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'NW Mod Guide' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  [
    'link',
    {
      rel: 'mask-icon',
      href: base + 'images/icons/safari-pinned-tab.svg',
      color: '#ff1100',
    },
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#ff1100' }],
  ['meta', { name: 'theme-color', content: '#ff1100' }],
]