<template>
    <div class="form-order rel border-box">
        <div class="order-tit abs text-white tac list-inlineblock">
            <div class="f-item item-name bg-gray">品名</div>
            <div class="f-item item-price bg-gray">单价</div>
            <div class="f-item item-num bg-gray">数量</div>
            <div class="f-item item-operate bg-gray">操作</div>
        </div>
        <div class="order-con">
            <ul class="font-size-small list-order">
                <li class="list-inlineblock tac item-order" v-for="(item,index) in list" :key="index">
                    <div class="f-item hidden item-name ellipsis">{{item.name}}</div>
                    <div class="f-item hidden item-price">{{item.price}}</div>
                    <div class="f-item hidden item-num">{{item.num}}</div>
                    <div class="f-item hidden item-operate">
                        <button class="btn btn-subtract"></button>
                        <button class="btn btn-plus"></button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[{
                name:"摩卡咖啡",
                price:"135.00",
                num:"11"
            },{
                name:"摩卡咖啡2",
                price:"15.00",
                num:"11"
            },{
                name:"摩卡咖啡34",
                price:"135.00",
                num:"11"
            },{
                name:"摩卡咖啡56",
                price:"35.00",
                num:"11"
            },{
                name:"摩卡咖啡78",
                price:"15.00",
                num:"11"
            },{
                name:"摩卡咖啡",
                price:"135.00",
                num:"11"
            },{
                name:"摩卡咖啡",
                price:"35.00",
                num:"11"
            }]
        }
    },
}
</script>

<style lang="scss">
.form-order{
    padding: 32px 0 0 0;
    height: 100%;

    .item-name{
        width: 45%;
        box-sizing: border-box;
    }
    .item-price,.item-num{
        width: 15%;
        box-sizing: border-box;
    }
    .item-operate{
        width: 25%;
        box-sizing: border-box;

        .btn{margin: 0 5px;}
    }
    .order-tit{
        .item-name,.item-price,.item-num{border-right: 2px solid #fff;}
        .item-price,.item-num,.item-operate{
           height: 28px;
           line-height: 28px;
        }
    }
    .order-tit{
        height: 28px;
        line-height: 28px;
        width: 100%;
        top: 4px;
        left: 0;
    }
    .order-con{
        height: 100%;
    }
    .list-order{
        overflow-y: auto;
        overflow-x: hidden;
        height: 100%;
        .item-order{
            height: 40px;
            line-height: 40px;

            &:nth-child(2n){
                background-color: #f0f0f0;
            }
        }
    }
}
</style>

