<template>
  <div class="pets-video">
    <home-header title="萌 视">
      <template #headerRight>
        <div class="pets-video-right" @click="handleUploadFile">
          视频上传
        </div>
      </template>
    </home-header>
    <van-swipe style="height: 100vh;" vertical :show-indicators="true">
      <!-- <van-swipe-item v-for="(item, index) of 5" :key="index"> -->
      <van-swipe-item v-for="(item, index) of state.listVideo" :key="index">
        <div>
          <div class="pets-video-body">
            <img src="@/assets/imgs/5.jpg" class="pets-video-imgs" alt="">
          </div>
          <div class="pets-video-info">
              <img :src="item.img" class="pets-video-info-imgs" alt="">
              <div class="pets-video-one">
                <i class="iconfont icondianzan_active pets-video-icon"></i>
                <div class="pets-video-num">{{ item.starNum }}</div>
              </div>
              <div class="pets-video-one">
                <i class="iconfont icondianzan_active pets-video-icon"></i>
                <div class="pets-video-num">{{ item.commentNum }}</div>
              </div>
              <div class="pets-video-one">
                <i class="iconfont icondianzan_active pets-video-icon"></i>
                <div class="pets-video-num">{{ item.shareNum }}</div>
              </div>
          </div>
          <div class="pets-video-msg">
            <div class="pets-video-name">{{ item.nickName }}</div>
            <div class="pets-video-desc">{{ item.desc }}</div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
    <home-footer></home-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from "vue-router"
import homeHeader from "@/components/header.vue"
import homeFooter from "@/components/footer.vue"

import { listVideo } from "./list"

export default defineComponent({
  name: 'petsVideo',
  components: {
    homeHeader,
    homeFooter
  },
  setup(props, context){
    const state = reactive({
      listVideo
    })
    const router = useRouter()
    const handleUploadFile = () => {
      console.log("video")
      router.push("videoUpload")
    }
    return {
      state,
      handleUploadFile
    }
  }
})
</script>

<style lang="less" scoped>
.pets-video{
  .pets-video-right {
      font-size: 12px;
      line-height: 55px;
  }
  .pets-video-body{
    padding-top: 55px;
    .pets-video-imgs {
        display: block;
        height: 86vh;
        width: 100%;
    }
  }
  .pets-video-info {
      position: fixed;
      bottom: 160px;
      right: 10px;
      .pets-video-info-imgs {
          width: 50px;
          height: 50px;
          border-radius: 50%;
      }
      .pets-video-one {
          text-align: center;
          margin-top: 10px;
          color: white;
          .pets-video-icon {
              font-size: 18px;
          }
          .pets-video-num {
              margin-top: 3px;
              font-size: 16px;
          }
      }
  }
  .pets-video-msg {
      position: fixed;
      bottom: 100px;
      color: white;
      left: 20px;
      .pets-video-name {
          font-size: 16px;
      }
      .pets-video-desc {
          font-size: 14px;
          margin-top: 6px;
      }
  }
}
</style>
