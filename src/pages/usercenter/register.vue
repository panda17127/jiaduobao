<template>
  <div class="content-box">
    <common-header :tittle="tittle" :showback="false"></common-header>
    <div class="page-content">
      <div class="m-register">
        <form>
          <div class="form-group">
            <input type="text" class="input-control" placeholder="登录账号"/>
          </div>
          <div class="form-group">
            <input type="password" class="input-control" autocomplete=false placeholder="请输入密码"/>
          </div>
          <div class="form-group">
            <input type="password" class="input-control" autocomplete=false placeholder="请输入支付密码"/>
          </div>
          <div class="form-group">
            <input type="text" class="input-control" placeholder="请输入推荐人账号（选填）"/>
          </div>
          <div class="form-group">
            <input type="number" maxlength="11" class="input-control" placeholder="请输入手机号码"/>
          </div>
          <div class="flex">
              <div class="form-group">
                  <input type="number" maxlength="6" class="input-control" placeholder="请输入验证码"/>
              </div>
              <div class="btn-code">获取手机验证码</div>
          </div>
          <div class="btn-group">
            <div class="btn-reg mb30">立即注册</div>
          </div>
          <div class="flex flex-je">
            <div class="login" @click="handleToLogin">已有账号？<span class="main-color">立即登录</span></div>
          </div>
        </form>
      </div>
        <common-footer></common-footer>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex'
import commonHeader from 'common/common-header'
import commonFooter from 'common/common-footer'
export default {
  data () {
    return {
      tittle: '注册',
      num: 0
    }
  },
  created() {},
  methods: {
    ...mapMutations({
      setNum: 'SET_NUM'
    }),
    handleToLogin() {
      this.$router.togo('/usercenter')
    }
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
}
.m-register {
  .padding(60, 30);
  .form-group {
    .flex();
    .flex-ac();
    .flex-jc();
    width: 100%;
    .mb(30);
    .b-radius(12);
    .bg(#fff);
    .input-control {
      width: 100%;
      .h(98);
      .padding(0, 20);
      border: 0;
      outline:medium;
      .fs(32);
    }
  }
  .btn-code {
    .btn(#fff, @mainColor);
    .w(360);
    .fs(24);
    .ml(20);
    }
  .btn-group {
    .mt(30);
    .btn-reg {
      .btn(#fff, @mainColor);
    }
  }
}
</style>
