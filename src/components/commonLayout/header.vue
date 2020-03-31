<template>
  <div class="header">
    <div class="avatar" @click="goWelcome">
      <img src="http://img.lizhi0128.com/IMG_0509.jpg" alt="avatar" />
    </div>
    <section>
      <h2>博客</h2>
      <nav>
        <div>
          <router-link to="/timeline">博客</router-link>
        </div>
        <div>
          <router-link to="/cate">分类</router-link>
        </div>
        <div>
          <router-link to="/tag">标签</router-link>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
      goWelcome(){
          this.$router.push({
              'path':'/welcome'
          })
      }
  },
  components: {}
};
</script>

<style scoped lang="less">
.header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  .avatar {
    flex-shrink: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 74px;
    height: 74px;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;
    img {
      flex-shrink: 0;
      max-width: 100%;
    }
  }
  & > section {
    margin-left: 24px;
    h2 {
      color: #c9cacc;
      font-size: 24px;
    }
    nav {
      margin-top: 4px;
      display: flex;
      & > div {
        margin-right: 15px;
        padding: 0 15px 0 0;
        border-right: 1px dotted #2bbc8a;
        a {
          font-size: 14px;
          color: #2bbc8a;
          text-decoration: none;

          &:hover {
            background-repeat: repeat-x;
            background-position: bottom;
            background-size: 100% 6px;
            background-image: linear-gradient(
              transparent,
              transparent 5px,
              #2bbc8a 5px,
              #2bbc8a
            );
          }
        }
        &:last-of-type {
          border-right: 1px dotted transparent;
        }
      }
    }
  }
}
</style>
