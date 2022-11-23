module.exports = {
    title: "恩聪小站",
    description: "John's blog",
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["meta", { name: "author", content: "johnzhu" }],
        ["meta", { name: "keywords", content: "vuepress文档 vuepress blog" }],
    ],
    themeConfig: {
        logo: "/assets/img/apple-touch-icon.png",
        nav: [
            { text: "Home", link: "/" },
            { text: "About", link: "/about.html" },
            { text: "External", link: "https://google.com" },
            {
                text: "Languages",
                ariaLabel: "Language Menu",
                items: [
                    { text: "Chinese", link: "/language/chinese/" },
                    { text: "English", link: "/language/english/" },
                ],
            },
        ],
        sidebar: "auto",
        lastUpdated: "更新时间", // string | boolean
    },
};
