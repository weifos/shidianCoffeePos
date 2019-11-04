<template>
    <div class="order-normal rel section-2">
        <div class="section-tit text-gray tac">
            订单列表
        </div>
        <div class="section-con">
            <div class="con-wrap rel">
                <div class="tab-tit abs cloumn-3">
                    <div class="tab-t f-item cur">已支付</div>
                    <div class="tab-t f-item">待支付</div>
                    <div class="tab-t f-item">全部</div>
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
                                                <div class="align">
                                                如果有就显示
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
                                            <div class="body-item f-item w2">
                                                <div class="align">
                                                    <span class="item-link mr20">查看</span>
                                                    <span class="item-link">全部退款</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <!-- tab-c e -->
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
                                                <div class="align">
                                                如果有就显示
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
                                                <div class="align">
                                                如果有就显示
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
    </div>
</template>
<script>
export default {
    data() {
        return {
            curIndex:0,
            orderList:[
                {
                    id:1,
                    no:"00012345",
                    time:"2019-09-12 12:12:12",
                    list:[
                        {
                            name:"柚子奶茶",
                            param:["中杯","去冰"],
                            num:1,
                            price:"20.00",
                        },
                        {
                            name:"柚子奶茶",
                            param:["中杯","去冰"],
                            num:1,
                            price:"20.00",
                        },
                        {
                            name:"柚子奶茶",
                            param:["中杯","去冰"],
                            num:1,
                            price:"20.00",
                        },
                        {
                            name:"柚子奶茶",
                            param:["中杯","去冰"],
                            num:1,
                            price:"20.00",
                        }
                    ]
                },
                {
                    id:222,
                    no:"000123452",
                    time:"2019-09-12 12:12:12",
                    list:[
                        {
                            name:"柚子奶茶",
                            param:["中杯","去冰"],
                            num:1,
                            price:"20.00",
                        },
                        {
                            name:"柚子奶茶",
                            param:["中杯","去冰"],
                            num:1,
                            price:"20.00",
                        }
                    ]
                }
            ]
        }
    },
}
</script>
<style lang="scss">
.order-normal {
    .tab-tit{
        height: 30px;
        width: 100%;
        box-sizing: border-box;
        text-align: center;
        left: 0;
        top: 0;
        padding:10px 43px;
        .tab-t{
            background-color: #fff;
            height: 50px;
            line-height: 50px;

            &.cur{background-color: #7F9EB6;color: #fff;}
        }
    }
    .tab-con{
        padding: 50px 30px 20px 30px;
        box-sizing: border-box;
    }
    .cloumn-3{
        font-size: 0;
        .f-item{width: 33.33%;display: inline-block;vertical-align: top;font-size: 15px;}
    }
    .tab-c{
        display: none;

        &.cur{display: block;}
    }
.form-1{
    height: 100%;

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
        height: 100%;
        padding-top: 35px;

        .body-item{
            position: relative;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #ACACAC;
            border-right: 1px solid #ACACAC;
            box-sizing: border-box;
        }

        .align{
        //    position: absolute;
        //    width: 100%;
        //    top:50%;
        //    left: 50%;
        //    transform:translate(-50%,-50%)
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