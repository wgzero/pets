<template>
  <div class="pets-address">
    <div class="address-header">
      <van-nav-bar
        title="收货地址"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="address-body">
      <van-address-list
        v-model="state.chosenAddressId"
        :list="state.list"
        :disabled-list="state.disabledList"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        @add="handleAdd"
        @edit="handleEdit"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from "vue-router"


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
      chosenAddressId: "1",
      list: [{
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
      }],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号',
        },
      ],
    })
    const router = useRouter()
    const onClickLeft = () => {
      router.go(-1)
    }

    // 新增地址
    const handleAdd = () => {
      router.push("addAddress")
    }

    const handleEdit = (item: any, index: number) => {
      router.push({
        path: "editAddress",
        query: {
          list:  JSON.stringify(item)
        }
      })
    }

    return {
      state,
      handleAdd,
      handleEdit, 
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
