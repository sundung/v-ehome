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
        <div class="title">待支付</div>
        <div class="content">师傅确认故障，已提交维修清单，确认维修请在线支付！</div>
      </div>
    </div>
    <!-- 订单详情信息 -->
    <OrderDetailInfo></OrderDetailInfo>
    <!-- 品质保障,售后 -->
    <QualityAssurance @click.native='goToQualityAssuranceDetail'></QualityAssurance>
    <!-- 维修清单组件 -->
    <MaintenancePartsList></MaintenancePartsList>
    <!-- 收费说明组件 -->
    <Information></Information>
    <!-- 收费标准表格组件 -->
    <ChargingStandards></ChargingStandards>
    <!-- 联系人信息组件 -->
    <ContactInfo></ContactInfo>
    <!-- 结束服务按钮 -->
    <van-button class="end_service_button"
                @click="goToEndService">结束服务</van-button>
    <!-- 底部按钮区域 -->
    <div class="button">
      <div class=" left item">
        <div class="total"> 维修总价：</div>
        <div class="price">180.00元</div>
      </div>
      <van-button class="right"
                  @click="goToPay">支付</van-button>
    </div>
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
// 引入 维修清单组件
import MaintenancePartsList from '@/components/MaintenancePartsList'
export default {
  components: {
    OrderDetailInfo,
    QualityAssurance,
    Information,
    ChargingStandards,
    ContactInfo,
    MaintenancePartsList
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
    },
    // 点击服务保障组件 跳转到服务保障详情页面
    goToQualityAssuranceDetail() {
      this.$router.push('/QualityAssuranceDetail')
    },
    // 点击结束服务按钮跳转到 结束服务具体原因页面
    goToEndService() {
      this.$router.push('/EndService')
    },
    // 点击获取维修清单跳转到维修清单页面
    goToPay() {
      // 做支付逻辑
      console.log('123')
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
    padding: 48px 20px 48px 30px;
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
// 结束服务按钮样式
.end_service_button {
  width: 690px;
  height: 98px;
  background: #0090ff;
  border-radius: 8px;
  font-size: 32px;
  color: #fff;
  margin: 30px;
}

// 底部按钮区域
.button {
  position: relative;
  left: 0;
  bottom: 0;
  width: 750px;
  height: 148px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 0px rgba(196, 196, 196, 0.3);
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    margin-top: 28px;
    font-size: 24px;
    .price {
      color: #0090ff;
    }
  }
  .right {
    background-color: #0090ff;
    color: #fff;
    font-size: 32px;
    width: 336px;
    height: 98px;
    border-radius: 8px;
  }
}
</style>
