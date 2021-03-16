<template>
  <div class="pets-search">
    <div class="pets-search-info">
      <van-search
        v-model="state.value"
        shape="round"
        show-action
        background="#25A5EB"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      >
      </van-search>
    </div>
    <div class="search-record"  v-if="state.historyTitle">
      <div class="search-record-all">
        <div class="search-record-name">历史搜索</div>
        <i class="iconfont iconquxiao record-icon" @click="handleClearRecord"></i>
      </div>
      <div class="search-record-info">
        <div class="search-content" v-for="(item, index) of state.searchList" :key="index">
          <!-- 点击删除 -->
          <!-- <div class="search-delete">
            <div class="search-position" @click="handleDelete(item, index)"><van-icon name="cross" /></div>
          </div> -->
          <div class="search-content-click" @click="handleClickSearch(item)">{{ item }}</div>
        </div>
        <!-- <div class="search-content">小猫</div>
        <div class="search-content">大多数猫</div>
        <div class="search-content">小</div>
        <div class="search-content">小猫</div>
        <div class="search-content">小猫</div>
        <div class="search-content">小猫</div>
        <div class="search-content">小猫</div>
        <div class="search-content">小猫</div>
        <div class="search-content">小猫</div> -->
      </div>
    </div>
    <div class="search-find">
      <div class="search-find-all">
        <div class="search-find-name">搜索发现</div>
        <i class="iconfont iconliulan find-icon"></i>
      </div>
      <div class="search-find-info">
        <div class="find-content">小猫</div>
        <div class="find-content">小猫</div>
        <div class="find-content">小猫</div>
        <div class="find-content">小猫</div>
        <div class="find-content">小猫</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { useRouter } from "vue-router"

export default defineComponent({
  name: 'Search',
  components: {
  },
  setup(props, context){
    const state = reactive({
      value: "",
      searchList: [""],
      historyTitle: true, // 历史搜索是否显示
    })
    const router = useRouter()

    // 数据初始化
    onMounted(() => {
      state.searchList = ["龙虾", "大闸蟹", "666666", "哈哈哈哈哈哈", "123", "summer", "zero"]
    })

    // 搜索
    const onSearch = () => {
      console.log("value0---", state.value)
      state.historyTitle = true
      state.searchList.unshift(state.value)
      state.value = ""
    }

    // 清除记录
    const handleClearRecord = () => {
      state.searchList = []
      state.historyTitle = false
    }

    // 点击删除
    const handleDelete = (item: string, index: number) => {
      state.searchList.splice(index, 1)
      console.log("xxx", item)
    }

    // 取消返回首页
    const onCancel = () => {
      router.push("/home")
    }

    // 点击搜索
    const handleClickSearch = (item: any) => {
      state.value = item
    }

    return {
      state,
      onSearch,
      handleClearRecord,
      handleDelete,
      onCancel,
      handleClickSearch
    }
  }
})
</script>

<style lang="less" scoped>
.pets-search {
    background: #f1f1f1;
    width: 100vw;
    height: 100vh;
    .search-record {
      width: 100%;
      margin-top: 16px;
      .search-record-all {
          display: flex;
          justify-content: space-between;
          padding: 0 12px;
          margin-top: 10px;
          .search-record-name {
              font-size: 16px;
              color: #666;
          }
          .record-icon {
              display: block;
              margin: auto 0;
              color: #999;
          }
      }
      .search-record-info {
          padding: 3px 12px;
          font-size: 12px;
          display: flex;
          flex-wrap: wrap;
          .search-content {
              position: relative;
              padding: 6px 14px;
              background: #e6e6e6;
              border-radius: 5px;
              margin: 10px 10px 5px 0;
              font-size: 12px;
              color: #999;
              position: relative;
              .search-delete {
                  position: absolute;
                  top: -6px;
                  right: -3px;
                  .search-position {
                      width: 10px;
                      height: 10px;
                      text-align: center;
                      line-height: 10px;
                      color: #ccc;
                  }
              }
          }
      }
    }
    .search-find {
      width: 100%;
      margin-top: 16px;
      .search-find-all {
          display: flex;
          justify-content: space-between;
          padding: 0 12px;
          margin-top: 10px;
          .search-find-name {
              font-size: 16px;
              color: #666;
          }
          .find-icon {
              display: block;
              margin: auto 0;
              color: #999;
          }
      }
      .search-find-info {
          padding: 3px 12px;
          font-size: 12px;
          display: flex;
          flex-wrap: wrap;
          .find-content {
              padding: 6px 14px;
              background: #e6e6e6;
              border-radius: 5px;
              margin: 10px 10px 5px 0;
              font-size: 12px;
              color: #999;
          }
      }
    }
}

.pets-search-info ::v-deep .van-search__action{
  color: white;
}
.pets-search-info ::v-deep .van-field__control{
  color: #999;
}
</style>
