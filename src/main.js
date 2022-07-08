import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 挂载全局样式
import './stylesheet/reset.css'
// 挂载element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 挂载页面鉴权
import './permission'
// 导入全局图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus).use(store).use(router).mount('#app')
