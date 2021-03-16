<template>
  <div>
    <router-view/>
    <!-- <div class="float-ball" @mousedown="down" @touchstart="down"
    id="moveDom"
    @mousemove="move" @touchmove="move"
    @mouseup="end" @touchend="end">
      悬浮球
    </div> -->
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
       nx: 0, ny: 0, dx: '', dy: '', xPum: '', yPum: '',
    })

    const down = (event: MouseEvent) => {
      state.flags = true
    }

    const move = (event: any) => {
      if(state.flags){
        let touch: any;
        if(event.touches){
          touch = event.touches[0];
        }else {
          touch = event;
        }

        state.nx = (touch.clientX - state.position.x) as number;
        state.ny = (touch.clientY - state.position.y) as number;
        state.xPum = state.dx+state.nx;
        state.yPum = state.dy+state.ny;
        let moveDom = document.getElementById("moveDom") as HTMLElement
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
        // console.log("state---",  "end")

      state.flags = false
      // console.log("end")
      let moveDom = document.getElementById("moveDom") as HTMLElement
      // 整个页面宽度
      const bodyWidth = document.body.clientWidth
      const bodyHight = window.screen.availHeight
      // 距离左侧的距离
      const leftWidth = moveDom.offsetLeft
      const topHeight = moveDom.offsetTop
      // 获取盒子的宽度
      const boxWidth = moveDom.offsetWidth
      // 大于盒子的宽度显示在里面
      // 小于盒子宽度显示一半
      // 右边
      if(bodyWidth - leftWidth > Math.ceil(boxWidth/2)){
        moveDom.style.left = moveDom.offsetLeft + 'px'
      }else{
        moveDom.style.left = "auto";
        moveDom.style.right = - boxWidth/2 + 'px'
      }
      // 左边
      if(leftWidth > 0){
        moveDom.style.left = moveDom.offsetLeft + 'px'
      }else{
        moveDom.style.right = "auto";
        moveDom.style.left = - boxWidth/2 + 'px'
      }

      // // 上面
      // if(topHeight > 0){
      //   // console.log("1", moveDom.offsetTop, bodyHight, topHeight, window.screen.availHeight)
      //   moveDom.style.top = moveDom.offsetTop + 'px'
      // }else{
      //   moveDom.style.bottom = "auto";
      //   moveDom.style.right = "auto";
      //   moveDom.style.top = - boxWidth/2 + 'px'
      // }
      // // // 下面
      // if(bodyHight -  topHeight > Math.ceil(boxWidth/2)){
      //   moveDom.style.top = moveDom.offsetTop + 'px'
      // }else{
      //   moveDom.style.top = "auto";
      //   moveDom.style.right = "auto";
      //   moveDom.style.bottom = - boxWidth/2 + 'px'
      // }



      // 解决悬浮球在页面中间的问题
      // 在左边
      if(leftWidth > bodyWidth/2){
        //  moveDom.style.right = "auto";
        //  moveDom.style.left = - boxWidth/2 + 'px'
        moveDom.style.left = "auto";
        moveDom.style.right = - boxWidth/2 + 'px'
        // console.log("moveDOm-11", leftWidth, bodyWidth/2)
      }else{
        moveDom.style.right = "auto"
        moveDom.style.left = - boxWidth/2 + "px"
        console.log("moveDOm-22", moveDom)
      }

      
      // if(topHeight < bodyHight / 2){
      //   //  moveDom.style.right = "auto";
      //   moveDom.style.bottom = "auto";
      //   moveDom.style.right = "auto";
      //   moveDom.style.top = - boxWidth/2 + 'px'
      // }else{
      //    moveDom.style.top = "auto";
      //   moveDom.style.right = "auto";
      //   moveDom.style.bottom = - boxWidth/2 + 'px'
      // }


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
