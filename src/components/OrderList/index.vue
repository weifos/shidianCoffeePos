<template>
  <div class="order-normal rel section-2" v-if="show">
    <div class="con-wrap rel">
      <div class="tab-tit abs cloumn-3">
        <div class="tab-t f-item" :class="[curIndex == index?'cur':'']" v-for="(item,index) in statusList" @click="onClickItem(index)">{{item.name}}</div>
      </div>
      <div class="tab-con h100">
        <div class="form-1 bg-white rel">
          <div class="form-head list-inlineblock tac abs">
            <div class="head-item f-item w3 bg-gray text-white">序号</div>
            <div class="head-item f-item w4 bg-gray text-white">订单编号</div>
            <div class="head-item f-item w2 bg-gray text-white">下单时间</div>
            <div class="head-item f-item w1 bg-gray text-white">用户账号</div>
            <div class="head-item f-item w1 bg-gray text-white">订单金额</div>
            <div class="head-item f-item w1 bg-gray text-white">商品数</div>
            <div class="head-item f-item w1 bg-gray text-white">订单状态</div>
            <div class="head-item f-item w2 bg-gray text-white">操作</div>
          </div>
          <!-- tab-c s -->
          <div class="tab-c h100 cur">
            <div class="form-body tac text-gray">
              <div class="form-body-wrap list-inlineblock">
                <ul>
                  <li :class="`row-item list-inlineblock`">
                    <div class="body-item f-item w3">
                      <div class="align">1</div>
                    </div>
                    <div class="body-item f-item w4">
                      <div class="align">00012345</div>
                    </div>
                    <div class="body-item f-item w2">
                      <div class="align">2019-09-12 12:12:12</div>
                    </div>
                    <div class="body-item f-item w1">
                      <div class="align">如果有就显示</div>
                    </div>
                    <div class="body-item f-item w1">
                      <div class="align">200.00</div>
                    </div>
                    <div class="body-item f-item w1">
                      <div class="align">2</div>
                    </div>
                    <div class="body-item f-item w1">
                      <div class="align">已完成</div>
                    </div>
                    <div class="body-item f-item w2">
                      <div class="align">
                        <span class="item-link mr20">查看</span>
                        <span class="item-link">全部退款</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- pages s -->
                <div class="pages abs tar">
                  <button class="item-page cur">1</button>
                  <button class="item-page">2</button>
                  <button class="item-page">3</button>
                  <button class="item-page">4</button>
                </div>
                <!-- pages e -->
            </div>
          </div>
          <!-- tab-c e -->
          <!-- tab-c s -->
          <div class="tab-c h100">
            <div class="form-body tac text-gray">
              <div class="form-body-wrap list-inlineblock">
                <ul>
                  <li :class="`row-item list-inlineblock`">
                    <div class="body-item f-item w3">
                      <div class="align">1</div>
                    </div>
                    <div class="body-item f-item w4">
                      <div class="align">00012345</div>
                    </div>
                    <div class="body-item f-item w2">
                      <div class="align">2019-09-12 12:12:12</div>
                    </div>
                    <div class="body-item f-item w1">
                      <div class="align">如果有就显示</div>
                    </div>
                    <div class="body-item f-item w1">
                      <div class="align">200.00</div>
                    </div>
                    <div class="body-item f-item w1">
                      <div class="align">2</div>
                    </div>
                    <div class="body-item f-item w1">
                      <div class="align">已完成</div>
                    </div>
                    <div class="body-item f-item w2">
                      <div class="align">
                        <span class="item-link mr10">查看</span>
                        <span class="item-link mr10">结算</span>
                        <span class="item-link">关闭</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- tab-c e -->
          <!-- tab-c s -->
          <div class="tab-c h100">
            <div class="form-body tac text-gray">
              <div class="form-body-wrap list-inlineblock">
                <ul>
                  <li :class="`row-item list-inlineblock`">
                    <div class="body-item f-item w3">
                      <div class="align">1</div>
                    </div>
                    <div class="body-item f-item w4">
                      <div class="align">00012345</div>
                    </div>
                    <div class="body-item f-item w2">
                      <div class="align">2019-09-12 12:12:12</div>
                    </div>
                    <div class="body-item f-item w1">
                      <div class="align">如果有就显示</div>
                    </div>
                    <div class="body-item f-item w1">
                      <div class="align">200.00</div>
                    </div>
                    <div class="body-item f-item w1">
                      <div class="align">2</div>
                    </div>
                    <div class="body-item f-item w1">
                      <div class="align">已完成</div>
                    </div>
                    <div class="body-item f-item w2">
                      <div class="align">
                        <span class="item-link mr10">查看</span>
                        <span class="item-link mr10">结算</span>
                        <span class="item-link">关闭</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- tab-c e -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      curIndex: 0,
      statusList: [
        { name: '已支付', isPay: 1 },
        { name: '待支付', isPay: 0 },
        { name: '已支付', isPay: -1 }
      ],
      result: [
        {
          id: 1,
          no: "00012345",
          time: "2019-09-12 12:12:12"
        }
      ]
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickItem(index) {
      this.curIndex = index
    },
    //加载订单
    api_206() {
      let that = this
      let item = that.statusList[that.curIndex]
      //加载数据
      api.post(api.api_206, api.getSign({
        //已付款
        Status: item,
        //门店
        StoreID: app_g.getPos().store_id,
        //每页大小
        Size: that.pageSize,
        //当前页
        Index: that.pageIndex,
        //POS机编号
        PosNo: app_g.getPos().no
      }), function (vue, res) {
        //当前页
        that.pageIndex = that.pageIndex + 1
        //总行数
        let totalRow = res.data.Result.totalRow
        //总页数
        that.totalPage = parseInt(totalRow / that.pageSize) + (totalRow % that.pageSize == 0 ? 0 : 1)
        //订单信息
        res.data.Result.orders.forEach((ele, index) => {
          that.orderList.push(ele)
        })
        //设置加载状态
        that.loading = false
      })
    }
  }
}
</script>
<style lang="scss">
.pages{
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  font-size: 0;
  padding: 20px 20px;
  box-sizing: border-box;
  .item-page{
    text-align: center;
    display: inline-block;
    width: 40px;
    height: 40px;
    border:1px solid #ACACAC;
    background-color: #fff;
    margin:0 5px;
    font-size: 15px;
    line-height: 38px;
    &:active,&.cur{background-color: #7F9EB6;color:#fff;}
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