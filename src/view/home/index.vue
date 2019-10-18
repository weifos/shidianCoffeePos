<template>
  <div id="main">
    <Frame>
      <div class="content-wrap" slot="left"><OrderList></OrderList></div>
      <div class="content-wrap" slot="right"><ProductList></ProductList></div>
    </Frame>
  </div>
</template>

<script>
import app_g from '@/modules/appGlobal'
import { mapState } from "vuex"
import { Swiper as BannerSwiper, SwiperItem, Drawer } from 'vux'
import Frame from '@/components/Frame'
import ProductList from '@/components/ProductList';
import OrderList from '@/components/OrderList';
export default {
  components: { 
    Frame,
    ProductList,
    OrderList
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