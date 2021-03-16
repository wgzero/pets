import { createApp } from 'vue'
import { Button, Swipe, SwipeItem, List, Cell, Search, TreeSelect, Field, Skeleton,  ActionBar, ActionBarIcon, 
  ActionBarButton, ShareSheet, ActionSheet, NavBar, Uploader, RadioGroup, Radio, Checkbox, CheckboxGroup,
  Stepper, Empty, SwipeCell, Icon, AddressList, AddressEdit, Area, IndexBar, IndexAnchor } from 'vant'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant的css样式
import "vant/lib/index.css"
// 移动端适配
import 'amfe-flexible/index.js'
// 阿里图标库
import "./assets/iconfont/iconfont.css"

// 外部样式 PingFangSC样式库
import "./assets/style/index.css"

const app = createApp(App)
app.use(Button)
app.use(Swipe)
app.use(SwipeItem)
app.use(List)
app.use(Cell)
app.use(Search)
app.use(TreeSelect)
app.use(Field)
app.use(Skeleton)
app.use(ActionBar)
app.use(ActionBarIcon)
app.use(ActionBarButton)
app.use(ShareSheet)
app.use(ActionSheet)
app.use(NavBar)
app.use(Uploader)
app.use(RadioGroup)
app.use(Radio)
app.use(Checkbox)
app.use(CheckboxGroup)
app.use(Stepper)
app.use(Empty)
app.use(SwipeCell)
app.use(Icon)
app.use(AddressList)
app.use(AddressEdit)
app.use(Area)
app.use(IndexBar)
app.use(IndexAnchor)


app.use(store).use(router).mount('#app')
