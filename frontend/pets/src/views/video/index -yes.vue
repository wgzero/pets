<template>
  <div class="pets-video">
    <!-- <van-nav-bar
      title="萌 视"
      right-text="视频上传"
      @click-right="handleUploadFile"
    /> -->
    <home-header title="萌 视">
      <template #headerRight>
        <div class="pets-video-right" @click="handleUploadFile">
          视频上传
        </div>
      </template>
    </home-header>
    <van-swipe style="height: 100vh;" vertical :show-indicators="false">
      <!-- <van-swipe-item v-for="(item, index) of 5" :key="index"> -->
      <van-swipe-item v-for="(item, index) of state.listVideo" :key="index">
        <div @click="handlePlay(item)">
          <!-- <video controls autoplay muted loop style="width:100%;"> -->
          <video id="video" autoplay muted loop style="width:100%;">
            <source :src="item.videoUrl" />
          </video>
          <div class="pets-video-info">
              <img :src="item.imgUrl" class="pets-video-info-imgs" alt="">
              <div class="pets-video-one" @click="handleStar(item)">
                <i class="iconfont icondianzan_active pets-video-icon"></i>
                <div class="pets-video-num">{{ item.starNum }}</div>
              </div>
              <div class="pets-video-one" @click="handleComment">
                <i class="iconfont iconpinglun pets-video-icon"></i>
                <div class="pets-video-num">{{ item.commentNum }}</div>
              </div>
              <div class="pets-video-one" @click="handleShare">
                <i class="iconfont iconfenxiang1 pets-video-icon"></i>
                <div class="pets-video-num">{{ item.shareNum }}</div>
              </div>
          </div>
          <div class="pets-video-msg">
            <div class="pets-video-name">@{{ item.author }}</div>
            <div class="pets-video-desc">{{ item.content }}</div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
    <home-footer></home-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { useRouter } from "vue-router"
import homeHeader from "@/components/header.vue"
import homeFooter from "@/components/footer.vue"
import { getVideoList, setVideoDetail } from "../../api/index"

// import { listVideo } from "./list"

export default defineComponent({
  name: 'petsVideo',
  components: {
    homeHeader,
    homeFooter
  },
  setup(props, context){
    const state = reactive({
      listVideo: [{}]
    })

    // 初始化数据
    onMounted(() => {
      let data = {
        pageNum: 1,
        pageSize: 10
      }
      getVideoList(data).then(res => {
        console.log("res---video", res)
        if(res.code === 200){
          state.listVideo =  res.data.list

        }

      })
    })

    // 是否播放视频
    const handlePlay = (item: any) => {
      const video1 = document.getElementById("video") as HTMLVideoElement
      console.log("video1--", video1)
      // video1.pause()
      if(video1.paused || video1.ended){
        // video1.play()
        setTimeout(() => {
		      video1.play();
		    }, 200)
      }else{
        video1.pause()
      }
    }

    const router = useRouter()
    const handleUploadFile = () => {
      console.log("video")
      router.push("videoUpload")
    }
    // 点赞
    const handleStar = (item: any) => {
      console.log("star", item)
    }
    // 评论
    const handleComment = () => {
      console.log("comment")
    }
    // 分享
    const handleShare = () => {
      console.log("share")
    }
    return {
      state,
      handleUploadFile,
      handleStar,
      handleComment,
      handleShare,
      handlePlay
    }
  }
})
</script>

<style lang="less" scoped>
.pets-video{
    background: #222;
  .pets-video-right {
      font-size: 12px;
      line-height: 50px;
  }
  .pets-video-body{
    padding-top: 50px;
    .pets-video-imgs {
        display: block;
        height: 86vh;
        width: 100%;
    }
  }
  .pets-video-info {
    padding-top: 260px;
    float: right;
    margin-right: 10px;
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
      color: white;
      padding-top: 540px;
      margin-left: 20px;
      .pets-video-name {
          font-size: 16px;
      }
      .pets-video-desc {
          font-size: 14px;
          margin-top: 6px;
      }
  }
}

video {
    display: block;
    position: fixed;
    z-index: -99;
    right: 0;
    height: 100vh;
}
</style>
