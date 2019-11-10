<template>
  <div class="order-pay rel section-2" v-if="show">
    <div class="con-wrap rel">
      <div class="form-pay abs border-box">
        <div class="form-wrap bg-white rel">
          <div class="form-tit abs w100 bg-main-dark text-white rel font-size-middle tac">
            订单结算
            <div class="form-close abs bg-main text-white">X</div>
          </div>
          <div class="form-con list-inlineblock text-gray h100 border-box">
            <div class="left-part f-item h100 border-box pd10">
              <div class="part-wrap h100 rel">
                <!-- type-mobile 移动支付 -->
                <div class="type-mobile type-bar height3 pb10 border-box" v-show="curIndex == 0">
                  <div class="bg-white w100 h100 rel">
                    <p class="font-size-middle tac text-tit">【请扫描微信或支付宝二维码支付】</p>
                    <div class="text-wrap">
                      <p class="mt15 tac">
                        付款码：
                        <input type="text" class="text-code" ref="pCode" v-model="payCodeText" @keyup.enter="enterPayCode" @blur="payCodeBlur" />
                      </p>
                    </div>
                  </div>
                </div>

                <!-- type-e-wallet 电子钱包支付-->
                <div class="type-e-wallet type-bar height3 pb10 border-box" v-show="curIndex == 1">
                  <div class="bg-white w100 h100 rel">
                    <p class="font-size-middle tac text-tit">【请扫描十点小程序会员中心的付款码】</p>
                    <div class="text-wrap">
                      <p class="mt15 tac">
                        付款码：
                        <input type="text" class="text-code" ref="eWallet" v-model="eWalletText" @keyup.enter="enterEWalle" @blur="eWalletBlur" />
                      </p>
                      <div class="pay_content">
                        <p>手机号码： {{member.mobile}}</p>
                        <p>当前余额： {{member.balance | MoneyToF}}</p>
                        <p>
                          需要支付：
                          <span style="color:red">{{unpaidAmount | MoneyToF}}</span>
                        </p>
                        <p v-if="member.id > 0 && member.balance - unpaidAmount < 0">
                          支付状态：
                          <span style="color:red">余额不足</span>
                        </p>
                        <p v-if="member.balance - unpaidAmount >= 0">
                          付清余额：
                          <span style="color:red">{{member.balance - unpaidAmount | MoneyToF}}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- type-card 储值卡 -->
                <div class="type-card type-bar height3 pb10 border-box" v-show="curIndex == 2">
                  <div class="bg-white w100 h100 rel">
                    <p class="font-size-middle tac text-tit">【请出示刷储值卡进行刷卡操作】</p>
                    <div class="text-wrap">
                      <p class="mt15 tac">
                        请刷卡：
                        <input type="text" class="text-code" ref="svCard" v-model="svCardText" @keyup.enter="enterSVCard" @blur="svCardBlur" />
                      </p>
                      <div class="pay_content">
                        <p>储值卡号：{{svCard.no }}</p>
                        <p>当前余额：{{svCard.balance | MoneyToF}}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- type-cash 现金支付 -->
                <div class="type-cash type-bar height3" v-show="curIndex == 3">
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
                        <button class="btn-number font-size-normal" @click="confirmCash">确认</button>
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
                          <button class="btn-number font-size-normal" @click="del">退格</button>
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
                          <button class="btn-number font-size-normal" @click="clearAmountText">清空</button>
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
                      <li class="list-inlineblock tac" v-for="(item,index) in tmpFlows" :key="item.id">
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
      //电子钱包
      eWalletCode: '',
      //储值卡
      svCardCode: '',
      //付款码文本
      payCodeText: '',
      //电子钱包文本
      eWalletText: '',
      //储值卡文本
      svCardText: '',
      //现金支付输入的金额
      inputAmount: 0,
      //显示的输入金额
      inputAmountText: '',
      //未付款的金额
      unpaidAmount: 0,
      //找零的金额
      changeAmount: 0,
      //电子钱包会员信息
      member: {},
      //储值卡信息
      svCard: {},
      //支付方式
      payMethod: {
        //微信支付
        weChatCode: 11,
        //支付宝支付
        aliPayCode: 21,
        //微信支付
        eWallet: 31,
        //储值卡支付
        sVCard: 41,
        //现金支付
        cash: 51
      },
      //支付类型
      payList: [
        {
          text: "移动支付"
        },
        {
          text: "电子钱包"
        },
        {
          text: "储值卡"
        },
        {
          text: "现金"
        }
      ],
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
  computed: {
    tmpFlows() {
      let tmp = []
      let svItem = {}
      let total_amount = 0
      this.payFlows.forEach((item, index) => {
        //如果是储值卡支付
        if (item.pay_method == this.payMethod.sVCard) {
          total_amount += item.amount
          svItem = item
        } else {
          tmp.push(item)
        }
      })

      if (svItem.card_no != undefined) {
        tmp.push({
          pay_method: this.payMethod.sVCard,
          amount: total_amount
        })
      }

      return tmp
    }
  },
  methods: {
    init(data) {
      setTimeout(() => { this.$refs.pCode.focus() }, 100)
      this.clearMember()
      this.clearSVDetails()
      this.curIndex = 0
      this.order = data
      //清空付款流水
      this.payFlows = []
      //未支付的金额
      this.changeAmount = 0
      this.unpaidAmount = this.order.actual_amount
    },
    //获取支付流水
    getFlow() {
      return {
        store_id: app_g.getPos().store_id,
        serial_no: app_g.util.getSerialNum('F'),
        order_id: this.order.id,
        order_no: this.order.serial_no,
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
    //显示的金额
    clearAmountText() {
      this.inputAmount = 0
      this.inputAmountText = ''
      this.changeAmount = 0
      //删除
      this.payFlows.splice(this.payFlows.findIndex(item => item.pay_method === 51), 1)
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
        setTimeout(() => { try { this.$refs.pCode.focus() } catch (ex) { } }, 100)
      }
    },
    //电子钱包失去焦点事件
    eWalletBlur() {
      if (this.curIndex == 1 && this.$refs.eWallet != undefined) {
        setTimeout(() => { try { this.$refs.eWallet.focus() } catch (ex) { } }, 100)
      }
    },
    //储值卡失去焦点事件
    svCardBlur() {
      if (this.curIndex == 2 && this.$refs.svCard != undefined) {
        setTimeout(() => { try { this.$refs.svCard.focus() } catch (ex) { } }, 100)
      }
    },
    //选择支付方式
    selectPay(index) {
      this.curIndex = index
      let item = this.payList[index]
      if (item.text == '移动支付') {
        setTimeout(() => { this.$refs.pCode.focus() }, 100)
      } else if (item.text == '电子钱包') {
        setTimeout(() => { this.$refs.eWallet.focus() }, 100)
      } else if (item.text == '储值卡') {
        setTimeout(() => { this.$refs.svCard.focus() }, 100)
      }
    },
    //提交现金支付
    confirmCash() {
      //输入金额不能为0
      if (this.inputAmount == 0) return
      //检测是否存在现金支付
      let cIndex = -1
      this.payFlows.forEach((item, index) => {
        if (item.pay_method == this.payMethod.cash) {
          cIndex = index
          return
        }
      })
      //删除老的小金支付
      if (cIndex != -1) this.payFlows.splice(cIndex, 1)
      //更新金额
      this.updateAmount()
      //获取支付流水
      let curFlow = this.getFlow()
      //现金支付方式
      curFlow.pay_method = this.payMethod.cash
      //输入金额大于未缴纳金额
      if (this.inputAmount > this.unpaidAmount) {
        curFlow.amount = this.unpaidAmount
        this.changeAmount = this.inputAmount - this.unpaidAmount
      } else {
        curFlow.amount = this.inputAmount
        this.changeAmount = 0
      }

      //加入支付流水
      this.payFlows.push(curFlow)
      //清空显示的输入金额
      this.inputAmountText = ''
      //显示的实收金额
      this.inputAmount = 0
      this.updateAmount()
      this.clearMember()
      this.clearSVDetails()
    },
    //根据移动支付提交
    enterPayCode() {
      //微信支付
      if (this.payCodeText.length == 18 && /^[1]+[0,1,2,3,4,5]+\d{16}/.test(this.payCodeText)) {
        this.payCode = this.payCodeText
        this.payCodeText = ''
        console.log('微信支付:' + this.payCode)
        let curFlow = this.getFlow()
        //如果未付款的金额大于零
        if (this.unpaidAmount <= 0) return
        //金额
        curFlow.amount = this.unpaidAmount
        //设置支付方式
        curFlow.pay_method = this.payMethod.weChatCode
        //加入支付流水
        this.payFlows.push(curFlow)
        //立即支付
        this.api_205()
      }//支付宝支付二维码
      else if (this.payCodeText.length == 18 && /^[28]+\d{16}/.test(this.payCodeText)) {
        this.payCode = this.payCodeText
        this.payCodeText = ''
        console.log('支付宝支付:' + this.payCode)
        let curFlow = this.getFlow()
        //如果未付款的金额大于零
        if (this.unpaidAmount <= 0) return
        //金额
        curFlow.amount = parseFloat(this.unpaidAmount).toFixed(2)
        //支付方式
        curFlow.pay_method = this.payMethod.aliPayCode
        //加入支付流水
        this.payFlows.push(curFlow)
        //立即支付
        this.api_205()
      } else {
        this.payCodeText = ''
        this.$vux.toast.text('请使用微信或支付宝付款码', 'default', 3000)
      }
    },
    //提交电子钱包支付
    enterEWalle() {
      //微信支付
      if (this.eWalletText.indexOf("#") != -1 && this.eWalletText.length > 15) {
        this.eWalletCode = this.eWalletText
        //用户ID
        let user_id = this.eWalletText.split('#')[0]
        if (user_id == undefined || user_id == 0) return
        //清空文本
        this.eWalletText = ''
        //如果未付款的金额大于零
        if (this.unpaidAmount <= 0) return
        //扫描会员码
        this.api_208(this.eWalletCode, user_id)
      }
    },
    //提交储值卡支付
    enterSVCard() {
      //如果已付清
      if (this.unpaidAmount <= 0) {
        that.$vux.toast.text('当前已付清，请勿再次刷卡', 'default', 3000)
        return
      }

      //微信支付
      if (this.svCardText.length > 25) {
        this.svCardCode = this.svCardText
        //清空文本
        this.svCardText = ''
        //获取储值卡
        this.api_209(this.svCardCode)
      }

      this.clearMember()
    },
    //清空会员信息
    clearMember() {
      this.member = { id: 0, mobile: '----', balance: 0, dis_count: 0.99, integral: 0, coupon: { type: 0, amount: 0.0 } }
    },
    //清空储值卡信息
    clearSVDetails() {
      this.svCard = { id: 0, no: "----", dm: 0, status: 0, balance: 0 }
    },
    //更新页面显示金额
    updateAmount() {
      let tmpAmount = 0
      this.payFlows.forEach((ele) => {
        tmpAmount += parseFloat(parseFloat(ele.amount).toFixed(2))
      })

      let amountResult = tmpAmount - this.order.actual_amount
      //有找零
      if (amountResult >= 0) {
        //不存在未付清
        this.unpaidAmount = 0
        //存在未付清
      } else {
        this.unpaidAmount = -amountResult
      }
    },
    //立即支付
    api_205() {
      let that = this
      if (that.payFlows.length == 0) {
        that.$vux.toast.text('当前订单未支付，不能提交', 'default', 3000)
        return
      }
      //更新支付金额
      that.updateAmount()
      //支付金额是否达到支付条件
      if (this.unpaidAmount > 0) {
        that.$vux.toast.text('支付金额不足，不能提交', 'default', 3000)
        return
      }

      const res = new Map()
      let arr = that.payFlows.filter((a) => !res.has(a.pay_method) && res.set(a.pay_method, 1))
      if (arr.length == 1) {
        that.order.pay_method = that.payFlows[0].pay_method
      } else if (arr.length == 2) {
        that.order.pay_method = 100
      } else {
        that.$vux.toast.text('只允许两种支付方式叠加', 'default', 3000)
        return
      }

      //付款流水
      that.order.flow = that.payFlows
      let params = {
        PayCode: that.payCode,
        Order: that.order
      }

      //console.log(params)
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
    //根据用户码获取会员信息
    api_208(code, user_id) {
      let that = this
      api.post(api.api_208, api.getSign({ UserCode: code }), function (vue, res) {
        if (res.data.Basis.State == api.state.state_200) {
          //会员信息
          that.member = res.data.Result.member
          if (that.member.balance - that.unpaidAmount >= 0) {
            let curFlow = that.getFlow()
            curFlow.pay_method = that.payMethod.eWallet
            curFlow.user_id = user_id
            //订单所属用户
            that.order.user_id = user_id
            //订单所属用户账户
            that.order.login_name = that.member.login_name
            //金额
            curFlow.amount = that.unpaidAmount
            //加入支付流水
            that.payFlows.push(curFlow)

            setTimeout(() => {
              that.api_205()
            }, 1000)
          }
        } else {
          that.$vux.toast.text(res.data.Basis.Msg, 'default', 3000)
        }
      })
    },
    //刷储值卡
    api_209(code) {
      let that = this
      api.post(api.api_209, api.getSign({
        Type: 1,
        Ticket: code
      }), function (vue, res) {
        if (res.data.Basis.State == api.state.state_200) {
          let exist_card_no = false
          that.payFlows.forEach((item, index) => {
            //如果是储值卡支付
            if (item.pay_method == that.payMethod.sVCard && item.card_no == res.data.Result.no) {
              that.$vux.toast.text('请勿重复刷卡', 'default', 3000)
              exist_card_no = true
              return
            }
          })
          if (exist_card_no) return
          //储值卡
          that.svCard = res.data.Result
          //获取当前流水
          let curFlow = that.getFlow()
          //储值卡支付
          curFlow.pay_method = that.payMethod.sVCard
          //储值卡号
          curFlow.card_no = that.svCard.no
          //此处外部已经判断为未付清，这里只需要判断余额够不够付清未付的
          let amount = that.svCard.balance - that.unpaidAmount
          //余额够不够付清
          if (amount <= 0) {
            //金额
            curFlow.amount = that.svCard.balance
          } else {
            curFlow.amount = that.unpaidAmount
          }
          //加入支付流水
          that.payFlows.push(curFlow)
          that.updateAmount()

          if (amount >= 0) {
            setTimeout(() => {
              that.api_205()
            }, 1000)
          }
        } else {
          that.$vux.toast.text(res.data.Basis.Msg, 'default', 3000)
        }
      })
    },
    print() { }
  }
}
</script>

<style lang="scss">
.form-pay {
  width: 607px;
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

        &.btn-sure {
          position: absolute;
          right: -10px;
          bottom: 0;
          height: 50%;
        }
      }
      .item-right {
        margin-right: 25%;
      }
      .btn-number {
        color: #000;
        font-size: 24px;
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
    .text-tit {
      padding-top: 40px;
    }
    .text-wrap {
      //   padding: 10px 20px 40px 20px;
      // position: absolute;
      left: 0;
      // top: 50%;
      width: 100%;
      // transform: translateY(-50%);
      line-height: 1.5;

      .pay_content {
        border-top: 1px dashed #acacac;
        padding: 10px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
        width: 90%;
      }
    }
    .text-code {
      border-left-width: 0px;
      border-top-width: 0px;
      border-right-width: 0px;
      border-bottom-width: 1px;
      border-bottom-color: black;
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
