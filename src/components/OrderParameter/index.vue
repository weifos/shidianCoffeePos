<template>
    <div class="order-parameter rel section">
        <div class="section-tit abs bg-white list-inlineblock tac text-gray">
            <div class="f-item text-no border-box">NO.123124141</div>
            <div class="f-item text-name">商品名称</div>
        </div>
        <div class="section-con">
            <div class="con-wrap">
                <ul class="list-para">
                    <li class="list-item">
                        <div class="para-label text-gray fl">容量：</div>
                        <div class="para-value list-inlineblock">
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20 clicked">大杯</button>
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20">中杯</button>
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20">小杯</button>
                        </div>
                    </li>
                    <li class="list-item">
                        <div class="para-label text-gray fl">温度：</div>
                        <div class="para-value">
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20 clicked">热</button>
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20">冷</button>
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20">常温</button>
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20">多冰</button>
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20">少冰</button>
                            <button class="f-item button square bg-white text-gray button-size-middle dib mr20 mb20">去冰</button>
                        </div>
                    </li>
                    <li class="list-item">
                        <div class="dib vam text-gray para-label">单价：</div>
                        <div class="dib vam ">
                            <input type="text" class="font-size-middle round bg-white text-gray tac input-size-normal no-border" value="1">
                        </div>
                        <div class="dib vam text-gray para-label">小计：</div>
                        <div class="dib vam ">
                            <input type="text" class="font-size-middle round bg-white text-gray tac input-size-normal no-border" value="1">
                        </div>
                        <div class="row mt20">
                            <div class="dib vam text-gray para-label">库存：</div>
                            <div class="dib vam ">
                                <input type="text" class="font-size-middle round bg-white text-gray tac input-size-normal no-border" value="1">
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="operate-bar tar">
                    <div class="row">
                       <button class="btn btn-subtract operate-btn-size-middle mr10"></button>
                       <input type="text" class=" dib vam font-size-middle round bg-white text-gray tac input-size-middle no-border" value="1">
                        <button class="btn btn-plus operate-btn-size-middle ml10"></button>
                    </div>
                    <div class="row mt30">
                        <button class="button round bg-main text-white button-size-normal mr20">确认</button>
                        <button class="button round bg-gray text-white button-size-normal">取消</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.order-parameter{
    

    .section-tit{
        .text-no{
            width: 30%;
            border-right:1px solid #ACACAC;
        }
        .text-name{width:70%;}
    }
    
}
.list-para{
    .list-item{
        margin-bottom: 48px;
        overflow: hidden;
    }
    .para-label{
        width: 100px;
        line-height: 44px;
        text-align: center;
    }
    .para-value{
        margin-left: 100px;
    }
}
</style>