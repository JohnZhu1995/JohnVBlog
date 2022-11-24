<template><h1 id="其他-⚾" tabindex="-1"><a class="header-anchor" href="#其他-⚾" aria-hidden="true">#</a> 其他 ⚾</h1>
<blockquote>
<p>业余兴趣爱好</p>
</blockquote>
<h2 id="体育" tabindex="-1"><a class="header-anchor" href="#体育" aria-hidden="true">#</a> 体育</h2>
<CardsGrid :sites="sports" />
<h2 id="自由职业" tabindex="-1"><a class="header-anchor" href="#自由职业" aria-hidden="true">#</a> 自由职业</h2>
<CardsGrid :sites="freelance" />
<h2 id="小工具" tabindex="-1"><a class="header-anchor" href="#小工具" aria-hidden="true">#</a> 小工具</h2>
<ul>
<li><a href="https://www.keybr.com/" target="_blank" rel="noopener noreferrer">打字训练<OutboundLink/></a></li>
<li><a href="https://10fastfingers.com/typing-test/english" target="_blank" rel="noopener noreferrer">打字速度检测<OutboundLink/></a></li>
</ul>
</template>

<script>
export default {
  data() {
    return {
      freelance: [
        {
          name: "Freelancer",
          desc: "招工平台",
          link: "https://www.freelancer.com/"
        }
      ],
      sports: [
        {
          name: "Savant",
          desc: "mlb学者",
          link: "https://baseballsavant.mlb.com/"
        },
        {
          name: "Baseball Reference",
          desc: "baseball博物馆",
          link: "https://www.baseball-reference.com/"
        }
      ]
    }
  }
}
</script>
