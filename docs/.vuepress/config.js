import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { head, navbar, sidebar } from "./configs/index.js";
import { getDirname, path } from 'vuepress/utils'
const __dirname = getDirname(import.meta.url)
const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  lang: "zh-CN",
  title: "你好， 开发者 ！",
  description: "这是交发数科的前端开发文档",
  base: "/",
  head,

  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",
    repo:'https://gitee.com/open_product/jfsk-front-end-doc.git',
    editLinkPattern: ':repo/blob/master/docs/:path',
    navbar: navbar,
    sidebar: sidebar,
    editLinkText: "在 Gitee 上编辑此页",
    lastUpdatedText: "上次更新",
    contributorsText: "贡献者",
      // custom containers
      tip: '提示',
      warning: '注意',
      danger: '警告',
      // 404 page
      notFound: [
        '这里什么都没有',
        '我们怎么到这来了？',
        '这是一个 404 页面',
        '看起来我们进入了错误的链接',
      ],
      backToHome: '返回首页',
      // a11y
      openInNewWindow: '在新窗口打开',
      toggleColorMode: '切换颜色模式',
      toggleSidebar: '切换侧边栏',

      // themePlugins: {
      //   // only enable git plugin in production mode
      //   git: isProd,
      //   // use shiki plugin in production mode instead
      //   prismjs: !isProd,
      // },
  }),

  bundler: viteBundler(),
  plugins:[
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ]
});
