<template>
  <div class="welcome">
    <div id="welcome_bg"></div>
    <div id="welcome_overlay"></div>
    <main class="main">
        <div class="avatar">
            <img src="http://img.lizhi0128.com/IMG_0509.jpg" alt="">
        </div>
        <p class="name">胡橙汁</p>
        <q class="motto">博观而约取，厚积而薄发</q>
        <nav class="social">
            <a class="social_icon" href="https://github.com/huchengzhi" target="__blank">
                <img src="http://img.lizhi0128.com/social-github.svg" alt="">
            </a>
            <a class="social_icon" href="" target="__blank">
                <img src="http://img.lizhi0128.com/social-wechat.svg" alt="">
            </a>
            <a class="social_icon" href="" target="__blank">
                <img src="http://img.lizhi0128.com/social-qq.svg" alt="">
            </a>
            <a class="social_icon" href="https://weibo.com/p/1005051305415334" target="__blank">
                <img src="http://img.lizhi0128.com/social-weibo.svg" alt="">
            </a>
        </nav>
        <nav class="nav">
            <router-link to="/home">博客</router-link>
             <router-link to="/cate">分类</router-link>
              <router-link to="/tag">标签</router-link>
        </nav>
    </main>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>
<style lang="less">
@import '../assets/css/welcome/style.less';
</style>
