<template>
  <div id="app">
    <!-- <header>
      <Header></Header>
    </header> -->
     <router-view/>
    <!-- <footer>
      <Footer></Footer>
    </footer> -->
   
  </div>
</template>
<script>
import Header from '@/components/commonLayout/header'
import Footer from '@/components/commonLayout/footer'
export default {
  name:"App",
    data() {
        return {

        };
    },
    components:{
      Header,
      Footer
    }
}
</script>
<style lang="less">
// @import url("../assets/css/common.css");
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    font-size: 16px;
    /deep/ .markdown-body a{
    color: #ff6600;
  }
  }
  ul{
    list-style: none;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2a2a2a;
    background-color: #1d1f21;
   min-height: 100vh;
  }
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
