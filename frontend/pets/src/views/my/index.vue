<template>
  <div class="my">
    <home-header title="个人中心">
      <template #headerRight>
        <div class="my-header">
          <i class="iconfont iconshezhi my-header-icon"></i>
        </div>
      </template>
    </home-header>
    <div class="my-show">
      <div class="my-info">
        <img src="@/assets/imgs/cat.jpg" alt="">
        <div class="my-info-right">
          <div class="my-name">沐沐</div>
          <div class="my-des">人生本就是一场修行</div>
        </div>
      </div>
    </div>
    <div class="my-list">
      <div class="my-list-info" v-for="(item, index) of state.bannerList" :key="index" @click="handleInfo(item, index)">
        <i class="iconfont" :class="item.icon"></i>
        <div class="my-list-name">{{ item.name }}</div>
      </div>
    </div>
    <div class="my-list-enter">
      <div class="my-list-all" v-for="(item, index) of state.listData" @click="handleEnter(item, index)">
        <div class="my-list-left">
          <i class="iconfont my-list-left-icon" :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </div>
        <i class="iconfont iconyoujiantou my-list-icon"></i>
      </div>
    </div>
    <div class="my-exit-login">
      <div v-if="state.isLogin == 1" class="my-exit" @click="handleEnterLogin">
        未登录
      </div>
      <div v-else class="my-exit" @click="handleExitLogin">
        退出登录
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import homeHeader from "@/components/header.vue"
import homeFooter from "@/components/footer.vue"
import { getBanner } from "@/api/index"
import { listData, bannerList } from "./list"

import { GlobalDataProps } from "../../store/index"
import { Toast } from 'vant'

export default defineComponent({
  name: 'my',
  components: {
    homeHeader,
    homeFooter
  },
  setup(props, context){

    const state = reactive({
      listData,
      bannerList,
      isLogin: 1, // 1 未登录 2 登录
    })

    const store = useStore<GlobalDataProps>()

    const router = useRouter()

    onMounted(() => {
      getBanner().then(res => {
        // console.log("res===", res)
      })
      state.listData = listData
      state.bannerList = bannerList
      // console.log("xxx---", state)
      if(localStorage.getItem("token")){
        state.isLogin = 2
      }else{
        state.isLogin = 1
      }
    })
    // 钱包-进入详情页 3
    const handleInfo = (item: any, index: any) => {
      // console.log("money-item", item.name)
    } 
    // 足迹-进入详情页面
    const handleEnter = (item: any, index: any) => {
      console.log("item", item)
      if(item.id == 7){
        router.push("address")
      }
    } 
    // 退出登录
    const handleExitLogin = () => {
      store.state.token = ""
      localStorage.removeItem("token")
      Toast("退出登录")
      state.isLogin = 1
    }

    // 进入登录
    const handleEnterLogin = () => {
      router.push("login")
    }

    return {
      state,
      handleInfo,
      handleEnter,
      handleEnterLogin,
      handleExitLogin
    }
  }
})
</script>

<style lang="less" scoped>
.my{
  width: 100%;
  .my-header{
    width: 100%;
    .my-header-icon{
      display: block;
      font-size: 20px;
      text-align: center;
      line-height: 55px;
    }
  }
  .my-show {
      padding-top: 55px;
      width: 100%;
      .my-info {
          width: 80%;
          margin: 16px auto 22px;
          border: 1px solid #ccc;
          box-shadow: 0 2px 6px #ccc;
          border-radius: 10px;
          display: flex;
          padding: 16px;
          img {
              width: 100px;
              height: 100px;
              border-radius: 10px;
          }
          .my-info-right {
              margin-left: 14px;
              .my-name {
                  font-size: 20px;
                  margin-top: 6px;
                  color: #333;
              }
              .my-des {
                  font-size: 14px;
                  margin-top: 10px;
                  color: #666;
              }
          }
      }
  }
  .my-list {
      width: 100%;
      display: flex;
      height: 60px;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      .my-list-info {
          width: 33.333%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 1px dashed #eee;
          color: #999;
          .my-list-name {
              font-size: 16px;
              margin-left: 5px;
              color: #666;
          }
      }
  }
  .my-list-enter {
    width: 100%;
    .my-list-all {
        width: 100%;
        display: flex;
        padding: 0 20px;
        box-sizing: border-box;
        justify-content: space-between;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #eee;
        color: #666;
        .my-list-left{
          display: flex;
          .my-list-left-icon {
              font-size: 16px;
          }
          span {
              margin-left: 8px;
              font-size: 16px;
          }
        }
    }
  }
  .my-exit-login {
      width: 100%;
      margin-bottom: 80px;
      .my-exit {
          width: 90%;
          margin: 30px auto 10px;
          border: 1px solid #ccc;
          text-align: center;
          font-size: 14px;
          height: 38px;
          line-height: 38px;
          color: #25a5eb;
          border-radius: 5px;
          box-shadow: 0 2px 6px #ccc;
      }
  }
}
</style>
