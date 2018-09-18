// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Loading from "vue-loading-overlay"
import 'vue-loading-overlay/dist/vue-loading.min.css';
import "bootstrap";
import VeeValidate from 'vee-validate'
import attributesTW from 'vee-validate/dist/locale/zh_TW.js';

import App from "./App";
import router from "./router";
import './bus';
import currencyFilter from './filters/currency'
import dateFilter from './filters/date'

Vue.use(VueAxios, axios);

VeeValidate.Validator.localize('zh_TW',attributesTW)
Vue.use(VeeValidate);

Vue.config.productionTip = false;

Vue.component('Loading', Loading)
Vue.filter('currency',currencyFilter)
Vue.filter('dateFilter',dateFilter)
/* eslint-disable no-new */
axios.defaults.withCredentials = true;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    //需要驗證,判斷是否登入
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then(res => {
      console.log(res.data);
      if (res.data.success) {
        //由伺服器判斷是否登入
        next();
      } else {
        alert("請重新登入");
        next({
          path: "/signin"
        });
      }
    });
  } else {
    //不需驗證
    next();
  }
});
