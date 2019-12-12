<template>
  <div class="content-box">
    <common-header :tittle="tittle" :showback="false"></common-header>
    <div class="page-content">
      <mt-swipe class="m-swiper" :auto="4000">
        <mt-swipe-item v-for="item in bannerList" :key="item">
          <img :src="item">
        </mt-swipe-item>
      </mt-swipe>
      <div class="m-notice backfff">
        <img class="notice-icon" src="../../assets/imgs/notice.png">
        <mt-swipe class="m-notice-scroll" :auto="0" :speed="3000" :show-indicators="false">
            <mt-swipe-item>
              实名认证成功用户即可联系在线客服领取2元现金红包！
            </mt-swipe-item>
          </mt-swipe>
      </div>
      <div class="m-menu backfff flex flex-jc">
        <div class="flex flex-wrap">
          <div class="menu-item flex flex-col flex-ac flex-jc" v-for="(item, index) in menuList" :key="'' + index">
            <img :src="item.icon" alt="菜单选项">
            <div>{{item.name}}</div>
          </div>
        </div>
      </div>
      <common-list></common-list>
      <common-footer></common-footer>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex'
import commonHeader from 'common/common-header'
import commonList from 'common/common-list'
import commonFooter from 'common/common-footer'
// import * as homeApi from 'api/home-api'
// import { ERR_OK } from 'config/index'
export default {
  data () {
    return {
      tittle: '首页',
      loading: false,
      bannerList: [require('../../assets/imgs/banner01.png'), require('../../assets/imgs/banner02.png')],
      menuList: [
        {
          name: '平台公告',
          icon: require('../../assets/imgs/menu_00.png')
        },
        {
          name: '我要签到',
          icon: require('../../assets/imgs/menu_01.png')
        },
        {
          name: '我要充值',
          icon: require('../../assets/imgs/menu_02.png')
        },
        {
          name: '我要提现',
          icon: require('../../assets/imgs/menu_03.png')
        },
        {
          name: '邀请有礼',
          icon: require('../../assets/imgs/menu_04.png')
        },
        {
          name: '我要投资',
          icon: require('../../assets/imgs/menu_05.png')
        },
        {
          name: '收益计算',
          icon: require('../../assets/imgs/menu_06.png')
        },
        {
          name: '每日签到',
          icon: require('../../assets/imgs/menu_07.png')
        }
      ]
    }
  },
  created() {},
  methods: {
    ...mapMutations({
      setNum: 'SET_NUM'
    })
    // login() {
    //   let params = {
    //     password: 'gs123456',
    //     storeNo: '',
    //     userName: '17326015487'
    //   }
    //   homeApi.loginUserNo(params).then((res) => {
    //     let {data} = res
    //     if (data.success === ERR_OK) {
    //       alert(data.value.token)
    //     } else {
    //     }
    //   }).catch(() => {
    //   })
    // }
  },
  components: {
    commonHeader,
    commonFooter,
    commonList
  },
  computed: {
    ...mapGetters([
      'number'
    ]),
    ...mapState({
      number: state => state.home.number
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.page-content{
  .m-swiper{
    width: 100%;
    .h(400);
    img{
      width: 100%;
      height: 100%;
    }
  }
  .m-notice {
    display: flex;
    .padding(20, 30, 30, 0);
    .notice-icon {
      .mr(12);
      .w(148);
      .h(64);
    }
    .m-notice-scroll {
      width: 100%;
      .h(64);
      .lh(64);
      .fs(32);
    }
  }
  .m-menu {
    .padding(20, 30, 10, 30);
    .bb(1, #eee);
    .menu-item {
      .w(172.5);
      .mb(20);
      img {
        .w(120);
        .h(120);
        .mb(8);
      }
    }
  }
}
</style>
