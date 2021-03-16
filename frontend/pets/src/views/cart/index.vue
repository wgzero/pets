<template>
  <div class="cart">
    <home-header title="购物车"></home-header>
    <div class="cart-body">
      <div class="cart-body-data" v-if="state.shopList.length" v-for="(item, index) of state.shopList" :key="index">
        <van-swipe-cell>
          <div class="cart-info">
          <div class="cart-top">
            <div class="cart-left">
              <div class="cart-group">
                <van-checkbox v-model="item.checked" @change="handleSelect(item, item.num)"></van-checkbox>
              </div>
              <div class="cart-shop-name">商品名字<i class="iconfont iconyoujiantou"></i></div>
            </div>
            <div class="cart-coupi">领券信息</div>
          </div>
        </div>
        <div class="cart-list">
          <div class="cart-list-tag">
            <div class="cart-list-data">
              <div class="cart-mid">
                <img src="@/assets/imgs/cat.jpg" alt="">
                <div class="cart-mid-all">
                  <div class="cart-mid-desc">{{ item.name }}</div>
                  <div class="cart-mid-info">{{ item.desc }}</div>
                  <div class="cart-mid-money">￥{{ item.money }}</div>
                </div>
              </div>
            </div>
            <div class="cart-num">
                <van-stepper v-model="item.num" @change="handleAddOrRed(item.num, item.money)" />
            </div>
          </div>
        </div>
          <template #right>
            <van-button square type="danger" text="删除" @click="handleDelete(index)" />
          </template>
        </van-swipe-cell>
      </div>
      <div class="cart-body-no-data" v-else>
        <van-empty image="http://www.wgzero.com/resource/img/empty-cart.png" description="暂无商品" />
      </div>
    </div>
    <div class="cart-footer" v-if="state.shopList.length">
      <div class="cart-select">
        <div class="cart-select-left">
          <van-checkbox v-model="state.checked" checked-color="#25A5EB" @click="handleSelectAll">全选</van-checkbox>
        </div>
        <div class="cart-select-right">
          <div class="cart-select-money">合计: ￥ {{ state.totalMoney }}</div>
          <div class="cart-pay">结算({{ state.account }})</div>
        </div>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRef } from 'vue'
import { useStore } from "vuex"
import homeHeader from "@/components/header.vue"
import homeFooter from "@/components/footer.vue"
import { shopList } from "./list"
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'cart',
  components: {
    homeHeader,
    homeFooter
  },
  setup(props, context){
    const store = useStore()
    const selectDom = ref(null) 
    const state = reactive({
      radio: [],
      num: 1,
      checked: false,
      shopList,
      totalMoney: 0,
      checkList: false,
      account: 0,
      // isArr: [], // 添加是否选中
    })

    onMounted(() => {
      // state.shopList = shopList
      console.log("store---", store.state.shopList)
      state.shopList = store.state.shopList
      console.log("0-9999", state.shopList)
    })

    // 单选
    const handleSelect = (x: any, y: number) => {
      // 选中的数据
      let arr: any = []
      // 金钱数据
      let moneyList: any = []
      state.shopList.map((item, inex) => {
        if(item.checked == true){
          moneyList.push(item)
          arr.push(item.checked)
        }
      })
      state.totalMoney = 0
      moneyList.map((item: any, index: number) => {
        if(item.checked){
          state.totalMoney += item.money * item.num
        }
      })
      // 结算
      state.account = arr.length

      // 判断单个全部选上就全选
      state.shopList.map((item, inex) => {
        // 判断每一个选中是否为true 以及商品数量的长度是否等于选中数量的长度
        if(item.checked == true && state.shopList.length == arr.length){
          state.checked = true
        }else{
          state.checked = false
        }
      })
    }

    // 全选&全不选
    const handleSelectAll = () => {
      // 遍历循环每一件商品， 如果点击全选，则全部设置为全选 如果点击反选，则全部设置为未选
      state.shopList.map((item: any, index: any) => {
        if(state.checked == true){
          item.checked = true
        }else{
          item.checked = false
        }
      })
    }


    // 加减数量
    const handleAddOrRed = (val: number, money: any) => {
      let total: any = []
      state.shopList.map((item: any, index: number) => {
        if(item.checked){
          let money = item.money * val
          total.push(money)
        }
      })
      state.totalMoney = 0
      total.map((item: any, index: number) => {
        state.totalMoney += item
      })
      console.log("totaol---", total)
    }

    // 删除
    const handleDelete = (index: number) => {
      state.shopList.splice(index, 1)
      let arr: any = []
      let moneyList: any = []
      state.shopList.map((item, inex) => {
        if(item.checked == true){
          moneyList.push(item)
          arr.push(item.checked)
        }
      })
      // 将金额清空
      state.totalMoney = 0
      moneyList.map((item: any, index: number) => {
        if(item.checked){
          state.totalMoney += item.money * item.num
        }
      })
      // 结算
      state.account = arr.length
    }

    return {
      state,
      handleSelect,
      handleSelectAll,
      selectDom,
      handleAddOrRed,
      handleDelete
    }
  }

})
</script>

<style lang="less" scoped>
@import "@/assets/style/common";
.cart{
  with: 100%;
  .cart-body {
    padding-top: 55px;
    padding-bottom: 140px;
    width: 100%;
    .cart-info {
        width: 100%;
        .cart-top {
            width: 90%;
            display: flex;
            font-size: 14px;
            margin: 0 auto;
            line-height: 42px;
            border-bottom: 1px dashed #eee;
            justify-content: space-between;
            color: #666;
            .cart-left {
                display: flex;
                .cart-shop-name {
                    margin-left: 10px;
                }
            }
        }
    }
    .cart-list {
        width: 100%;
        border-bottom: 1px solid #eee;
        font-size: 16px;
        .cart-list-tag {
            width: 90%;
            margin: auto;
            display: flex;
            padding: 16px 0;
            justify-content: space-between;
            .cart-list-data {
                display: flex;
                flex: 1;
            }
            .cart-group {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .cart-mid {
                display: flex;
                align-items: center;
                img {
                    width: 80px;
                    height: 80px;
                    border-radius: 5px;
                    display: block;
                    margin-left: 10px;
                    margin-right: 10px;
                }
                .cart-mid-info {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    padding-right: 6px;
                    font-size: 12px;
                    color: #666;
                }
                .cart-mid-money {
                    font-size: 12px;
                    color: @bgColor;
                }
            }
            // 数量加减
            .cart-num {
                display: flex;
                justify-content: center;
                align-items: flex-end;
            }
        }
    }
  }
  .cart-footer {
    width: 100%;
    height: 50px;
    position: fixed;
    background: #25A5EBcc;
    bottom: 56px;
    .cart-select {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: auto;
        font-size: 14px;
        color: white;
        .cart-select-left {
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .cart-select-right {
            display: flex;
            align-items: center;
            .cart-select-money {
                margin-right: 10px;
            }
            .cart-pay {
                padding: 2px 5px;
                background: #eb5454;
                border-radius: 3px;
            }
        }
    }
  }
}

.cart-left ::v-deep .cart-group {
    display: flex;
    justify-content: center;
    align-items: center;
}
.cart-select-left ::v-deep .van-icon{
  border: 1px solid white
}
.cart-select-left ::v-deep .van-checkbox__label{
  color: white;
}
.cart-body-data ::v-deep .van-swipe-cell__right {
    height: 100%;
    display: flex;
    align-items: center;
}
.cart-body-data ::v-deep .van-button--danger {
    color: #fff;
    background-color: #25A5EB;
    border: 0.02667rem solid #25A5EB;
}
</style>
