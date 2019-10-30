//import 'babel-polyfill'
import Vue from 'vue'
import Print from 'vue-print-nb'
import { cookie, AlertPlugin, ToastPlugin, LoadingPlugin, ConfirmPlugin, DatetimePlugin, PopupPicker } from 'vux'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import $ from 'jquery'
import store from './store'
import Bridge from './modules/bridge.js'
import app_g from "./modules/appGlobal"
import user from "./modules/userInfo"
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(Print)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$bridge = Bridge
Vue.prototype.$ = $
Vue.prototype.cookie = cookie
Vue.use(ConfirmPlugin)//弹出确认框
Vue.use(AlertPlugin)  //Alert弹窗 
Vue.use(ToastPlugin)  //Toast弹窗 
Vue.use(LoadingPlugin)//加载弹窗 
// Vue.use(DatetimePlugin)//选择日历 
// Vue.use(PopupPicker)//选择日历 
/* eslint-disable no-new */
var vm = new Vue({ el: "#appBox", router, store, render: h => h(App) })

//用户数据
Vue.prototype.UserInfo = new Vue(user);

//全局注册过滤器
Vue.filter('MoneyToF', function (value) {
    return parseFloat(value).toFixed(2)
})

//比较日期
Vue.filter('CompareDateNow', function (t) {
    return app_g.util.date.CompareDateNow(t)
})

//日期格式化
Vue.filter('DateFormat', function (t, format) {
    if (t == null || t == '') { return '' }
    return app_g.util.date.DateFormat(t, format)
})

//字符串截取
Vue.filter('cutSubString', function (str, len) {
    if (str == null || str == '') { return '' }
    return app_g.util.cutSubString(str, len)
})

//隐藏手机
Vue.filter('getHideMobile', function (t) {
    return app_g.util.getHideMobile(t)
})

FastClick.attach(document.body)

Vue.config.productionTip = false

//加载前弹出加载框
router.beforeEach(function (to, from, next) {
    store.commit('loadingStatus', { isLoading: true })
    sessionStorage.setItem("BackUrl", from.path)
    next()
})

//加载前弹出加载框
router.afterEach(function (to) {
    store.commit('loadingStatus', { isLoading: false })
})