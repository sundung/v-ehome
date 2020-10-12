<template>
  <div class="order_wrap">
    <div class="order_top">
      <div class="avator">
        <img src='../../assets/imgs/mine/morentouxiang.png'
             alt="用户头像">
        <div class="name">张师傅</div>
      </div>
      <div class="state">待上门</div>
    </div>
    <!-- 订单内容区域 -->
    <div class="content">
      <div class="img">
        <!-- <img src="../assets/imgs/"
             alt=""> -->
      </div>
      <!-- 订单内容详情 -->
      <div class="info">
        <div class="title">家电维修服务直约</div>
        <div class="info_item">
          <div class="item category">空调维修</div>
          <!-- 机型 -->
          <div class="item">
            <div class="kind">空调机型：</div>
            <div class="type">定频挂机</div>
          </div>
          <!-- 功率 -->
          <div class="item ">
            <div class="power">空调功率：</div>
            <div class="p">2P</div>
          </div>
          <!-- 报修数量： -->
          <div class="item">
            <div class="repairs">报修数量：</div>
            <div class="num">1</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 订单底部内容区域 -->
    <div class="bottom">
      <div class="time">
        2020-07-17（周五）18：30
      </div>
      <div class="address">
        北京市朝阳区香江北路
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.order_wrap {
  width: 750px;
  height: 360px;
  background: #ffffff;
  margin-bottom: 20px;
  padding: 30px;
  box-sizing: border-box;
  // 订单上部
  .order_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    // 订单头像
    .avator {
      display: flex;
      align-items: center;
      img {
        width: 70px;
        height: 70px;
        margin-right: 20px;
      }
    }
    // 订单状态
    .state {
      color: #0090ff;
    }
  }
  // 订单信息的内容
  .content {
    margin: 20px 0;
    display: flex;
    // 订单图片
    .img {
      width: 126px;
      height: 126px;
      padding: 18px 0;
      margin-right: 20px;
      box-sizing: border-box;
      background: #ffffff;
      box-shadow: 0px 0px 20px 0px rgba(196, 196, 196, 0.3);
      border-radius: 8px;
    }
    // 图片右侧,订单详情
    .info {
      // 订单标题
      .title {
        font-size: 28px;
        margin-bottom: 12px;
      }
      // 订单具体信息
      .info_item {
        display: flex;
        // 换行
        flex-wrap: wrap;
        // justify-content: center;
        font-size: 24px;
        color: #666;
        // 控制 item 的宽度
        .item {
          width: 40%;
          display: flex;
        }
        // 控制 最后两行
        & .item:nth-child(3) {
          margin-top: 8px;
        }
        & .item:nth-child(4) {
          margin-top: 8px;
        }
      }
    }
  }
  // 订单底部区域
  .bottom {
    font-size: 24px;
    color: #999;
    .time {
      margin-bottom: 8px;
    }
  }
}
</style>
