import Vue from 'vue'
import store from '@/store'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#868686',
      selectedColor: '#292929',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/home/home',
          text: '首页',
          iconPath: '/static/img/icon-tab_home02@2x.png',
          selectedIconPath: '/static/img/icon-tab_home01@2x.png'
        },
        {
          pagePath: 'pages/scene-exchange/scene-exchange',
          text: '现场兑换',
          iconPath: '/static/img/icon-tab_locale02@2x.png',
          selectedIconPath: '/static/img/icon-tab_locale01@2x.png'
        },
        {
          pagePath: 'pages/online-exchange/online-exchange',
          text: '商城兑换',
          iconPath: '/static/img/icon-tab_mall02@2x.png',
          selectedIconPath: '/static/img/icon-tab_mall01@2x.png'
        },
        {
          pagePath: 'pages/mine/mine',
          text: '我的',
          iconPath: '/static/img/icon-tab_mine02@2x.png',
          selectedIconPath: '/static/img/icon-tab_mine01@2x.png'
        }
      ]
    }
  }
}
