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

<style lang="less">
#app {
  background-color: #1d1f21;
  min-height: 100vh;
}
</style>
<style scoped lang="less">
.home {
  width: 1200px;
  margin: 0 auto;
  padding: 40px 120px;
  & > main {
    padding-top: 20px;
    color: #c9cacc;
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
