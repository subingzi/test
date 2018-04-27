import Vue from 'vue' //相当于 var Vue = require('vue')
//导入router
import VueRouter from 'vue-router'
//使用router
Vue.use(VueRouter)

//导入组件
import goodslist from '../goods/goodslist.vue'
import shopcart from '../shopcart/shopcar.vue'
import goodsdetail from '../goods/goodsdetail.vue'
import login from '../account/login.vue'
import order from '../order/order.vue'
import payfor from '../pay/pay.vue'
import paySuccess from '../pay/paySuccess.vue'
import vipcenter from '../vipcenter/vipcenter.vue'
import myorder from '../vipcenter/myorder.vue'
import lookorder from '..//vipcenter/lookorder.vue'

//创建路由对象 设置路由规则
var router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/goodslist'
        },
        {
            path: '/goodslist',
            component: goodslist
        },
        {
            path: '/getgoodsdetail/:goodsId',
            component: goodsdetail
        },
        {
            path: '/shopcart',
            component: shopcart
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/order/:ids',
            component: order,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/payfor/:payid',
            component: payfor,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/paySuccess',
            component: paySuccess,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/vipcenter',
            component: vipcenter,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/myorder',
            component: myorder,
            meta: {
                requiresAuth: true
            }
        },
        {
            name:'lookorder',
            path: '/lookorder/:orderId',
            component: lookorder,
            meta: {
                requiresAuth: true
            }
        }
    ]
})

//路由守卫
router.beforeEach((to, from, next) => {
    console.log(to);
    if (to.path != "/login") {
        console.log(222);
        localStorage.setItem('lastVisitPath', to.path)
    }


    //需要验证
    if (to.meta.requiresAuth) {
        //看是否登录
        $axios.get('site/account/islogin').then(response => {
            //没有登录
            if (response.data.code == 'nologin') {
                //去登陆页
                router.push({
                    path: '/login'
                })
            } else { //登录了
                next()
            }
        })
    } else {
        //不需要验证 往下走
        next()
    }

})

export default router