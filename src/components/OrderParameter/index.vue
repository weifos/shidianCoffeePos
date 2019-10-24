<template>
<<<<<<< HEAD
  <div class="order-parameter rel" v-if="isShow">
    <div class="section-tit abs bg-white list-inlineblock tac text-gray">
      <div class="f-item text-no border-box">NO.123124141</div>
      <div class="f-item text-name">{{product.name}}</div>
    </div>
    <div class="section-con">
      <div class="con-wrap">
        <ul class="list-para">
          <li class="list-item" v-for="(item,index) in pResult.specNames" :key="index">
            <div class="para-label text-gray fl">{{item.name}}：</div>
            <div class="para-value list-inlineblock">
              <!-- citem -->
              <button
                class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20"
                v-for="(citem,index) in pResult.specValues"
                :class="[citem.is_enable?'':'disable',citem.checked?'clicked':'']"
                v-if="citem.specname_id == item.id"
                @click="check(citem)"
              >{{pResult.specCustoms,item.id,citem.id,citem.val | getCustomName}}</button>
            </div>
          </li>

          <li class="list-item">
            <div class="dib vam text-gray para-label">单价：</div>
            <div class="dib vam">
              <input type="text" class="font-size-middle round bg-white text-gray tac input-size-normal no-border" v-model="selectSku.sale_price" />
=======
    <div class="order-parameter rel section">
        <div class="section-tit abs bg-white list-inlineblock tac text-gray">
            <div class="f-item text-no border-box">NO.123124141</div>
            <div class="f-item text-name">商品名称</div>
        </div>
        <div class="section-con">
            <div class="con-wrap">
                <ul class="list-para">
                    <li class="list-item">
                        <div class="para-label text-gray fl">容量：</div>
                        <div class="para-value list-inlineblock">
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20 clicked">大杯</button>
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20">中杯</button>
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20">小杯</button>
                        </div>
                    </li>
                    <li class="list-item">
                        <div class="para-label text-gray fl">温度：</div>
                        <div class="para-value">
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20 clicked">热</button>
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20">冷</button>
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20">常温</button>
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20">多冰</button>
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20">少冰</button>
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20">去冰</button>
                        </div>
                    </li>
                    <li class="list-item">
                        <div class="dib vam text-gray para-label">单价：</div>
                        <div class="dib vam ">
                            <input type="text" class="font-size-middle round bg-white text-gray tac input-size-normal no-border" value="1">
                        </div>
                        <div class="dib vam text-gray para-label">小计：</div>
                        <div class="dib vam ">
                            <input type="text" class="font-size-middle round bg-white text-gray tac input-size-normal no-border" value="1">
                        </div>
                        <div class="row mt20">
                            <div class="dib vam text-gray para-label">库存：</div>
                            <div class="dib vam ">
                                <input type="text" class="font-size-middle round bg-white text-gray tac input-size-normal no-border" value="1">
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="operate-bar tar">
                    <div class="row">
                       <button class="btn btn-subtract operate-btn-size-middle mr10"></button>
                       <input type="text" class=" dib vam font-size-middle round bg-white text-gray tac input-size-middle no-border" value="1">
                        <button class="btn btn-plus operate-btn-size-middle ml10"></button>
                    </div>
                    <div class="row mt30">
                        <button class="button round bg-main text-white button-size-normal mr20">确认</button>
                        <button class="button round bg-gray text-white button-size-normal">取消</button>
                    </div>
                </div>
>>>>>>> acdc95659809aa6ac917efc7415478388af9f508
            </div>
            <div class="dib vam text-gray para-label">小计：</div>
            <div class="dib vam">
              <input type="text" class="font-size-middle round bg-white text-gray tac input-size-normal no-border" v-model="selectSku.sale_price * buyCount" />
            </div>
            <div class="row mt20">
              <div class="dib vam text-gray para-label">库存：</div>
              <div class="dib vam">
                <input type="text" class="font-size-middle round bg-white text-gray tac input-size-normal no-border" v-model="selectSku.stock" />
              </div>
            </div>
          </li>
        </ul>
        <div class="operate-bar tar">
          <div class="row">
            <button class="btn btn-subtract operate-btn-size-middle mr10" @click="sub"></button>
            <input type="text" class="dib vam font-size-middle round bg-white text-gray tac input-size-middle no-border" v-model="buyCount" />
            <button class="btn btn-plus operate-btn-size-middle ml10" @click="add"></button>
          </div>
          <div class="row mt30">
            <button class="button round bg-main text-white button-size-normal mr20">确认</button>
            <button class="button round bg-gray text-white button-size-normal" @click="close">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<<<<<<< HEAD
