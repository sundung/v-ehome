<template>
  <div>
    <!-- 导航条 -->
    <van-nav-bar class="nav-bar"
                 left-text="订单详情"
                 left-arrow
                 @click-left="onClickLeft"
                 fixed />
    <!-- 订单详情主体 -->
    <div class="order_detail_wrap">
      <div class="header">
        <div class="title">已结束</div>
        <div class="content">取消维修服务～</div>
      </div>
    </div>
    <!-- 订单详情信息 -->
    <OrderDetailInfo></OrderDetailInfo>
    <!-- 品质保障,售后 -->
    <QualityAssurance @click.native='goToQualityAssuranceDetail'></QualityAssurance>
    <!-- 收费说明组件 -->
    <Information></Information>
    <!-- 收费标准表格组件 -->
    <ChargingStandards></ChargingStandards>
    <!-- 收费标准 -->
    <van-cell class="charge_stands"
              title="收费标准"
              title-class='title'
              value-class='value'
              is-link
              center
              value="查看收费标准"
              to="/ChargingStandards" />
    <!-- 联系人信息组件 -->
    <ContactInfo></ContactInfo>

  </div>
</template>

<script>
// 引入订单详情模块
import OrderDetailInfo from '@/components/OrderDetailComponents/OrderDetailInfo'
// 引入品质保障
import QualityAssurance from '@/components/OrderDetailComponents/QualityAssurance'
// 引入 收费说明组件
import Information from '@/components/OrderDetailComponents/Information'
// 引入 收费标准 表格组件
import ChargingStandards from '@/components/ChargingStandards'
// 引入联系人信息组件
import ContactInfo from '@/components/OrderDetailComponents/ContactInfo'
export default {
  components: {
    OrderDetailInfo,
    QualityAssurance,
    Information,
    ChargingStandards,
    ContactInfo
  },
  data() {
    return {
      // 控制取消订单的出现
      showCancelOrderDialog: false
    }
  },
  methods: {
    // 返回上一级路由
    onClickLeft() {
      this.$router.go(-1)
    }

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

// 订单详情主体开始
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
  }
}
// 收费标准
.charge_stands {
  height: 88px;
  line-height: 88px;
  background-color: #fff;
  margin-bottom: 20px;
  .title {
    font-size: 38px;
    color: #111;
  }
  .value {
    font-size: 24px;
    color: #999;
  }
}
</style>
