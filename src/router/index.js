import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '@/components/Dashboard';
import Home from '@/components/HelloWorld';
import Welcome from '@/components/Welcome';
import Login from '@/components/pages/Login';
import Backboard from '@/components/backboard';
import Products from '@/components/pages/backProducts';
import CustomerOrder from '@/components/pages/CustomerOrder';
import AboutUs from '@/components/AboutUs';
import Warning from '@/components/Warning';
import Menu from '@/components/menu';
import Cart from '@/components/cart';
import Coupons from '@/components/coupons';
import CustomerCheckout from '@/components/pages/CustomerCheckout';
import ShopCart from '@/components/ShopCart';
import CustomCheck from '@/components/CustomCheck';

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
            component:Welcome,
            children:[
                {
                        name:'付款頁面',
                        path:'customcheck',
                        component:CustomCheck
                }
            ]
        },
        {
            name:'分布頁面',
            path:'/main',
            component:Dashboard,
        },
        {
            name:'關於我們',
            path:'/about',
            component:AboutUs
        },
        {
            name:'防疫宣傳',
            path:'/warning',
            component:Warning
        },
        {
            name:'菜單',
            path:'/menu',
            component:Menu
        },
        {
            name:'購物車',
            path:'/cart',
            component:Cart
        },
        
        
        {
            name:'結帳頁面',
            path:'/shopcart',
            component:ShopCart
        },
        {
            name:'優惠卷',
            path:'/coupons',
            component:Coupons
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
        },
        {
            name:'主頁',
            path:'/',
            component:Backboard,
            children:[
                {
                    name:'模擬訂單',
                    path:'customer_order',
                    component:CustomerOrder,
                },
                {
                    name:'顧客確認',
                    path:'customer_checkout/:orderId',
                    component:CustomerCheckout,
                },
            ]
        },
        {
            name:'後台',
            path:'/backboard',
            component:Backboard,
            children:[
                {
                    name:'優惠卷後台',
                    path:'coupons',
                    component:Coupons,
                    meta: { requiresAuth: true },
                }
            ]
        },
    ]
});