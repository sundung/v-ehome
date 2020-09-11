<template>
  <div class="container">
    <!-- 轮播图 -->
    <Swipers></Swipers>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
// 导入 Tabbar 组件
import Tabbar from '@/components/Tabbar'
// 导入轮播图组件
import Swipers from '@/components/Swipers'
export default {
  // 注册组件
  components: {
    Tabbar,
    Swipers
  }
}
</script>

<style></style>
