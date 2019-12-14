import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'
import home from '@/pages/home/home'
import investment from '@/pages/investment/investment'
import investmentDetail from '@/pages/investment/children/detail'
import usercenter from '@/pages/usercenter/usercenter'
import login from '@/pages/usercenter/children/login'
import register from '@/pages/usercenter/children/register'
import findpwd from '@/pages/usercenter/children/findpwd'
import about from '@/pages/about/about'

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
      component: App,
      children: [
        {
          path: '',
          name: 'home',
          component: home
        },
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/investment',
          name: 'invesetment',
          component: investment,
          children: [{
            path: 'detail',
            component: investmentDetail
          }]
        },
        {
          path: '/usercenter',
          name: 'usercenter',
          component: usercenter
        },
        {
          path: '/login',
          component: login
        },
        {
          path: '/register',
          component: register
        },
        {
          path: '/findpwd',
          component: findpwd
        },
        {
          path: '/about',
          name: 'about',
          component: about
        }
      ]
    }
  ]
})
