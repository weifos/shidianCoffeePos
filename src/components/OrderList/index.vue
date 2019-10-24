<template>
  <div class="order-list h100">
    <div class="form-order rel border-box">
      <div class="form-wrap h100">
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
    </div>
    <div class="tool-bar abs bg-main text-white">
      <div class="accounts-info">
        <div>数量：0</div>
        <div class="mt5">总计：0</div>
      </div>
      <div class="btns-bar abs">
        <button class="button bg-white text-main button-size-small round">挂单</button>
        <button class="button bg-white text-main button-size-small round ml5 btn-account">结算</button>
        <button class="button bg-white text-main button-size-small round ml5">删除</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{
        name: "摩卡咖啡",
        price: "135.00",
        num: "11"
      }]
    }
  }
}
</script>

<style lang="scss">
.order-list {
  .btn-account{
        transform: scale(1.3);
        margin:0 10px 0 15px;
      }
  .form-order {
    padding: 32px 0 62px 0;
    height: 100%;
    .form-wrap {
      overflow-y: auto;
      overflow-x: hidden;
    }
    .item-name {
      width: 45%;
      box-sizing: border-box;
    }
    .item-price,
    .item-num {
      width: 15%;
      box-sizing: border-box;
    }
    .item-operate {
      width: 25%;
      box-sizing: border-box;

      .btn {
        margin: 0 5px;
      }
      
    }
    .order-tit {
      .item-name,
      .item-price,
      .item-num {
        border-right: 2px solid #fff;
      }
      .item-price,
      .item-num,
      .item-operate {
        height: 28px;
        line-height: 28px;
      }
    }
    .order-tit {
      height: 28px;
      line-height: 28px;
      width: 100%;
      top: 4px;
      left: 0;
    }
    .order-con {
      height: 100%;
    }
    .list-order {
      overflow-y: auto;
      overflow-x: hidden;
      height: 100%;
      .item-order {
        height: 40px;
        line-height: 40px;
        &:nth-child(2n) {
          background-color: #f0f0f0;
        }
      }
    }
  }
}
</style>

