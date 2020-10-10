<template>
  <div>
    <!-- 导航条 -->
    <van-nav-bar title="注册"
                 class="nav-bar"
                 fixed />
    <!-- 注册/登录信息 -->
    <van-form @submit="onSubmit"
              class="login_form">
      <!-- 用户名 -->
      <van-field v-model="username"
                 class="login_form_item"
                 name="邮箱/手机号"
                 label="邮箱/手机号"
                 placeholder="用户名4-12位"
                 :rules="[{ required: true, message: '用户名不能为空' }]" />
      <!-- 验证码 -->
      <van-field v-model="authcode"
                 class="login_form_item"
                 name="验证码"
                 label="验证码"
                 placeholder="验证码-6位"
                 :rules="[{ required: true, message: '验证码不能为空' }]" />
      <!-- 密码 -->
      <van-field v-model="password"
                 class="login_form_item"
                 type="password"
                 name="密码"
                 label="密码"
                 placeholder="密码4-12位"
                 :rules="[{ required: true, message: '密码不能为空' }]" />
      <div style="margin: 16px;">
        <van-button round
                    class="submit"
                    block
                    type="info"
                    native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
    <!-- 没有账号去往注册页面 -->
    <div class="register"
         @click="goToLogin">已经有账号?立即登录</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 用户名
      username: '',
      // 密码
      password: '',
      // 验证码
      authcode: ''
    }
  },
  methods: {
    goToLogin() {
      this.$router.push('/login')
    }
  }

}
</script>

<style lang='less' scoped>
// 修改vant组件的样式
/deep/.van-nav-bar__title {
  font-size: 34px;
  color: #fff;
}
// 导航条
.nav-bar {
  height: 100px;
  background-color: #0090ff;
}
// 表单信息
.login_form {
  margin-top: 150px;
  .login_form_item {
    height: 120px;
    margin: 20px 0;
    line-height: 120px;
    font-size: 32px;
  }
  // 提交按钮
  .submit {
    height: 90px;
    font-size: 32px;
    width: 70%;
    margin: 50px auto 0;
  }
}
// 去注册信息
.register {
  font-size: 32px;
  color: red;
  width: 50%;
  text-align: center;
  margin: 0 auto;
}
</style>
