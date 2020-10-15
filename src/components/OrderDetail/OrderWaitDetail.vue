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
    <!-- 品质保障,售后 -->
    <QualityAssurance @click.native='goToQualityAssuranceDetail'></QualityAssurance>
    <!-- 收费说明组件 -->
    <Information></Information>
    <!-- 收费标准表格组件 -->
    <ChargingStandards></ChargingStandards>
    <!-- 联系人信息组件 -->
    <ContactInfo></ContactInfo>
    <!-- 底部按钮区域 -->
    <div class="button">
      <van-button class="left item"
                  @click="dialogCancel">取消订单</van-button>
      <van-button class="right item"
                  @click="goToReservation">修改服务时间</van-button>
    </div>
    <!-- 取消订单组件的弹出框 -->
    <van-dialog v-model="showCancelOrderDialog"
                class="dialog_cancel"
                :show-confirm-button='false'>
      <div class="title">请仔细阅读下方文字后再确定是否取消订单！</div>
      <div class="short_line"></div>
      <div class="content">
        我们将会对订单进行实时跟踪，有效的保障您的合法权益，私下交易将无法享受到赔、财产安全保障、其他售后权益保障！
      </div>
      <div class="line"></div>
      <div class="bottom">
        <van-button class="confirm"
                    @click='cancelOrderConfirm'>确定取消</van-button>

        <div class="vertical_line"></div>

        <van-button class="cancel"
                    @click="cancelOrderCancel">暂不取消</van-button>
      </div>
    </van-dialog>
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
      time: 30 * 60 * 60 * 1000,
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
    // 弹出,取消订单的弹出框
    dialogCancel() {
      this.showCancelOrderDialog = true
    },
    // 取消订单的确认事件- 跳转到取消订单详情页面
    cancelOrderConfirm() {
      this.$router.push('/CancelOrderDetail')
    },
    // 取消订单的取消事件- 关闭弹出层
    cancelOrderCancel() {
      this.showCancelOrderDialog = false
    },
    // 点击修改服务时间跳转到 在线预约页面,从新修改时间
    goToReservation() {
      this.$router.push('/reservation')
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
// 底部按钮区域
.button {
  position: relative;
  left: 0;
  bottom: 0;
  width: 750px;
  height: 158px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 0px rgba(196, 196, 196, 0.3);
  padding: 30px;
  box-sizing: border-box;
  .item {
    font-size: 32px;
    width: 336px;
    height: 98px;
    border-radius: 8px;
    color: #fff;
  }
  .left {
    background-color: #ccc;
    margin-right: 18px;
  }
  .right {
    background-color: #0090ff;
  }
}
// 取消订单弹出框
.dialog_cancel {
  width: 536px;
  height: 527px;
  background-color: #fff;
  box-sizing: border-box;
  .title {
    color: #111;
    font-size: 36px;
    padding: 64px 58px 0;
  }
  .short_line {
    width: 47px;
    height: 3px;
    background: #111111;
    margin: 32px 58px;
  }
  .content {
    font-size: 28px;
    color: #333;
    margin-bottom: 44px;
    padding: 0 58px 0;
  }
  .line {
    width: 536px;
    height: 2px;
    background: #d7d7d7;
    margin: 0 auto;
  }
  .bottom {
    padding: 21px 70px;
    display: flex;
    justify-content: space-between;
    .vertical_line {
      width: 2px;
      height: 38px;
      background: #d7d7d7;
    }
    .confirm {
      font-size: 32px;
      color: #999;
    }
    .cancel {
      font-size: 32px;
      color: #0090ff;
    }
  }
}
</style>
