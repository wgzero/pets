<template>
  <div class="contents">
    <div class="contents-top">
        <div class="contents-header-title">展示图</div>
        <div class="contents-header-enter">
          <i class="iconfont iconyoujiantou"></i>
        </div>
    </div>
    <van-list
      v-model:loading="state.loading"
      :finished="state.finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in state.list" :key="item" :title="item" />
    </van-list>
    <div class="contents-body">
      <div class="contents-img-name">
        <div class="contents-info" v-for="(item, index) of 10" :key="index">
          <img class="contents-img" src="@/assets/imgs/cat.jpg" alt="">
          <p class="contents-name">猫咪</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'Content',
  components: {
  },
  setup(props, context){
    const state = reactive({
      loading: false,
      finished: false,
      list:  new Array()
    })

    const onLoad = () => {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          state.list.push(i + 1);
        }

        // 加载状态结束
        state.loading = false;

        // 数据全部加载完成
        if (state.list.length >= 40) {
          state.finished = true;
        }
      }, 1000);
    }

    return {
      state,
      onLoad
    }
  }
})
</script>

<style lang="less" scoped>
.contents{
  width: 100%;
  box-sizing: border-box;
  .contents-top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    height: 56px;
    line-height: 56px;
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
  }
  .contents-body{
    width: 100%;
    .contents-img-name{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      // margin: 20px;
      box-sizing: border-box;
      .contents-info{
        width: 40%;
        margin-top: 10px;
        .contents-img{
          width: 100%;
          height: 200px;
        }
      }
    }
  }
}
</style>
