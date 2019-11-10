<template>
  <div class="icon">
    <template v-if="type == 'statementInfo'">
      <div class="icon-img" @click="nav('menu')">
        <img src="./img/i7.png" />
      </div>
      <div class="icon-text">咖啡点单</div>
    </template>
    <template v-if="type == 'notDoneOrder'">
      <div class="icon-img" @click="nav('notDoneOrder')">
        <img src="./img/i2.png" />
      </div>
      <div class="icon-text">未作订单</div>
    </template>
    <template v-if="type == 'notGetOrder'">
      <div class="icon-img" @click="nav('notGetOrder')">
        <img src="./img/i5.png" />
      </div>
      <div class="icon-text">未取订单</div>
    </template>
    <template v-if="type == 'orderList'">
      <div class="icon-img" @click="nav('orderList')">
        <img src="./img/i8.png" />
      </div>
      <div class="icon-text">订单列表</div>
    </template>
    <template v-if="type == 'dataDownLoad'">
      <div class="icon-img" @click="nav('orderEntry')">
        <img src="./img/i1.png" />
      </div>
      <div class="icon-text">挂单/恢复</div>
    </template>
    <template v-if="type == 'memberInfo'">
      <div class="icon-img">
        <img src="./img/i4.png" />
      </div>
      <div class="icon-text">会员信息</div>
    </template>
    <template v-if="type == 'transformDuty'">
      <div class="icon-img">
        <img src="./img/i3.png" />
      </div>
      <div class="icon-text">交接班</div>
    </template>
    <template v-if="type == 'loginOut'">
      <div class="icon-img">
        <img src="./img/i6.png" />
      </div>
      <div class="icon-text">退出登录</div>
    </template>

    <!-- <div class="icon-num" v-if="num > 0">{{num}}</div> -->
  </div>
</template>
<script>
export default {
  props: {
    'type': {
      type: String
    },
    'num': {
      type: Number,
      default: 0
    }
  },
  methods: {
    //检查设备
    nav(type) {
      this.$emit('nav', type)
    }
  }
}
</script>

<style lang="scss">
.icon {
  display: inline-block;
  text-align: center;
  position: relative;
}
.icon-img {
  height: 27px;
  margin-bottom: 6px;
  vertical-align: middle;
}
.icon-num {
  position: absolute;
  background-color: #ff3d3d;
  width: 19px;
  height: 19px;
  line-height: 19px;
  color: #fff;
  font-size: 12px;
  border-radius: 100%;
  right: 5px;
  top: -5px;
}
</style>
