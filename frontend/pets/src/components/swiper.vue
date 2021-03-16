<template>
  <div class="swiper">
    <van-swipe :autoplay="3000" indicator-color="#25A5EB">
      <van-swipe-item v-for="(item, index) of swipeList" :key="index">
        <img :src="item.address" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { getBanner } from "@/api/index"

interface listArr {
  address?: string
}

export default defineComponent({
  name: 'swiper',
  props: {
    swipeList: {
      type: Array as PropType< listArr[] >, // 传递数据
      required: true // 必传
    }
  },
  components: {
  }
})
</script>

<style lang="less" scoped>
.swiper{
  width: 100%;
  height: 150px;
  padding-top: 55px;
  box-sizing: border-box;
    img {
      width: 100%;
      height: 150px;
      display: block;
    }
  
}

</style>
