<template>
  <div class="main" @click="handleCancel">
    test
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
export default defineComponent({
  name: "",
  // 外面组件要使用的方法
  emits: ["handleCancelSon"],
  setup(props, { emit, attrs }){
    const state = reactive({
      num: 1,
      visiable: false
    })
    // 取消
    const handleCancel = () => {
      // 触发方法并返回值
      emit("handleCancelSon", state.visiable)
    }
    return {
      state,
      handleCancel
    }
  },
})
</script>

<style scoped>
.main{
  width: 100px;
  height: 50px;
  background: red;
  color: white;
  text-align: center;
  line-height: 50px;
}
</style>