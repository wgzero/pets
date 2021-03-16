<template>
  <div class="login">
    <div class="goBack">
      <i class="iconfont iconfanhui1" @click="handleGoBack"></i>
    </div>
    <div class="login-info">
      <div class="logo">
        <i class="iconfont iconzhuce"></i>
      </div>
      <div class="login-body">
        <div class="register-methods">
          <div class="register-left" @click="handlePassword">密码注册</div>
          <div class="register-left" @click="handleCode">验证码注册</div>
        </div>
        <van-cell-group>
          <van-field v-model="state.username" left-icon="smile-o" placeholder="请输入用户名">
          </van-field>
          <van-field v-if="state.show == 1" v-model="state.password" left-icon="smile-o" placeholder="请输入密码">
          </van-field>
          <van-field v-else v-model="state.code" left-icon="smile-o" placeholder="请输入验证码">
            <template #button>
              <div class="login-send" @click="handleSendCode">
                发送验证码
              </div>
            </template>
          </van-field>
        </van-cell-group>

        <div class="login-btn" @click="handleLogin">
          立即登录
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from "vue-router"

import { getCode, signin, loginCode } from "@/api/index"
import { Toast } from 'vant'

export default defineComponent({
  name: 'login',
  components: {
  },
  setup(){
    const state = reactive({
      username: "",
      password: "",
      code: "",
      show: 1
    })

    const router = useRouter()

    // 密码注册
    const handlePassword = () => {
      state.username = ""
      state.password = ""
      state.code = ""
      state.show = 1
    }

    // 验证码注册
    const handleCode = () => {
      state.username = ""
      state.password = ""
      state.code = ""
      state.show = 2
    }

    // 发送二维码
    const handleSendCode = () => {
      getCode().then(res => {
        console.log("code---", res)
        if(res.code == 200){
          Toast({
            position: 'top',
            duration: 1000 * 60,
            message: "验证码: " + res.msg
          })
        }
      })
    }
    // 返回
    const handleGoBack = () => {
      router.go(-1)
    }

    // 注册登录
    const handleLogin = () => {
      // 注册登录
      if(state.show == 1){
        let data = {
          username: state.username,
          password: state.password
        }
        signin(data).then(res => {
          console.log("res===", res)
          if(res.code ===200){
            router.push("login")
            Toast(res.msg)
          }else{
            Toast(res.msg)
          }
        })
      }else{
        let data = {
          username: state.username,
          password: state.code
        }
        loginCode(data).then(res => {
          if(res.code === 200){
            Toast(res.msg)
            router.push("my")
          }else{
            Toast(res.msg)
          }
        })
      }
    }

    return {
      state,
      handlePassword,
      handleCode,
      handleGoBack,
      handleSendCode,
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
            .register-methods {
                width: 100%;
                height: 40px;
                line-height: 40px;
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                background: #25A5EB;
                border-radius: 5px;
                color: #fff;
                .register-left {
                    width: 50%;
                    text-align: center;
                    border-right: 1px solid #fff;
                }
            }
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
.login-send {
    color: #aaa;
}
i.iconfont.iconfanhui1 {
    font-size: 20px;
    color: #999;
}
i.iconfont.iconzhuce {
    font-size: 45px;
    color: #ccc;
}

</style>
