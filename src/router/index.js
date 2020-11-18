import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '@/components/Dashboard';
import Home from '@/components/HelloWorld';
import Welcome from '@/components/Welcome';

Vue.use(VueRouter)




export default new VueRouter({
    routes:[
        // {
        //     name:'首頁',
        //     path:'/',
        //     component:Home
        // },
        {
            name:'歡迎頁面',
            path:'/',
            component:Welcome
        },
        {
            name:'分布頁面',
            path:'/main',
            component:Dashboard
        }
    ]
});