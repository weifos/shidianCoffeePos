<template>
  <div class="f-frame">
    <!-- frame-left s -->
    <div class="frame-left rel">
      <div class="info-bar abs">
        <div class="text-gray font-size-small">2019-09-12 12:23:00</div>
        <div class="text-gray font-size-small mt5">联网状态：</div>
        <div class="user-info hidden mt15">
          <div class="user-img fl">
            <img alt :src="userInfo.head_img" width="100%" height="100%" />
            <!-- <img alt src="../../img/head.png" width="100%" height="100%" /> -->
          </div>
          <div class="user-txt">
            <div class="user-name bold">收银员：Lisa</div>
            <div class="user-identity mt5">
              <span class="icon icon-arrow dib vam"></span>
              <span class="dib vam ml10">超级管理员</span>
            </div>
          </div>
        </div>
        <div class="machine-info mt15">
          <div>收银台：0101</div>
          <div class="mt5">会 员：139812345432【十点会员】</div>
        </div>
      </div>
      <div class="content-bar">
        <slot name="left"></slot>
      </div>
      <div class="tool-bar abs bg-main text-white">
        <div class="accounts-info">
          <div>数量：0</div>
          <div class="mt5">总计：0</div>
        </div>
        <div class="btns-bar abs">
          <button class="button bg-white text-main button-size-small round">挂单</button>
          <button class="button bg-white text-main button-size-small round ml5">结算</button>
          <button class="button bg-white text-main button-size-small round ml5">删除</button>
        </div>
      </div>
    </div>
    <!-- frame-left e -->
    <!-- frame-right s -->
    <div class="frame-right rel">
      <!-- top-bar s -->
      <div class="top-bar bg-main text-white abs">
        <div class="text-tips">提示信息详情显示</div>
        <div class="search-bar abs">
          <input class="input-search" />
        </div>
      </div>
      <!-- top-bar e -->
      <div class="content-bar bg-light-gray">
        <slot name="right"></slot>
      </div>
      <!-- tool-bar s -->
      <div class="tool-bar abs bg-white hidden">
        <div class="right-side fr">
          <Icon type="transformDuty"></Icon>
          <Icon type="loginOut"></Icon>
        </div>
        <div class="left-side">
          <Icon type="notDoneOrder" :num="3"></Icon>
          <Icon type="notGetOrder"></Icon>
          <Icon type="orderList"></Icon>
          <Icon type="statementInfo"></Icon>
          <Icon type="dataDownLoad"></Icon>
          <Icon type="memberInfo"></Icon>
        </div>
      </div>
      <!-- tool-bar e -->
    </div>
    <!-- frame-right e -->
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      userInfo: {
        head_img: '../../static/img/head.png',
        user_name: '--',
        login_name: '--'
      }
    }
  },
  methods: {
    onClickItem(index) {
      this.curIndex = index;
    },
    //加载商品数据
    api_200() {
      this.$store.commit('loadingStatus', {
        isLoading: true
      })
      api.post(api.api_200, api.getSign(), function (vue, res) {
        if (res.data.Basis.State == app_g.state.state_200) {
          console.log(res.data.Result)
          debugger
        } else {
          vue.$vux.toast.text(res.data.Basis.Msg, 'default', 5000)
          vue.isDisable = true
        }
      })
    }
  },
  created() {
    console.log('检测登录')
    //this.api_200()
  }
}

</script>

<style lang="scss">
.frame-left {
  .info-bar {
    width: 100%;
    left: 0;
    top: 0;
    height: 197px;
    border-bottom: 1px solid #acacac;
    box-sizing: border-box;
    padding: 16px;
  }
  .tool-bar {
    height: 62px;
    width: 100%;
    left: 0;
    bottom: 0;
  }
  .content-bar {
    height: 100%;
    box-sizing: border-box;
    padding: 197px 0 62px 0;
  }
  .user-txt {
    padding-top: 5px;
  }
  .user-info {
    .user-name,
    .user-identity {
      font-size: 18px;
    }
    .user-img {
      width: 59px;
      height: 59px;
      overflow: hidden;
      border-radius: 100%;
      margin-right: 17px;
    }
  }
  .accounts-info {
    padding: 12px 0 0 20px;
  }
  .btns-bar {
    text-align: right;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    box-sizing: border-box;
    padding-top: 18px;
    padding-right: 13px;
  }
}

.frame-right {
  .top-bar {
    width: 100%;
    height: 58px;
    left: 0;
    top: 0;
    line-height: 58px;
    text-align: center;
    overflow: hidden;

    .text-tips {
      padding-right: 253px;
    }
  }
  .tool-bar {
    width: 100%;
    height: 92px;
    left: 0;
    bottom: 0;
  }
  .content-bar {
    height: 100%;
    box-sizing: border-box;
    padding: 58px 0 92px 0;
  }
  .search-bar {
    right: 10px;
    top: 50%;
    width: 243px;
    height: 30px;
    transform: translateY(-50%);

    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      background: url("../../../static/img/search.png") no-repeat 0 0/100% auto;
      z-index: 1;
      width: 16px;
      height: 16px;
      transform: translate(15px, 50%);
    }
  }
  .input-search {
    background-color: #fff;
    border: none;
    width: 183px;
    border-radius: 15px;
    padding: 0 20px 0 40px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    vertical-align: top;
  }
  .right-side,
  .left-side {
    padding-top: 20px;
  }
  .left-side {
    padding-left: 10px;
  }
  .right-side {
    padding-right: 10px;
  }
  .icon {
    margin: 0 15px;
  }
}
</style>
