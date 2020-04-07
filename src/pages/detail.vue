<template>
  <div class="detail" v-if="!!detailData" @scroll="handleScroll">
    <main class="article_main">
      <section class="wrapper">
        <header>
          <h1 class="article_title">{{detailData.title}}</h1>
          <section class="article_info">
            <div class="article_info_item">{{detailData.updated_at|formatDate}}</div>
            <div class="article_info_item" v-if="detailData.cate_name">
              <Icon type="md-bookmarks" />
              <span>{{detailData.cate_name}}</span>
            </div>
            <div class="article_info_item" v-if="detailData.tags_name">
              <Icon type="md-pricetag" />
              <span>{{detailData.tags_name|toString}}</span>
            </div>
            <div class="article_info_item">
              <Icon type="md-eye" />
              <span>{{detailData.view_num}}</span>
            </div>
          </section>
        </header>
        <mavonEditor
          class="markdown"
          :ishljs="true"
          :boxShadow="false"
          :value="detailData.content"
          :toolbarsFlag="toolbarsFlag"
          :subfield="toolbarsFlag"
          defaultOpen="preview"
        ></mavonEditor>
      </section>
    </main>
    <div class="header-fixed">
      <section>
        <div class="header-top">
          <div class="nav" v-show="menuVisible">
            <section>
              <router-link to="/timeline">归档</router-link>
            </section>
            <section>
              <router-link to="/cate">分类</router-link>
            </section>
            <section>
              <router-link to="/tag">标签</router-link>
            </section>
          </div>
          <div class="menu_icon" @click="()=>(menuVisible=!menuVisible)">
            <Icon type="md-menu" />
          </div>
        </div>
        <div class="header-options-btn" v-show="menuVisible">
          <section @click="goBack()">
            <Icon type="md-arrow-round-back" />
          </section>
          <section @click="goTop()">
            <Icon type="md-arrow-round-up" />
          </section>
        </div>
        <div class="toc" v-show="menuVisible"></div>
      </section>
    </div>

    <div class="progress-bar" :style="{width:progressWidth}"></div>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { genToc } from "@/assets/js/genToc.js";
import moment from "moment";
export default {
  name: "Detail",
  components: {
    mavonEditor
  },
  data() {
    return {
      id: this.$route.params.id,
      toolbarsFlag: false,
      detailData: {},
      progressWidth: "0",
      menuVisible: true
    };
  },
  computed: {},
  created() {
    this.getDetail();
    
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  filters: {
    formatDate(value) {
      if (!value) return "";
      return moment(value).format("YYYY-MM-DD");
    },
    toString(value) {
      return value.join("、");
    }
  },
  methods: {
      goBack(){
          this.$router.go(-1);
      },
      goTop(){
          document.getElementById("app").scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      },
      addViewNum(){
        let _this = this;
      _this.$post("/api/f/addViewNum", { articleId: _this.id }).then(res => {
      });
      },
    handleScroll(e) {
      //滚动监听进度条变化
      var clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      var needScrollHeight = scrollHeight - clientHeight;
      var scollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.progressWidth = (scollTop / needScrollHeight) * 100 + "vw";
    },
    getDetail() {
      let _this = this;
      this.$get("/api/f/articleDetail", { id: _this.id }).then(res => {
        if (res.code != 200) {
          return;
        }
        _this.detailData = res.data;
        _this.addViewNum();
        _this.$nextTick(() => {
          genToc(".v-show-content", ".toc");
        });
      });
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped lang="less">
.detail {
  color: #c9cacc;
  font-family: Menlo, "Meslo LG", "Helvetica Neue", Helvetica, Arial, sans-serif,
    "微软雅黑", monospace;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 64px 14px 40px;
  .article_main {
    .wrapper {
      & > header {
        margin-bottom: 20px;
        .article_title {
          margin-top: 0;
          margin-bottom: 0;
          text-transform: none;
          font-size: 20px;
          line-height: 1.25;
          color: #ff6600;
        }
        .article_info {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 8px;
          line-height: 1;
          .article_info_item {
            text-align: center;
            padding: 0 12px;
            border-right: 1px solid #ff6600;
            flex-shrink: 0;
            &:first-of-type {
              padding: 0 12px 0 0;
            }
            &:last-of-type {
              border-right: 1px solid transparent;
            }
            i {
              padding-right: 6px;
            }
          }
        }
      }
    }
  }
  .header-fixed {
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 9000;
    & > section {
      position: relative;
      padding: 0 4px;
      .header-top {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-end;
        .nav {
          display: flex;
          flex-flow: row nowrap;
          margin-right: 10px;
          font-size: 16px;
          align-items: center;
          & > section {
            padding: 0 10px;
            line-height: 1;
            border-left: 1px dotted #ff6600;
            &:first-of-type {
              border-left: 1px dotted transparent;
            }
            & > a {
              color: #ff6600;
              &:hover {
                color: #ff6600;
                text-decoration: underline;
              }
            }
          }
        }
        .menu_icon {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          cursor: pointer;
          i {
            font-size: 30px;
            color: #ff6600;
          }
        }
      }
      .header-options-btn {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 14px;
        & > section {
          margin-left: 24px;
          cursor: pointer;
          i {
            font-size: 24px;
          }
        }
      }
    }
  }
  @media (max-width: 640px) {
    & {
      padding: 60px 14px 40px;
    }

    /deep/ .article_main .wrapper > header .article_info {
      flex-wrap: wrap;
    }
    /deep/ .article_main .wrapper > header .article_info .article_info_item {
      width: 50%;
      font-size: 14px;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      margin-bottom: 6px;
      border-right: 1px solid transparent;
      padding: 0;
    }
    /deep/
      .article_main
      .wrapper
      > header
      .article_info
      .article_info_item:first-of-type {
      padding: 0;
    }
  }
  @media (max-width: 1400px) {
    & {
      max-width: 640px;
    }
  }
}
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  height: 4px;
  width: 0vw;
  background-color: #ff6600;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.toc {
  margin-top: 18px;
  max-width: 280px;
  @media (max-width: 1200px) {
    & {
      display: none !important;
    }
  }
}

.markdown {
  background-color: #1d1f21;
  color: #c9cacc;
  border: 1px solid transparent;
  /deep/ .v-show-content {
    background-color: transparent !important;
    padding: 8px 0px 15px !important;
  }
}
/deep/ .markdown-body .highlight pre,
/deep/ .markdown-body pre {
  background-color: #e9ece8 !important;
  color: #2a2a2a !important;
}
</style>
