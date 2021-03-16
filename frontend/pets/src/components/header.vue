<template>
  <div class="header">
    <div class="headerLeft">
      <slot name="headerLeft"></slot>
    </div>
    <div class="headerTitle">{{ title }}</div>
    <div class="headerRight">
      <slot name="headerRight"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'header',
  props: {
    title: {
      type: String
    }
  },
  components: {
  }
})
</script>

<style lang="less" scoped>
@import "../assets/style/common";
.header{
  background: @bgColor;
  width: 100%;
  height: @headerHeight;
  position: fixed;
  color: @white;
  z-index: 1000;
  display: flex;
  .headerLeft{
    width: 16%;
    height: 100%;
  }
  .headerTitle{
    width: 68%;
    height: 100%;
    height: 55px;
    font-size: 16px;
    text-align: center;
    line-height: 55px;
  }
  .headerRight{
    width: 16%;
    height: 100%;
  }
}
</style>
