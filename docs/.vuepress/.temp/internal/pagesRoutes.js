import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-22a39d25","/about.html","About",["/about","/about.md"]],
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-64f82839","/en/about.html","About",["/en/about","/en/about.md"]],
  ["v-2d0a870d","/en/","",["/en/index.html","/en/README.md"]],
  ["v-6a46def8","/more/faith.html","信仰 ✝️",["/more/faith","/more/faith.md"]],
  ["v-1522a495","/more/others.html","其他 ⚾",["/more/others","/more/others.md"]],
  ["v-15e10e32","/more/stack.html","技术栈 🔧",["/more/stack","/more/stack.md"]],
  ["v-5f9bbf38","/en/more/faith.html","Faith ✝️",["/en/more/faith","/en/more/faith.md"]],
  ["v-6c9f90a9","/en/more/others.html","Others ⚾",["/en/more/others","/en/more/others.md"]],
  ["v-7bcc4f9e","/en/more/stack.html","Tech Stack 🔧",["/en/more/stack","/en/more/stack.md"]],
  ["v-5d1a0c1b","/frontend/javascript/bind(this).html","bind(this)写法",["/frontend/javascript/bind(this)","/frontend/javascript/bind(this).md"]],
  ["v-ece54bd2","/frontend/javascript/object-destruction.html","对象解构",["/frontend/javascript/object-destruction","/frontend/javascript/object-destruction.md"]],
  ["v-72d11f44","/frontend/javascript/","JavaScript",["/frontend/javascript/index.html","/frontend/javascript/README.md"]],
  ["v-5469d370","/frontend/Qt/","Introduction to QT",["/frontend/Qt/index.html","/frontend/Qt/README.md"]],
  ["v-733b40f2","/en/frontend/javascript/bind(this).html","bind(this)写法",["/en/frontend/javascript/bind(this)","/en/frontend/javascript/bind(this).md"]],
  ["v-309cfcfa","/en/frontend/javascript/object-destruction.html","对象解构",["/en/frontend/javascript/object-destruction","/en/frontend/javascript/object-destruction.md"]],
  ["v-024f9b1c","/en/frontend/javascript/","JavaScript",["/en/frontend/javascript/index.html","/en/frontend/javascript/README.md"]],
  ["v-55ada748","/en/frontend/Qt/","Introduction to QT",["/en/frontend/Qt/index.html","/en/frontend/Qt/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
