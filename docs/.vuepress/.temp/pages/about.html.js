export const data = {
  "key": "v-22a39d25",
  "path": "/about.html",
  "title": "About",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "about.md",
  "git": {
    "updatedTime": 1669182935000,
    "contributors": [
      {
        "name": "johnzhu",
        "email": "JohnZhu1995@163.com",
        "commits": 1
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
