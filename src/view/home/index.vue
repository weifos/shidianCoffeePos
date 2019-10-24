<template>
  <div id="main">
    <!-- 框架 s -->
    <Frame :result="user">
      <div class="content-wrap h100" slot="left">
<<<<<<< HEAD
        <OrderList></OrderList>
        <!-- <OrderList2></OrderList2> -->
=======
        <!-- <OrderList></OrderList> -->
        <OrderList2></OrderList2>
>>>>>>> 8dc6c02513def10c4eee68473bf4aa6975a639dd
      </div>
      <div class="content-wrap h100" slot="right">
        <ProductList ref="pList" :show="showProductList" v-on:getSKU="loadSKU"></ProductList>
        <OrderParameter ref="pSKU" :show="showProductSku" v-on:cancelSKU="closeSKU"></OrderParameter>
        <!-- <ProductList></ProductList> -->
        <!-- <OrderParameter></OrderParameter> -->
        <!-- <NotDoneOrder></NotDoneOrder> -->
        <!-- <NotGetOrder></NotGetOrder> -->
        <!-- <OrderPay></OrderPay> -->
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
import api from '@/modules/api'
import app_g from '@/modules/appGlobal'
import app_m from "@/modules/appMiddleware"
import { Swiper as BannerSwiper, SwiperItem, Drawer } from 'vux'
import Frame from '@/components/Frame'
import ProductList from '@/components/ProductList';
import OrderList from '@/components/OrderList';
import OrderList2 from '@/components/OrderList2';
import PopWrap from '@/components/PopWrap';
import PopMember from '@/components/PopMember';
import PopWork from '@/components/PopWork';
import OrderParameter from '@/components/OrderParameter';
import NotDoneOrder from '@/components/NotDoneOrder';
import NotGetOrder from '@/components/NotGetOrder';
import OrderPay from '@/components/OrderPay';
import OrderNormal from '@/components/OrderNormal';
import OrderEntry from '@/components/OrderEntry';

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
  },
  data() {
    return {
      pageTitle: '十点咖啡POS收银',
      isLogin: false,
      showProductList: true,
      showProductSku: false,
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
      this.showProductList = false
      this.showProductSku = true
      //同时父组件通知商品列表子组件
      this.$refs.pSKU.api_202(data)
    },
    //子组件通知父组件，关闭商品SKU信息
    closeSKU() {
      this.showProductSku = false
      this.showProductList = true
    },
    aa(dt) {
      console.log(dt)
    },
    bb(dt) {
      console.log(dt)
    }
  },
  created() {
    //app_m.init(this.aa)
    //app_m.print(this.bb)

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