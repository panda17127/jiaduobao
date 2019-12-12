<template>
  <div class="m-list">
    <div class="m-item backfff" v-for="(item, index) in list" :key="item.id">
      <div class="banner" v-if="index === 1">
        <img src="../assets/imgs/banner01.png" alt="">
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
</template>
<script>
export default {
  data () {
    return {
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
  }
}
</script>
<style lang="less" scoped>
@import "~styles/index.less";
@import "~styles/variable.less";
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
</style>
