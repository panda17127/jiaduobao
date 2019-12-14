<template>
  <div class="content-box">
    <common-header :tittle="tittle" :showback="false"></common-header>
    <div class="page-content">
      <div class="m-login">
        <form>
          <div class="form-group mb30">
            <div class="input-icon user-icon flex-none">
              <img src="../../../assets/imgs/user_name.png" alt="">
            </div>
            <input type="text" class="input-control" placeholder="请输入用户名和手机号码"/>
          </div>
          <div class="form-group">
            <div class="input-icon user-icon flex-none">
              <img src="../../../assets/imgs/user_pwd.png" alt="">
            </div>
            <input type="text" class="input-control" autocomplete=false placeholder="请输入密码"/>
          </div>
          <div class="flex flex-je mb30">
            <div class="forget-pwd" @click="handleToFind">忘记密码</div>
          </div>
          <div class="btn-group">
            <div class="btn btn-login mb30">立即登录</div>
            <div class="ben btn-reg" @click="handleToRegister">免费注册</div>
          </div>
        </form>
      </div>
        <common-footer></common-footer>
        <footer-guide></footer-guide>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex'
import commonHeader from 'common/common-header'
import commonFooter from 'common/common-footer'
import footerGuide from 'common/footer-guide'
export default {
  data () {
    return {
      tittle: '登录',
      num: 0
    }
  },
  created() {},
  methods: {
    ...mapMutations({
      setNum: 'SET_NUM'
    }),
    handleToRegister() {
      this.$router.togo('/register')
    },
    handleToFind() {
      this.$router.togo('/findpwd')
    }
  },
  components: {
    commonHeader,
    commonFooter,
    footerGuide
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
.m-login {
  .padding(60, 30);
  .form-group {
    .flex();
    .flex-ac();
    .flex-jc();
    width: 100%;
    .b-radius(12);
    .bg(#fff);
    .input-control {
      width: 100%;
      .padding(0, 20);
      border: 0;
      outline:medium;
      .fs(32);
    }
  }
  .forget-pwd {
    .padding(20, 40, 20, 0);
    .fs(32);
  }
  .btn-group {
    .btn-login {
      .btn(#fff, @mainColor);
    }
    .btn-reg {
      .btn(#fff, @secoColor01);
    }
  }
}
</style>
