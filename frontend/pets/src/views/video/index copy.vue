<template>
  <div class="pets-video">
    <home-header title="萌 视">
      <template #headerRight>
        <div class="pets-video-right" @click="handleUploadFile">
          视频上传
        </div>
      </template>
    </home-header>
    <div class="pets-video-body">
      <img src="@/assets/imgs/5.jpg" class="pets-video-imgs" alt="">
    </div>
    <div class="pets-video-info">
        <img src="@/assets/imgs/cat.jpg" class="pets-video-info-imgs" alt="">
        <div class="pets-video-one">
          <i class="iconfont icondianzan_active pets-video-icon"></i>
          <div class="pets-video-num">100</div>
        </div>
        <div class="pets-video-one">
          <i class="iconfont icondianzan_active pets-video-icon"></i>
          <div class="pets-video-num">10</div>
        </div>
        <div class="pets-video-one">
          <i class="iconfont icondianzan_active pets-video-icon"></i>
          <div class="pets-video-num">8</div>
        </div>
    </div>
    <div class="pets-video-msg">
      <div class="pets-video-name">@潇潇</div>
      <div class="pets-video-desc">这只阔爱的小猫咪呀,红红火火恍恍惚惚。</div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from "vue-router"
import homeHeader from "@/components/header.vue"
import homeFooter from "@/components/footer.vue"

export default defineComponent({
  name: 'petsVideo',
  components: {
    homeHeader,
    homeFooter
  },
  setup(props, context){
    const router = useRouter()
    const handleUploadFile = () => {
      console.log("video")
      router.push("videoUpload")
    }
    return {
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
