<template>
  <div class="order-normal rel section-2" v-if="show">
    <div class="con-wrap rel">
      <div class="tab-tit abs cloumn-3">
        <div class="tab-t f-item" :class="[curIndex == index?'cur':'']" v-for="(item,index) in statusList" @click="onClickItem(index)">{{item.name}}</div>
      </div>
      <div class="tab-con h100">
        <div class="form-1 bg-white rel">
          <div class="form-head list-inlineblock tac abs">
            <div class="head-item f-item w3 bg-gray text-white">小票号</div>
            <div class="head-item f-item w4 bg-gray text-white">订单编号</div>
            <div class="head-item f-item w2 bg-gray text-white">下单时间</div>
            <div class="head-item f-item w1 bg-gray text-white">用户账号</div>
            <div class="head-item f-item w1 bg-gray text-white">订单金额</div>
            <div class="head-item f-item w1 bg-gray text-white">商品数/已退数</div>
            <div class="head-item f-item w1 bg-gray text-white">订单状态</div>
            <div class="head-item f-item w2 bg-gray text-white">操作</div>
          </div>
          <div class="tab-c h100 cur">
            <div class="form-body tac text-gray">
              <div class="form-body-wrap list-inlineblock">
                <ul>
                  <li class="row-item list-inlineblock" v-for="(item,index) in result" :key="index">
                    <div class="body-item f-item w3">
                      <div class="align" style="color:#7F9EB6;">{{item.serial_num | GetSerialNum}}</div>
                    </div>
                    <div class="body-item f-item w4">
                      <div class="align">{{item.serial_no}}</div>
                    </div>
                    <div class="body-item f-item w2">
                      <div class="align">{{item.created_date}}</div>
                    </div>
                    <div class="body-item f-item w1">
                      <div class="align">{{item.login_name == undefined ?'--':item.login_name}}</div>
                    </div>
                    <div class="body-item f-item w1">
                      <div class="align" style="color:red;">{{item.actual_amount | MoneyToF}}</div>
                    </div>
                    <div class="body-item f-item w1">
                      <div class="align">{{item.count}}/{{item.refund_count}}</div>
                    </div>
                    <div class="body-item f-item w1">
                      <div class="align">已完成</div>
                    </div>
                    <div class="body-item f-item w2">
                      <div class="align">
                        <span class="item-link mr20" style="color:#0033FF;" @click="goDetails(item)">查看</span>
                        <span class="item-link" style="color:#0033FF;" @click="refund(item)" v-if="item.count > item.refund_count">全部退款</span>
                        <span class="item-link" v-else>全部退完</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <Pager ref="page" v-on:pagerUpdate="pagerUpdate" :url="pagerUrl"></Pager>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import api from '@/modules/api'
import app_g from '@/modules/appGlobal'
import Pager from '@/components/Pager'
import PopWrap from '@/components/PopWrap'

export default {
  components: {
    Pager,
    PopWrap
  },
  data() {
    return {
      curIndex: 0,
      //显示退款
      showPopRefund: false,
      //翻页地址
      pagerUrl: api.api_206,
      //订单状态
      statusList: [
        { name: '已支付', isPay: 1 },
        { name: '待支付', isPay: 0 },
        { name: '全部', isPay: -1 }
      ],
      result: []
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    init() {
      let params = this.getSearchData()
      //
      this.result = []
      //组件加载延迟100毫秒
      setTimeout(() => { this.$refs.page.init(params) }, 10)
    },
    //获取查询数据
    getSearchData() {
      let that = this
      let item = that.statusList[that.curIndex]
      let status = -1
      //已付款
      if (item.isPay == 1) {
        status = 3
        //未付款
      } else if (item.isPay == 0) {
        status = 1
      }

      return {
        //已付款
        IsPay: item.isPay,
        //订单状态
        Status: status,
        //门店
        StoreID: app_g.getPos().store_id,
        //POS机编号
        PosNo: app_g.getPos().no
      }
    },
    //页码点击事件
    onClickItem(index) {
      this.curIndex = index
      this.result = []
      let params = this.getSearchData()
      this.$refs.page.execute(params)
    },
    //加载订单
    pagerUpdate(data) {
      data.orders.forEach((ele, index) => {
        this.result.push(ele)
      })
    },
    //查看订单详情
    goDetails(item) {
      this.$emit('goOrderDetails', item)
    },
    //全部退款
    refund(item) {
      let that = this
      this.$vux.confirm.show({
        title: '确认全部退款吗',
        onCancel() { },
        onConfirm() {
          that.api_211(item)
        }
      })
    },
    //退货退款
    api_211(order) {
      let that = this
      order.order_no = order.serial_no
      api.post(api.api_211, api.getSign({
        OrderReturns: order
      }), function (vue, res) {
        if (res.data.Basis.State == api.state.state_200) {
          that.result.forEach((ele) => {
            if (ele.serial_no == order.serial_no) {
              ele.refund_count = ele.count
            }
          })
        } else {
          that.$vux.toast.text(res.data.Basis.Msg, 'default', 3000)
        }
      })
    }
  }
}
</script>
<style lang="scss">
.weui-dialog__btn_primary {
  color: #7f9eb6;
}
.pages {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  font-size: 0;
  padding: 20px 20px;
  box-sizing: border-box;
  .item-page {
    text-align: center;
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 1px solid #acacac;
    background-color: #fff;
    margin: 0 5px;
    font-size: 15px;
    line-height: 38px;
    &:active,
    &.cur {
      background-color: #7f9eb6;
      color: #fff;
    }
  }
}
.order-normal {
  .tab-tit {
    height: 30px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    left: 0;
    top: 0;
    padding: 10px 13px;
    .tab-t {
      background-color: #fff;
      height: 50px;
      line-height: 50px;

      &.cur {
        background-color: #7f9eb6;
        color: #fff;
      }
    }
  }
  .tab-con {
    padding: 60px 0px 0px 0px;
    box-sizing: border-box;
  }
  .cloumn-3 {
    font-size: 0;
    .f-item {
      width: 33.33%;
      display: inline-block;
      vertical-align: top;
      font-size: 15px;
    }
  }
  .tab-c {
    display: none;

    &.cur {
      display: block;
    }
  }
  .form-1 {
    height: 100%;

    .form-head {
      width: 100%;
      left: 0;
      top: 0;

      .head-item {
        box-sizing: border-box;
        height: 35px;
        line-height: 35px;
        border-right: 1px solid #fff;

        &:last-child {
          border: none;
        }
      }
    }
    .form-body {
      box-sizing: border-box;
      height: 100%;
      padding-top: 35px;
      padding-bottom: 80px;
      position: relative;

      .body-item {
        position: relative;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #acacac;
        border-right: 1px solid #acacac;
        box-sizing: border-box;
      }

      .align {
        //    position: absolute;
        //    width: 100%;
        //    top:50%;
        //    left: 50%;
        //    transform:translate(-50%,-50%)
      }
    }
    .form-body-wrap {
      height: 100%;
      box-sizing: border-box;
      overflow: auto;
    }
    .w1 {
      width: 10%;
    }
    .w2 {
      width: 20%;
    }
    .w3 {
      width: 5%;
    }
    .w4 {
      width: 15%;
    }

    .status-bar {
      width: 100%;
      height: 54px;
      left: 0;
      bottom: 0;

      .button {
        margin-top: 10px;
        margin-right: 20px;
      }
    }
  }
}
</style>