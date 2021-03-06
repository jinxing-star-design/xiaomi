import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Order from './pages/order'
import Cart from './pages/cart'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import OrderConfirm from './pages/orderConfirm'
import AliPay from './pages/alipay'
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router ({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index, 
                },
                {   path:'/product/:id',
                    name:'product',
                    component:Product, 

                },
                {
                    path:'/detail/:id',
                    name:'detail',
                    component:Detail,
                }
            ]
        },
        {
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    path:'list',
                    name:'order-list',
                    component:OrderList
                },
                {
                    path:'confirm',
                    name:'order-confirm',
                    component:OrderConfirm
                },
                {
                    path:'pay',
                    name:'order-pay',
                    component:OrderPay                  

                },
                {
                    path:'alipay',
                    name:'alipay',
                    component:AliPay     

                }
            ]
        },
        {
            path:'/cart',
            name:'cart',
            component:Cart,
            
        }
    ]
});