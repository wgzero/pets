<template>
<div class="about">
  <van-swipe style="height: 100vh;" vertical :show-indicators="false">
    <van-swipe-item v-for="(item, index) of state.listVideo" :key="index">
      <div>
          <video controls autoplay muted loop style="width:100%;">
            <source src="http://localhost:3000/uploads/test.mp4" />
          </video>
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
</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { listVideo } from "./video/list"
export default defineComponent({
  setup() {
    const current = ref(0);
    const state = reactive({
      listVideo
    })
    const onChange = (index: any) => {
      current.value = index;
    };
    return {
      state, 
      current,
      onChange,
    };
  },
})
</script>


<style lang="less" scoped>
.about ::v-deep .van-swipe-item {
    width: 100%;
    height: 100vh;
    // background: #ccc;
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
    padding-top: 320px;
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
      padding-top: 620px;
      margin-left: 20px;
      .pets-video-name {
          font-size: 16px;
      }
      .pets-video-desc {
          font-size: 14px;
          margin-top: 6px;
      }
  }


//   video{
//     position: fixed;//视频定位方式设为固定
//     right: 0;
//     bottom: 0;//视频位置
//     min-width: 100%;
//     min-height: 100%; //不会因视频尺寸造成页面需要滚动
//     width: auto;
//     height: auto; //尺寸保持原视频大小
//     z-index: 99;
//     // z-index: -100; //z轴定位，小于0即可
//     -webkit-filter: grayscale(20%);//添加灰度蒙版，如果设定为100%则视频显示为黑白
// }

video {
    display: block;
    position: fixed;
    z-index: -99;
    right: 0;
    /* bottom: 0; */
    /* top: 0; */
    height: 100vh;
}
</style>