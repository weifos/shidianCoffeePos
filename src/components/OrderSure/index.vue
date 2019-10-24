<template>
  <div class="order-sure rel section-2">
    <!-- <div class="section-tit">订单结算</div> -->
    <div class="section-con2 h100">
      <div class="con-wrap rel h100">
        <div class="form-order-sure abs border-box">
          <div class="form-wrap bg-white rel">
            <div class="bg-main text-white tac font-size-middle font-tit">订单确认</div>
            <div class="form-con h100 border-box pd20">
              <div class="row hidden">
                <div class="order-time fr ">下单时间：2019-12-12 00：00：00</div>
                <div class="order-no">订单编号：11111111</div>
              </div>
              <div class="row mt20">
                <div class="row-name">商品信息：</div>
                <div class="form-1 bg-white rel mt10">
                  <div class="form-head list-inlineblock tac">
                    <div class="head-item f-item w2 bg-gray text-white">品名</div>
                    <div class="head-item f-item w1 bg-gray text-white">数量</div>
                    <div class="head-item f-item w1 bg-gray text-white">单价</div>
                    <div class="head-item f-item w1 bg-gray text-white">小计</div>
                  </div>
                  <div class="form-body tac">
                    <div class="form-body-wrap">
                      <ul class=" text-gray">
                          <li class="list-inlineblock tac" v-for="(item,index) in orderList[0].list" :key="index">
                                <div class="body-item f-item w2">
                                    {{item.name}}<span v-for="(sItem,sIndex) in item.param" :key="sIndex">*{{sItem}}</span>
                                </div>
                                <div class="body-item f-item w1">{{item.price}}</div>
                                <div class="body-item f-item w1">{{item.num}}</div>
                                <div class="body-item f-item w1">{{item.total}}</div>
                          </li>
                      </ul>
                      <div class="total-bar">
                          <div class="row list-inlineblock">
                              <div class="total-name w3 f-item tal border-box pl20">合计</div>
                              <div class="total-num w1 f-item">4</div>
                              <div class="total-price w1 f-item">115.00</div>
                          </div>
                          <div class="row list-inlineblock text-red mt10">
                              <div class="total-name w4 f-item tal border-box pl20">促销策略：满30元减10元</div>
                              <div class="total-price w1 f-item">-10.00</div>
                          </div>
                          <div class="row list-inlineblock mt10 bold">
                              <div class="total-name w4 f-item tal border-box pl20 size-big">实付金额</div>
                              <div class="total-price w1 f-item size-big">105.00</div>
                          </div>
                      </div>
                      <div class="btns-bar">
                          <button class="button round bg-main text-white button-size-normal">确认</button>
                          <button class="button round bg-gray text-white button-size-normal">取消</button>
                      </div>
                    </div>
                  </div>
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
      curIndex: 1,
      orderList: [
        {
          id: 1,
          no: "00012345",
          time: "2019-09-12 12:12:12",
          list: [
            {
              no: 1,
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
              total: "20.00"
            },
            {
              no: 2,
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
              total: "20.00"
            },
            {
              no: 3,
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
              total: "20.00"
            },
            {
              no: 4,
              name: "柚子奶茶",
              param: ["中杯", "去冰"],
              num: 1,
              price: "20.00",
              total: "20.00"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.order-sure {
  .font-tit {
    height: 57px;
    line-height: 57px;
  }
  .form-order-sure {
    width: 700px;
    left: 50%;
    top: 50%;
    height: 580px;
    background-color: #fff;
    transform: translate(-50%, -50%);
  }
  .form-1{
    height: 100%;
    
    .form-head{
        .head-item{
            box-sizing: border-box;
            height: 35px;
            line-height: 35px;
            border-right:1px solid #fff;

            &:last-child{border:none;}
        }
    }
    .form-body{
        box-sizing: border-box;
        height: 100%;

        .body-item{position: relative;height: 35px;line-height: 35px;}
    }
    .form-body-wrap{
        ul{
            overflow-x: hidden;
            overflow-y: auto;
            height:200px;
            // background: #888;
        }
    }
    .w1{width: 15%}
    .w2{width: 55%}
    .w3{width: 70%}
    .w4{width: 85%}

    .total-bar{
        border-top:1px solid #ACACAC;
        padding-top: 20px;
        height: 85px;
        
        .size-big{
            font-size: 18px;
        }

        .total-name{
            padding-left: 20px;
        }
    }
    .btns-bar{
        margin-top: 25px;
        .button{
            margin:0 30px;
        }
    }
}
}
</style>

