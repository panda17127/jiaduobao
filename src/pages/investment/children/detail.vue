<template>
  <div class="content-box content-box-fixed">
    <common-header :tittle="tittle" :showmore="true"></common-header>
    <div class="page-content">
      <div class="backfff">{{detail.name}}</div>
    </div>
    <div class="footer-btn">
      <div class="btn-buy">马上投资</div>
    </div>
  </div>
</template>

<script>
import commonHeader from 'common/common-header'
export default {
  data() {
    return {
      tittle: '我要投资',
      detail: {
        name: '【新手体验项目】，先投一次'
      }
    }
  },
  components: {
    commonHeader
  },
  computed: {
    newdata: function() {
      return this.data + 1
    }
  },
  methods: {
    tohome() {
      this.$router.goBack()
    },
    add() {
      this.data++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.page-content {
  .mb(40);
}
.footer-btn {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  .padding(20, 0);
  .h(98);
  .bg(#fff);
  .btn-buy {
    .btn(#fff, @mainColor);
    .margin(0, 30);
    width: auto;
  }
}
</style>
