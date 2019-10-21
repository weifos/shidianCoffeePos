<template>
  <div id="main">
    <!-- 框架 s -->
    <Frame>
      <div class="content-wrap h100" slot="left">
        <!-- <OrderList></OrderList> -->
        <OrderList2></OrderList2>
      </div>
      <div class="content-wrap h100" slot="right">
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
    <!-- 会员弹层 s -->
    <PopWrap :show="false">
        <div class="pop-content" slot="content"><PopMember></PopMember></div>
    </PopWrap>
    <!-- 会员弹层 e -->
    <!-- 上下班弹层 s -->
    <PopWrap :show="false">
        <div class="pop-content" slot="content"><PopWork></PopWork></div>
    </PopWrap>
    <!-- 上下班弹层 e -->
  </div>
</template>

<script>
import app_g from '@/modules/appGlobal'
import { mapState } from "vuex"
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
      pageTitle: '商城首页',
      result: {}
    }
  },
  computed: {
    ...mapState({
      isShowDrawer: state => state.vux.isShowDrawer
    })
  },
  methods: {

  },
  created() {
    //localStorage.setItem('pageTitle', this.pageTitle)
    //document.getElementById('pageTitle').innerHTML = localStorage.getItem('pageTitle')
  }
}
</script> 

<style lang="scss">
// .content-wrap{
//   height: 100%;
//   overflow: auto;
// }
</style>