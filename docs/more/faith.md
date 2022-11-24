# 信仰 ✝️

> bible & faith

## 资源

<CardsGrid :sites="resources" />

## 机构

<CardsGrid :sites="organizations" />

## 精选文章

-   [保罗事工的年代研究](https://dwellcc.org/learning/essays/chronological-study-pauls-ministry)
-   [TULIP-约翰派博谈五要义](https://www.desiringgod.org/articles/what-we-believe-about-the-five-points-of-calvinism)

<script>
export default {
  data() {
    return {
      resources: [
        {
          name: "Monergism",
          desc: "Articles, MP3s & Resources on the Historic Christian Faith",
          link: "https://www.monergism.com/"
        },
        {
          name: "Crossway",
          desc: "crossway(十架路)书店",
          link: "https://www.crossway.org/books/"
        },
        {
          name: "归正经典书籍 500套+",
          desc: "线上有声书",
          link: "https://h.land/blog/55555"
        },
        {
          name: "Aleph with Beth",
          desc: "免费希伯来语课程，包括线上视频",
          link: "https://freehebrew.online/zh/home-chinese/"
        },
        {
          name: "Sermonaudio",
          desc: "讲道录音",
          link: "https://www.sermonaudio.com/main.asp"
        },
        {
          name: "归正福音",
          desc: "福音书籍、文章",
          link: "http://www.guizheng.net/jiaohui/jiaohui.htm"
        },
        {
          name: "Biblegateway",
          desc: "线上圣经，多语种，多译本",
          link: "https://www.biblegateway.com/"
        },
        {
          name: "圣经简报站",
          desc: "查经PPT、视频网站，林清晖/许娴(灵恩派)建立",
          link: "http://www.sjppt.net/index-s.htm#gsc.tab=0"
        }
      ],
      organizations: [
        {
          name: "Ligonier",
          desc: "R.C. Sproul",
          link: "https://www.ligonier.org/"
        },
        {
          name: "Desiring God",
          desc: "John Piper",
          link: "https://www.desiringgod.org/"
        },
        {
          name: "Grace to You",
          desc: "John MacArthur",
          link: "https://www.gty.org/"
        },
        {
          name: "Canon Press",
          desc: "Douglas Wilson",
          link: "https://canonpress.com/"
        },
        {
          name: "Truth for Life",
          desc: "Alistair Begg",
          link: "https://www.truthforlife.org/"
        }
      ]
    }
  }
}
</script>
