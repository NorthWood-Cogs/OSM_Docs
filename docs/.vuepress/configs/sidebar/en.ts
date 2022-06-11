import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
    '/mod-guide/': [
        {
            text: 'Server Rules', 
            children: ["/mod-guide/server-rules.md"],

        },
        {
            text: 'Moderation Guide',
            children: [
                '/mod-guide/general-guide.md',
                '/mod-guide/panel-guidelines.md'
            ],
        },
    ],
}