<template>
    <div class="order-pay rel section-2">
        <div class="section-tit">订单结算</div>
        <div class="section-con"><div class="con-wrap rel">
            <div class="form-pay abs border-box"><div class="form-wrap bg-white rel">
                <div class="form-tit abs w100 bg-main-dark text-white rel font-size-middle tac">
                    信息显示区域
                    <div class="form-close abs bg-main text-white">X</div>
                </div>
                <div class="form-con list-inlineblock text-gray h100 border-box">
                    <div class="left-part f-item h100 border-box pd10">
                        <div class="part-wrap h100 rel">
                            <!-- type-cash 现金支付s -->
                            <div class="type-cash type-bar height3" v-if="curIndex == 0">
                                <div class="value-bar font-size-normal w100 abs">
                                    <div class="pd10 border-box bg-white">
                                        <ul>
                                            <li class="hidden">
                                                <div class="t-val fr">100.00</div>
                                                <div class="t-name">总计：</div>
                                            </li>
                                            <li class="hidden mt10">
                                                <div class="t-val fr">100.00</div>
                                                <div class="t-name">找零：</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="input-bar w100 abs">
                                    <input type="text" class="input-text-1 input-normal" placeholder="请输入金额">
                                </div>
                                <div class="btns-bar border-box h100">
                                    <div class="list-inlineblock h100">
                                        <div class="f-item"><div class="item-wrap w100 h100 rel"><button class="btn-number">7</button></div></div>
                                        <div class="f-item"><div class="item-wrap w100 h100 rel"><button class="btn-number">8</button></div></div>
                                        <div class="f-item"><div class="item-wrap w100 h100 rel"><button class="btn-number">9</button></div></div>
                                        <div class="f-item"><div class="item-wrap w100 h100 rel"><button class="btn-number font-size-normal">删除</button></div></div>
                                        <div class="f-item"><div class="item-wrap w100 h100 rel"><button class="btn-number">4</button></div></div>
                                        <div class="f-item"><div class="item-wrap w100 h100 rel"><button class="btn-number">5</button></div></div>
                                        <div class="f-item"><div class="item-wrap w100 h100 rel"><button class="btn-number">6</button></div></div>
                                        <div class="f-item"><div class="item-wrap w100 h100 rel"><button class="btn-number font-size-normal">清除</button></div></div>
                                        <div class="f-item"><div class="item-wrap w100 h100 rel"><button class="btn-number">1</button></div></div>
                                        <div class="f-item"><div class="item-wrap w100 h100 rel"><button class="btn-number">2</button></div></div>
                                        <div class="f-item"><div class="item-wrap w100 h100 rel"><button class="btn-number">3</button></div></div>
                                        <div class="f-item"><div class="item-wrap w100 h100 rel"><button class="btn-number">0</button></div></div>
                                    </div>
                                </div>
                            </div>
                            <!-- type-cash e -->
                            <!-- type-e-wallet 电子钱包支付 s-->
                            <div class="type-e-wallet type-bar height3 pb10 border-box" v-if="curIndex == 1">
                                <div class="bg-white w100 h100 rel">
                                    <div class="text-wrap tac">
                                        <p>【请扫描电子钱包二维码支付】</p>
                                        <p>【支付中。。。】</p>
                                        <!-- <p>【支付成功！】</p>
                                        <p>【支付失败！】</p> -->
                                    </div>
                                </div>
                            </div>
                             <!-- type-e-wallet电子钱包支付 s-->
                             <!-- type-mobile 移动支付 s-->
                            <div class="type-mobile type-bar height3 pb10 border-box" v-if="curIndex == 2">
                                <div class="bg-white w100 h100 rel">
                                    <div class="text-wrap tac">
                                        <p>【请扫描微信或支付宝二维码支付】</p>
                                        <p>【支付中。。。】</p>
                                        <!-- <p>【支付成功！】</p>
                                        <p>【支付失败！】</p> -->
                                    </div>
                                </div>
                            </div>
                             <!-- type-mobile 移动支付 s-->
                             <!-- type-card 储值卡 s-->
                            <div class="type-card type-bar height3 pb10 border-box" v-if="curIndex == 3">
                                <div class="bg-white w100 h100 rel">
                                    <div class="text-wrap tac">
                                        <p>【请刷储值卡进行支付】</p>
                                        <p>【支付中。。。】</p>
                                        <!-- <p>【支付成功！】</p>
                                        <p>【支付失败！】</p> -->
                                    </div>
                                </div>
                            </div>
                             <!-- type-card 储值卡 s-->
                            <div class="result-bar height2 bg-white hidden">
                                <div class="sec-top list-inlineblock tac bg-gray text-white">
                                    <div class="t-item f-item w1">序号</div>
                                    <div class="t-item f-item w2">支付方式</div>
                                    <div class="t-item f-item w3">支付金额</div>
                                </div>
                                <div class="sec-middle bg-white">
                                    <ul>
                                        <li class="list-inlineblock tac" v-for="item in payList" :key="item.id">
                                            <div class="t-item f-item w1">{{item.id}}</div>
                                            <div class="t-item f-item w2">{{item.type}}</div>
                                            <div class="t-item f-item w3">{{item.value}}</div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="sec-bottom  bg-gray text-white abs hidden">
                                    <div class="text-total fr mr20">合计：0.00</div>
                                    <div class="text-due ml20">尚欠金额：0.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-part f-item h100 tac ">
                        <ul class="h100">
                            <li class="pay-item height1 rel"><button class="btn h100 w100 abs text-gray">移动支付</button></li>
                            <li class="pay-item height1 rel"><button class="btn h100 w100 abs text-gray clicked">电子钱包</button></li>
                            <li class="pay-item height1 rel"><button class="btn h100 w100 abs text-gray">储值卡</button></li>
                            <li class="pay-item height1 rel"><button class="btn h100 w100 abs text-gray">现金</button></li>
                            <li class="pay-item height2 rel"><button class="btn h100 w100 abs bg-main text-white btn-submit">确认支付</button></li>
                        </ul>
                    </div>
                </div>
            </div></div>
        </div></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            curIndex:1,
            payList:[
                {
                    id:1,
                    type:"现金",
                    value:"20.00"
                },
                {
                    id:2,
                    type:"支付宝",
                    value:"20.00"
                }
            ]
        }
    },
}
</script>

