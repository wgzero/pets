<template>
  <div class="banner">
    <div class="banner-all">
      <div class="banner-info"  v-for="(item, index) of bannerList" :key="index" @click="handleUrl(item)">
        <div><img class="img-cat" :src="item.imgUrl" alt=""></div>
        <div class="banner-name">{{ item.name }}</div>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface bannerArr {
  isShow?: string,
  name: string,
  imgUrl: string
}

export default defineComponent({
  name: 'banner',
  props: {
    bannerList: {
      type: Array as PropType< bannerArr[] >,
      required: true
    }
  },
  components: {
  },
  setup(){
    const handleUrl = (item: any) => {
      console.log("-----", item)
    }

    return {
      handleUrl
    }
  }
})
</script>

<style lang="less" scoped>
@import "@/assets/style/common";
.banner{
  width: 100%;
  // height: 160px;
  background: @paleWhite;
  padding-top: 55px;
  .banner-all{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    .banner-info{
      width: 20%;
      text-align: center;
      margin-top: 7px;
      margin-bottom: 7px;
      .img-cat{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0 2px 6px #999;
      }
      .banner-name{
        font-size: 12px;
        color: #888;
      }
    }
  }
}
</style>
