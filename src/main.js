import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { fetchPost, fetchGet } from '@/plugin/axios/index';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.prototype.$get = fetchGet;
Vue.prototype.$post = fetchPost;
Vue.config.productionTip = false
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
