<template>
  <div class="order-pay rel section-2" v-if="show">
    <div class="section-tit">订单结算</div>
    <div class="section-con">
      <div class="con-wrap rel">
        <div class="form-pay abs border-box">
          <div class="form-wrap bg-white rel">
            <div class="form-tit abs w100 bg-main-dark text-white rel font-size-middle tac">
              信息显示区域
              <div class="form-close abs bg-main text-white">X</div>
            </div>
            <div class="form-con list-inlineblock text-gray h100 border-box">
              <div class="left-part f-item h100 border-box pd10">
                <div class="part-wrap h100 rel">
                  <!-- type-mobile 移动支付 -->
                  <div class="type-mobile type-bar height3 pb10 border-box" v-if="curIndex == 0">
                    <div class="bg-white w100 h100 rel">
                      <div class="text-wrap tac">
                        <p>【请扫描微信或支付宝二维码支付】</p>
                        <p>
                          <input type="text" ref="pCode" v-model="payCodeText" @keyup.enter="submitPayCode" @blur="payCodeBlur" v-payCodeFocus="payCodeFocus" />
                        </p>
                        <!-- <p>【支付成功！】</p>
                        <p>【支付失败！】</p>-->
                      </div>
                    </div>
                  </div>

                  <!-- type-e-wallet 电子钱包支付-->
                  <div class="type-e-wallet type-bar height3 pb10 border-box" v-if="curIndex == 1">
                    <div class="bg-white w100 h100 rel">
                      <div class="text-wrap tac">
                        <p>【请扫描电子钱包二维码支付】</p>
                        <p>
                          <input type="text" ref="eWallet" v-model="eWalletText" @keyup.enter="submitEWalle" @blur="eWalletBlur" v-eWalletFocus="eWalletFocus" />
                        </p>
                        <!-- <p>【支付成功！】</p>
                        <p>【支付失败！】</p>-->
                      </div>
                    </div>
                  </div>

                  <!-- type-card 储值卡 -->
                  <div class="type-card type-bar height3 pb10 border-box" v-if="curIndex == 2">
                    <div class="bg-white w100 h100 rel">
                      <div class="text-wrap tac">
                        <p>【请刷储值卡进行支付】</p>
                        <p>【支付中。。。】</p>

                        <!-- <p>【支付成功！】</p>
                        <p>【支付失败！】</p>-->
                      </div>
                    </div>
                  </div>

                  <!-- type-cash 现金支付 -->
                  <div class="type-cash type-bar height3" v-if="curIndex == 3">
                    <div class="value-bar font-size-normal w100 abs">
                      <div class="pd10 border-box bg-white">
                        <ul>
                          <li class="hidden">
                            <div class="t-val fr" style="color:red">+{{inputAmount | MoneyToF}}</div>
                            <div class="t-name">实收：</div>
                          </li>
                          <li class="hidden mt10">
                            <div class="t-val fr" style="color:#22DD48">-{{changeAmount | MoneyToF}}</div>
                            <div class="t-name">找零：</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="input-bar w100 abs">
                      <input type="text" class="input-text-1 input-normal" style="font-size:20px;" v-model="inputAmountText" placeholder="请输入金额" />
                    </div>
                    <div class="btns-bar border-box h100 rel">
                      <div class="f-item btn-sure">
                        <div class="item-wrap w100 h100 rel">
                          <button class="btn-number font-size-normal" @click="getNum('.')">确认</button>
                        </div>
                      </div>
                      <div class="list-inlineblock h100">
                        <div class="f-item">
                          <div class="item-wrap w100 h100 rel">
                            <button class="btn-number" @click="getNum(7)">7</button>
                          </div>
                        </div>
                        <div class="f-item">
                          <div class="item-wrap w100 h100 rel">
                            <button class="btn-number" @click="getNum(8)">8</button>
                          </div>
                        </div>
                        <div class="f-item">
                          <div class="item-wrap w100 h100 rel">
                            <button class="btn-number" @click="getNum(9)">9</button>
                          </div>
                        </div>
                        <div class="f-item">
                          <div class="item-wrap w100 h100 rel">
                            <button class="btn-number font-size-normal" @click="confirmCash">退格</button>
                          </div>
                        </div>
                        <div class="f-item">
                          <div class="item-wrap w100 h100 rel">
                            <button class="btn-number" @click="getNum(4)">4</button>
                          </div>
                        </div>
                        <div class="f-item">
                          <div class="item-wrap w100 h100 rel">
                            <button class="btn-number" @click="getNum(5)">5</button>
                          </div>
                        </div>
                        <div class="f-item item-right">
                          <div class="item-wrap w100 h100 rel">
                            <button class="btn-number" @click="getNum(6)">6</button>
                          </div>
                        </div>
                        <div class="f-item">
                          <div class="item-wrap w100 h100 rel">
                            <button class="btn-number" @click="getNum(1)">1</button>
                          </div>
                        </div>
                        <div class="f-item">
                          <div class="item-wrap w100 h100 rel">
                            <button class="btn-number" @click="getNum(2)">2</button>
                          </div>
                        </div>
                        <div class="f-item item-right">
                          <div class="item-wrap w100 h100 rel">
                            <button class="btn-number" @click="getNum(3)">3</button>
                          </div>
                        </div>
                        <div class="f-item">
                          <div class="item-wrap w100 h100 rel">
                            <button class="btn-number" @click="getNum(0)">0</button>
                          </div>
                        </div>
                        <div class="f-item">
                          <div class="item-wrap w100 h100 rel">
                            <button class="btn-number" @click="getNum('.')">.</button>
                          </div>
                        </div>
                        <div class="f-item item-right">
                          <div class="item-wrap w100 h100 rel">
                            <button class="btn-number font-size-normal" @click="getNum(4)">清空</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <!-- 支付列表-->
                  <div class="result-bar height2 bg-white hidden">
                    <div class="sec-top list-inlineblock tac bg-gray text-white">
                      <div class="t-item f-item w1">序号</div>
                      <div class="t-item f-item w2">支付方式</div>
                      <div class="t-item f-item w3">支付金额</div>
                    </div>
                    <div class="sec-middle bg-white">
                      <ul>
                        <li class="list-inlineblock tac" v-for="(item,index) in payFlows" :key="item.id">
                          <div class="t-item f-item w1">{{index + 1}}</div>
                          <div class="t-item f-item w2">{{item.pay_method | getPayMethodName}}</div>
                          <div class="t-item f-item w3">{{item.amount | MoneyToF}}</div>
                        </li>
                      </ul>
                    </div>
                    <div class="sec-bottom bg-gray text-white abs hidden">
                      <div class="text-total fr mr20">合计：{{order.actual_amount | MoneyToF}}</div>
                      <div class="text-due ml20">尚欠金额：{{unpaidAmount | MoneyToF}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right-part f-item h100 tac">
                <ul class="h100">
                  <li class="pay-item height1 rel" v-for="(item,index) in payList" :key="index">
                    <button class="btn h100 w100 abs text-gray" :class="[curIndex==index?'clicked':'']" @click="selectPay(index)">{{item.text}}</button>
                  </li>
                  <li class="pay-item height2 rel">
                    <button class="btn h100 w100 abs bg-main text-white btn-submit" @click="api_205">确认支付</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/modules/api'
import app_g from '@/modules/appGlobal'
import app_m from "@/modules/appMiddleware"

export default {
  data() {
    return {
      curIndex: 0,
      //订单详情
      order: { id: 0 },
      //付款码
      payCode: '',
      //付款码文本
      payCodeText: '',
      //电子钱包
      eWallet: '',
      //电子钱包文本
      eWalletText: '',
      //电子钱包输入框焦点
      eWalletFocus: false,
      //付款码得到焦点
      payCodeFocus: true,
      //现金支付输入的金额
      inputAmount: 0,
      //显示的输入金额
      inputAmountText: '',
      //未付款的金额
      unpaidAmount: 0,
      //找零的金额
      changeAmount: 0,
      //支付类型
      payList: [
        {
          payMethod: 0,
          text: "移动支付",
          val: ''
        },
        {
          payMethod: 31,
          text: "电子钱包",
          val: ''
        },
        {
          payMethod: 41,
          text: "储值卡",
          val: ''
        },
        {
          payMethod: 51,
          text: "现金",
        }
      ],
      //当前支付流水
      curFlow: {},
      //支付流水
      payFlows: []
    }
  },
  filters: {
    //获取支付方式名称
    getPayMethodName(payMethod) {
      if (payMethod == 11) {
        return '微信支付'
      } else if (payMethod == 21) {
        return '支付宝支付'
      } else if (payMethod == 31) {
        return '电子钱包支付'
      } else if (payMethod == 41) {
        return '储值卡支付'
      } else if (payMethod == 51) {
        return '现金支付'
      }
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  directives: {
    payCodeFocus: {
      inserted: function (el, { value }) {
        el.focus()
      }
    },
    eWalletFocus: {
      inserted: function (el, { value }) {
        el.focus()
        // el.onfocus = function () { }
        // el.onblur = function () {
        //   el.focus()
        // }
      }
    }
  },
  methods: {
    init(data) {
      this.order = data
      //this.order.details = []
      //清空付款流水
      this.payFlows = []
      this.curFlow = {
        store_id: app_g.getPos().store_id,
        serial_no: "",
        order_id: 0,
        order_no: '',
        user_id: 0,
        pos_no: app_g.getPos().no,
        amount: 0,
        coin_type: 0,
        coin_rate: 1,
        convert_amt: 0,
        pay_method: -1,
        pay_name: "",
        trade_type: 1,
        flow_type: 1,
        is_enable: true,
        created_date: app_g.util.date.getDateTimeNow(),
        created_user_id: this.UserInfo.user.id
      }

      //获取流水号
      this.curFlow.store_id = app_g.getPos().store_id
      this.curFlow.serial_no = app_g.util.getSerialNum('F')
      this.curFlow.order_id = this.order.id
      this.curFlow.order_no = this.order.serial_no
      this.curFlow.pos_no = app_g.getPos().no
      //未支付的金额
      this.unpaidAmount = this.order.actual_amount
      this.payCodeFocus = true
    },
    //删除
    del(n) {
      let len = this.inputAmountText.length
      if (len > 0) {
        if (len - 1 <= 0) {
          this.inputAmountText = ''
        } else {
          this.inputAmountText = this.inputAmountText.substring(0, len - 1)
        }
      }
    },
    //获取号码
    getNum(n) {
      //首个输入为.的情况
      if (this.inputAmountText.length == 0 && n == '.') return
      if (this.inputAmountText.length > 8) return
      let str1 = this.inputAmountText.split('.')[1]
      if (str1 != undefined && str1.length > 1) return

      //匹配小数点次数
      let mt = this.inputAmountText.match(/[.]/g)
      //限制只能输入一个点
      if (mt == null || mt.length && n != '.') {
        this.inputAmountText = this.inputAmountText + '' + n
      }

      //金额输入正确情况下
      if (app_g.verifyStr.isPrice(this.inputAmountText)) {
        this.inputAmount = this.inputAmountText
        //计算找零
        let tmpAmount = this.inputAmount - this.order.actual_amount
        if (tmpAmount > 0) {
          this.changeAmount = tmpAmount
        }
      }
    },
    //移动支付失去焦点事件
    payCodeBlur() {
      if (this.curIndex == 0 && this.$refs.pCode != undefined) {
        this.$refs.pCode.focus()
      }
    },
    //电子钱包失去焦点事件
    eWalletBlur() {
      if (this.curIndex == 1 && this.$refs.eWallet != undefined) {
        this.$refs.eWallet.focus()
        this.$refs.eWallet.focus()
        this.eWalletFocus = true
      }
    },
    //选择支付方式
    selectPay(index) {
      this.curIndex = index
      let item = this.payList[index]
      this.curFlow.pay_method = item.payMethod

      //移动支付
      if (item.payMethod == 0) {
        this.eWalletFocus = false
        this.payCodeFocus = true
        //电子钱包
      } else if (item.payMethod == 31) {
        this.payCodeFocus = false
        this.eWalletFocus = true
      }
    },
    //提交现金支付
    confirmCash() {
      if (this.inputAmount > this.order.actual_amount) {
        this.curFlow.amount = this.order.actual_amount
      } else {
        this.curFlow.amount = this.inputAmount
      }

      //如果存在一条流水，且为现金支付
      if (this.payFlows.length == 1 && this.payFlows[0].pay_method == 51) {
        this.payFlows = []
      }

      //加入支付流水
      this.payFlows.push(this.curFlow)

      let tmpAmount = 0
      this.payFlows.forEach((ele) => {
        tmpAmount += ele.amount
      })

      //计算未付金额
      this.unpaidAmount = this.order.actual_amount - tmpAmount
    },
    //根据移动支付提交
    submitPayCode() {
      //微信支付
      if (this.payCodeText.length == 18 && /^[1]+[0,1,2,3,4,5]+\d{16}/.test(this.payCodeText)) {
        this.payCodeFocus = true
        this.payCode = this.payCodeText
        this.payCodeText = ''
        console.log('微信支付:' + this.payCode)
        //如果未付款的金额大于零
        if (this.unpaidAmount <= 0) return
        //金额
        this.curFlow.amount = this.unpaidAmount
        //设置支付方式
        this.curFlow.pay_method = 11
        //加入支付流水
        this.payFlows.push(this.curFlow)
        //立即支付
        this.api_205()
      }//支付宝支付二维码
      else if (this.payCodeText.length == 18 && /^[28]+\d{16}/.test(this.payCodeText)) {
        this.payCodeFocus = true
        this.payCode = this.payCodeText
        this.payCodeText = ''
        console.log('支付宝支付:' + this.payCode)
        //如果未付款的金额大于零
        if (this.unpaidAmount <= 0) return
        //金额
        this.curFlow.amount = this.unpaidAmount
        //支付方式
        this.curFlow.pay_method = 21
        //加入支付流水
        this.payFlows.push(this.curFlow)
        //立即支付
        this.api_205()
      }
    },
    //提交现金支付
    submitEWalle() {
      //微信支付
      if (this.eWalletText.indexOf("#") != -1 && this.eWalletText.length > 15) {
        this.eWalletFocus = true
        this.payCode = this.eWalletText
        //用户ID
        let user_id = this.eWalletText.split('#')[0]
        if (user_id == undefined || user_id == 0) return

        //清空文本
        this.eWalletText = ''
        //如果未付款的金额大于零
        if (this.unpaidAmount <= 0) return

        this.curFlow.user_id = user_id
        this.order.user_id = user_id
        //金额
        this.curFlow.amount = this.unpaidAmount
        //支付方式
        this.curFlow.pay_method = 31
        //加入支付流水
        this.payFlows.push(this.curFlow)

        console.log(this.curFlow)
        //立即支付
        this.api_205()
      }
    },
    //立即支付
    api_205() {
      let that = this
      if (that.payFlows.length == 0) {
        that.$vux.toast.text('当前订单未支付，不能提交', 'default', 3000)
        return
      }

      //支付总金额
      let tAmount = 0
      that.payFlows.forEach((ele) => {
        tAmount += ele.amount
      })
      //支付金额是否达到支付条件
      if (tAmount < that.order.actual_amount) {
        that.$vux.toast.text('支付金额不足，不能提交', 'default', 3000)
        return
      }

      //单一支付
      if (that.payFlows.length == 1) {
        that.order.pay_method = that.payFlows[0].pay_method
      } else {
        //混合支付
        if (that.payFlows[0].pay_method != that.payFlows[1].pay_method) {
          that.order.pay_method = 100
          //储值卡支付
        } else {
          let is_sv_card = true
          that.payFlows.forEach((ele) => {
            if (ele.pay_method != 41) {
              is_sv_card = false
              return
            }
          })
          //储值卡支付
          if (is_sv_card) that.order.pay_method = 41
          else {
            that.$vux.toast.text('支付信息异常', 'default', 3000)
            return
          }
        }
      }

      //付款流水
      that.order.flow = that.payFlows
      let params = {
        PayCode: that.payCode,
        Order: that.order
      }

      api.post(api.api_205, api.getSign(params), function (vue, res) {
        if (res.data.Basis.State == api.state.state_200) {
          //调起打印
          app_m.print(app_g.getPos().store_id, that.UserInfo.user.id, that.order.serial_no, that.print)
          //支付成功
          that.$emit('paySuccess')
          //打印
        } else {
          that.$vux.toast.text(res.data.Basis.Msg, 'default', 5000)
        }
      })

    },
    print() { }
  }
}
</script>

<style lang="scss">
.form-pay {
  width: 577px;
  top: 50%;
  left: 50%;
  height: 662px;
  // height:100%;
  transform: translate(-50%, -50%);
  padding: 13px;

  .form-wrap {
    height: 100%;
  }
  .form-tit {
    height: 57px;
    line-height: 57px;
  }
  .form-con {
    padding-top: 57px;
  }
  .form-close {
    width: 57px;
    height: 57px;
    right: 0;
    top: 0;
  }
  .height1 {
    height: (70/4) * 1%;
  }
  .height2 {
    height: 30%;
  }
  .height3 {
    height: 70%;
  }

  .w1 {
    width: 20%;
  }
  .w2 {
    width: 50%;
  }
  .w3 {
    width: 30%;
  }
  .input-normal {
    border: none;
  }
  .left-part {
    width: 70%;
    background-color: #f4f4f4;

    .value-bar {
      top: 0;
      left: 0;
      height: 71px;
    }
    .input-bar {
      top: 75px;
    }
    .btns-bar {
      padding-top: 75px+47px+10px;
      // padding-bottom: 10px;

      .list-inlineblock {
        margin-right: -10px;
      }


      .f-item {
        height: 25%;
        width: 25%;
        position: relative;
        box-sizing: border-box;
        padding: 0 10px 10px 0;

        &.btn-sure{
          position: absolute;
          right:-10px;
          bottom:0;
          height: 50%;
        }
      }
      .item-right{
        margin-right: 25%;
      }
      .btn-number {
        border: none;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }
      .font-size-normal {
        font-size: 15px;
      }
    }

    .sec-top {
      height: 30px;
      line-height: 30px;
    }
    .sec-middle {
      padding: 5px 0;
      overflow: auto;
      box-sizing: border-box;
      height: 100%;

      .t-item {
        height: 30px;
        line-height: 30px;
      }
    }
    .sec-bottom {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 36px;
      line-height: 36px;
    }
    .text-wrap {
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      line-height: 1.5;
    }
  }
  .right-part {
    width: 30%;

    .pay-item {
      .btn {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: none;
        font-size: 15px;
        box-sizing: border-box;
        border-bottom: 2px solid #f4f4f4;

        &:active,
        &.clicked {
          background-color: #f4f4f4;
          color: #7f9eb6;
        }
      }
      .btn-submit {
        &:active,
        &.clicked {
          background-color: #5a7494;
          color: #fff;
        }
      }
    }
  }
}
</style>
