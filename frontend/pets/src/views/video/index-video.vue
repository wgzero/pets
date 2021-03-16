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
        <h1>{{ state.listVideo }}</h1>
        <!-- <div class="pets-start" @dblclick.native="handleStarVideo(item)"> -->
        <div class="pets-start" @click.stop="handlePlay(item)">
          <!-- <video controls autoplay muted loop style="width:100%;"> -->
          <!-- <video id="video" autoplay muted loop style="width:100%;">
            <source :src="item.videoUrl" />
          </video> -->
          <video-player  class="video-player-box"
                 :ref="videoPlayer1"
                 :options="state.playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"
 
                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)">
          </video-player>
          <div class="pets-video-info">
              <div class="pets-video-msg">
                <div class="pets-list">
                  <div class="pets-video-name">@{{ item.author }}</div>
                  <div class="pets-video-desc">{{ item.content }}</div>
                </div>
              </div>
              <div class="pets-all-infos">
                <img :src="item.imgUrl" class="pets-video-info-imgs" alt="">
                <div class="pets-video-one" @click.stop="handleStar(item)">
                  <i class="iconfont icondianzan_active pets-video-icon"></i>
                  <div class="pets-video-num">{{ item.starNum }}</div>
                </div>
                <div class="pets-video-one" @click.stop="handleComment">
                  <i class="iconfont iconpinglun pets-video-icon"></i>
                  <div class="pets-video-num">{{ item.commentNum }}</div>
                </div>
                <div class="pets-video-one" @click.stop="handleShare">
                  <i class="iconfont iconfenxiang1 pets-video-icon"></i>
                  <div class="pets-video-num">{{ item.shareNum }}</div>
                </div>
              </div>
          </div>
          
        </div>
      </van-swipe-item>
    </van-swipe>
    <home-footer></home-footer>
  </div>
</template>

<script lang="ts">
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import { computed, defineComponent, onMounted, reactive } from 'vue'
import { useRouter } from "vue-router"
import homeHeader from "@/components/header.vue"
import homeFooter from "@/components/footer.vue"
import { getVideoList, setVideoDetail } from "../../api/index"

// import { listVideo } from "./list"

export default defineComponent({
  name: 'petsVideo',
  components: {
    homeHeader,
    homeFooter,
    videoPlayer
  },
  setup(props, context){
    const state = reactive({
      listVideo: [{}],
      playerOptions: {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "/static/images/author.jpg",
        },
      videoPlayer: ""
    })

    // 初始化数据
    onMounted(() => {
      // 播放视频
      player()

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

    const videoPlayer1 = (e: any) => {
      state.videoPlayer = e
    }

    const player: any = computed(() => {
        return videoPlayer1

    // 是否播放视频
    const handlePlay = (item: any) => {
      const video1 = document.getElementById("video") as HTMLVideoElement
      // video1.muted = false
      console.log("video1--", video1, video1.paused)
      const isPlay = !video1.paused
      // video1.pause()
       if(video1.paused){
        // video1.play()
          video1.play();
          console.log("111")
      }else{
        video1.pause()
          console.log("222")
      }
      // if(video1.paused || video1.ended){
      //   // video1.play()
      //   setTimeout(() => {
		  //     video1.play();
		  //   }, 200)
      // }else{
      //   video1.pause()
      // }
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
    // 双击给视频点赞
    const handleStarVideo = (item: any) => {
      console.log("dbclick", item)
    }

    const onPlayerPlay = (player: any) => {
        console.log('player play!', player)
      }
    const onPlayerPause = (player: any) => {
        console.log('player pause!', player)
      }

    return {
      state,
      handleUploadFile,
      handleStar,
      handleComment,
      handleShare,
      handlePlay,
      handleStarVideo,
      videoPlayer1,
      onPlayerPlay,
      onPlayerPause
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
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      font-size: 12px;
      .pets-video-name {
          width: 100%;
          font-size: 16px;
      }
      .pets-video-desc {
          width: 100%;
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

.pets-start {
    width: 100%;
    height: 100%;
}

.pets-video .pets-video-info {
    height: 100%;
    display: flex;
}

.pets-video .pets-video-msg {
    color: white;
    width: 80%;
    display: flex;
    align-items: flex-end;
    padding-bottom: 100px;
    flex-wrap: wrap;
}
.pets-all-infos {
    margin: auto;
    width: 20%;
    text-align: center;
    padding-top: 50px;
}
.pets-list {
    padding-left: 20px;
}
</style>
