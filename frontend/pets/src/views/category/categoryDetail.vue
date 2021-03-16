
<template>
  <div class="categoryDetail">
    <home-header title="详 情">
      <template #headerLeft>
        <div class="headers-left" @click="handleBack">
          <i class="iconfont iconfanhui headers-icon"></i>
        </div>
      </template>
    </home-header>
    <div class="category-swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item @click="handlePreview">
          <img :src="state.swipeObj.imgUrl" class="category-imgs" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="cate-detail-info">
      <div class="cate-detail-money">
        <div class="cate-detail-left">
          <div class="cate-money">￥{{ state.swipeObj.money }}</div>
          <div class="cate-price">价格 ￥{{ state.swipeObj.discountMoney }}</div>
        </div>
        <div class="cate-detail-right">
          <div class="cate-tips" @click="handleCoupon">领券&nbsp;<i class="iconfont iconyoujiantou goEnter"></i></div>
        </div>
      </div>
      <div class="cate-detail-classify">
        <div class="cate-name">{{ state.swipeObj.type }}</div>
        <div class="cate-small">
          {{ state.swipeObj.tag }}
        </div>
      </div>
      <div class="cate-detail-conte">
        <div class="cate-content">
          {{ state.swipeObj.desc }}
        </div>
        <div class="cate-share" @click="handleShare">分享</div>
      </div>
      <!-- <div class="cate-detail-msg">
        <div class="cate-msg-left">推荐</div>
        <div class="cate-msg-left">帮我选</div>
      </div> -->
    </div>
    <div class="cate-send">
      <div class="cate-send-all">
        <div class="cate-send-left">
          <div class="cate-send-name">发货</div>
          <div class="cate-send-address">浙江·杭州</div>
        </div>
        <div class="cate-send-right">
          <div class="cate-send-postage">快递·包邮</div>
          <div class="cate-send-address">月销量: {{ state.swipeObj.sales }}</div>
        </div>
      </div>
    </div>
    <div class="cate-content-info">
      <div class="cate-content-top" @click="handleService">
        <div class="cate-content-data">
          <div class="cate-top-name">服务</div>
          <div class="cate-top-tips">付款后3天内发货·15天退货</div>
        </div>
        <i class="iconfont iconyoujiantou cate-top-icon"></i>
      </div>
      <div class="cate-top-select" @click="handleSelectShop">
        <div class="cate-select-name">
          <div class="cate-selct-left">选择</div>
          <div class="cate-select-size">
            <div class="cate-select-info">选择 尺码 颜色</div>
            <div class="cate-select-imgs">
              <img src="@/assets/imgs/cat.jpg" alt="">
              <img src="@/assets/imgs/cat.jpg" alt="">
              <img src="@/assets/imgs/cat.jpg" alt="">
            </div>
          </div>
        </div>
        
        <i class="iconfont iconyoujiantou cate-select-icon"></i>
      </div>
      <div class="cate-content-params" @click="handleParams">
        <div class="cate-params-data">
          <div class="cate-params-name">参数</div>
          <div class="cate-params-tips">品牌 尺码</div>
        </div>
        <i class="iconfont iconyoujiantou cate-params-icon"></i>
      </div>
    </div>
    <div class="cate-mid">
      <div class="cate-bottom">
        <div class="cate-mid-top">
          <div class="cate-mid-name">
            萌儿评价(100)
          </div>
          <div class="cate-mid-right">
            查看全部
            <i class="iconfont iconyoujiantou mid-icon"></i>
          </div>
        </div>
        <div class="cate-mid-msg">
          <div class="cate-mid-content">挺好看的(20)</div>
          <div class="cate-mid-content">看的(15)</div>
          <div class="cate-mid-content">的(30)</div>
          <div class="cate-mid-content">挺的(10)</div>
          <div class="cate-mid-content">挺的(2)</div>
        </div>
        <div class="cate-mid-btm">
          <div class="cate-mid-all">
            <img src="@/assets/imgs/cat.jpg" alt="">
            <span>沐沐</span>
          </div>
          <div class="cate-btm-content">
            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或哈哈哈啊哈哈
          </div>
        </div>
      </div>
    </div>
    <div class="cate-footer">
      <van-action-bar>
        <van-action-bar-icon icon="shop-o" text="店铺" />
        <van-action-bar-icon icon="chat-o" text="客服" />
        <van-action-bar-icon icon="star" text="收藏" />
        <van-action-bar-button color="#F5A636" type="warning" text="加入购物车" @click="handleAddCart" />
        <van-action-bar-button color="#35A5E2" type="danger" text="立即购买" />
      </van-action-bar>
    </div>

    <!-- 分享面板 -->
    <div class="show-share">
      <van-share-sheet
        v-model:show="state.isShow"
        title="立即分享给好友"
        :options="state.options"
        @select="onSelect"
      />
    </div>
    <!-- 领券 -->
    <div class="coupon-list">
      <van-action-sheet v-model:show="state.showCoupon" title="优惠明细">
        <div class="coupon-content">
          <div class="coupon-all">
            <div class="coupon-top">优惠</div>
            <div class="coupon-body" v-for="(item, index) of 3" :key="index">
              <div class="coupon-line">
                <div class="coupon-left">
                  <div class="coupon-shop">店铺优惠券</div>
                  <div class="coupon-money">￥<span>5</span></div>
                </div>
                <div class="coupon-mid">
                  <div class="coupon-mid-moeny">满60使用</div>
                  <div class="coupin-mid-time">有效期至2020.12.11 23:59</div>
                </div>
                <div class="coupon-right">
                  立即领取
                </div>
              </div>
            </div>
          </div>
          <div class="coupon-credits">
            <div class="coupon-credits-left">积分</div>
            <div class="coupon-credits-mid">购买可得<span>15</span>积分</div>
          </div>
        </div>
      </van-action-sheet>
    </div>
    <!-- 服务 -->
    <div class="cate-show-service">
      <van-action-sheet v-model:show="state.service" title="服务详情">
        <div class="cate-show-all">
          <div class="cate-show-info" v-for="(item, index) of state.listService" :key="index">
            <i class="iconfont cate-show-icon" :class="item.icon"></i>
            <div class="cate-show-right">
              <div class="cate-show-name">{{ item.title }}</div>
              <div class="cate-show-desc">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </div>
      </van-action-sheet>
    </div>
    <!-- 参数 -->
    <div class="cate-show-params">
      <van-action-sheet v-model:show="state.params" title="产品参数">
        <div class="cate-params-body">
          <div class="cate-params-all" v-for="(item, index) of state.paramsList" :key="index">
            <div class="cate-params-left">{{ item.name }}</div>
            <div class="cate-params-right">{{ item.desc }}</div>
          </div>
        </div>
      </van-action-sheet>
    </div>
    <!-- 购物车 -->
    <div class="cate-show-cart">
      <van-action-sheet v-model:show="state.cartShow" title="产品购买">
        <div class="cate-cart-body">
          <div class="cate-cart-all">
            <div class="cate-cart-top">
              <img src="@/assets/imgs/cat.jpg" alt="">
              <div class="cate-cart-top-right">
                <div class="cate-cart-money">￥197</div>
                <div class="cate-cart-score">小旺财</div>
              </div>
            </div>
           <div class="cart-buy">
             <div class="cate-buy-title">购买方式</div>
             <span>
               立即购买
             </span>
           </div>
           <div class="cate-color">
             <div class="cate-color-tilte">颜色分类</div>
             <div class="cate-data">
               <div class="cate-color-info" 
                v-for="(item, index) of state.shopList" 
                :key="index" 
                @click="handleCartSelect(item, index)" :class="index == state.cartSelect ? 'cate-color-info-select' : ''">
                <img :src="item.img" alt="">
                <span>{{ item.name }}</span>
              </div>
             </div>
           </div>
           <div class="cate-btm-shop">
             <van-action-bar v-if="state.selectShop">
              <van-action-bar-button type="warning" text="加入购物车" />
              <van-action-bar-button type="danger" text="立即购买" />
            </van-action-bar>
             <div class="cate-btm-desc" @click="handleCartShop" v-else>
               加入购物车
             </div>
           </div>
          </div>
        </div>
      </van-action-sheet>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from "vue-router"
