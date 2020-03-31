<template>
  <div class="timeline">
    <ul class="main_list">
      <li class="main_item">
        <p class="archives_title">🌱2020</p>
        <ul class="archives_list">
          <li class="archives_item">
            <section>
              <span class="article_date">2020-01-02</span>
              <router-link class="article_title" to="/">sssss</router-link>
            </section>
          </li>
          <li class="archives_item">
            <section>
              <span class="article_date">2020-01-01</span>
              <router-link class="article_title" to="/">dddd</router-link>
            </section>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "@/components/commonLayout/header";
import Footer from "@/components/commonLayout/footer";
export default {
  name: "Timeline",
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="less">
.timeline {
  font-family: Menlo, "Meslo LG", "Helvetica Neue", Helvetica, Arial, sans-serif,
    "微软雅黑", monospace;
  .main_list {
    padding: 12px;
    .main_item {
      margin-bottom: 20px;
      .archives_title {
        font-weight: 700;
        color: #eee;
        font-size: 18px;
        padding-bottom: 14px;
      }
      .archives_list {
        .archives_item {
          margin-bottom: 14px;
              padding: 0 12px;
    border-left: 4px solid #ff6600;
          & > section {
            display: flex;
            align-items: center;
            .article_date {
              font-size: 14px;
              color: #666;
              padding-right: 14px;
            }
            .article_title {
              text-decoration: none;
              color: #c9cacc;
              word-wrap: break-word;
              background-repeat: repeat-x;
              background-position: bottom;
              background-size: 100% 6px;
              background-image: linear-gradient(
                transparent,
                transparent 5px,
                #c9cacc 5px,
                #c9cacc
              );
              transition: all .3s ease;
              &:hover{
                color: #ff6600;
                background-image: linear-gradient(
                transparent,
                transparent 5px,
                #ff6600 5px,
                #ff6600
              );
              }
            }
          }
        }
      }
    }
  }
}
</style>
