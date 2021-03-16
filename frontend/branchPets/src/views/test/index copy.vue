<template>
  <div class="main">
    test
    <!-- <wButton></wButton> -->
  </div>
</template>

<script lang="ts">
// import wButton  from "./components/wButton"
import { defineComponent, getCurrentInstance, onMounted } from "vue"
export default defineComponent({
  name: "",
  props: {},
  component: {
    // wButton
  },
  setup(){
    const { ctx }  = getCurrentInstance() as any
    onMounted(() => {
      console.log("ctx---", ctx)
      ctx.$http()
    })
    return {
      
    }
  }
})
</script>