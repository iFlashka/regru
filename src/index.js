import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

const app = new Vue({
  router,
  store,
  render(h) {
    return h(App);
  },
});

app.$mount(document.querySelector('#app'));
