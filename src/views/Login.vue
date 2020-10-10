<template>
  <div>
    <!-- 导航条 -->
    <van-nav-bar title="登录"
                 class="nav-bar"
                 fixed />
    <!-- 注册/登录信息 -->
    <van-form @submit="onSubmit"
              class="login_form">
      <!-- 用户名 -->
      <van-field v-model="username"
                 class="login_form_item"
                 name="用户名"
                 label="用户名"
                 placeholder="用户名4-12位"
                 :rules="[{ required: true, message: '用户名不能为空' }]" />
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
          提交
        </van-button>
      </div>
    </van-form>
    <!-- 没有账号去往注册页面 -->
    <div class="register"
         @click="goToRegister">没有账号?立即注册</div>
    <!-- 其他登录方式 -->
    <div class="font">
      <div class="item iconfont icon-weixin"></div>
      <div class="item iconfont icon-qq"></div>
      <div class="item iconfont icon-weibo"></div>
    </div>
    <div class=" info">其他登录方式</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'admin',
      password: 'admin'
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
      // 跳往首页
      this.$router.push('/')
    },
    // 跳转到注册页面
    goToRegister() {
      this.$router.push('/register')
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
// 其他登录方式
.font {
  display: flex;
  justify-content: center;
  .item {
    font-size: 60px;
    margin: 240px 30px 20px;
  }
}
.info {
  font-size: 32px;
  color: red;
  width: 50%;
  text-align: center;
  margin: 0 auto;
}
</style>
