<template>
  <div class="f-frame">
    <!-- frame-left s -->
    <div class="frame-left rel">
      <div class="info-bar abs">
        <div class="fr text-gray font-size-small">收银台：0101</div>
        <div class="text-gray font-size-small">2019-09-12 12:23:00</div>
        <div class="text-gray font-size-small mt5">联网状态：</div>
        <div class="user-info hidden mt10">
          <div class="user-img fl">
            <img alt :src="userInfo.head_img" width="100%" height="100%" />
          </div>
          <div class="user-txt">
            <div class="user-name bold">收银员：{{userInfo.login_name}}</div>
            <div class="user-identity mt5">
              <span class="icon icon-arrow dib vam"></span>
              <span class="dib vam ml10">{{userInfo.user_name}}</span>
            </div>
          </div>
        </div>
        <!-- <div class="machine-info mt15">
          <div class="mt5">会 员：139812345432【十点会员】</div>
        </div>-->
      </div>
      <div class="content-bar">
        <slot name="left"></slot>
      </div>
    </div>
    <!-- frame-left e -->
    <!-- frame-right s -->
    <div class="frame-right rel">
      <!-- top-bar s -->
      <div class="top-bar bg-main text-white abs">
        <div class="text-tips">{{title}}</div>
        <div class="search-bar abs" style="display:none;">
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
          <Icon type="dataDownLoad" v-on:nav="nav"></Icon>
          <Icon type="statementInfo" v-on:nav="nav"></Icon>
          <Icon type="notDoneOrder" v-on:nav="nav" :num="3"></Icon>
          <Icon type="notGetOrder" v-on:nav="nav"></Icon>
          <Icon type="orderList" v-on:nav="nav"></Icon>
          <Icon type="memberInfo" v-on:nav="nav"></Icon>
        </div>
      </div>
      <!-- tool-bar e -->
    </div>
    <!-- frame-right e -->
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import { mapState } from 'vuex'

export default {
  components: {
    Icon,
  },
  props: {
    result: Object
  },
  watch: {
    result: function (newData, oldData) {
      if (newData.id) {
        if (newData.head_img == undefined || newData.head_img == null || newData.head_img.length == 0) {
          newData.head_img = '../../static/img/user.png'
        }
        this.userInfo = newData
      }
    }
  },

  //title: state => state.vux.title
  data() {
    return {
      userInfo: {
        head_img: '../../static/img/user.png',
        user_name: '未登录',
        login_name: '--'
      },
      member: {
        login_name: '--'
      }
    }
  },
  computed: {
    ...mapState({
      title: state => state.vux.title
    })
  },
  methods: {
    onClickItem(index) {
      this.curIndex = index
    },
    //检查设备
    nav(type) {
      this.$emit('nav', type)
    }
  },
  created() {
    //如果已登录，刷新用户信息
    if (this.UserInfo.islogin()) {
      this.userInfo = this.UserInfo.user
      if (this.userInfo.head_img == undefined || this.userInfo.head_img == null || this.userInfo.head_img.length == 0) {
        this.userInfo.head_img = '../../static/img/user.png'
      }
    }
  }
}

</script>

<style lang="scss">
.frame-left {
  .info-bar {
    width: 100%;
    left: 0;
    top: 0;
    height: 126px;
    border-bottom: 1px solid #acacac;
    box-sizing: border-box;
    padding: 10px 10px 0px 10px;
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
    padding-top: 126px;
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
      // padding-right: 253px;
    }
  }
  .tool-bar {
    width: 100%;
    height: 62px;
    left: 0;
    bottom: 0;
  }
  .content-bar {
    height: 100%;
    box-sizing: border-box;
    padding: 58px 0 62px 0;
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
    padding-top: 6px;
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
