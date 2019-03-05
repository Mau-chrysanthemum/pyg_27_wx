import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

// 导入axios的配置
import './axios'

const app = new Vue(App)
app.$mount()