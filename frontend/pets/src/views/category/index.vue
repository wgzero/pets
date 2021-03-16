<template>
  <div class="category">
    <div class="category-search">
      <van-search
        v-model="state.value"
        shape="round"
        background="#25A5EB"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        disabled
        @click="handleEnterSearch"
      >
      </van-search>
    </div>
    <div class="category-body">
      <van-tree-select
        v-model:active-id="state.activeId"
        v-model:main-active-index="state.activeIndex"
        :items="state.categoryListLeft"
        height="90vh"
      >
        <template #content>
          <div v-for="(items, indexs) of state.categoryListLeft" :key="indexs">
            <div class="category-one" v-if="state.activeIndex == indexs">
              <div class="category-title">
                动物类型({{ state.categoryListLeft[indexs].text }})
              </div>
              <div class="category-img-name">
                <div class="category-info" v-for="(item, index) of items.list" :key="index" @click="handleEnterDetail(item, index)">
                  <img class="category-img" :src="item.imgUrl" alt="">
                  <div class="category-name">{{ item.animalName }}</div>
                </div>
              </div>
              <div class="category-line"></div>
            </div>
          </div>
          <!-- <div class="category-one" v-if="state.activeIndex == 1">
            222
          </div> -->
        </template>
      </van-tree-select>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import homeFooter from "@/components/footer.vue"
import { useRouter } from "vue-router"
import { getCategoryList } from "@/api/index"

export default defineComponent({
  name: 'category',
  components: {
    homeFooter
  },
  setup(props, context){
    const router = useRouter()
    const state = reactive({
      value: "",
      // categoryListLeft: [{ text: '分组 1', id: 0 }, { text: '分组 2', id: 1 }],
      categoryListLeft: [{}],
      categoryListRight: [{}],
      activeId: 1,
      activeIndex: 0
    })
    const onSearch = () => {
      console.log("666", state.value)
    }

    // 生命周期获取数据
    onMounted(() => {
      getCategoryList().then(res => {
        // console.log("----888", res)
        if(res.code == 200){
          // state.categoryListLeft = res.data
          state.categoryListLeft = []
          res.data.map((item: any, index: any): any => {
            state.categoryListLeft.push({id: item.id, text: item.name, list: item.list })
          })
        }
      })
    })

    // 进入搜索页面
    const handleEnterSearch = () => {
      router.push("/search")
    }

    // 进入详情页
    const handleEnterDetail = (item: any, index: number) => {
      console.log("item-0000", item)
      router.push({
        path: "/categoryDetail",
        query: {
          id: item.id,
          pid: item.pid
        }
      })
    }

    return {
      state,
      onSearch,
      handleEnterSearch,
      handleEnterDetail
    }
  }
})
</script>

<style lang="less" scoped>
@import "@/assets/style/common";
.category{
  width: 100%;
  .category-search{
    width: 100%;
    height: 55px;
    .van-search{
      height: 55px;
    }
  }
  .category-body{
    width: 100%;
    height: 100%;
    .category-one{
      margin-top: 20px;
      .category-title {
          text-align: center;
          font-size: 14px;
          color: #666;
          font-weight: bold;
      }
      .category-img-name {
          display: flex;
          flex-wrap: wrap;
          justify-content: end;
          margin: 10px;
          .category-info {
              width: 24.6%;
              text-align: center;
              margin: 10px 10px;
              border-radius: 5px;
              box-shadow: 0 2px 6px 0 #ccc;
              .category-img {
                  width: 36px;
                  height: 40px;
                  border-radius: 6px;
                  margin-top: 6px;
              }
              .category-name {
                  font-size: 12px;
                  line-height: 20px;
                  color: #666;
              }
          }
      }
      .category-line {
          width: 160px;
          height: 1px;
          background: #f1f1f1;
          margin: 30px auto;
      }
    }
  }
}
.category ::v-deep .van-sidebar-item--select::before {
    background-color: @bgColor;
}
.category ::v-deep .van-tree-select__nav-item {
    text-align: center;
}
.category ::v-deep .van-tree-select__nav {
    flex: none;
    width: 100px;
}
</style>
