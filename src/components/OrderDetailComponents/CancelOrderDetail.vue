<template>
  <div>
    <!-- 导航条 -->
    <van-nav-bar class="nav-bar"
                 left-text="取消订单"
                 left-arrow
                 @click-left="onClickLeft"
                 fixed />
    <!-- 取消订单详情开始 -->
    <div class="cancel_order_detail">
      <div class="warn_info">
        <div class="content">我们将会对订单进行实时跟踪，有效的保障您的合法权益，私下交易将无法享受到赔、财产安全保障、其他售后权益保障！</div>
      </div>
      <div class="bgc">
        <van-radio-group v-model="radio"
                         class="form">
          <van-cell-group>
            <van-cell title="问题已解决，不需要了"
                      clickable
                      @click="radio = '1'">
              <template #right-icon>
                <van-radio name="1" />
              </template>
            </van-cell>
            <van-cell title="下单地址有误"
                      clickable
                      @click="radio = '2'">
              <template #right-icon>
                <van-radio name="2" />
              </template>
            </van-cell>
            <van-cell title="下单时间有误"
                      clickable
                      @click="radio = '3'">
              <template #right-icon>
                <van-radio name="3" />
              </template>
            </van-cell>
            <van-cell title="无原因/其他"
                      clickable
                      @click="radio = '4'">
              <template #right-icon>
                <van-radio name="4" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
      <div class="reason_info">
        <div class="title">可备注具体原因：</div>
        <textarea name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="请您描述取消原因（100字以内）"></textarea>
      </div>
    </div>
    <!-- 底部按钮区域 -->
    <div class="button">
      <van-button class="left item"
                  @click="dialogCancel">取消订单</van-button>
      <van-button class="right item"
                  @click="dialogCancelReservation">取消订单并重新预约</van-button>
    </div>
    <!-- 取消订单组件的弹出框 -->
    <van-dialog v-model="showCancelOrderDialog"
                class="dialog_cancel"
                :show-confirm-button='false'>
      <div class="title">客户您好</div>
      <div class="short_line"></div>
      <div class="content">
        确定要取消订单吗？
      </div>
      <div class="line"></div>
      <div class="bottom">
        <van-button class="confirm"
                    @click="cancelOrderCancel">再想想</van-button>

        <div class="vertical_line"></div>

        <van-button class="cancel"
                    @click='cancelOrderConfirm'>确定</van-button>
      </div>
    </van-dialog>

    <!-- 控制取消订单并重新预约的弹出框 -->
    <van-dialog v-model="showCancelOrderAndReservice"
                class="dialog_cancel"
                :show-confirm-button='false'>
      <div class="title">客户您好</div>
      <div class="short_line"></div>
      <div class="content">
        确定要取消订单并重新预约吗？
      </div>
      <div class="line"></div>
      <div class="bottom">
        <van-button class="confirm"
                    @click="cancelOrderCancelReservice">取消</van-button>

        <div class="vertical_line"></div>

        <van-button class="cancel"
                    @click='cancelOrderReserviceConfirm'>确定</van-button>
      </div>
    </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '取消订单选项',
      // 控制取消订单的出现
      showCancelOrderDialog: false,
      // 控制取消订单并重新预约的弹出框的出现
      showCancelOrderAndReservice: false
    }
  },
  methods: {
    // 返回上一级路由
    onClickLeft() {
      this.$router.go(-1)
    },
    // 点击取消订单按钮弹出,弹出取消订单的弹出框
    dialogCancel() {
      this.showCancelOrderDialog = true
    },
    // 点击取消订单并重新预约按钮  - 弹出,其弹出框
    dialogCancelReservation() {
      this.showCancelOrderAndReservice = true
    },
    // 取消订单弹出框 - 的取消事件- 关闭弹出层
    cancelOrderCancel() {
      this.showCancelOrderDialog = false
    },
    // 取消订单并重新预约弹出框的取消事件, - 关闭弹出层
    cancelOrderCancelReservice() {
      this.showCancelOrderAndReservice = false
    },
    // 取消订单的确认事件- 跳转到首页
    cancelOrderConfirm() {
      this.$router.push('/')
    },
    // 取消订单并重新预约弹出框的确定事件  ---- 跳转到在线预约界面
    cancelOrderReserviceConfirm() {
      this.$router.push('/reservation')
    }
  }
}
</script>

<style lang='less' scoped>
// 修改导航栏左侧文字样式
::v-deep .van-nav-bar__text {
  font-size: 34px;
  color: #fff;
}
// 导航条
.nav-bar {
  height: 100px;
  background-color: #0090ff;
  ::v-deep .van-nav-bar__left {
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
// 取消订单详情开始
.cancel_order_detail {
  margin-top: 100px;
  // 警告信息
  .warn_info {
    padding: 20px 30px;
    box-sizing: border-box;
    height: 96px;
    // 具体文字
    .content {
      widows: 690px;
      height: 56px;
      line-height: 28px;
      font-size: 20px;
      color: #ff3b30;
    }
  }
  // 具体原因选项
  .bgc {
    padding: 0 30px;
    background-color: #fff;
    .form {
      .van-cell {
        height: 88px;
        line-height: 88px;
        padding: 0;
        // 修改 左侧文字的大小
        font-size: 24px;
        .van-radio {
          text-align: center;
          ::v-deep .van-radio__icon .van-icon {
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }
  // 备注的具体原因
  .reason_info {
    background-color: #fff;
    height: 260px;
    padding: 28px 30px;
    .title {
      font-size: 24px;
      color: #333;
    }
    textarea {
      font-size: 24px;
      color: #666;
      height: 200px;
      width: 690px;
      resize: none;
      border: none;
    }
  }
}
// 底部按钮区域
.button {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 750px;
  height: 158px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 0px rgba(196, 196, 196, 0.3);
  padding: 30px;
  box-sizing: border-box;
  .item {
    width: 336px;
    height: 98px;
    border-radius: 8px;
    color: #fff;
    font-size: 32px;
  }
  .left {
    background-color: #ccc;
    margin-right: 18px;
  }
  .right {
    background-color: #0090ff;
  }
}
// 取消订单弹出框样式
.dialog_cancel {
  width: 536px;
  height: 527px;
  background-color: #fff;
  box-sizing: border-box;
  // 弹出框标题区域
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
  // 弹出框内容区域
  .content {
    font-size: 28px;
    color: #333;
    width: 420px;
    height: 122px;
    margin-bottom: 119px;
    padding: 0 58px 0;
  }
  .line {
    width: 536px;
    height: 2px;
    background: #d7d7d7;
    margin: 0 auto;
  }
  // 弹出框底部按钮区域
  .bottom {
    // height: 87px;
    // line-height: 87px;
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
