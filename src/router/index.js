import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '@/components/Dashboard';
import Home from '@/components/HelloWorld';
import Welcome from '@/components/Welcome';
import Login from '@/components/pages/Login';
import Backboard from '@/components/backboard';
import Products from '@/components/pages/backProducts';


Vue.use(VueRouter)




export default new VueRouter({
    routes:[
        {
            path:'*',
            redirect:'login'
        },
        {
            name:'測試頁',
            path:'/hw',
            component:Home,
            meta: { requiresAuth: true }
        },
        {
            name:'歡迎頁面',
            path:'/',
            component:Welcome
        },
        {
            name:'分布頁面',
            path:'/main',
            component:Dashboard
        },
        {
            name:'登入頁',
            path:'/login',
            component:Login
        },
        {
            name:'後台',
            path:'/backboard',
            component:Backboard,
            children:[
                {
                    name:'後台內容',
                    path:'products',
                    component:Products,
                    meta: { requiresAuth: true },
                }
            ]
        }
    ]
});