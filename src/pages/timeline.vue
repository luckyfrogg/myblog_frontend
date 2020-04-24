<template>
  <div class="timeline">
    <template v-if="!articleArr.length">这个博主很懒，什么也没留下</template>
    <template v-else>
      <ul class="main_list" v-for="(item,index) in articleArr" :key="index">
        <li class="main_item">
          <p class="archives_title">🌱{{item[0]}}</p>
          <ul class="archives_list" v-for="(sub_item,sub_index) in item[1]" :key="sub_index">
            <li class="archives_item">
              <section>
                <span class="article_date">{{sub_item.updated_at|formatDate}}</span>
                <router-link class="article_title" :to="'/detail/'+sub_item.id">{{sub_item.title}}</router-link>
              </section>
            </li>
          </ul>
        </li>
      </ul>
    </template>
  </div>
</template>
<script>
import moment from "moment";
import Header from "@/components/commonLayout/header";
import Footer from "@/components/commonLayout/footer";
export default {
  name: "Timeline",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      articleArr: []
    };
  },
  filters: {
    formatDate: function(value) {
      if (!value) return "";
      return moment(value).format("YYYY-MM-DD");
    }
  },
  computed: {},
  created() {
    this.articleListByDate();
  },
  mounted() {},
  methods: {
    articleListByDate() {
      let _this = this;
      this.$get("/api/f/articleListByDate").then(res => {
        console.log(res);
        if (res.code == 200) {
          _this.articleArr = res.data;
          console.log(res.data);
        }
      });
    }
  }
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
              flex-shrink: 0;
            }
            .article_title {
              text-decoration: none;
              color: #c9cacc;
              margin-left: 14px;
              word-wrap: break-word;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
              background-repeat: repeat-x;
              background-position: bottom;
              background-size: 100% 6px;
              background-image: linear-gradient(
                transparent,
                transparent 5px,
                #c9cacc 5px,
                #c9cacc
              );
              transition: all 0.3s ease;
              &:hover {
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
@media (max-width: 480px) {
  /deep/ .archives_item > section {
    flex-direction: column;
    align-items: flex-start !important;
  }
  /deep/ .article_date {
    padding-bottom: 4px !important;
  }
  /deep/ .article_title {
    margin-left: 0 !important;
  }
}
</style>
