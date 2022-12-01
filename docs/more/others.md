# 其他 ⚾

> 业余兴趣爱好

## 体育

<CardsGrid :sites="sports" />

## 历史

<CardsGrid :sites="history" />

## 自由职业

<CardsGrid :sites="freelance" />

## 小工具

-   [打字训练](https://www.keybr.com/)
-   [打字速度检测](https://10fastfingers.com/typing-test/english)

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
      ],
      history:[
        {
          name: "全历史",
          desc: "全历史。画作、古籍、帝国、人物、战争、古迹",
          link: "https://www.allhistory.com"
        },
      ]
    }
  }
}
</script>
