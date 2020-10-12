<template>
  <div>
    <van-tabs v-model="active"
              class="tabs"
              color='#0090FF'
              title-active-color='#0090FF'
              title-inactive-color='#999'
              sticky>

      <van-tab class="tab"
               title="待服务">
        <!-- 待上门 -->
        <OrderWaitHome></OrderWaitHome>
      </van-tab>
      <van-tab class="tab"
               title="服务中">内容 2</van-tab>
      <van-tab class="tab"
               title="已结束">内容 3</van-tab>
      <van-tab class="tab"
               title="全部">内容 4</van-tab>
    </van-tabs>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
// 导入 Tabbar 组件
import Tabbar from '@/components/Tabbar'
// 引入 待上门订单
import OrderWaitHome from '@/components/OrderWaitHome'
export default {
  components: {
    Tabbar, OrderWaitHome
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
  // 修改 底部条宽度
  /deep/ .van-tabs__line {
    width: 96px;
  }
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
