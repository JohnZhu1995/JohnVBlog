<template><h1 id="others-⚾" tabindex="-1"><a class="header-anchor" href="#others-⚾" aria-hidden="true">#</a> Others ⚾</h1>
<blockquote>
<p>业余兴趣爱好</p>
</blockquote>
<h2 id="sports" tabindex="-1"><a class="header-anchor" href="#sports" aria-hidden="true">#</a> Sports</h2>
<CardsGrid :sites="sports" />
<h2 id="freelance" tabindex="-1"><a class="header-anchor" href="#freelance" aria-hidden="true">#</a> Freelance</h2>
<CardsGrid :sites="freelance" />
<h2 id="tools" tabindex="-1"><a class="header-anchor" href="#tools" aria-hidden="true">#</a> Tools</h2>
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
