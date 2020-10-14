<template>
  <div>
    <!-- 导航条 -->
    <van-nav-bar class="nav-bar"
                 left-text="投诉"
                 left-arrow
                 @click-left="onClickLeft"
                 fixed />
    <!-- 取消订单详情开始 -->
    <div class="end_service_wrap">
      <div class="bgc">
        <div class="title">投诉原因：</div>
        <van-radio-group v-model="radio"
                         class="form">
          <van-cell-group>
            <van-cell title="服务态度差"
                      clickable
                      @click="radio = '1'">
              <template #right-icon>
                <van-radio name="1" />
              </template>
            </van-cell>
            <van-cell title="维修质量问题"
                      clickable
                      @click="radio = '2'">
              <template #right-icon>
                <van-radio name="2" />
              </template>
            </van-cell>
            <van-cell title="存在不合理收费/私下收费"
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
      <van-button class="item"
                  @click='endServiceDialog'>提交</van-button>
    </div>

    <!-- 结束服务弹出框 -->
    <van-dialog v-model="showEndService"
                class="dialog_cancel"
                :show-confirm-button='false'>
      <div class="title">客户您好</div>
      <div class="short_line"></div>
      <div class="content">
        本次投诉已提交至平台
        平台会对本次投诉进行核实
        感谢用户帮助平台规范服务质量~
      </div>
      <div class="line"></div>
      <div class="bottom">
        <van-button class="confirm"
                    @click="cancelEndService">取消</van-button>

        <div class="vertical_line"></div>

        <van-button class="cancel"
                    @click='endServiceConfirm'>确定</van-button>
      </div>
    </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '取消订单选项',
      // 控制结束服务,弹出框的出现
      showEndService: false
    }
  },
  methods: {
    // 返回上一级路由
    onClickLeft() {
      this.$router.go(-1)
    },
    // 点击提交按钮,弹出 投诉弹出框
    endServiceDialog() {
      this.showEndService = true
    },
    // 点击提交按钮,弹出 投诉弹出框,关闭弹出框
    cancelEndService() {
      this.showEndService = false
    },
    // 点击结束服务弹出框 确定按钮,关闭页面,跳转到首页
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
// 取消订单详情开始
.end_service_wrap {
  margin-top: 100px;
  // 具体原因选项
  .bgc {
    padding: 0 30px;
    background-color: #fff;
    .title {
      padding-top: 50px;
      font-size: 28px;
      color: #111;
    }
    .form {
      font-size: 24px;
      .van-cell {
        height: 88px;
        line-height: 88px;
        padding: 0;
        .van-radio {
          text-align: center;
          /deep/.van-radio__icon .van-icon {
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
    width: 690px;
    height: 98px;
    background: #0090ff;
    border-radius: 16px;
    color: #fff;
    font-size: 32px;
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
    padding: 21px 70px;
    display: flex;
    justify-content: space-between;
    // 短竖线
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
