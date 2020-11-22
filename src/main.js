// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

//自定義
import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filter/currency';

//vee-validate
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json'
import * as rules from 'vee-validate/dist/rules';

axios.defaults.withCredentials = true;//存入cookie


// import Home from '@/components/HelloWorld'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Loading);


// Vue.use(VueI18n);
// const i18n = new VueI18n({
//   locale: 'zhTW'
// });
// Vue.use(VeeValidate, {
//   i18n,
//   dictionary: {
//     zhTW
//   }
// });

//全域
Vue.component('Loading',Loading);
Vue.filter('currency',currencyFilter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})
//VeeValidate
// new Vue({
//   i18n,
//   el: '#app',
//   components: { App },
//   template: '<App/>',
//   router,
// })
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize('zh_TW', TW);

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});


//導航守衛
router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
      const api = `${process.env.APIPATH}/api/user/check`;
        axios.post(api).then((response) => {
        console.log(response.data);
        if(response.data.success){
            next();
        }else{
          next({
            path:'/login'
          })
        }
    })
  }else{
    next();//避免被導航守衛攔截
  }
 
})
