// const pluginConf = require("./config/pluginConf.js");
const navConf = require("./config/navConf.js");
const sidebarConf = require("./config/sidebarConf.js");
const navConfEn = require("./config/navConfEn.js");
const sidebarConfEn = require("./config/sidebarConfEn.js");
// const headConf = require("./config/headConf.js");

module.exports = {
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["meta", { name: "author", content: "johnzhu" }],
        ["meta", { name: "keywords", content: "vuepress文档 vuepress blog" }],
    ],
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        "/": {
            lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
            title: "恩典小站",
            description: "John的博客",
        },
        "/en/": {
            lang: "en-US",
            title: "Grace to J&H",
            description: "John's blog",
        },
    },
    themeConfig: {
        logo: "/assets/img/apple-touch-icon.png",
        docsDir: "docs",
        smoothScroll: true,
        locales: {
            "/": {
                // 多语言下拉菜单的标题
                selectText: "选择语言",
                // 该语言在下拉菜单中的标签
                label: "简体中文",
                // 编辑链接文字
                editLinkText: "在 GitHub 上编辑此页",
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新",
                    },
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: navConf,
                sidebar: sidebarConf,
                lastUpdated: "更新时间", // string | boolean
            },
            "/en/": {
                selectText: "Languages",
                label: "English",
                ariaLabel: "Languages",
                editLinkText: "Edit this page on GitHub",
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh",
                    },
                },
                algolia: {},
                nav: navConfEn,
                sidebar: sidebarConfEn,
                lastUpdated: "Last Update", // string | boolean
            },
        },
    },
};
