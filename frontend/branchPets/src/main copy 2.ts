import { Button } from 'vant'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/button/style'
// 移动端适配
import 'amfe-flexible/index.js'

const app = createApp(App)
app.use(Button)

app.use(store).use(router).mount('#app')
