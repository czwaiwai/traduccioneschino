import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "traduccioneschino",    
  keywords: "traduccioneschino,Academic translation,AV translation,Subtitling,Website translation,Business translation,Official translation,Technical translation,Videogames translation",  
  description: "traduccioneschino,Academic translation,AV translation,Subtitling,Website translation,Business translation,Official translation,Technical translation,Videogames translation",
  lang: 'en-US',
  base: '/',
  cleanUrls: true,
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  // rewrites: {
  //   'posts/test-:name': 'cn/posts/:name',
  //   'posts/es-:name': 'es/posts/:name'
  // },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    cn: {
      label: '中文',
      lang: 'zh-CN',
      dir: 'cn',
      link: '/cn',
      title: '中西翻译',
      themeConfig: {
        outline: {
          label: '翻译项目'
        },
        nav: [
          { text: '首页', link: '/cn/index' },
          { text: '翻译项目', link: '/cn/services' },
          // { text: '品牌客户', link: '/cn/clients' },
          { text: '常见问题', link: '/cn/faq' },
          { text: '关于我们', link: '/cn/about-us' },
          { text: '联系我们', link: '/cn/contact-us' },
          { text: '博客', link: '/cn/blog' },
          { text: '报价', link: '/cn/ask-for-a-quote' }
        ],
        // sidebar: {
        //   '/cn/services': [
        //     {
        //       text: '翻译项目',
        //       items: [
        //         { text: '学术翻译', link: '/cn/services#学术翻译' },
        //         { text: '视频翻译', link: '/cn/services#视频翻译' },
        //         { text: '字幕翻译', link: '/cn/services#字幕翻译' },
        //         { text: '网站翻译', link: '/cn/services#网站翻译' },
        //         { text: '商业翻译', link: '/cn/services#商业翻译' },
        //         { text: '官方翻译', link: '/cn/services#官方翻译' },
        //         { text: '专业翻译', link: '/cn/services#专业翻译' },
        //         { text: '游戏翻译', link: '/cn/services#游戏翻译' },
        //       ]
        //     }
        //   ],
        // },
      }
    },
    es: {
      label: 'español',
      lang: 'es-ES',
      dir: 'es',
      link: '/es/',
      title: 'traduccioneschino',
      rewrites: {
        'posts/:name': 'es/posts/:name',
      },
      themeConfig: {
        outline: {
          label: 'Servicios'
        },
        nav: [
          { text: 'Página principal', link: '/es/index' },
          { text: 'Servicios', link: '/es/services' },
          // { text: 'Clientes', link: '/es/clients' },
          { text: 'FAQ', link: '/es/faq' },
          { text: 'Sobre nosotros', link: '/es/about-us' },
          { text: 'Contacto', link: '/es/contact-us' },
          { text: 'Blog', link: '/es/blog' },
          { text: 'Solicitar prespupuesto', link: '/es/ask-for-a-quote' }
        ],
        // sidebar: {
        //   '/es/services': [
        //     {
        //       text: 'Servicios',
        //       items: [
        //         { text: 'Traducción académica', link: '/es/services#traduccion-academica' },
        //         { text: 'Traducción audiovisual', link: '/es/services#traduccion-audiovisual' },
        //         { text: 'Subtitulación', link: '/es/services#subtitulacion' },
        //         { text: 'Traducción de sitios web', link: '/es/services#traduccion-de-sitios-web' },
        //         { text: 'Traducción comercial', link: '/es/services#traduccion-comercial' },
        //         { text: 'Traducción jurada', link: '/es/services#traduccion-jurada' },
        //         { text: 'Traducción técnica', link: '/es/services#traduccion-tecnica' },
        //         { text: 'Traducción de videojuegos', link: '/es/services#traduccion-de-videojuegos' },
        //       ]
        //     }
        //   ],
        // },
      }
    }
  },
  themeConfig: {
    logo: '/logo.png',
    siteTitle: false,
    outline: {
      label: 'Services'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
           cn: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Services', link: '/services' },
      // {
      //   text: 'Services',
      //   items: [
      //     { text: 'Academic translation', link: '/services#academic-translation' },
      //     { text: 'AV translation', link: '/services#av-translation' },
      //     { text: 'Subtitling', link: '/services#subtitling' },
      //     { text: 'Website translation', link: '/services#website-translation', target: '_self', activeMatch: '#website-translation' },
      //     { text: 'Business translation', link: '/services#business-translation' },
      //     { text: 'Official translation', link: '/services#official-translation' },
      //     { text: 'Technical translation', link: '/services#technical-translation' },
      //     { text: 'Videogames translation', link: '/services#videogames-translation' },
      //   ]
      // },
      // { text: 'Clients', link: '/clients' },
      { text: 'FAQ', link: '/faq' },
      { text: 'About us', link: '/about-us' },
      { text: 'Contact us', link: '/contact-us' },
      { text: 'Blog', link: '/blog' },
      { text: 'Ask for a quote', link: '/ask-for-a-quote' }
    ],
    // sidebar: {
    //   '/services': [
    //     {
    //       text: 'Services',
    //       items: [
    //         { text: 'Academic translation', link: '/services#academic-translation' },
    //         { text: 'AV translation', link: '/services#av-translation' },
    //         { text: 'Subtitling', link: '/services#subtitling' },
    //         { text: 'Website translation', link: '/services#website-translation' },
    //         { text: 'Business translation', link: '/services#business-translation' },
    //         { text: 'Official translation', link: '/services#official-translation' },
    //         { text: 'Technical translation', link: '/services#technical-translation' },
    //         { text: 'Videogames translation', link: '/services#videogames-translation' },
    //       ]
    //     }
    //   ],
    // },
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You <a target="_blank"  href="/privacy-policy">Privacy Policy</a> <a target="_blank" href="/cookie-policy">COOKIE POLICY</a> <a  target="_blank"  href="/LSSI">LSSI</a>'
    }
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
  vite: {
     ssr: {
        noExternal: [/\.css$/, /\?vue&type=style/, /^vuetify/],
     },
     server: {
       port: 5173,
       proxy: {
        '/message': {
          target: "http://localhost:3000",
          changeOrigin: true,
        }
       }
     }
  }
})
