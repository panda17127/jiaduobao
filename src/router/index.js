import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 需要左方向动画的路由用this.$router.to('****')
Router.prototype.togo = function (path) {
  this.isleft = true
  this.isright = false
  this.push(path)
}
// 需要右方向动画的路由用this.$router.goRight('****')
Router.prototype.goRight = function (path) {
  this.isright = true
  this.isleft = false
  this.push(path)
}
// 需要返回按钮动画的路由用this.$router.goBack()，返回上一个路由
Router.prototype.goBack = function () {
  this.isright = true
  this.isleft = false
  this.go(-1)
}
// 点击浏览器返回按钮执行，此时不需要路由回退
Router.prototype.togoback = function () {
  this.isright = true
  this.isleft = false
}
// 点击浏览器前进按钮执行
Router.prototype.togoin = function () {
  this.isright = false
  this.isleft = true
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve) => require(['@/pages/index'], resolve),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: (resolve) => require(['@/pages/index/home'], resolve)
        },
        {
          path: '/investment',
          name: 'investment',
          component: (resolve) => require(['@/pages/index/investment'], resolve)
        },
        {
          path: '/usercenter',
          name: 'usercenter',
          component: (resolve) => require(['@/pages/index/usercenter'], resolve)
        },
        {
          path: '/day',
          name: 'day',
          component: (resolve) => require(['@/pages/index/day'], resolve)
        }
      ]
    },
    {
      path: '/Home/Detail',
      name: 'Detail',
      component: (resolve) => require(['@/pages/detail'], resolve)
    },
    {
      path: '/Investment/Detail',
      name: 'Detail',
      component: (resolve) => require(['@/pages/investment/detail'], resolve)
    },
    {
      path: '/usercenter',
      name: 'usercenter',
      component: (resolve) => require(['@/pages/index'], resolve),
      redirect: '/usercenter',
      children: [
        {
          path: '/login',
          name: 'login',
          component: (resolve) => require(['@/pages/usercenter/login'], resolve)
        },
        {
          path: '/register',
          name: 'register',
          component: (resolve) => require(['@/pages/usercenter/register'], resolve)
        },
        {
          path: '/findpwd',
          name: 'findpwd',
          component: (resolve) => require(['@/pages/usercenter/findpwd'], resolve)
        }
      ]
    }
  ]
})
