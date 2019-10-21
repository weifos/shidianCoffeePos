<template>
  <div id="main">
    <!-- 框架 s -->
    <Frame :result="user">
      <div class="content-wrap" slot="left">
        <OrderList></OrderList>
      </div>
      <div class="content-wrap" slot="right">
        <ProductList></ProductList>
        <!-- <OrderParameter></OrderParameter> -->
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
import api from '@/modules/api'
import app_g from '@/modules/appGlobal'
import { mapState } from "vuex"
import { Swiper as BannerSwiper, SwiperItem, Drawer } from 'vux'
import Frame from '@/components/Frame'
import ProductList from '@/components/ProductList'
import OrderList from '@/components/OrderList'
import PopWrap from '@/components/PopWrap'
import PopMember from '@/components/PopMember'
import PopWork from '@/components/PopWork'
import OrderParameter from '@/components/OrderParameter'

export default {
  components: {
    Frame,
    ProductList,
    OrderList,
    PopWrap,
    PopMember,
    PopWork,
    OrderParameter
  },
  data() {
    return {
      pageTitle: '十点咖啡POS收银',
      isLogin: false,
      user: {}
    }
  },
  computed: {
    ...mapState({
      isShowDrawer: state => state.vux.isShowDrawer
    })
  },
  methods: {
    //处理组件登录成功
    lgSuccess(data) {
      this.user = data
    }
  },
  created() {
    this.isLogin = this.UserInfo.islogin()
    if (!this.isLogin) {
      store.commit('setShowDialog', { showDialog: true })
    }
    localStorage.setItem('pageTitle', this.pageTitle)
    document.getElementById('pageTitle').innerHTML = localStorage.getItem('pageTitle')
  }
}
</script> 

<style lang="scss">
.content-wrap {
  height: 100%;
  overflow: auto;
}
</style>