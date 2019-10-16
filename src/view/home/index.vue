<template>
  <div id="main">aaa</div>
</template>

<script>
import app_g from '@/modules/appGlobal'
import { mapState } from "vuex"
import { Swiper as BannerSwiper, SwiperItem, Drawer } from 'vux'

export default {
  components: {  },
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

<style scoped="scoped">
</style>