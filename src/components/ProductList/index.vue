<template>
  <div class="product-list rel">
    <div class="product-cate abs bg-white">
      <ul class="list-cate-1 list-inlineblock">
        <li class="f-item item-cate" v-for="(item,index) in product" :key="index" @click="onClickItem(index)">
          <div :class="`button round border-gray text-gray ${curIndex == index ? 'button-border-cur' : ''}`">{{item.name}}</div>
        </li>
      </ul>
    </div>
    <div class="product-items">
      <ul class="list-product-1">
        <li class="item-product" v-for="(item,index) in product[curIndex].list" :key="index">
          <div class="item-img">
            <img :alt="item.name" :src="item.url" width="100%" height="100%" />
          </div>
          <div class="item-info text-gray">
            <div class="item-no">NO.{{item.id}}</div>
            <div class="item-name ellipsis2">{{item.name}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import api from '@/modules/api'
export default {
  data() {
    return {
      curIndex: 0,
      product: [
        {
          name: "水果软软",
          list: [{
            id: "003300",
            url: require("../../../static/img/e33e1ccae803d50545e38c8fb2d8b4ae347332402738fa-oIjIDx_fw658.png"),
            name: "商品名称商品名称 商品名称商品名称商品名称商品名称",
            link: ''
          }, {
            id: "003301",
            url: require("../../../static/img/e33e1ccae803d50545e38c8fb2d8b4ae347332402738fa-oIjIDx_fw658.png"),
            name: "商品名称商品名称 商品名称",
            link: ''
          }, {
            id: "003301",
            url: require("../../../static/img/e33e1ccae803d50545e38c8fb2d8b4ae347332402738fa-oIjIDx_fw658.png"),
            name: "商品名称商品名称 商品名称",
            link: ''
          }, {
            id: "003301",
            url: require("../../../static/img/e33e1ccae803d50545e38c8fb2d8b4ae347332402738fa-oIjIDx_fw658.png"),
            name: "商品名称商品名称 商品名称",
            link: ''
          }, {
            id: "003301",
            url: require("../../../static/img/e33e1ccae803d50545e38c8fb2d8b4ae347332402738fa-oIjIDx_fw658.png"),
            name: "商品名称商品名称 商品名称",
            link: ''
          }, {
            id: "003301",
            url: require("../../../static/img/e33e1ccae803d50545e38c8fb2d8b4ae347332402738fa-oIjIDx_fw658.png"),
            name: "商品名称商品名称 商品名称",
            link: ''
          }, {
            id: "003301",
            url: require("../../../static/img/e33e1ccae803d50545e38c8fb2d8b4ae347332402738fa-oIjIDx_fw658.png"),
            name: "商品名称商品名称 商品名称",
            link: ''
          }, {
            id: "003301",
            url: require("../../../static/img/e33e1ccae803d50545e38c8fb2d8b4ae347332402738fa-oIjIDx_fw658.png"),
            name: "商品名称商品名称 商品名称",
            link: ''
          }, {
            id: "003301",
            url: require("../../../static/img/e33e1ccae803d50545e38c8fb2d8b4ae347332402738fa-oIjIDx_fw658.png"),
            name: "商品名称商品名称 商品名称",
            link: ''
          }, {
            id: "003301",
            url: require("../../../static/img/e33e1ccae803d50545e38c8fb2d8b4ae347332402738fa-oIjIDx_fw658.png"),
            name: "商品名称商品名称 商品名称",
            link: ''
          }, {
            id: "003301",
            url: require("../../../static/img/e33e1ccae803d50545e38c8fb2d8b4ae347332402738fa-oIjIDx_fw658.png"),
            name: "商品名称商品名称 商品名称",
            link: ''
          }]
        }, {
          name: "水果软软2",
          list: [{
            id: "003300",
            url: require("../../../static/img/e33e1ccae803d50545e38c8fb2d8b4ae347332402738fa-oIjIDx_fw658.png"),
            name: "商品名称商品名称 商品名称商品名称商品名称商品名称",
            link: ''
          }]
        }
      ]
    }
  },
  methods: {
    onClickItem(index) {
      this.curIndex = index;
    },
    //加载商品数据
    api_200() {
      this.$store.commit('loadingStatus', {
        isLoading: true
      })
      api.post(api.api_200, api.getSign(), function (vue, res) {
        if (res.data.Basis.State == app_g.state.state_200) {
          console.log(res.data.Result)
          debugger
        } else {
          vue.$vux.toast.text(res.data.Basis.Msg, 'default', 5000)
          vue.isDisable = true
        }
      })

    }
  },
  created() {
    //this.api_200()
  }
}
</script>

<style lang="scss">
.list-cate-1 {
  padding: 16px 50px 0 50px;
  .item-cate {
    margin-right: 20px;
    &:last-child {
      margin: 0;
    }
  }
}
.product-cate {
  height: 67px;
  width: 100%;
  left: 0;
  top: 0;
}
.product-list {
  padding: 67px 0 0 0;
  height: 100%;
  box-sizing: border-box;
}
.product-items {
  box-sizing: border-box;
  overflow: auto;
  height: 100%;
  padding: 37px 0 0 32px;
}
.list-product-1 {
  font-size: 0;
  .item-product {
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    font-size: 15px;
    width: 161px;
    height: 232px;
    background-color: #fff;
    margin: 0 32px 37px 0;
  }
  .item-img {
    height: 132px;
  }
  .item-info {
    padding: 14px;
  }
  .item-name {
    margin-top: 7px;
    line-height: 25px;
  }
}
</style>
