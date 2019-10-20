<template>
  <div id="main">
    <!-- 框架 s -->
    <Frame>
      <div class="content-wrap" slot="left"><OrderList></OrderList></div>
      <div class="content-wrap" slot="right">
        <!-- <ProductList></ProductList> -->
        <!-- <OrderParameter></OrderParameter> -->
        <!-- <NotDoneOrder></NotDoneOrder> -->
        <NotGetOrder></NotGetOrder>
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
import PopWrap from '@/components/PopWrap';
import PopMember from '@/components/PopMember';
import PopWork from '@/components/PopWork';
import OrderParameter from '@/components/OrderParameter';
import NotDoneOrder from '@/components/NotDoneOrder';
import NotGetOrder from '@/components/NotGetOrder';

export default {
  components: { 
    Frame,
    ProductList,
    OrderList,
    PopWrap,
    PopMember,
    PopWork,
    OrderParameter,
    NotDoneOrder,
    NotGetOrder
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
.content-wrap{
  height: 100%;
  overflow: auto;
}
</style>