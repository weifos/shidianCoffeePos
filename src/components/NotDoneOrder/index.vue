<template>
  <div class="notdone-order rel section-2" v-if="show">
    <div class="section-tit text-gray tac">未制作订单列表</div>
    <div class="section-con">
      <div class="con-wrap">
        <div class="form-1 bg-white rel">
          <div class="form-head list-inlineblock tac abs">
            <div class="head-item f-item w0 bg-gray text-white">序号</div>
            <div class="head-item f-item w2 bg-gray text-white">订单信息</div>
            <div class="head-item f-item w9 bg-gray text-white">品名</div>
            <div class="head-item f-item w1 bg-gray text-white">规格</div>
            <div class="head-item f-item w3 bg-gray text-white">数量</div>
            <div class="head-item f-item w1 bg-gray text-white">单价</div>
            <div class="head-item f-item w3 bg-gray text-white">操作</div>
          </div>
          <div class="form-body tac text-gray">
            <div class="form-body-wrap list-inlineblock">
              <div class="left-part f-item">
                <ul dir="ltr" class="cont" style="-webkit-overflow-scrolling: touch;overflow-x: hidden;overflow-y: auto;width: 100%;height: 100%;" @scroll="scroll">
                  <li :class="`row-item list-inlineblock ${curIndex == index ? 'cur' : ''}`" @click="selectCur(index)" v-for="(item,index) in orderList" :key="index">
                    <div class="body-item f-item w4">
                      <div class="align">{{item.id}}</div>
                    </div>
                    <div class="body-item f-item w5">
                      <div class="align">
                        <p>{{item.no}}</p>
                        <p>{{item.time}}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="right-part f-item rel">
                <ul>
                  <li class="row-item list-inlineblock" v-for="item in orderList[curIndex].list" :key="item.no">
                    <div class="body-item f-item w6">
                      <div class="align">{{item.name}}</div>
                    </div>
                    <div class="body-item f-item w7">
                      <div class="align">
                        <span class="db" v-for="(sItem,sIndex) in item.param" :key="sIndex">{{sItem}}</span>
                      </div>
                    </div>
                    <div class="body-item f-item w8 body-item__num">
                      <button class="btn btn-subtract"></button>
                      <button class="btn btn-plus"></button>
                      <div class="align">{{item.num}}</div>
                    </div>
                    <div class="body-item f-item w7">
                      <div class="align">{{item.price}}</div>
                    </div>
                    <div class="body-item f-item w8">
                      <div class="align">
                        <button class="button round bg-main text-white button-size-small">删除</button>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="status-bar abs bg-main text-white tar">
                  <button class="button round bg-white text-main button-size-middle2">选取商品</button>
                  <button class="button round bg-white text-main button-size-middle2">制作完成</button>
                  <button class="button round bg-white text-main button-size-middle2">取单</button>
                </div>
              </div>
            </div>
          </div>
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
      orderList: [
        {
          id: 1,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶1",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            },
            {
              name: "柚子奶茶1",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            },
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
        },
        {
          id: 2,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
            }
          ]
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
    //选择支付方式
    selectCur(index) {
      this.curIndex = index
      console.log(this.curIndex)
    },
    init() {
      console.log('')
    },
    //页面滚动加载数据
    scroll() {
      console.log('scroll')
      //   var bar_top = $('#loading').offset().top - $(window).height()
      //   //判断是否滚动到底部
      //   if (bar_top < -40 && !this.loadding) {
      //     this.loading = true
      //     this.loadding = true
      //     this.pager.index++
      //     this.api_201()
      //   }
    }
  }
}
</script>
<style lang="scss">
.notdone-order {
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

      .body-item {
        position: relative;
        height: 67px;
      }

      .align {
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
      width: 25%;
    }
    .w3 {
      width: 12%;
    }
    .w9 {
      width: 26%;
    }
    .w0 {
      width: 5%;
    }

    .w4 {
      width: 100/30 * 5%;
    }
    .w5 {
      width: 100/30 * 25%;
    }
    .w6 {
      width: 37.14%;
    }
    .w7 {
      width: 14.28%;
    }
    .w8 {
      width: 17.14%;
    }

    .left-part {
      height: 100%;
      width: 30%;
      box-sizing: border-box;
      // border-right: 1px solid #ACACAC;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        right: 0px;
        top: 0;
        height: 100%;
        width: 1px;
        background-color: #acacac;
      }

      ul {
        height: 100%;
        // overflow-y: auto;
        // overflow-x: hidden;
        overflow: hidden;
      }

      .cont {
        width: 200px;
        height: 200px;
        border: 0px;
        overflow-x: hidden;
      }

      .cont::-webkit-scrollbar {
        display: none;
      }

      .row-item {
        border-bottom: 1px solid #acacac;

        &:last-child {
          border-bottom: 0;
        }
      }
      .row-item.cur {
        position: relative;

        &:after {
          content: "";
          position: absolute;
          right: -2px;
          top: 0;
          height: 67px;
          width: 4px;
          background-color: #fff;
          z-index: 2;
        }
      }
    }
    .right-part {
      height: 100%;
      width: 70%;
      box-sizing: border-box;
      padding-bottom: 54px;

      ul {
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
      }

      .body-item {
        overflow: hidden;
      }
      .body-item__num {
        position: relative;
      }
      .btn-subtract,
      .btn-plus {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      .btn-subtract {
        left: 5px;
      }
      .btn-plus {
        right: 5px;
      }
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