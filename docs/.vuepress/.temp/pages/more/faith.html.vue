<template><h1 id="信仰-✝️" tabindex="-1"><a class="header-anchor" href="#信仰-✝️" aria-hidden="true">#</a> 信仰 ✝️</h1>
<blockquote>
<p>bible &amp; faith</p>
</blockquote>
<h2 id="资源" tabindex="-1"><a class="header-anchor" href="#资源" aria-hidden="true">#</a> 资源</h2>
<CardsGrid :sites="resources" />
<h2 id="机构" tabindex="-1"><a class="header-anchor" href="#机构" aria-hidden="true">#</a> 机构</h2>
<CardsGrid :sites="organizations" />
<h2 id="精选文章" tabindex="-1"><a class="header-anchor" href="#精选文章" aria-hidden="true">#</a> 精选文章</h2>
<ul>
<li><a href="https://dwellcc.org/learning/essays/chronological-study-pauls-ministry" target="_blank" rel="noopener noreferrer">保罗事工的年代研究<OutboundLink/></a></li>
<li><a href="https://www.desiringgod.org/articles/what-we-believe-about-the-five-points-of-calvinism" target="_blank" rel="noopener noreferrer">TULIP-约翰派博谈五要义<OutboundLink/></a></li>
</ul>
</template>

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
