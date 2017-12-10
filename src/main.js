import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';

import Vue from 'vue';
import App from '@/App';
import router from '@/router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
