<template>
  <div class="upload">
    <div class="upload-header">
      <van-nav-bar
        title="视频上传"
        @click-left="handleLeft"
        left-arrow
      />
    </div>
    <div class="upload-video">
      <!-- <video src="@/assets/imgs/1.mp4" controls="controls" /> -->
    </div>
    <div class="upload-click">
      <div class="upload-info">
        <van-uploader :after-read="handleUpload"  accept=".mp4"/>
      </div>
      <div class="upload-desc">上传视频</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from "vue-router"

export default defineComponent({
  name: 'uploadFile',
  components: {
  },
  setup(props, context){
    const router = useRouter()
    const handleLeft = () => {
      router.go(-1)
    }

    // 上传视频
    const handleUpload = (file:any) => {
      console.log("file---", file)
    }

    return {
      handleLeft,
      handleUpload
    }
  }
})
</script>

<style lang="less" scoped>
@import "@/assets/style/common";
.upload {
  width: 100%;
  .upload-video {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 30px 0px 50px;
    video{
      width: 90%;
    }
  }
  .upload-click {
    width: 100%;
    .upload-info {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .upload-desc {
        text-align: center;
        font-size: 16px;
        color: #333;
    }
  }
}

.upload-header ::v-deep .van-nav-bar__content {
    background: @bgColor;
}
.upload-header ::v-deep .van-nav-bar__title.van-ellipsis {
    color: @white;
}
.upload-header ::v-deep .van-nav-bar__arrow {
    color: @white;
}

.upload-click ::v-deep .van-uploader__upload {
    width: 100px;
    height: 100px;
    border-radius: 3px;
}

</style>
