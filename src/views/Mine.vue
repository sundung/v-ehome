<template>
  <div>
    <!-- 导航条 -->
    <van-nav-bar title="我的"
                 class="nav-bar"
                 fixed />
    <!-- 头像信息区域 -->
    <div class="navgator">
      <div class="info"></div>
      <div class="number">立即登录</div>
    </div>
    <!-- 表单信息区域 -->
    <van-icon name="location-o" />
    <van-cell-group class="form">
      <van-field v-model="value1"
                 label="我的地址"
                 class="item"
                 center
                 label-align='center'
                 left-icon="location-o"
                 right-icon="arrow" />
      <div class="line"></div>
      <van-field v-model="value2"
                 label="帮助"
                 center
                 label-align='center'
                 class="item"
                 right-icon="arrow"
                 left-icon="question-o" />
      <div class="line"></div>
      <van-field v-model="value3"
                 label="用户协议"
                 center
                 label-align='center'
                 class="item"
                 right-icon="arrow"
                 left-icon="todo-list-o" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: ''
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
// 头像区域
.navgator {
  height: 216px;
  margin: 100px 0 34px 0;
  background: linear-gradient(315deg, #00c3ff 0%, #0090ff 100%);
  font-size: 28px;
  color: #fff;
  padding: 0 30px;
  display: flex;
  align-items: center;
  // 头像
  .info {
    width: 90px;
    height: 90px;
    background: #e1e9fe;
    border-radius: 50%;
    margin-right: 20px;
  }
}
.item {
  height: 88px;
  background-color: #fff;
  font-size: 24px;
  padding: 0 30px;
}
// 线段
.line {
  width: 690px;
  height: 2px;
  background: #d7d7d7;
  margin: 0 auto;
}
</style>
