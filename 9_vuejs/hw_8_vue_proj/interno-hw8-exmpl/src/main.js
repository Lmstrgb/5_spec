import Vue from 'vue';
// import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// createApp(App).use(store).use(router).mount('#app');
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');