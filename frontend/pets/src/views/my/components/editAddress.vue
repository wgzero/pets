<template>
  <div class="pets-address">
    <div class="address-header">
      <van-nav-bar
        title="编辑收货地址"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="address-body">
      <van-address-edit
        :area-list="state.areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="state.searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="handleSave"
        @delete="handleDelete"
        @change-detail="handleChangeDetail"
      />
    </div>
  </div>
</template>

<script lang="ts">
import areaList from "@/assets/common/area"
import { Toast } from 'vant'
import { defineComponent, onMounted, reactive } from 'vue'
import { useRoute, useRouter } from "vue-router"

interface PropsEdit {
  address: string
  id: number
  isDefault: boolean
  name: string
  tel: string
}

export default defineComponent({
  name: 'petsAddress',
  components: {
  },
  setup(props, context){
    const state = reactive({
      areaList,
      // searchResult: [{}],
      searchResult: [{}],
      getData: {}
    })
    // 获取url参数
    const route = useRoute()
    // 地址跳转
    const router = useRouter()
    // 数据初始化
    onMounted(() => {
      // as类型断言
      let res = JSON.parse(route.query.list as any)
      console.log("res---", res)
      // state.searchResult.id = res.id
      // state.searchResult.address = res.address
      // state.searchResult.name = res.name
      // state.searchResult.tel = res.tel
      // state.searchResult.isDefault = res.isDefault
      // console.log("-====", state.searchResult)
      // state.getData = res
      // console.log("999----", state.getData.id)
      // state.searchResult = route.query ? route.query.list : ""
      // state.searchResult = JSON.parse(res)
      // let obj = route.query? route.query.list : ""
      // let res = JSON.parse(obj)
      
      // console.log("xxx--555", res)
      // console.log("xx---", JSON.parse(route.query.list))
    })
    const onClickLeft = () => {
      router.go(-1)
    }

    // 保存
    const handleSave = (val: any) => {
      console.log("svae---", val)
      Toast("save")
    }
    // 删除
    const handleDelete = () => {
      Toast("delete")
    }
    // 信息
    const handleChangeDetail = (val: any) => {
      console.log("000----", val)
     if(val){
       state.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          }]
     }else{
       state.searchResult = [{}]
     }
    }


    return {
      state,
      handleSave,
      handleDelete,
      handleChangeDetail,
      onClickLeft
    }
  }

})
</script>

<style lang="less" scoped>
.pets-address {
    width: 100%;
    height: 100vh;
    background: #f1f1f1;
}

.address-header ::v-deep .van-nav-bar__content {
    background: #25A5EB;
    color: white;
}
.address-header ::v-deep .van-nav-bar__arrow {
    color: white;
}
.address-header ::v-deep .van-nav-bar__title {
    background: #25A5EB;
    color: white;
}
.pets-address ::v-deep .van-address-item .van-radio__icon--checked .van-icon {
    background-color: #1989fa;
    border-color: #1989fa;
}
.pets-address ::v-deep .van-tag--danger{
  background-color: #1989fa;
}
.pets-address ::v-deep .van-address-list__bottom{
  background-color: #f1f1f1;
}
.pets-address ::v-deep .van-button--danger{
  background-color: #1989fa;
  border: 1px solid #1989fa;
}
</style>
