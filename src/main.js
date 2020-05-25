import Vue from 'vue'
import App from './App.vue'
import lastfm from './plugins/lastfm';

import artist from './vuex/artist'
import router from './router/router'
import InfiniteLoading from './v-ifinity-loading/InfiniteLoading'
import vuetify from './plugins/vuetify';



Vue.config.productionTip = false
Vue.use(lastfm);

new Vue({
  render: h => h(App),
  artist,
  router,
  vuetify,
  InfiniteLoading
}).$mount('#app')
