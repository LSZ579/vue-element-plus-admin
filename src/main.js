import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
import '@/router/permission'
import SvgIcon from '@/components/SvgIcon'
// main.js
import { Expand, ChatRound, ArrowDown, CaretBottom, Close, RefreshLeft } from '@element-plus/icons-vue'
import '@/icons'// svg component
window.onerror = function (message, source, lineno, colno, error) {
  console.log(message, source, lineno, colno, error)
} // icon
const app = createApp(App)
// 第一个参数传入的组件名即是之后调用时使用的组件名
// 此处组件名格式参照的时官方文档中icon部分的用例格式
app.component('expand', Expand)
  .component('chat-round', ChatRound)
  .component('arrow-down', ArrowDown)
  .component('caret-bottom', CaretBottom)
  .component('close', Close)
  .component('refresh-left', RefreshLeft)

// if (process.env.NODE_ENV === 'production') {
const { mockXHR } = require('../mock')
mockXHR()
// }

app.component('svg-icon', SvgIcon)

app.use(ElementPlus).use(router).use(store).mount('#app')
