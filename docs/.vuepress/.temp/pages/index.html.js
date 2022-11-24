export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/assets/img/apple-touch-icon.png",
    "heroText": "恩典小站",
    "tagline": "Grace for You & Me",
    "actionText": "开始浏览",
    "actionLink": "/about/",
    "footer": "Copyright © 2022-present John Zhu"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1669183684000,
    "contributors": [
      {
        "name": "johnzhu",
        "email": "JohnZhu1995@163.com",
        "commits": 2
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