import { useStore } from "vuex"
import homeHeader from "@/components/header.vue"
import { getCategoryDetail } from "@/api/index.ts"
import { ImagePreview, Toast } from 'vant';
import { listService, paramsList, shopList } from "./listInfo"

export default defineComponent({
  name: 'categoryDetail',
  components: {
    homeHeader,
    [ImagePreview.Component.name]: ImagePreview.Component
  },
  setup(props, context){
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const state = reactive({
      listService,
      paramsList,
      shopList, 
      selectShop: false, // 选择商品
      cartShow: false, // 购物车
      params: false, // 参数
      service: false, // 服务
      isShow: false, // 是否分享
      showCoupon: false, // 是否领券
      cartSelect: 0,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
      swipeObj: {
        id: 0,
        desc: "",
        discountMoney: 0,
        money: 0,
        tag : "",
        type: "",
        sales: 0,
        imgUrl: "" ,
        checked: false,
        num: 1
      }
    })

    // 数据初始化
    onMounted(() => {
      let { id, pid } = route.query
      // console.log("id-pid",id, pid)
      let data = {
        id: id,
        pid: pid
      }
      getCategoryDetail(data).then(res => {
        console.log("77777", res)
        // state.swipeObj = 
        if(res.code == 200){
          state.swipeObj = res.data
          console.log("state", state.swipeObj)
        }
      })
    })

    // 领券
    const handleCoupon = () => {
      state.showCoupon = true
    }

    // 返回
    const handleBack = () => {
      router.go(-1)
    }

    // 预览图片
    const handlePreview = () => {
      ImagePreview([
        state.swipeObj.imgUrl
      ]);
    }

    // 分享
    const handleShare = () => {
      state.isShow = true
    }

    // 选择分享
    const onSelect = (val: any) => {
      console.log("onSelect--", val.name)
    }

    // 加入购物车
    const handleAddCart = () => {
      console.log("store--", store)
      // mutations
      state.cartShow = true
      state.selectShop = false
    }

    // 服务
    const handleService = () => {
      state.service = true
    }

    // 参数
    const handleParams = () => {
      state.params = true
    }

    // 选择颜色
    const handleCartSelect = (item: any, index: number) => {
      console.log("xxxx---slect---", item, index)
      state.cartSelect = index
    }

    // 加入购入车---
    const handleCartShop = () => {
      state.swipeObj.checked = false
      // console.log("-==0000", state.swipeObj)
      store.commit("setShowList", state.swipeObj)
      Toast("成功加入购物车")
    }
    // 选择商品
    const handleSelectShop = () => {
      state.cartShow = true
      state.selectShop = true
    }

    return {
      state,
      handleBack,
      handlePreview,
      handleShare,
      onSelect,
      handleCoupon,
      handleAddCart,
      handleService,
      handleParams,
      handleCartSelect,
      handleCartShop,
      handleSelectShop
    }
  }
})
</script>

