<template>
  <div class="login">
    <div class="goBack">
      <i class="iconfont iconfanhui1" @click="handleGoBack"></i>
    </div>
    <div class="login-info">
      <div class="logo">
        <i class="iconfont icondenglu"></i>
      </div>
      <div class="login-body">
        <van-cell-group>
          <van-field v-model="state.username" left-icon="smile-o" placeholder="请输入用户名">
          </van-field>
          <van-field v-model="state.password" left-icon="smile-o" placeholder="请输入密码">
          </van-field>
        </van-cell-group>

        <div class="login-btn" @click="handleLogin">
          立即登录
        </div>
        <div class="login-end">
          <div class="login-register" @click="handleRegister">注册</div>
          <div class="login-forget">忘记密码</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { login } from "@/api/index"
import { GlobalDataProps } from "../../store/index"
import { Toast } from 'vant'

export default defineComponent({
  name: 'login',
  components: {
  },
  setup(){
    const state = reactive({
      username: "",
      password: ""
    })
    
    const store = useStore<GlobalDataProps>()

    const router = useRouter()

    // 注册页面
    const handleRegister = () => {
      router.push("/register")
    }

    // 返回
    const handleGoBack = () => {
      router.go(-1)
    }

    // 登录页面
    const handleLogin = () => {
      let data = {
        username: state.username,
        password: state.password
      }
      login(data).then(res => {
        if(res.code === 200){
          console.log("res---", res)
          store.state.token = res.data
          localStorage.setItem("token", res.data)
          Toast(res.msg)
          router.push("my")
        }else{
          Toast(res.msg)
        }
      })
    }

    return {
      state,
      handleRegister,
      handleGoBack,
      handleLogin
    }
  }
})
</script>

<style lang="less" scoped>
.login {
    width: 100%;
    height: 100vh;
    background: #fff;
    .goBack {
        margin-left: 10px;
    }
    .login-info {
        padding-top: 100px;
        .logo {
            text-align: center;
            font-size: 30px;
            padding-bottom: 20px;
        }
        .login-body {
            width: 80%;
            margin: auto;
            .login-btn {
                width: 100%;
                height: 42px;
                background: #25A5EB;
                text-align: center;
                line-height: 42px;
                font-size: 16px;
                margin-top: 30px;
                border-radius: 24px;
                color: white;
            }
            .login-end {
                margin-top: 8px;
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                color: #999;
            }
        }
    }
}

.login-body ::v-deep .van-cell.van-field {
    border-radius: 10px;
    margin-top: 10px;
    border: 1px solid #eee;
}

.login-body ::v-deep .van-cell::after{
  border-bottom: none;
}

i.iconfont.iconfanhui1 {
    font-size: 20px;
    color: #999;
}

i.iconfont.icondenglu {
    font-size: 50px;
    color: #ccc;
}
</style>
