<template>
  <div class="hello">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o"
                       @click="goToHome">首页</van-tabbar-item>
      <van-tabbar-item icon="label-o"
                       dot>订单</van-tabbar-item>
      <van-tabbar-item icon="friends-o"
                       badge="5"
                       @click="goToMine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data() {
    return {
      active: 'home'
    }
  },
  methods: {
    // 跳转首页
    goToHome() {
      this.$router.push('/').catch(() => { })
    },
    // 跳转我的页面
    goToMine() {
      this.$router.push('/mine')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.van-tabbar {
  height: 98px;
}
</style>
