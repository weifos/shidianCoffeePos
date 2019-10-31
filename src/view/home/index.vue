<template>
  <div id="main">
    <!-- 框架 s -->
    <Frame :result="user" v-on:nav="nav">
      <div class="content-wrap h100" slot="left">
        <OrderList ref="orderList" v-on:submitOrder="confirmOrder"></OrderList>
        <!-- <OrderList2></OrderList2> -->
      </div>
      <div class="content-wrap h100" slot="right">
        <ProductList ref="pList" :show="showProductList" v-on:getSKU="loadSKU"></ProductList>

        <!-- 选择商品 -->
        <OrderParameter ref="pSKU" :show="showProductSku" v-on:cancelSKU="closeSKU" v-on:setShoppingCart="updateShoppingCart"></OrderParameter>

        <!-- 确认订单 -->
        <OrderSure ref="orderSure" :show="showConfirmOrder" v-on:goPay="goPay"></OrderSure>

        <!-- 订单付款 -->
        <OrderPay ref="payOrder" :show="showOrderPay" v-on:paySuccess="paySuccess"></OrderPay>

        <!-- 未制作订单 -->
        <NotDoneOrder :show="showNotDoneOrder"></NotDoneOrder>
        <!-- <NotGetOrder></NotGetOrder> -->
        <!-- <OrderNormal></OrderNormal> -->
        <!-- <OrderEntry></OrderEntry> -->
      </div>
    </Frame>
    <!-- 框架 e -->

    <!-- 上下班弹层 s -->
    <PopWrap>
      <!-- <div class="pop-content" slot="content">
        <PopMember></PopMember>
      </div>-->
      <div v-if="!isLogin" class="pop-content" slot="content">
        <PopWork v-on:loginSuccess="lgSuccess"></PopWork>
      </div>
    </PopWrap>
    <!-- 上下班弹层 e -->
  </div>
</template>

<script>
import store from '@/store'
import { mapState } from "vuex"
import router from '@/router'
import api from '@/modules/api'
import app_g from '@/modules/appGlobal'
import app_m from "@/modules/appMiddleware"
import { Swiper as BannerSwiper, SwiperItem, Drawer } from 'vux'
import Frame from '@/components/Frame'
import ProductList from '@/components/ProductList'
import OrderList from '@/components/OrderList'
import OrderList2 from '@/components/OrderList2'
import PopWrap from '@/components/PopWrap'
import PopMember from '@/components/PopMember'
import PopWork from '@/components/PopWork'
import OrderParameter from '@/components/OrderParameter'
import NotDoneOrder from '@/components/NotDoneOrder'
import NotGetOrder from '@/components/NotGetOrder'
import OrderPay from '@/components/OrderPay'
import OrderNormal from '@/components/OrderNormal'
import OrderEntry from '@/components/OrderEntry'
import OrderSure from '@/components/OrderSure'

export default {
  components: {
    Frame,
    ProductList,
    OrderList,
    OrderList2,
    PopWrap,
    PopMember,
    PopWork,
    OrderParameter,
    NotDoneOrder,
    NotGetOrder,
    OrderPay,
    OrderNormal,
    OrderEntry,
    OrderSure
  },
  data() {
    return {
      pageTitle: '十点咖啡POS收银',
      isLogin: false,
      showProductList: true,
      showProductSku: false,
      showConfirmOrder: false,
      showOrderPay: false,
      //是否绑定门店
      isBindStore: false,
      //未制作完成
      showNotDoneOrder: false,
      user: {},
      products: {}
    }
  },
  computed: {
    ...mapState({
      isShowDrawer: state => state.vux.isShowDrawer
    })
  },
  methods: {
    //子组件通知父组件，处理组件登录成功
    lgSuccess(data) {
      this.user = data
      this.loadProducts()
    },
    //子组件通知父组件，加载商品信息
    loadProducts() {
      //同时父组件通知商品列表子组件
      this.$refs.pList.api_200()
    },
    //子组件通知父组件，加载商品SKU信息
    loadSKU(data) {
      this.clearScreen()
      this.showProductSku = true
      //同时父组件通知商品列表子组件
      this.$refs.pSKU.api_202(data)
    },
    //更新购物车信息
    updateShoppingCart() {
      this.$refs.orderList.upShoppingCart()
    },
    //确认订单
    confirmOrder(data) {
      this.clearScreen()
      this.showConfirmOrder = true
      this.$refs.orderSure.api_204(data)
    },
    //订单付款
    goPay(data) {
      this.clearScreen()
      this.showOrderPay = true
      this.$refs.payOrder.init(data)
    },
    //支付成功
    paySuccess() {
      this.clearScreen()
      this.showNotDoneOrder = true
    },
    //取消订单
    cancelOrder() { },
    //子组件通知父组件，关闭商品SKU信息
    closeSKU() {
      this.clearScreen()
      this.showProductList = true
    },
    //清屏
    clearScreen() {
      this.showProductList = false
      this.showProductSku = false
      this.showConfirmOrder = false
      this.showOrderPay = false
      this.showNotDoneOrder = false
    },
    //
    nav(type) {
      debugger
      this.clearScreen()
      //未制作完成
      if (type == 'notDoneOrder') {
        this.showNotDoneOrder = true
      }
    },
    //检查设备
    api_100(pos) {
      let that = this
      api.post(api.api_100, api.getSign({
        Pos: pos
      }), function (vue, res) {
        if (res.data.Basis.State == api.state.state_200) {
          app_g.setPos(res.data.Result)
        } else {
          that.$vux.toast.text(res.data.Basis.Msg, 'default', 3000)
          router.push({ path: "./auth" })
        }
      })
    }
  },
  created() {
    let that = this
    //当前POS设备是否绑定
    let pos = app_g.getPos()
    if (pos == null || pos.state_id == undefined || pos.state_id == 0) {
      let appInit = function (result) {
        if (result.length) {
          let tmp = JSON.parse(result)
          if (tmp.Basis.State == api.state.state_200) {
            //浏览器测试环境
            if (tmp.Result.product == "browser") { }
            that.api_100(tmp.Result)
          } else {
            that.$vux.toast.text('POS信息加载失败', 'default', 3000)
          }
        }
      }
      //初始化设备
      app_m.init(appInit)
    }

    this.isLogin = this.UserInfo.islogin()
    //如果未登录，弹出登录对话框
    if (!this.isLogin) {
      store.commit('setShowDialog', { showDialog: true })
    }

    localStorage.setItem('pageTitle', this.pageTitle)
    document.getElementById('pageTitle').innerHTML = localStorage.getItem('pageTitle')
  }
}
</script> 

<style lang="scss">
// .content-wrap{
//   height: 100%;
//   overflow: auto;
// }
</style>