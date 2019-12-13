<template>
  <div class="content-box">
    <common-header :tittle="tittle" :showback="false"></common-header>
    <div class="page-content">
      <div class="m-login">
        <div class="form-group">
          <div class="input-icon user-icon">
            <img src="../../assets/imgs/user_name.png" alt="">
          </div>
          <input type="text" class="input-control" placeholder="请输入用户名和手机号码"/>
        </div>
        <div class="form-group">
          <div class="input-icon user-icon">
            <img src="../../assets/imgs/user_pwd.png" alt="">
          </div>
          <input type="text" class="input-control" placeholder="请输入密码"/>
        </div>
        <div>忘记密码</div>
        <div class="btn-group">
          <div class="login-btn">立即登录</div>
          <div class="reg-btn">免费注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex'
import commonHeader from 'common/common-header'
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
    todetail() {
      this.$router.togo('/Home/Detail')
    }
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
}
</style>
