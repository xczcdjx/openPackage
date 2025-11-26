import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: "dynamicformdjx",
    description: "A VitePress Site",
    themeConfig: {
        socialLinks: [
            {icon: 'github', link: 'https://github.com/xczcdjx/dynamicForm'}
        ]
    },
    // 多语言路由
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh-CN',
            themeConfig: {
                // 导航标题栏
                nav: [
                    {text: '主页', link: '/'},
                    {text: '案例', link: '/markdown-examples'}
                ],
                // 侧边栏
                sidebar: [
                    {
                        text: 'Examples',
                        items: [
                            // {text: 'Markdown Examples', link: '/markdown-examples'},
                            {text: 'Runtime API Examples', link: '/api-examples'}
                        ]
                    }
                ],
            }
        },
        en: {
            label: 'English',
            lang: 'en-US',
            // 对应 /en/ 下的内容
            themeConfig: {
                nav: [
                    {text: 'Home', link: '/en/'},
                    {text: 'Examples', link: '/en/markdown-examples'}
                ],
                /*sidebar: {
                  '/en/': [
                    {
                      text: 'Getting Started',
                      items: [
                        { text: 'Intro', link: '/en/' },
                        // { text: 'Guide', link: '/en/guide' }
                      ]
                    }
                  ]
                }*/
            }
        }
    },
})
