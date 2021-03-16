<template>
  <div class="cart">
    <home-header title="购物车"></home-header>
    <div class="cart-body">
      <div class="cart-body-data" v-for="(item, index) of state.shopList" :key="index">
        <div class="cart-info">
          <div class="cart-top">
            <div class="cart-left">
              <div class="cart-group">
                <van-checkbox-group v-model="state.radio" ref="selectDom" @click="handleSelect(index+1, item.money)">
                  <van-checkbox :name="index+1"></van-checkbox>
                </van-checkbox-group>
              </div>
              <div class="cart-shop-name">商品名字<i class="iconfont iconyoujiantou"></i></div>
            </div>
            <div class="cart-coupi">领券信息</div>
          </div>
        </div>
        <div class="cart-list">
          <div class="cart-list-tag">
            <div class="cart-list-data">
              <!-- <div class="cart-group">
                <van-checkbox-group v-model="state.radio">
                  <van-checkbox name="1"></van-checkbox>
                </van-checkbox-group>
              </div> -->
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
                <van-stepper v-model="state.num" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-footer">
      <div class="cart-select">
        <div class="cart-select-left">
          <van-checkbox v-model="state.checked" checked-color="#25A5EB" @click="handleSelectAll">全选</van-checkbox>
        </div>
        <div class="cart-select-right">
          <div class="cart-select-money">合计: ￥ 123</div>
          <div class="cart-pay">结算(123)</div>
        </div>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRef } from 'vue'
import homeHeader from "@/components/header.vue"
import homeFooter from "@/components/footer.vue"
import { shopList } from "./list"

export default defineComponent({
  name: 'cart',
  components: {
    homeHeader,
    homeFooter
  },
  setup(props, context){
    const selectDom = ref(null) 
    const state = reactive({
      radio: [0],
      num: 1,
      checked: false,
      shopList,
      totalMoney: 0,
    })

    onMounted(() => {
      state.shopList = shopList
    })

    // 单选
    const handleSelect = (val: any) => {
      console.log("xx-000", val)
    }

    // 全选&全不选
    const handleSelectAll = () => {
      // state.test.toggleAll(true)
      // toRef("selectDom").checkboxGroup.toggleAll(true)
    }


    return {
      state,
      handleSelect,
      handleSelectAll,
      selectDom
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
                align-items: center;
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
</style>
