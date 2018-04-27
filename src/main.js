/**
 * 使用Vue去运行App.vue
 */

import Vue from 'vue' //相当于 var Vue = require('vue')

//导入根组件
import App from './App.vue'
//导入moment
import moment from 'moment'

//导入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//导入vue-lazyload
import VueLazyLoad from 'vue-lazyload';


//使用懒加载
Vue.use(VueLazyLoad, {
    loading: require("./statics/site/images/01.gif")
})

Vue.use(ElementUI);


//开启cookies
$axios.defaults.withCredentials = true
$axios.defaults.baseURL = 'http://39.108.135.214:8899/'





//Vue的过滤器
Vue.filter('gettime', (input, myformat = 'YYYY-MM-DD') => {
    //使用moment
    return moment(input).format(myformat);
})

//全局导入样式【每个组件都可以用】
import "./statics/site/css/style.css"

/**利用Vue框架创建出来的根实例，去把根组件的template中的内容，渲染到id=app的div中去 */
//导入router
import router from './components/route/index'
//导入vuex
import {store} from './components/vuex/vuex'
new Vue({
    router,
    el: "#app",
    /**
    render:function(createElement){//用来渲染根组件
       return createElement(App)
    }**/
    render: h => h(App),
    store,
})