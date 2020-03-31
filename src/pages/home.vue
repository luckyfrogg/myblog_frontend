<template>
  <div class="home">
    <header>
      <Header></Header>
    </header>
    <main>
      <router-view />
    </main>

    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/commonLayout/header";
import Footer from "@/components/commonLayout/footer";
export default {
  name: "Home",
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
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      console.log(to, from);
    }
  },
  methods: {}
};
</script>


<style scoped lang="less">
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 200px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100vh;
  & > main {
    padding-top: 20px;
    color: #c9cacc;
    flex: 1;
    padding-bottom: 20px;
  }
}
@media (max-width: 989px) {
  .home {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
  }
}
</style>
