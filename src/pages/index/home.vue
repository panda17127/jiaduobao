<template>
  <div class="content-box">
    <common-header :tittle="tittle" :showback="false"></common-header>
    <div class="page-content">
      <mt-swipe class="m-swiper" :auto="4000">
        <mt-swipe-item v-for="item in bannerList" :key="item">
          <img :src="item">
        </mt-swipe-item>
      </mt-swipe>
      <div class="m-notice">
        <img class="notice-icon" src="../../assets/imgs/notice.png">
        <mt-swipe class="m-notice-scroll" :auto="0" :speed="3000" :show-indicators="false">
            <mt-swipe-item class="">
              实名认证成功用户即可联系在线客服领取2元现金红包！
            </mt-swipe-item>
          </mt-swipe>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex'
import commonHeader from 'common/common-header'
// import * as homeApi from 'api/home-api'
// import { ERR_OK } from 'config/index'
export default {
  data () {
    return {
      tittle: '首页',
      loading: false,
      bannerList: [require('../../assets/imgs/banner01.png'), require('../../assets/imgs/banner02.png')]
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
    commonHeader
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
  .mb(98);
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
    .mt(20);
    .pl(30);
    .pr(30);
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
}
</style>
