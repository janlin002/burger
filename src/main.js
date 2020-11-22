// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// import VeeValidate from 'vee-validate';
// import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n';Vue.use(VueI18n);


//自定義
import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filter/currency';

axios.defaults.withCredentials = true;//存入cookie


// import Home from '@/components/HelloWorld'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Loading);

const i18n = new VueI18n({
  locale: 'zhTW'
});
Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    zhTW
  }
});

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
new Vue({
  i18n,
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})


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
