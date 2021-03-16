<template>
  <div class="city">
    <!-- <div>{{ state.city }}</div> -->
    <!-- 最近定位 -->
    <div class="city-pos">
      <div class="city-top">定位/最近访问</div>
      <div class="city-name">深圳</div>
    </div>
    <!-- 热门城市 -->
    <div class="city-hot">
      <div class="city-hot-top">热门城市</div>
      <div class="city-all">
        <div class="city-title" v-for="(item, index) of 9">上海</div>
      </div>
    </div>
    <van-index-bar>
      <van-index-anchor v-for="(item, index) in state.city.city" :index="item.initial" :key="index" :sticky="false">
        <div class="indexWord">{{ item.initial }}</div>
        <van-cell 
          v-for="(citem, cindex) in item.list"
          :title="citem.name"
          @click="handleSelectCity(citem)"
          :key="cindex" />
          <!-- <div>{{ item.list }}</div> -->
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
// import city from "../../assets/common/city.json"
const city = require("../../assets/common/city.json")

export default defineComponent({
  name: 'City',
  components: {
  },
  setup(){
    const state = reactive({
      city
    })

    onMounted(() => {
      console.log("---", state.city.city)
    })

    const handleSelectCity = (item: any) => {
      console.log("change", item)
    }

    return {
      state,
      handleSelectCity
    }
  }
})
</script>

<style lang="less" scoped>
.city {
    width: 100%;
    height: 100vh;
    background: #f6f6f6;
    .city-pos {
        width: 90%;
        margin: auto;
        padding-bottom: 5px;
        .city-top {
            font-size: 12px;
            padding: 10px 0;
        }
        .city-name {
            width: 31%;
            text-align: center;
            font-size: 13px;
            height: 36px;
            background: white;
            line-height: 36px;
            color: #666;
            border-radius: 5px;
        }
    }
    .city-hot {
        width: 90%;
        margin: auto;
        .city-hot-top {
            font-size: 12px;
            padding: 10px 0;
        }
        .city-all {
            display: flex;
            width: 100%;
            justify-content: space-between;
            flex-wrap: wrap;
            .city-title {
                width: 31%;
                display: flex;
                height: 36px;
                background: white;
                font-size: 13px;
                line-height: 36px;
                justify-content: center;
                margin-bottom: 10px;
                border-radius: 5px;
                color: #666;
            }
        }
    }
}

.city ::v-deep .van-index-anchor--sticky {
    color: #25A5EB;
}
.city ::v-deep .van-index-bar__index--active {
    color: #25A5EB;
}
.indexWord {
    padding: 0.1rem 0.42667rem;
    // background: #eee;
}
</style>
