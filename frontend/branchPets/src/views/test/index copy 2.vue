<template>
  <div class="main">
    test---
    <h1 @click="handleShow">{{ state.num }}</h1>
    <son-test @handleCancelSon="handleCancalFather" v-if="state.fatherVisiable"></son-test>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import sonTest from "./components/sonTest.vue"
export default defineComponent({
  components: {
    sonTest
  },
  setup(){
    const state = reactive({
      num: 1,
      fatherVisiable: true
    })

  // 消失
    const handleCancalFather = (value: boolean) => {
      state.fatherVisiable = value
    }
    // 显示
    const handleShow = () => {
      state.fatherVisiable = !state.fatherVisiable
    }
    return {
      state,
      handleCancalFather,
      handleShow
    }
  },
})
</script>