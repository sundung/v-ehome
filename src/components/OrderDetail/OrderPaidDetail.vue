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
        <div class="title">已支付</div>
        <div class="content">师傅维修中，订单已支付～</div>
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

    <!-- 解决的底部固定定位遮挡内容的问题 -->
    <div class="height"></div>
    <!-- 底部按钮区域 -->
    <div class="button">
      <div class=" left item">
        <div class="total"> 维修总价：</div>
        <div class="price">180.00元</div>
      </div>
      <van-button class="right"
                  @click="showEndServiceDialog">服务结束</van-button>
    </div>
    <!-- 服务结束按钮的弹出框 -->
    <van-dialog v-model="endServiceDialog"
                class="dialog_cancel"
                :show-confirm-button='false'>
      <div class="title">已确认师傅维修完成！</div>
      <div class="short_line"></div>
      <div class="content">
        如师傅未完成维修，付款造成金钱损失平台概不负责~
      </div>
      <div class="line"></div>
      <div class="bottom">
        <van-button class="confirm"
                    cancelOrderCancel
                    @click='endServiceCancel'>取消</van-button>

        <div class="vertical_line"></div>

        <van-button class="cancel"
                    @click="endServiceConfirm">结束</van-button>
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
      // 控制服务结束弹出框的出现
      endServiceDialog: false
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
    // 点击服务结束按钮打开,弹出框
    showEndServiceDialog() {
      this.endServiceDialog = true
    },
    // 点击结束服务弹出框的,取消按钮,关闭弹出框
    endServiceCancel() {
      this.endServiceDialog = false
    },
    // 点击结束服务弹出框的,结束按钮,关闭订单,跳转到首页
    endServiceConfirm() {
      this.$router.push('/')
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

.height {
  height: 58px;
}
// 底部按钮区域
.button {
  position: fixed;
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
    width: 420px;
    height: 158px;
    font-size: 28px;
    color: #333;
    margin-bottom: 94px;
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
