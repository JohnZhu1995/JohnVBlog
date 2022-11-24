export const data = {
  "key": "v-2d0a870d",
  "path": "/en/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/assets/img/apple-touch-icon.png",
    "heroText": "Grace to J&H",
    "tagline": "Grace for You & Me",
    "actionText": "Start",
    "actionLink": "/en/about/",
    "footer": "Copyright © 2022-present John Zhu"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/README.md",
  "git": {
    "updatedTime": null,
    "contributors": []
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
