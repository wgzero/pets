<template>
  <div class="main">
    main
    <h1>{{ num }}</h1>
    <h2>{{ age1 }}</h2>
    <h2>{{ handleAge }}</h2>
    <div class="box" :ref="dom">123</div>
    <test></test>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, reactive, ref, toRef, toRefs, watch } from "vue"
// 6.tsx写法 tsx组件
import test from "./components/test"
/** 
defineComponent: 已启用类型推断
0.setup函数入口
1.ref：需要通过.value来进行赋值，但是在html模板中则可以直接写
2.reactive： 通过对象点的方式来赋值
3.toRefs： 在return中将reactive的值打散，在html模板中直接使用值
4.computed:使用场景 
A.就是将已知的数据变成新的数据返回
5.watch:使用场景
A.根据数据的实时变化，做出反应并显示
6.h函数 <==> tsx写法
7.获取dom节点
*/

export default defineComponent({
  name: "test1",
  props: {},
  components: {
    test
  },
  // 0.setup
  setup(){
    // 1.ref
    const age1 = ref(0)
    const age2 = ref(5)
    // 2.reactive
    const state = reactive({
      num: 1
    })
    onMounted(() => {
      age1.value = 10
      state.num = 25
    })

    // 4.computed
    const handleAge = computed(() => {
      return age1.value + age2.value
    })
    // 5.watch
    watch(() => state.num, (newVal, oldVal) => {
      console.log("newVal", newVal)
      console.log("oldVal", oldVal)
    })

    // 7.获取dom节点
    let refs = ""
    const dom = (el: any) => {
      refs = el
    }

    nextTick(() => {
      console.log("refs", refs) // 
    })


    return {
      // 3.toRefs
      ...toRefs(state),
      age1,
      handleAge,
      dom
    }
  }
})
</script>

<style>
.main{
  width: 100%;
  height: 100vh;
  background: #ccc;
}
</style>