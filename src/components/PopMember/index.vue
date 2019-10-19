<template>
    <div class="pop-member abs">
        <div class="pop-tit bg-main text-white tac">会员号</div>
        <div class="pop-con">
            <div class="pop-input"><input type="text" placeholder="请输入手机号" class="input-phone input-text-1"></div>
            <div class="pop-btns list-inlineblock">
                <button class="btn-number f-item">7</button>
                <button class="btn-number f-item">8</button>
                <button class="btn-number f-item">9</button>
                <button class="btn-number f-item">删除</button>
                <button class="btn-number f-item">4</button>
                <button class="btn-number f-item">5</button>
                <button class="btn-number f-item">6</button>
                <button class="btn-number f-item">清除</button>
                <button class="btn-number f-item">1</button>
                <button class="btn-number f-item">2</button>
                <button class="btn-number f-item">3</button>
                <button class="btn-number f-item">0</button>
            </div>
            <div class="mt5 nowrap">
                <button class="button round bg-main text-white button-size-normal f-item btn-submit">提交</button>
                <button class="button round bg-gray text-white button-size-normal f-item">取消</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.pop-member{
    width:310px;
    // height:400px;
    background:rgba(255,255,255,1);
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    .pop-tit{
        line-height: 61px;
        height:61px;
        font-size:20px;
        font-weight:400
    }
    .pop-con{
        padding: 13px;
    }
    .pop-btns{
        margin:19px -5px 0 0;
        .f-item{
            margin-right: 11px;
            margin-bottom: 15px;

            &:nth-child(4n){
                margin-right: 0;
            }
        }
    }
    .btn-submit{
        margin-right: 18px;
    }
}
</style>