<template>
<div class="test">
  <div class="test-top">

  </div>
  <div class="test-body">
    <div class="content">
      <div class="test-desc">
        沙河莎莎是飒飒撒飒飒啊
      </div>
      <div class="test-img">
        <img src="@/assets/imgs/1.jpg" alt="">
      </div>
    </div>
    <div class="content-1">
        <img v-for="(item, index) of 3" :key="index" src="@/assets/imgs/1.jpg" alt="">
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'test',
  components: {
  }
})
</script>

<style lang="less" scoped>
.test-body{
  width: 90%;
  margin: auto;
}
.content .test-img img{
  width: 100%;
}
.content-1 {
    width: 100%;
    display: flex;
    justify-content: space-around;
    img {
        width: 30%;
    }
}
</style>
