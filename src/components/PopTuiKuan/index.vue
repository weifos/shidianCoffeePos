<template>
  <div class="pop-tuikuan abs">
    <div class="pop-tit bg-main text-white tac">请确认退款数量</div>
    <div class="pop-con tac">
        <div class="dib vam value-bar">
                <button class="btn btn-subtract operate-btn-size-middle mr10" @click="sub"></button>
                <input type="text" class="dib vam font-size-big round bg-white text-gray tac input-size-normal no-border" v-model="buyCount"  />
                <button class="btn btn-plus operate-btn-size-middle ml10" @click="add"></button>
        </div>

      <div class="btns nowrap">
        <button class="button round bg-main text-white button-size-normal f-item btn-submit" @click="api_101">提交</button>
        <button class="button round bg-gray text-white button-size-normal f-item">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/modules/api'
import store from '@/store'

export default {
  data() {
    return {
      fln: true,
    }
  },
  methods: {},
  created() {
  }
}

</script>

<style lang="scss">
.pop-tuikuan {
  width: 410px;
  // height:400px;
  background: rgba(255, 255, 255, 1);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .value-bar{
      margin-top: 50px;
      margin-bottom: 50px;
  }

  .font-size-big{
      font-size: 22px;
  }

  .pop-tit {
    line-height: 61px;
    height: 61px;
    font-size: 20px;
    font-weight: 400;
  }
  .pop-con {
    padding: 13px;
  }
  .pop-btns {
    margin: 19px -5px 0 0;
    .f-item {
      margin-right: 11px;
      margin-bottom: 15px;

      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
  .btn-submit {
    margin-right: 18px;
  }
}
</style>