<style lang="less" scoped>
.categoryDetail{
  // background: #FCFBFB;
  .headers-left{
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 55px;
    .headers-icon {
        display: block;
    }
  }
  .category-swiper{
    padding-top: 55px;
    img{
      width: 100%;
    }
  }
  .cate-detail-info{
    width: 100%;
    padding-bottom: 12px;
    .cate-detail-money {
        width: 90%;
        margin: 20px auto 14px;
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        .cate-detail-left {
            display: flex;
            .cate-money {
                color: #35A5E2;
                font-weight: bold;
            }
            .cate-price {
                margin-left: 10px;
                font-size: 12px;
                display: flex;
                align-items: flex-end;
                text-decoration: line-through;
                color: #F5A636;
                font-weight: bold;
            }
        }
        .cate-detail-right {
            display: flex;
            align-items: center;
            color: #35A5E2;
            .cate-tips {
                display: flex;
                font-size: 12px;
                font-weight: bold;
            }
            .goEnter {
                display: flex;
                font-size: 12px;
                align-items: center;
                margin: 3px auto;
            }
        }
    }
    .cate-detail-classify {
        width: 90%;
        margin: 0px auto 10px;
        display: flex;
        font-size: 16px;
        color: #25A5EB;
        font-weight: 700;
        .cate-small {
            margin-left: 10px;
            font-size: 12px;
            display: flex;
            align-items: flex-end;
        }
    }
    .cate-detail-conte {
        width: 90%;
        margin: auto;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .cate-content {
            width: 220px;
            line-height: 20px;
            color: #666;
        }
        .cate-share {
            width: 60px;
            height: 24px;
            background: #35A5E2;
            text-align: center;
            line-height: 24px;
            border-radius: 20px;
            color: white;
            font-size: 12px;
            padding: 2px
        }
    }
    .cate-detail-msg {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-around;
        font-size: 12px;
        padding: 20px 0px;
        .cate-msg-left {
            background: #25A5EB;
            width: 80px;
            height: 26px;
            text-align: center;
            line-height: 26px;
            border-radius: 13px;
            color: white;
        }
    }
  }
  .cate-send {
      width: 100%;
      border-top: 5px solid #eee;
      border-bottom: 5px solid #eee;
      .cate-send-all {
          width: 90%;
          margin: auto;
          display: flex;
          font-size: 12px;
          height: 42px;
          justify-content: space-between;
          .cate-send-left {
              width: 30%;
              display: flex;
              align-items: center;
              justify-content: space-between;
          }
          .cate-send-right {
              display: flex;
              width: 50%;
              align-items: center;
              justify-content: space-between;
              font-size: 12px;
          }
          .cate-send-address {
              font-weight: bold;
              color: #666;
          }
      }
  }
  .cate-content-info {
      width: 90%;
      margin: 10px auto;
      font-size: 12px;
      .cate-content-top {
          width: 100%;
          display: flex;
          justify-content: space-between;
          line-height: 42px;
          border-bottom: 1px solid #eee;
          align-items: center;
          .cate-content-data {
              display: flex;
              .cate-top-tips {
                  margin-left: 14px;
                  font-size: 13px;
                  font-weight: bold;
                  color: #666;
              }
          }
          .cate-top-icon {
              display: block;
          }
      }
      .cate-top-select {
          width: 100%;
          height: 70px;
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          border-bottom: 1px solid #eee;
          .cate-select-name {
              display: flex;
              .cate-select-size {
                  margin-left: 14px;
                  .cate-select-info {
                      margin-bottom: 10px;
                      font-size: 13px;
                      font-weight: bold;
                      color: #666;
                  }
                  .cate-select-imgs{
                    img {
                        width: 30px;
                        border-radius: 5px;
                        height: 30px;
                        margin-right: 6px;
                    }
                  }
              }
          }
      }
      .cate-content-params {
          width: 100%;
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          .cate-params-data {
              width: 100%;
              display: flex;
              .cate-params-tips {
                  margin-left: 14px;
                  font-size: 13px;
                  font-weight: bold;
                  color: #666;
              }
          }
          .cate-params-icon {
              display: block;
          }
      }
  }
  .cate-mid {
      width: 100%;
      border-top: 5px solid #eee;
      padding-bottom: 40px;
      .cate-bottom {
          width: 90%;
          margin: 10px auto 30px;
          font-size: 12px;
          .cate-mid-top {
              display: flex;
              justify-content: space-between;
              line-height: 42px;
              align-items: center;
              .cate-mid-right {
                  color: #25A5EB;
              }
          }
          .cate-mid-msg {
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              .cate-mid-content {
                  padding: 3px 10px;
                  background: #999;
                  color: #fff;
                  border-radius: 5px;
                  margin: 0 6px 6px 0;
              }
          }
          .cate-mid-btm {
              margin-top: 10px;
              .cate-mid-all {
                  display: flex;
                  align-items: center;
                  img{
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                  }
                  span {
                      margin-left: 10px;
                  }
              }
              .cate-btm-content {
                  margin-top: 10px;
                  color: #8d8282;
                  font-size: 13px;
                  letter-spacing: .5px;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
              }
          }
      }
  }
  .coupon-list{
    width: 100%;
    .coupon-content {
        width: 100%;
        .coupon-all {
            width: 90%;
            margin: auto;
            .coupon-top {
                font-size: 20px;
                line-height: 40px;
            }
            .coupon-body {
                width: 100%;
                height: 68px;
                background: #35a5e2;
                border-radius: 5px;
                margin-bottom: 10px;
                .coupon-line {
                    width: 100%;
                    display: flex;
                    box-sizing: border-box;
                    color: #fff;
                    .coupon-left {
                        width: 25%;
                        .coupon-shop {
                            width: 100%;
                            border-top-left-radius: 5px;
                            background: #406bb9;
                            border-bottom-right-radius: 5px;
                            height: 16px;
                            text-align: center;
                            font-size: 10px;
                        }
                        .coupon-money {
                            width: 100%;
                            height: 52px;
                            text-align: center;
                            line-height: 52px;
                            font-size: 18px;
                            span {
                                font-size: 24px;
                            }
                        }
                    }
                    .coupon-mid {
                        width: 50%;
                        font-size: 14px;
                        padding-top: 20px;
                        padding-left: 5px;
                        border-right: 1px #fff dashed;
                        box-sizing: border-box;
                        .coupin-mid-time {
                            font-size: 12px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                    }
                    .coupon-right {
                        width: 25%;
                        text-align: center;
                        line-height: 68px;
                        font-size: 16px;
                        color: white;
                    }
                }
            }
        }
        .coupon-credits {
            width: 90%;
            margin: auto;
            display: flex;
            padding-bottom: 36px;
            font-size: 14px;
            color: #333;
            .coupon-credits-left {
                border-radius: 10px;
                padding: 0px 10px;
                background: #35a5e2;
                color: white;
            }
            .coupon-credits-mid {
                margin-left: 10px;
            }
        }
    }
  }
}

// 服务
.cate-show-all{
  width: 90%;
  margin: 12px auto 16px;
  .cate-show-info {
      display: flex;
      margin-bottom: 20px;
      .cate-show-icon {
          display: block;
          margin: 3px 10px 0 0;
      }
      .cate-show-right {
          font-size: 16px;
          .cate-show-desc {
              font-size: 12px;
              color: #999;
              margin-top: 3px;
          }
      }
  }
}

// 参数
.cate-params-body {
    width: 100%;
    margin-bottom: 50px;
    .cate-params-all {
        width: 90%;
        margin: 0 auto;
        display: flex;
        font-size: 16px;
        padding: 12px 0;
        border-bottom: 1px solid #f1f1f1;
        .cate-params-left {
            color: #999;
            width: 20%;
        }
        .cate-params-right {
            color: #666;
            font-size: 14px;
        }
    }
}

// 购买
.cate-cart-body {
    width: 90%;
    margin: 20px auto;
    .cate-cart-all{
      width: 100%;
      .cate-cart-top {
          width: 100%;
          display: flex;
          padding-bottom: 10px;
          border-bottom: 1px solid #eeee;
          img {
              width: 60px;
              height: 60px;
              border-radius: 5px;
          }
          .cate-cart-top-right {
              font-size: 14px;
              margin-left: 10px;
              color: #35A5E2;
              .cate-cart-score {
                  margin-top: 5px;
              }
          }
      }
      .cart-buy {
          font-size: 16px;
          padding: 10px 0px;
          border-bottom: 1px solid #eee;
          .cate-buy-title {
              margin-bottom: 6px;
          }
          span {
              padding: 6px 10px;
              background: #25A5EB;
              font-size: 12px;
              border-radius: 5px;
              color: white;
              margin-top: 5px;
          }
      }
      .cate-color {
          font-size: 16px;
          margin-top: 5px;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
          .cate-data {
              display: flex;
              flex-wrap: wrap;
            .cate-color-info {
                display: flex;
                align-items: center;
                font-size: 12px;
                width: 80px;
                height: 30px;
                background: #ddd;
                padding: 0 3px;
                margin: 6px 10px 0 0;
                border-radius: 3px;
                justify-content: center;
                color: #333;
                border: 1px solid #f1f1f1;
                img {
                    width: 20px;
                    height: 20px;
                    border-radius: 3px;
                }
                span {
                    margin-left: 6px;
                }
            }
            .cate-color-info-select {
                display: flex;
                align-items: center;
                font-size: 12px;
                width: 80px;
                height: 30px;
                background: #fff;
                padding: 0 3px;
                margin: 6px 10px 0 0;
                border-radius: 3px;
                justify-content: center;
                color: #25A5EB;
                border: 1px solid #25A5EB;
                img {
                    width: 20px;
                    height: 20px;
                    border-radius: 3px;
                }
                span {
                    margin-left: 6px;
                }
            }
          }
      }
      .cate-btm-shop {
          margin-top: 100px;
          .cate-btm-desc {
              width: 100%;
              height: 34px;
              text-align: center;
              line-height: 34px;
              background: #25A5EB;
              font-size: 12px;
              border-radius: 20px;
              color: white;
          }
      }
    }
}

.categoryDetail ::v-deep .van-swipe{
  height: 180px;
  img{
    height: 180px;
  }
}

.cate-footer ::v-deep .van-action-bar{
  border-top: 1px solid #eee;
}
</style>
