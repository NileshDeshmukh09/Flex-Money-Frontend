import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import Router from 'vue-router';
import router from './router';
import VueToast from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-sugar.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";




Vue.config.productionTip = false
Vue.use( Vuelidate );
Vue.use(Router);
Vue.use( VueToast, {
  position : 'top-right',
});

new Vue({
  router,
  VueToast,
  render: h => h(App),
}).$mount('#app')
