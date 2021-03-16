<template>
  <div class="footer">
    <div class="footer-all">
      <div class="footer-home">
        <router-link to="/home">
          <div v-if="state.name == 'home'" class="footer-name-all">
            <div class="footer-icon"><i class="iconfont icondongwu icon-home-01"></i></div>
            <div class="footer-name-01">萌图</div>
          </div>
          <div v-else  class="footer-name-all">
            <div class="footer-icon"><i class="iconfont icondongwu icon-home"></i></div>
            <div class="footer-name">萌图</div>
          </div>
        </router-link>
      </div>  
      <div class="footer-home">
        <router-link to="/category">
          <div v-if="state.name == 'category'"  class="footer-name-all">
            <div class="footer-icon"><i class="iconfont iconzhonglei icon-home-01"></i></div>
            <div class="footer-name-01">品种</div>
          </div>
          <div v-else  class="footer-name-all">
            <div class="footer-icon"><i class="iconfont iconzhonglei icon-home"></i></div>
            <div class="footer-name">品种</div>
          </div>
        </router-link>
      </div>
      <div class="footer-home-video">
        <router-link to="/video">
          <div v-if="state.name == 'video'"  class="footer-name-all">
            <div class="footer-icon"><i class="iconfont iconshipin icon-home-01"></i></div>
            <div class="footer-name-01">视频</div>
          </div>
          <div v-else  class="footer-name-all">
            <div class="footer-icon"><i class="iconfont iconshipin icon-home"></i></div>
            <div class="footer-name">视频</div>
          </div>
        </router-link>
      </div>
      <div class="footer-home">
        <router-link to="/cart">
          <div v-if="state.name == 'cart'"  class="footer-name-all">
            <div class="footer-icon"><i class="iconfont icongouwuche icon-home-01"></i></div>
            <div class="footer-name-01">购物栏</div>
          </div>
          <div v-else  class="footer-name-all">
            <div class="footer-icon"><i class="iconfont icongouwuche icon-home"></i></div>
            <div class="footer-name">购物栏</div>
          </div>
        </router-link>
      </div>
      <div class="footer-home">
        <router-link to="/my">
          <div v-if="state.name == 'my'" class="footer-name-all">
            <div class="footer-icon"><i class="iconfont iconwode icon-home-01"></i></div>
            <div class="footer-name-01">我的</div>
          </div>
          <div v-else class="footer-name-all">
            <div class="footer-icon"><i class="iconfont iconwode icon-home"></i></div>
            <div class="footer-name">我的</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { useRoute, useRouter } from "vue-router"

export default defineComponent({
  name: 'footer',
  components: {
  },
  setup(props) {
      let route = useRoute()
      let state = reactive({name: ""})
      onMounted(() => {
        state.name = route.path.split("/")[1]
        // let router = useRouter()
        // console.log("name", state.name)
      })
      return {
        state
      }
    }
})
</script>

<style lang="less" scoped>
@import "../assets/style/common";
.footer{
  position: fixed;
  z-index: 1000;
  bottom: 0;
  width: 100%;
  height: 56px;
  background: @footerBgColor;
  // border-top: 1px solid #ccc;
  .footer-all{
    display: flex;
    height: 100%;
    .footer-home{
      width: 20%;
      text-align: center;
      .icon-home{
        font-size: 20px;
        color: #666;
      }
      .footer-name{
        font-size: 10px;
        color: #666;
      }
      .icon-home-01{
        font-size: 20px;
        color: @bgColor;
      }
      .footer-name-01{
        font-size: 10px;
        color: @bgColor;
      }
    }
    .footer-home-video{
      width: 20%;
      height: 56px;
      text-align: center;
      margin-top: -10px;
      background: @footerBgColor;
      padding-top: 10px;
      border-radius: 50%;
      // border-top: 1px solid #CC9;
      .icon-home{
        font-size: 22px;
        color: #666;
      }
      .footer-name{
        font-size: 12px;
        color: #666;
      }
      .icon-home-01{
        font-size: 22px;
        color: @bgColor;
      }
      .footer-name-01{
        font-size: 12px;
        color: @bgColor;
      }
    }
  }
}

.footer-icon {
    width: 100%;
    height: 30px;
}
</style>
