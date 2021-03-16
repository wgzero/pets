<template>
  <div class="home">
    <home-header title="宠 萌">
      <template #headerLeft>
        <div class="home-left" @click="handleSearch">搜索</div>
      </template>
      <template #headerRight>
        <div class="home-right" @click="handleChangeArea">深圳</div>
      </template>
    </home-header>
    <!-- 轮播图 -->
    <home-swiper :swipeList="state.swipeList"></home-swiper>
    <!-- 栏目列表 -->
    <home-banner :bannerList="state.bannerList"></home-banner>
    <!-- 中心 -->
    <home-content :showList="state.showList" @handleMore="handleLoadMore"></home-content>
    <home-footer></home-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { useRouter } from "vue-router"
import homeHeader from "@/components/header.vue"
import homeSwiper from "@/components/swiper.vue"
import homeBanner from "./components/banner.vue"
import homeContent from "./components/content.vue"
import homeFooter from "@/components/footer.vue"
import { getBanner, getColumnList, getHomeList } from "@/api/index"
import { Toast } from "vant"


interface moreArr {
  id?: number;
  imgUrl: string;
  desc?: string;
  nickName: string
}

export default defineComponent({
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeBanner,
    homeContent,
    homeFooter
  },
  setup(props, context){
    const router = useRouter()
    // 搜索
    const handleSearch = () => {
      console.log("search")
      router.push("search")
    }
    // 切换地区
    const handleChangeArea = () => {
      router.push("city")
    }
    const state = reactive({
      pageNum: 1,
      pageSize: 6,
      swipeList: [],
      bannerList: [],
      showList: [{}],
      showMore: false // 数据全部显示了
    })

    onMounted(() => {
      getBanner().then(res => {
        if(res.code == 200){
          state.swipeList = res.list
        }
      })
      getColumnList().then(res => {
        if(res.code == 200){
          state.bannerList = res.list
        }
      })
      let data = {
        pageNum: state.pageNum,
        pageSize: state.pageSize
      }
      getHomeList(data).then(res => {
        // console.log("33", res)
        if(res.code == 200){
          state.showList = res.data.list
        }
      })
    })

    // 加载更多
    const handleLoadMore = () => {
      let data = {
        pageNum: ++state.pageNum,
        pageSize: state.pageSize
      }
      getHomeList(data).then(res => {
        // console.log("33", res)
        if(res.data.total == state.showList.length){
          Toast('已显示全部内容');
        }else{
          res.data.list.map((item: any, index: number): any => {
            // console.log("000----", item)
            state.showList.push(item)
          })
        }          
      })
    }

    return {
      state,
      handleSearch,
      handleChangeArea,
      handleLoadMore
    }
  }
})
</script>

<style lang="less" scoped>
@import "@/assets/style/common";
.home{
  width: 100%;
  height: 100%;
  .home-left, .home-right {
    font-size: 12px;
    text-align: center;
    line-height: 55px;
  }

}
</style>
