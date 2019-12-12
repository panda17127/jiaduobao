<template>
  <div class="footer flex flex-col flex-ac flex-jc">
    <div>1222</div>
    <div class="footer-img">
        <img src="../assets/imgs/page_footer_one.png" alt="">
        <img src="../assets/imgs/page_footer_two.png" alt="">
        <img src="../assets/imgs/page_footer_three.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
@import "~styles/index.less";
@import "~styles/variable.less";
  .footer {
    .padding(20, 0, 40, 0);
    .footer-img {
      .mt(20);
      img {
        .w(134);
        .h(47);
      }
    }
  }
</style>
