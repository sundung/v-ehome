<template>
  <div class="container">
    <!-- 轮播图 -->
    <Swipers></Swipers>
    <!-- grid宫格区域 -->
    <van-grid :column-num="3" :gutter="10">
      <van-grid-item
        v-for="value in 6"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <!-- Tabbar组件 -->
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
  },
  data() {
    return {}
  },
  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'background:#ccc')
  },
  beforeDestroy() {
    document.querySelector('body').setAttribute('style', '')
  }
}
</script>

<style lang="less">
// .container {
//   width: 100%;
//   height: 100%;
//   background-color: red;
// }
</style>
