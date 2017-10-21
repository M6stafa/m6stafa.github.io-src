// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Injector from 'vue-inject';
import App from '@/App';
import router from '@/router';

Vue.config.productionTip = false;

Vue.use(Injector);

// Inject
Injector.constant('$', window.jQuery);
// Remove
window.$ = undefined;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