<script>
import api from '@/modules/api'
import app_g from "@/modules/appGlobal"
import store from '@/store'

export default {
  data() {
    return {
      imgUrl: '',
      isShow: false,
      store_id: 0,
      product: { name: '' },
      //是否加入购物车
      isJoinSCart: false,
      //显示sku模态框
      showDialog: false,
      //库存
      stock: 0,
      //购买数量
      buyCount: 1,
      //选择的sku
      selectSku: {
        stock: 0,
        specset: '',
        sale_price: 0,
        product_id: 0
      },
      //specSet: [],
      pResult: {}
    }
  },
  filters: {
    getCustomName: function (specCustoms, name_id, val_id, val) {
      var custom_name = val
      specCustoms.forEach(function (item, index) {
        if (
          name_id == item.specname_id &&
          val_id == item.specvalue_id &&
          item.custom_value != ''
        ) {
          custom_name = item.custom_value
          return
        }
      })
      return custom_name
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show: function (newData, oldData) {
      this.isShow = newData
    }
  },
  methods: {
    //初始化
    init: function () {
      if (this.pResult.specNames.length == 0) return
      //获取首行规格名称id
      let one_name_id = this.pResult.specNames[0].id
      //绑定首行状态
      this.bindSKU(one_name_id)
    },
    //规格选中事件
    check(item) {
      let that = this
      //是否可用点击
      if (!item.is_enable) return
      //当前索引      
      var i = this.pResult.specNames.findIndex((val) => val.id == item.specname_id)
      //设置点击状态
      that.pResult.specValues.map((obj, index, arr) => {
        if (obj.specname_id == item.specname_id) {
          obj.checked = false
          if (item.id == obj.id) {
            obj.checked = true
          }
        }
      })
      console.log(that.pResult.specValues)

      //判断下一行索引是否大于数组总长度 
      if (i + 1 > this.pResult.specNames.length - 1) {
        //全部选中
        this.getSelectSkuVal()
      } else {
        //清除未选择的状态
        let clearSpecNames = this.pResult.specNames.filter((val, index) => index > i)
        clearSpecNames.forEach(function (item, index) {
          that.pResult.specValues.map(function (obj, i) {
            if (obj.specname_id == item.id) {
              obj.checked = false
              obj.is_enable = false
            }
          })
        })

        //绑定下一行
        this.bindSKU(this.pResult.specNames[i + 1].id, item)
      }
    },
    //绑定每行sku状态
    bindSKU(spec_name_id, specVal) {
      //SKU集合
      let skus = this.pResult.skus
      let checkedVal = this.pResult.specValues.filter(val => val.checked).map(item => item.specname_id + "_" + item.id).join(',')
      //处理规格值
      this.pResult.specValues.filter(val => val.specname_id == spec_name_id).map((obj, index) => {
        //在sku集合里面获取首行可点的规格
        skus.forEach(function (item, index) {
          let exist = 0
          let pass = false
          let arr = checkedVal.split(',')
          let arr1 = item.specset.split(',')
          arr.forEach(function (o, i) {
            arr1.forEach(function (oo, ii) {
              if (oo == o) {
                exist++
              }
            })
          })

          //是否是第一次加载
          if (checkedVal.length) {
            pass = exist == arr.length
          } else {
            pass = true
          }
=======
<style lang="scss">
.order-parameter{
    
>>>>>>> acdc95659809aa6ac917efc7415478388af9f508

          item.specset.split(',').forEach(function (o, i) {
            if (pass && o.split('_')[0] == spec_name_id && obj.specname_id + "_" + obj.id == o) {
              obj.is_enable = true
              return
            }
          })
        })

        if (specVal != undefined && specVal.id == obj.id) {
          obj.checked = true
        }
      })
    },
    //获取选中完成的sku
    getSelectSkuVal() {
      let items = this.pResult.specValues.filter(val => val.checked == true)
      if (items.length < this.pResult.specNames.length) {
        let name = this.pResult.specNames[items.length].name
        this.$vux.toast.text("请选择" + name, 'default', 3000)
        return null
      }

      let data = null
      //获取选中数据
      let sku_id = items.map(item => item.specname_id + "_" + item.id).join(',')
      //在当前sku集合中获取
      this.pResult.skus.forEach(function (item, index) {
        if (app_g.util.compareSku(sku_id, item.specset)) {
          data = item
          return
        }
      })

      this.selectSku = data
      return data
    },
    //提交
    submit(is_hide_dialog) {
      is_hide_dialog = undefined != is_hide_dialog.xx
      //获取选中数据
      this.selectSku = this.getSelectSkuVal()
      //加入购物车
      this.api_306(is_hide_dialog)
    },
    //关闭当前页
    close() {
      this.selectSku.specset = ''
      this.selectSku.sale_price = 0
      this.selectSku.product_id = 0
      this.$emit('cancelSKU')
    },
    //加
    add() {
      if (this.buyCount >= 99) return
      this.buyCount = this.buyCount + 1
    },
    //减
    sub() {
      if (this.buyCount <= 1) return
      this.buyCount = this.buyCount - 1
    },
    //勾选改变更新小计
    checkUpdate() {
      let total = 0
      this.result.forEach((item, index) => {
        if (item.selected) {
          total += item.product_price * item.count
        }
        //当前小计
        this.$set(item, "subtotal", item.product_price * item.count)
      })
      //设置总计
      this.$set(this, "totalPrice", total)
      //是否全选
      this.isCheckAll = this.result.length === this.result.filter(r => r.selected).length && this.result.length != 0
    },
    //处理输入方式
    handleInput() {
      let value = this.validateNumber(e.detail.value)
      val.replace(/\D/g, '')
    },
    //获取商品详情
    api_202(item) {
      let that = this
      this.product = item
      api.post(api.api_202, api.getSign({
        StoreID: that.UserInfo.user.store_id,
        ID: item.id,
        TID: item.product_type_id
      }), function (vue, res) {
        if (res.data.Basis.State == api.state.state_200) {
          that.isShow = true
          res.data.Result.specValues.forEach((obj, i) => {
            that.$set(obj, "checked", false)
            that.$set(obj, "is_enable", false)
          })
          that.pResult = res.data.Result
          that.init()
        } else {
          that.$vux.toast.text(res.data.Basis.Msg, 'default', 5000)
        }
        store.commit("loadingStatus", { isLoading: false })
      })
    },
    /**
     * 加载商品详情
     */
    api_203: function () {
      var that = this
      //是否包邮
      let is_postage = this.pResult.product.is_postage == undefined ? false : this.pResult.product.is_postage
      //立即购买
      if (this.isJoinSCart) {
        let list = [{
          store_id: this.store_id,
          product_id: this.selectSku.product_id,
          is_postage: is_postage,
          specset: this.selectSku.specset,
          img_url: this.pResult.product.img_url,
          product_name: this.selectSku.product_name,
          product_en_name: this.selectSku.product_en_name,
          product_price: this.selectSku.sale_price,
          subtotal: this.selectSku.sale_price * this.buyCount,
          count: this.buyCount
        }]

        //提交到本地存储临时数据
        user.methods.buyNow(list)
        //加入购物车
      } else {
        let that = this
        api.post(api.api_306,
          api.getSign({
            StoreId: this.store_id,
            SPID: this.selectSku.product_id,
            PID: this.pResult.product.product_id,
            SpecSet: this.selectSku.specset,
            Count: this.buyCount
          }),
          function (vue, res) {
            if (res.data.Basis.State == api.state.state_200) {
              //更新父级页面事件
              that.triggerEvent('updateSCart', res.data)
            } else {
              wx.showToast({
                title: res.data.Basis.Msg,
                icon: 'none',
                duration: 3000
              })
            }
          }
        )
      }
    },
    /**
     * 提交订单
     */
    api_314: function () {
      var that = this;
      api.post(api.api_314, api.getSign({}), function (app, res) {
        if (res.data.Basis.State != api.state.state_200) {
          wx.showToast({
            title: res.data.Basis.Msg,
            icon: 'none',
            duration: 3000
          })
        } else {
          //   that.setData({
          //     result: res.data.Result.catgs
          //   })

          //初始化数据
          that.initData(res.data.Result.catgs, res.data.Result.productList)
          //设置选中类别
          that.setCatgId(catg_id)
        }
      })
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
.order-parameter {
  overflow: hidden;
  height: 100%;
  .section-tit {
    height: 67px;
    width: 100%;
    left: 0;
    top: 0;
    line-height: 67px;
  }
  .section-con {
    box-sizing: border-box;
    height: 100%;
    padding: 67px 0 0 0;
  }
  .con-wrap {
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    padding: 45px;
  }

  .section-tit {
    .text-no {
      width: 30%;
      border-right: 1px solid #acacac;
    }
    .text-name {
      width: 70%;
    }
  }
}
.list-para {
  .list-item {
    margin-bottom: 48px;
    overflow: hidden;
  }
  .para-label {
    width: 100px;
    line-height: 44px;
    text-align: center;
  }
  .para-value {
    margin-left: 100px;
  }
  .button {
    &.disable {
      background: #acacac;
      color: #ffffff;
    }
  }
}
</style>