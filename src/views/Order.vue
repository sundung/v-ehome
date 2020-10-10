<template>
  <div>
    <van-tabs v-model="active"
              class="tabs"
              color='#0090FF'
              title-active-color='#0090FF'
              title-inactive-color='#999'
              sticky>
      <!-- 1 -->
      <van-tab title="标签 1">内容 1</van-tab>
      <!-- <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab> -->
    </van-tabs>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
// 导入 Tabbar 组件
import Tabbar from '@/components/Tabbar'
export default {
  components: {
    Tabbar
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang='less' scoped>
// tabs栏
</style>
