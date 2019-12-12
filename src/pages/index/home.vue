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
      <div class="m-list">
        <div class="m-item backfff" v-for="(item, index) in list" :key="item.id">
          <div class="banner" v-if="index === 1">
            <img src="../../assets/imgs/banner01.png" alt="">
          </div>
          <div class="m-item-top flex flex-ac">
            <div class="tag">保</div>
            <div class='name'>{{item.title}}</div>
          </div>
          <div class="m-item-middle flex flex-js">
            <div class="flex flex-col flex-ac flex-ac">
              <div><span class="num">1</span><span>%</span></div>
              <div>日化收益</div>
            </div>
            <div class="flex flex-col flex-ac flex-ac">
              <div><span class="num">2</span><span>元</span></div>
              <div>每日分红</div>
            </div>
            <div class="flex flex-col flex-ac flex-ac">
              <div><span class="num">1</span><span>天</span></div>
              <div>项目期限</div>
            </div>
            <div class="flex flex-col flex-ac flex-ac">
              <div><span>￥</span><span class="num">200</span><span>元</span></div>
              <div>起购金额</div>
            </div>
          </div>
          <div class="m-buy flex flex-ac flex-js">
            <div class='total-price'>项目规模：1800</div>
            <div class="buy">立即购买</div>
          </div>
          <div class="m-progress flex flex-ac flex-js">
            <div>项目进度：</div>
            <mt-progress class="progress" :value="20" :bar-height="5"></mt-progress>
            <div>6.23%</div>
          </div>
        </div>
      </div>
      <commonFooter></commonFooter>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex'
import commonHeader from 'common/common-header'
import commonFooter from 'common/commonFooter'
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
      ],
      list: [
        {
          title: '【新手体验项目】-限投一次',
          dayPercent: '1',
          dayProfit: 2,
          time: 1,
          startPrice: 200,
          totalPrice: 1800,
          progress: '2.34'
        },
        {
          title: '【新手体验项目】-限投一次',
          dayPercent: '1',
          dayProfit: 2,
          time: 1,
          startPrice: 200,
          totalPrice: 1800,
          progress: '2.34'
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
    commonFooter
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
  .m-list {
    .banner {
      .fs(0);
      img {
        width: 100%;
        .pt(15);
      }
    }
    .m-item {
      .padding(0, 30);
      .mb(20);
      .m-item-top {
        .padding(15, 0);
        .bb(1, #eee);
        .tag {
          .w(90);
          .h(90);
          .lh(90);
          .tc();
          .b-radius(100);
          background: #54a500;
          color: #fff;
          .fs(42);
        }
        .name {
          .fs(36)
        }
      }
      .m-item-middle {
        .padding(20, 0);
        .num {
          color: #dc4c43;
          .fs(36);
        }
      }
      .m-buy {
        .pt(15);
        .total-price {
          .fs(38);
        }
        .buy {
          .w(240);
          .h(60);
          .lh(60);
          .fs(32);
          .tc();
          .b-radius(10);
          color: #fff;
          background-color: #3485ff;
        }
      }
      .m-progress {
        .padding(15, 0);
        color: #666666c9;
        .fs(36);
        .progress {
          .w(400);
        }
      }
    }
  }
}
</style>
