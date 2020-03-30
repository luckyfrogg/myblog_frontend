<template>
  <div class="home">
    <header>
      <Header></Header>
    </header>
    <router-view />
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
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log(to, from)
    }
  },
  methods: {}
};
</script>

<style lang="less">
#app{
        background-color: #1d1f21;
    min-height: 100vh;
    
}
</style>
<style scoped lang="less">
.home{
      width: 1200px;
    margin: 0 auto;
    padding-top: 40px;

}
</style>
