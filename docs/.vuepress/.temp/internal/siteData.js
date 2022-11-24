export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "author",
        "content": "johnzhu"
      }
    ],
    [
      "meta",
      {
        "name": "keywords",
        "content": "vuepress文档 vuepress blog"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "zh-CN",
      "title": "恩典小站",
      "description": "John的博客"
    },
    "/en/": {
      "lang": "en-US",
      "title": "Grace to J&H",
      "description": "John's blog"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
