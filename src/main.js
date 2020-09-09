import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import { fetchPost, fetchGet,uploadFile } from '@/plugin/axios/index';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;
Vue.prototype.$uploadFile = uploadFile;
Vue.prototype.$get = fetchGet;
Vue.prototype.$post = fetchPost;
Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.use(Antd);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
