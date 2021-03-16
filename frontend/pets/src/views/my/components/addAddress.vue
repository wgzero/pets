<template>
  <div class="pets-address">
    <div class="address-header">
      <van-nav-bar
        title="新增收货地址"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="address-body">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
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
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from "vue-router"

export default defineComponent({
  name: 'petsAddress',
  components: {
  },
  setup(props, context){
    const state = reactive({
      areaList: areaList,
      searchResult: [{}]
    })
    const router = useRouter()
    const onClickLeft = () => {
      router.go(-1)
    }

    // 保存
    const handleSave = (val: any) => {
      Toast("save")
      console.log("val---", val)
    }
    // 删除
    const handleDelete = () => {
      Toast("delete")
    }
    // 信息
    const handleChangeDetail = (val: any) => {
     if(val){
       state.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          }]
     }else{
       state.searchResult = []
     }
    }


    return {
      // state,
      ...toRefs(state), // 将数据打散
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
