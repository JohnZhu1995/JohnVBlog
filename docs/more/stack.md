# 技术栈 🔧

> 各种前后端框架、工具

## 前端

-   [axios](https://axios-http.com/zh/)
-   [bootstrap](https://getbootstrap.com/)
-   [echarts](https://echarts.apache.org/zh/index.html)
-   [electron](https://www.electronjs.org/)
-   [element-plus](https://element-plus.org/zh-CN/)
-   [jest](https://jestjs.io/)
-   [JWT](https://jwt.io/)
-   [Qt](https://doc.qt.io/qt-5/)
-   [react](https://reactjs.org/)
-   [sass](https://sass-lang.com/)
-   [tailwind](https://tailwindcss.com/)
-   [threejs](https://threejs.org/)
-   [typescript](https://www.typescriptlang.org/)
-   [vue](https://cn.vuejs.org/)
-   [webpack](https://webpack.docschina.org/)
-   [wxminiapp](https://developers.weixin.qq.com/miniprogram/dev/framework/)

## 后端

-   [nodejs](https://nodejs.org/en/docs/)
-   [express](https://expressjs.com/)
-   [koa](https://koajs.com/)
-   [mongodb](https://www.mongodb.com/home)
-   [mongoose](https://mongoosejs.com/)
-   [sqlite](https://www.sqlite.org/index.html)

## 工具

-   [eslint](https://eslint.org/)
-   [git](https://git-scm.com/docs)
-   [firebase](https://firebase.google.com/) : a deploy service
-   [namesilo](https://www.namesilo.com/) : get a domain name
-   [favicon](https://favicon.io/) : a favicon generator
-   [Can I use](https://caniuse.com/)
-   [JSFiddle](https://jsfiddle.net/) : a sand box
-   [CodeSandbox](https://codesandbox.io/) : another sand box
-   [regex101](https://regex101.com/)
-   [regexr](https://regexr.com/)

## 模板

-   [vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/)
-   [Lin CMS](https://doc.cms.talelin.com/)

## CSS

-   [背景](https://projects.verou.me/css3patterns/#)
-   [Clippy](https://bennettfeely.com/clippy/)
-   [box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Background_and_Borders/Box-shadow_generator)
-   [border-radius](https://9elements.github.io/fancy-border-radius/full-control.html)

## 图标

| 名称           | 网址                                                         | 描述                                                                             |
| -------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| 阿里巴巴图标库 | [www.iconfont.cn](https://www.iconfont.cn)                   | 多、杂                                                                           |
| 字节图标库     | [iconpark.oceanengine.com](https://iconpark.oceanengine.com) | 多、统一                                                                         |
| 谷歌字体       | [fonts.google.com](https://fonts.google.com/)                | 字体、图标                                                                       |
| icons8         | [icons8.com](https://icons8.com/)                            | 以前用的                                                                         |
| OpenGameArt    | [opengameart.org](https://opengameart.org)                   | 游戏图标，其中一款 [RPG](https://opengameart.org/content/98-pixel-art-rpg-icons) |
| Emojipedia     | [https://emojipedia.org](https://emojipedia.org)             | emoji 图标                                                                       |

## 插画

| 名称       | 网址                                                       | 说明         |
| ---------- | ---------------------------------------------------------- | ------------ |
| IRA Design | [iradesign.io](https://iradesign.io)                       | 色彩风格统一 |
| unDraw     | [undraw.co/illustrations](https://undraw.co/illustrations) | 风格统一     |
| Humaaans   | [www.humaaans.com](https://www.humaaans.com/)              | 人物         |
| Pngtree    | [pngtree.com](https://pngtree.com)                         | 量大管饱     |

## 社区

<CardsGrid :sites="communities" />

<script>
export default {
  data() {
    return {
      communities: [
        {
          name: "Stack Overflow",
          desc: "最好的问答网站",
          link: "https://stackoverflow.com"
        },
        {
          name: "v2ex",
          desc: "摸鱼社区",
          link: "https://www.v2ex.com"
        },
        {
          name: "掘金",
          desc: "前端社区",
          link: "https://juejin.cn"
        },
        {
          name: "思否",
          desc: "曾经用的最多的技术问答社区",
          link: "https://segmentfault.com"
        },
        {
          name: "DEV Community",
          desc: "一个不错的广告宣传地",
          link: "https://dev.to"
        },
        {
          name: "InfoQ",
          desc: "了解新技术走向",
          link: "https://www.infoq.cn"
        },
      ],
    }
  }
}
</script>
