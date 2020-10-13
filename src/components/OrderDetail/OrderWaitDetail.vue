<template>
  <div>
    <!-- 导航条 -->
    <van-nav-bar class="nav-bar"
                 left-text="订单详情"
                 left-arrow
                 @click-left="onClickLeft"
                 fixed />
    <!-- 订单详情主题 -->
    <div class="order_detail_wrap">
      <div class="header">
        <div class="title">待接单</div>
        <!-- 计时器 -->
        <van-count-down :time="time"
                        format="HH:mm"
                        class="countDown" />
        <div class="content">等待师傅接单…</div>
      </div>
    </div>
    <!-- 订单详情信息 -->
    <OrderDetailInfo></OrderDetailInfo>
    <QualityAssurance></QualityAssurance>
  </div>
</template>

<script>
// 引入订单详情模块
import OrderDetailInfo from '@/components/OrderDetailComponents/OrderDetailInfo'
// 引入品质保障
import QualityAssurance from '@/components/OrderDetailComponents/QualityAssurance'

export default {
  components: {
    OrderDetailInfo,
    QualityAssurance
  },
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    }
  },
  methods: {
    // 返回上一级路由
    onClickLeft() {
      this.$router.go(-1)
    }
  },
  mounted() {
    console.log('@')
  }
}
</script>

<style lang='less' scoped>
// 修改导航栏左侧文字样式
/deep/.van-nav-bar__text {
  font-size: 34px;
  color: #fff;
}
// 导航条
.nav-bar {
  height: 100px;
  background-color: #0090ff;
  /deep/.van-nav-bar__left {
    // 修改左侧箭头大小
    .van-nav-bar__arrow {
      font-size: 38px;
    }
    // 修改左侧箭头颜色
    .van-icon::before {
      color: #fff;
    }
  }
}

// 订单详情主题开始
.order_detail_wrap {
  margin-top: 100px;
  // 订单头部
  .header {
    width: 750px;
    height: 200px;
    background: #0090ff;
    padding: 48px 30px;
    box-sizing: border-box;
    position: relative;
    .title {
      font-size: 40px;
      color: #fff;
    }
    .content {
      color: #ededed;
      font-size: 28px;
    }
    // 计时器
    .countDown {
      position: absolute;
      top: 78px;
      right: 30px;
      width: 114px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      background: #ffffff;
      border-radius: 8px;
    }
  }
}
</style>
