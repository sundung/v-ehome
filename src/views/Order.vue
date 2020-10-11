<template>
  <div>
    <van-tabs v-model="active"
              class="tabs"
              color='#0090FF'
              title-active-color='#0090FF'
              title-inactive-color='#999'
              sticky>

      <van-tab class="tab"
               title="标签 1">内容 1</van-tab>
      <van-tab class="tab"
               title="标签 2">内容 2</van-tab>
      <van-tab class="tab"
               title="标签 3">内容 3</van-tab>
      <van-tab class="tab"
               title="标签 4">内容 4</van-tab>
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
// 修改 Tab 栏的高度
/deep/ .van-tabs__wrap {
  height: 88px;
  // 修改 Tab栏中文字的大小
  /deep/ .van-tab {
    font-size: 28px;
    // 修改Tab栏中 item 的宽高
    /deep/ span {
      display: block;
      width: 96px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }
}
</style>
