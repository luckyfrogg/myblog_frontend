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
  watch: {},
  methods: {}
};
</script>

<style scoped lang="less">
.home{
  background-color: #1d1f21;
  min-height: 100%;
}
</style>
