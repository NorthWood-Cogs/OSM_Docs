import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guides',
    children: [
      {text: "Official Rules", children: [{text: "Server Rules", link: "/mod-guide/server-rules.html"}]},
      {text: "Moderation Guide", children: 
      [
        {text: "General Guide", link: "/mod-guide/general-guide.md"},
        {text: "Panel Guidelines", link: "/mod-guide/panel-guidelines.html"}
      ]},
    ],
  }
]