<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar left-text="选择服务地址"
                 left-arrow
                 fixed
                 @click-left="onClickLeft" />
    <!-- 背景图 -->
    <img src="../assets/imgs/address/zanwudizhi.png"
         alt="背景图">
    <!-- 添加地址按钮 -->
    <van-button type="info"
                class="button"
                @click='goToNewAddress'>添加地址</van-button>
  </div>
</template>

<script>
export default {
  name: 'ServiceAddress',
  data() {
    return {

    }
  },
  methods: {
    // 点击箭头跳转到上一级页面
    onClickLeft() {
      this.$router.go(-1)
    },
    goToNewAddress() {
      this.$router.push({ path: '/newaddress' })
    }
  }

}
</script>

<style lang='less' scoped>
// 导航栏
.van-nav-bar {
  height: 128px;

  background-color: #0090ff;
  /deep/.van-nav-bar__left {
    font-size: 34px;
    // 左侧箭头样式
    /deep/ .van-icon {
      color: #fff;
      font-size: 34px;
    }
    // 左侧文字样式
    /deep/.van-nav-bar__text {
      color: #fff;
    }
  }
}
// 背景图
img {
  width: 630px;
  height: 464px;
  // 位置
  margin: 376px 60px 0 60px;
}
// 添加地址按钮
.button {
  font-size: 32px;
  width: 690px;
  height: 98px;
  background: #0090ff;
  border-radius: 8px;
  position: fixed;
  bottom: 30px;
  left: 30px;
}
</style>
