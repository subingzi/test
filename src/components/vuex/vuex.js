import Vue from 'vue' //相当于 var Vue = require('vue')
//导入vuex
import Vuex from 'vuex';
//使用vuex
Vue.use(Vuex)

//局部导入
import {
    addLocalGoods,
    getLocalGoodsCount,
    updateLocalgoods,
    deleteLocalGoods
} from '../../comment/localstorage'
//创建一个仓库
const store = new Vuex.Store({
    state: {
        buyCount: 0,
    },
    getters: {
        getBuyCount: function (state) {
            if (state.buyCount > 0) {
                return state.buyCount
            } else {
                return getLocalGoodsCount()
            }
        }
    },
    mutations: {
        addGoods: function (state, payload) {
            state.buyCount = addLocalGoods(payload);
            // console.log(state.buyCount);
        },
        updataGoods: function (state, payload) {
            state.buyCount = updateLocalgoods(payload);
        },
        deleteGoods: function (state, payload) {
            state.buyCount = deleteLocalGoods(payload);
            // console.log(1);            
        }
    }
})

export {store}