import { defineComponent, ref, h, reactive } from "vue"


export default defineComponent({
  setup(){
    const num = ref(5)
    const state = reactive({
      name: "summer"
    })

    return () => h("div", [num.value, "---" ,state.name])
  }
})