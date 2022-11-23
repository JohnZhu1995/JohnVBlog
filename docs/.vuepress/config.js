module.exports = {
    title: "John Zhu",
    description: "John's blog",
    head: [
        ["link", { ref: "author", href: "/favicon.ico" }],
        ["meta", { name: "author", content: "johnzhu" }],
        ["meta", { name: "keywords", content: "vuepress文档 vuepress blog" }],
    ],
    themeConfig: {
        logo: "/assets/img/ironman.png",
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
