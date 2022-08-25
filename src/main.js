import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lib from './lib/index.js'

// 1. 重置样式的库
import 'normalize.css'
// 2. 自己项目的重置样式和公用样式
import '@/assets/styles/common.scss'

createApp(App).use(store).use(router).use(lib).mount('#app')
