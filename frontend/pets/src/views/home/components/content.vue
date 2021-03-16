<template>
  <div class="contents">
    <div class="contents-top">
        <div class="contents-header-title">展示图</div>
        <div class="contents-header-enter">
          <i class="iconfont iconyoujiantou enterIcon"></i>
        </div>
    </div>
    <div class="contents-body">
      <!-- <van-skeleton title avatar :row="3" :loading="loading"> -->
      <van-skeleton :loading="state.loading" :row="6">
        <div class="contents-img-name">
            <div class="contents-info" v-for="(item, index) of showList" :key="index" @click="handleEnter(item, index)">
              <img class="contents-img" :src="item.imgUrl" alt="">
              <div class="contents-name">{{ item.nickName }}</div>
            </div>        
        </div>
      </van-skeleton>
    </div>
    <div class="load-more">
      <div class="contents-load-more" @click="handleLoadMore">
        加载更多
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive } from 'vue'
import { useRouter } from "vue-router"

interface showArr {
  id?: number;
  imgUrl: string;
  desc?: string;
  nickName: string
}

export default defineComponent({
  name: 'Content',
  props: {
    showList: {
      type: Array as PropType<showArr[]>,
      required: true
    }
  },
  emits: ["handleMore"],
  components: {
  },
  setup(props, context){
    const state = reactive({
      loading: true
    })
    const router = useRouter()
    const handleEnter = (item: any, index: number) => {
      router.push({
        path: "/homeDetail",
        query: {
          id: item.id
        }
      })
    }

    onMounted(() => {
      state.loading = false
    })
    

    const handleLoadMore = () => {
      context.emit("handleMore")
      // console.log("handleLoadMore----")
    }
    return {
      state,
      handleLoadMore,
      handleEnter
    }
  }
})
</script>

<style lang="less" scoped>
@import "../../../assets/style/common";
.contents{
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 90px;
  background: @paleWhite;
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
    background: @white;
    .enterIcon{
      color: #999;
    }
  }
  .contents-body{
    width: 100%;
    background: @paleWhite;
    .contents-img-name{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding-bottom: 18px;
      // margin: 20px;
      box-sizing: border-box;
      .contents-info{
        width: 32%;
        margin-top: 18px;
        padding: 12px 16px;
        border: 1px solid red;
        border-radius: 10px;
        box-shadow:@boxShadow;
        border: @borderColor;
        background: white;
        .contents-img{
          width: 100%;
          height: 160px;
          border-radius: 10px;
        }
        .contents-name{
          line-height: 30px;
          text-align: center;
          font-size: 12px;
          color: @fontColor;
        }
      }
    }
  }
  .load-more{
    background: @paleWhite;
    .contents-load-more{
      background: @bgColor;
      width: 86%;
      text-align: center;
      height: 42px;
      margin: 10px auto;
      line-height: 42px;
      font-size: 14px;
      border-radius: 25px;
      color: @white;
    }
  }
}
</style>
