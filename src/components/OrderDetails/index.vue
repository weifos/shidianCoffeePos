<template>
    <div class="order-details rel section-2">
        <!-- <div class="section-tit text-gray tac">
            查看订单
        </div> -->
        <div class="section-con">
            <div class="con-wrap rel">
                <div class="form-1 bg-white rel">
                    <div class="form-title font-size-middle pd10 bold bg-main text-white"> 基本信息</div>
                    <div class="form-head list-inlineblock tac">
                        <div class="head-item f-item w2 bg-gray text-white">订单编号</div>
                        <div class="head-item f-item w2 bg-gray text-white">下单时间</div>
                        <div class="head-item f-item w1 bg-gray text-white">订单金额</div>
                        <div class="head-item f-item w1 bg-gray text-white">商品数</div>
                        <div class="head-item f-item w2 bg-gray text-white">支付方式</div>
                        <div class="head-item f-item w2 bg-gray text-white">优惠券</div>
                    </div>
                    <div class="form-body tac text-gray">
                                <div class="form-body-wrap list-inlineblock">
                                    <ul>
                                        <li :class="`row-item list-inlineblock`">
                                            <div class="body-item f-item w2">
                                                <div class="align">00012345</div>
                                            </div>
                                            <div class="body-item f-item w2">
                                                <div class="align">2019-09-12 12:12:12</div>
                                            </div>
                                            <div class="body-item f-item w1">
                                                <div class="align">200.00</div>
                                            </div>
                                            <div class="body-item f-item w1">
                                                <div class="align">2</div>
                                            </div>
                                            <div class="body-item f-item w2">
                                                <div class="align">
                                                    <p>现金支付:10元</p>
                                                    <p>微信支付：30元</p>
                                                </div>
                                            </div>
                                            <div class="body-item f-item w2">
                                                <div class="align">
                                               -0.0
                                               </div>
                                            </div>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                </div>
            <!-- form-1 s -->
             <div class="form-1 bg-white rel mt20">
                    <div class="form-title font-size-middle pd10 bold bg-main text-white"> 商品信息</div>
                    <div class="form-head list-inlineblock tac">
                        <div class="head-item f-item w3 bg-gray text-white">序号</div>
                        <div class="head-item f-item w1 bg-gray text-white">商品图片</div>
                        <div class="head-item f-item w1 bg-gray text-white">商品编号</div>
                        <div class="head-item f-item w2 bg-gray text-white">商品名称</div>
                        <div class="head-item f-item w1 bg-gray text-white">规格</div>
                        <div class="head-item f-item w1 bg-gray text-white">价格</div>
                        <div class="head-item f-item w1 bg-gray text-white">数量</div>
                        <div class="head-item f-item w1 bg-gray text-white">小计</div>
                        <div class="head-item f-item w4 bg-gray text-white">操作</div>
                    </div>
                    <div class="form-body tac text-gray form-body2">
                                <div class="form-body-wrap list-inlineblock">
                                    <ul>
                                        <li :class="`row-item list-inlineblock`">
                                            <div class="body-item f-item w3">
                                                <div class="align">1</div>
                                            </div>
                                            <div class="body-item f-item w1 item-img">
                                                <div class="align">
                                                    <img alt="" src="../../../static/img/e33e1ccae803d50545e38c8fb2d8b4ae347332402738fa-oIjIDx_fw658.png" />
                                                </div>
                                            </div>
                                            <div class="body-item f-item w1">
                                                <div class="align">00012345</div>
                                            </div>
                                            <div class="body-item f-item w2">
                                                <div class="align">摩卡咖啡</div>
                                            </div>
                                            <div class="body-item f-item w1">
                                                <div class="align">
                                                大杯<br>

热
                                                </div>
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
                                            <div class="body-item f-item w4">
                                                <div class="align">
                                                    <span class="item-link">退款</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li :class="`row-item list-inlineblock`">
                                            <div class="body-item f-item w3">
                                                <div class="align">1</div>
                                            </div>
                                            <div class="body-item f-item w1 item-img">
                                                <div class="align">
                                                    <img alt="" src="../../../static/img/e33e1ccae803d50545e38c8fb2d8b4ae347332402738fa-oIjIDx_fw658.png" />
                                                </div>
                                            </div>
                                            <div class="body-item f-item w1">
                                                <div class="align">00012345</div>
                                            </div>
                                            <div class="body-item f-item w2">
                                                <div class="align">摩卡咖啡</div>
                                            </div>
                                            <div class="body-item f-item w1">
                                                <div class="align">
                                                大杯<br>

热
                                                </div>
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
                                            <div class="body-item f-item w4">
                                                <div class="align">
                                                    <span class="item-link">退款</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                </div>
            </div>
            <!-- form-1 e -->
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            curIndex:0,
        }
    },
}
</script>
<style lang="scss">
.order-details {
    .section-con{
        padding-top: 0;
    }

.item-img{
    padding-top:5px;
    img{
        width: 60px;
        height: 60px;
    }
}

.form-1{

    .form-head{
        width: 100%;
        left: 0;
        top: 0;

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

        .body-item{
            position: relative;
            height: 50px;
            line-height: 1.3;
            border-bottom: 1px solid #ACACAC;
            border-right: 1px solid #ACACAC;
            box-sizing: border-box;
            &:last-child{border-right:none;}
        }

        .align{
           position: absolute;
           width: 100%;
           top:50%;
           left: 50%;
           transform:translate(-50%,-50%)
        }
    }
    .form-body2{
        .body-item{
            height: 70px;
            line-height: 1.3;
            .align{
                position: absolute;
                width: 100%;
                top:50%;
                left: 50%;
                transform:translate(-50%,-50%)
            }
        }
    }
    .form-body-wrap{
        height: 100%;
        box-sizing: border-box;
        overflow: auto;
    }
    .w1{width: 10%}
    .w2{width: 20%}
    .w3{width: 5%}
    .w4{width: 15%}
    .w5{width: 30%}

    .status-bar{
        width: 100%;
        height: 54px;
        left: 0;
        bottom: 0;

        .button{
            margin-top: 10px;
            margin-right: 20px;
        }
    }
}
}
</style>