<style lang="scss">
.form-pay{
    width: 577px;
    top: 50%;
    left: 50%;
    height: 498px+57px;
    // height:100%;
    transform: translate(-50%,-50%);
    padding: 13px;

    .form-wrap{height: 100%;}
    .form-tit{
        height:57px;
        line-height:57px;
    }
    .form-con{
        padding-top: 57px;
        
    }
    .form-close{
        width:57px;
        height:57px;
        right: 0;
        top: 0;
    }
    .height1{height: (70/4)*1%;}
    .height2{height:30%}
    .height3{height: 70%;}

    .w1{width: 20%;}
    .w2{width: 50%;}
    .w3{width: 30%;}
    .input-normal{
        border:none;
    }
    .left-part{
        width: 70%;
        background-color: #F4F4F4;

        .value-bar{
            top: 0;
            left: 0;
            height: 71px;
        }
        .input-bar{
            top: 75px;
        }
        .btns-bar{
            padding-top: 75px+47px+10px;
            // padding-bottom: 10px;

            .list-inlineblock{
                margin-right: -10px;
            }

            .f-item{
                height: 33.33%;
                width: 25%;
                position: relative;
                box-sizing: border-box;
                padding: 0 10px 10px 0;
            }
            .btn-number{
                border:none;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                width: 100%;
                height: 100%;
                box-sizing: border-box;
            }
            .font-size-normal{
                font-size: 15px;
            }
        }

        .sec-top{
            height: 30px;
            line-height: 30px;
        }
        .sec-middle{
            padding:5px 0;
            overflow: auto;
            box-sizing: border-box;
            height: 100%;

            .t-item{
                height: 30px;
                line-height: 30px;
            }
        }
        .sec-bottom{
            left: 0;
            bottom: 0;
            width: 100%;
            height: 36px;
            line-height: 36px;
        }
        .text-wrap{
            position: absolute;
            left: 0;
            top: 50%;
            width: 100%;
            transform: translateY(-50%);
            line-height: 1.5;
        }
    }
    .right-part{
        width: 30%;

        .pay-item{
            .btn{
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                border: none;
                font-size: 15px;
                box-sizing: border-box;
                border-bottom:2px solid #F4F4F4; 

                &:active,&.clicked{background-color: #F4F4F4;color: #7F9EB6;}
            }
            .btn-submit{
                &:active,&.clicked{background-color: #5A7494;color: #fff;}
            }
        }
    }
}
</style>

