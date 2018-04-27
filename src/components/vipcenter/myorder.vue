<template>
    <div>
        <div class="el-row">
            <div class="el-col el-col-24">
                <div class="comp">
                    <div class="tmpl routeanimate">
                        <div class="section">
                            <div class="location">
                                <span>当前位置：</span>
                                <a href="/index.html">首页</a> &gt;
                                <a href="#/site/member/center" class="">会员中心</a>&gt;
                                <a href="#/site/member/orderlist" class="router-link-exact-active ">我的订单</a>
                            </div>
                        </div>
                        <div class="section clearfix">
                            <div class="left-260">
                                <div class="bg-wrap">
                                    <div class="avatar-box">
                                        <a href="/user/center/avatar.html" class="img-box">
                                            <i class="iconfont icon-user-full"></i>
                                        </a>
                                        <h3>

                                            ivanyb

                                        </h3>
                                        <p>
                                            <b>注册会员</b>
                                        </p>
                                    </div>
                                    <div class="center-nav">
                                        <ul>
                                            <li>
                                                <h2>
                                                    <i class="iconfont icon-order"></i>
                                                    <span>订单管理</span>
                                                </h2>
                                                <div class="list">
                                                    <p>
                                                        <a href="#/site/member/orderlist" class="router-link-exact-active ">
                                                            <i class="iconfont icon-arrow-right"></i>交易订单</a>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <h2>
                                                    <i class="iconfont icon-user"></i>
                                                    <span>账户管理</span>
                                                </h2>
                                                <div class="list">
                                                    <p>
                                                        <a href="#/site/member/center" class="">
                                                            <i class="iconfont icon-arrow-right"></i>账户资料</a>
                                                    </p>
                                                    <p>
                                                        <a href="#/site/member/center" class="">
                                                            <i clrouter-linkss="iconfont icon-router-linkrrow-right"></i>头像设置</a>
                                                    </p>
                                                    <p>
                                                        <a href="#/site/member/center" class="">
                                                            <i class="iconfont icon-arrow-right"></i>修改密码</a>
                                                    </p>
                                                    <p>
                                                        <a href="javascript:void(0)">
                                                            <i class="iconfont icon-arrow-right"></i>退出登录</a>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="right-auto">
                                <div class="bg-wrap" style="min-height: 765px;">
                                    <div class="sub-tit">
                                        <ul>
                                            <li class="selected">
                                                <a href="/user/order-list.html">交易订单</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="table-wrap">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="ftable">
                                            <tbody>
                                                <tr>
                                                    <th width="16%" align="left">订单号</th>
                                                    <th width="10%">姓名</th>
                                                    <th width="12%">订单金额</th>
                                                    <th width="11%">下单时间</th>
                                                    <th width="10%">状态</th>
                                                    <th width="12%">操作</th>
                                                </tr>
                                                <tr v-for='item in orderInfo.message'>
                                                    <td>{{item.order_no}}</td>
                                                    <td align="left">{{item.accept_name}}</td>
                                                    <td align="left">
                                                        <strong style="color: red;">￥{{item.order_amount}}</strong>
                                                        <br> {{item.paymentTitle}}
                                                    </td>
                                                    <td align="left">{{item.express_time|gettime('YYYY-MM-DD HH:mm:ss')}}</td>
                                                    <td align="left">
                                                        {{item.statusName}}
                                                    </td>
                                                    <td align="left">
                                                        <a @click="lookorder(item.id)" class="">查看订单</a>
                                                        <br>
                                                        <router-link :to="'/payfor/'+item.id"  class="">|去付款</router-link>
                                                        <br>
                                                        <a href="javascript:void(0)">|取消</a>
                                                        <br>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="page-foot">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      pageIndex: 1,
      pageSize: 10,
      orderInfo:{

      }
    };
  },
  created() {
      this.getorder()
  },
  methods: {
    getorder() {
      $axios
        .get(
          `site/validate/order/userorderlist?pageIndex=${
            this.pageIndex
          }&pageSize=${this.pageSize}`
        )
        .then(
          response => {
            console.log(response.data);
            this.orderInfo=response.data
          },
          err => {
            console.log(err);
          }
        );
    },
    lookorder(myorderId){        
        this.$router.push({
            name:'lookorder',params:{orderId:myorderId}
        })
    }
  }
};
</script>
