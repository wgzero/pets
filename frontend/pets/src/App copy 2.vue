<template>
  <div>
    <router-view/>
    <div class="float-ball" @mousedown="down" @touchstart="down"
    id="moveDom"
    @mousemove="move" @touchmove="move"
    @mouseup="end" @touchend="end">
      悬浮球
    </div>
    <!-- <div class="float-ball">
      悬浮球
    </div> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue"
export default defineComponent({
  name: "",
  setup(){
    const state = reactive({
       flags: false,
       position: { x: 0, y: 0 },
       nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '',
    })

    const down = (event: MouseEvent) => {
        // console.log("state---",  "down")

      state.flags = true
      // const touch
      // if(event.touches){
      //   touch = event.touches[0]
      // }else{
      //   event
      // }
      // console.log("down", touch.clientX, touch.clientY)
      // state.position.x = touch.clientX
      // state.position.y = touch.clientY
      // const moveDom = document.getElementById("moveDom")
      // // moveDom.offsetLeft
      // // moveDom.offsetTop
      // // 整个页面宽度
      // const bodyWidth = document.body.clientWidth
      // // 距离左侧的距离
      // const leftWidth = moveDom.offsetLeft
      // // 获取盒子的宽度
      // const boxWidth = moveDom.offsetWidth
      // // 大于盒子的宽度显示在里面
      // // 小于盒子宽度显示一半
      // if(bodyWidth - leftWidth > Math.ceil(boxWidth/2)){
      //   // console.log("1")
      //   state.dx = moveDom.offsetLeft
      //   state.dy = moveDom.offsetTop
      //   moveDom.style.left = "auto";
      // }else{
      //   // console.log("2")
      //    moveDom.style.left = "auto";
      //     moveDom.style.right = - boxWidth/2 + 'px'
      // }

      
      // console.log("down", moveDom.offsetWidth, moveDom.offsetHeight)
      // console.log("width", bodyWidth,  leftWidth, boxWidth, Math.floor(boxWidth/2))
    }

    const move = (event: MouseEvent) => {
      if(state.flags){
        const touch ;
        if(event.touches){
          touch = event.touches[0];
        }else {
          touch = event;
        }
        


        state.nx = touch.clientX - state.position.x;
        state.ny = touch.clientY - state.position.y;
        state.xPum = state.dx+state.nx;
        state.yPum = state.dy+state.ny;
        console.log("state---",  "move")
        const moveDom = document.getElementById("moveDom")
        moveDom.style.left = state.xPum +"px";
        moveDom.style.top = state.yPum +"px";
        moveDom.style.background = "#ccc";
        moveDom.style.color = "red";
          //阻止页面的滑动默认事件；如果碰到滑动问题，1.2 请注意是否获取到 touchmove
        // document.addEventListener("touchmove",function(){
        //   event.preventDefault();
        // },false);
      }
    }
    // 鼠标释放时候的函数
    const end = () => {
        console.log("state---",  "end")

      state.flags = false
      // console.log("end")
      const moveDom = document.getElementById("moveDom")
      // 整个页面宽度
      const bodyWidth = document.body.clientWidth
      // 距离左侧的距离
      const leftWidth = moveDom.offsetLeft
      // 获取盒子的宽度
      const boxWidth = moveDom.offsetWidth
      // 大于盒子的宽度显示在里面
      // 小于盒子宽度显示一半
      if(bodyWidth - leftWidth > Math.ceil(boxWidth/2)){
        console.log("1")
        // state.dx = -boxWidth/2
        // state.dy = moveDom.offsetTop
        // moveDom.style.left = 
        moveDom.style.left = moveDom.offsetLeft + 'px'
      // console.log("111----", moveDom.style.left)
        
      }else{
        console.log("2")
        // state.dx = -boxWidth/2
        moveDom.style.left = "auto";
        moveDom.style.right = - boxWidth/2 + 'px'
        console.log("111----", moveDom.style.left)
      }

      // console.log("----", moveDom.style.right)
      moveDom.style.background = "red";
      moveDom.style.color = "white";
    }
    return {
      down,
      move,
      end
    }
  }
})
</script>

<style lang="less">
body{
  max-width: 640px;
}
.float-ball{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: red;
  position: fixed;
  right: 0;
  top: 100px;
  color: white;
  right: -30px;
  font-size: 16px;
  line-height: 60px;
  text-align: center;
  z-index: 1000;
  // &:hover{
  //   background: blue;
  //   color: black;
  //   z-index: 100;
  // }
}
</style>
