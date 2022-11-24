export const themeData = {
  "logo": "/assets/img/apple-touch-icon.png",
  "docsDir": "docs",
  "smoothScroll": true,
  "locales": {
    "/": {
      "selectText": "选择语言",
      "label": "简体中文",
      "editLinkText": "在 GitHub 上编辑此页",
      "serviceWorker": {
        "updatePopup": {
          "message": "发现新内容可用.",
          "buttonText": "刷新"
        }
      },
      "algolia": {},
      "navbar": [
        {
          "text": "首页",
          "link": "/"
        },
        {
          "text": "前端",
          "children": [
            {
              "text": "JavaScript",
              "link": "/frontend/javascript/"
            },
            {
              "text": "Qt",
              "link": "/frontend/Qt/"
            }
          ]
        },
        {
          "text": "链接🎉",
          "children": [
            {
              "text": "技术",
              "link": "/more/stack.html"
            },
            {
              "text": "信仰",
              "link": "/more/faith.html"
            },
            {
              "text": "其他",
              "link": "/more/others.html"
            },
            {
              "text": "VuePress 官网",
              "link": "https://vuepress.vuejs.org/zh/"
            }
          ]
        },
        {
          "text": "关于",
          "link": "/about.html"
        }
      ],
      "sidebar": {
        "/frontend/javascript/": [
          {
            "text": "JAVASCRIPT",
            "title": "JAVASCRIPT",
            "collapsable": false,
            "sidebarDepth": 2,
            "children": [
              "",
              "object-destruction.md",
              "bind(this).md"
            ]
          }
        ],
        "/frontend/Qt/": [
          {
            "text": "Qt",
            "title": "Qt",
            "collapsable": false,
            "sidebarDepth": 2,
            "children": [
              ""
            ]
          }
        ],
        "/more/": [
          {
            "text": "链接🎉",
            "title": "链接🎉",
            "collapsable": false,
            "sidebarDepth": 1,
            "children": [
              "stack.md",
              "faith.md",
              "others.md"
            ]
          }
        ]
      },
      "lastUpdated": "更新时间",
      "selectLanguageName": "English"
    },
    "/en/": {
      "selectText": "Languages",
      "label": "ddd",
      "ariaLabel": "Languages",
      "editLinkText": "Edit this page on GitHub",
      "serviceWorker": {
        "updatePopup": {
          "message": "New content is available.",
          "buttonText": "Refresh"
        }
      },
      "algolia": {},
      "navbar": [
        {
          "text": "Home",
          "link": "/en/"
        },
        {
          "text": "Frontend",
          "children": [
            {
              "text": "JavaScript",
              "link": "/en/frontend/javascript/"
            },
            {
              "text": "Qt",
              "link": "/en/frontend/Qt/"
            }
          ]
        },
        {
          "text": "Links🎉",
          "children": [
            {
              "text": "Tech",
              "link": "/en/more/stack.html"
            },
            {
              "text": "Faith",
              "link": "/en/more/faith.html"
            },
            {
              "text": "Others",
              "link": "/en/more/others.html"
            },
            {
              "text": "VuePress",
              "link": "https://vuepress.vuejs.org/zh/"
            }
          ]
        },
        {
          "text": "About",
          "link": "/en/about.html"
        }
      ],
      "sidebar": {
        "/en/frontend/javascript/": [
          {
            "text": "JAVASCRIPT",
            "title": "JAVASCRIPT",
            "collapsable": false,
            "sidebarDepth": 2,
            "children": [
              "",
              "object-destruction.md",
              "bind(this).md"
            ]
          }
        ],
        "/en/frontend/Qt/": [
          {
            "text": "Qt",
            "title": "Qt",
            "collapsable": false,
            "sidebarDepth": 2,
            "children": [
              ""
            ]
          }
        ],
        "/en/more/": [
          {
            "text": "Links🎉",
            "title": "Links🎉",
            "collapsable": false,
            "sidebarDepth": 1,
            "children": [
              "stack.md",
              "faith.md",
              "others.md"
            ]
          }
        ]
      },
      "lastUpdated": "Last Update"
    }
  },
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
