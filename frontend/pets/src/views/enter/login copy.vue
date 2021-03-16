<template>
  <div class="login">
    <div class="logo">宠萌</div>
    <div class="login-body">
      <van-cell-group>
        <van-field v-model="state.username" left-icon="wode" placeholder="请输入用户名">
          <!-- <van-icon class="iconfont" color="#333" class-prefix="iconzhonglei-copy" name="iconzhonglei-copy"></van-icon> -->
          <van-icon slot="wode" class="iconfont" class-prefix="icon" name="wode" />
          <!-- <van-icon class-prefix="my-icon" name="extra" /> -->
        </van-field>
        <van-field v-model="state.password" placeholder="请输入密码" />
      </van-cell-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'login',
  components: {
  },
  setup(){
    const state = reactive({
      username: "",
      password: ""
    })

    return {
      state
    }
  }
})
</script>

<style lang="less" scoped>

</style>
