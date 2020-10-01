<template>
  <div>
    <!-- 报修项目 -->
    <div class="repairing">
      <div class="repairing-items">
        <span class="start">*</span>
        报修项目</div>
      <div class="repairing-items">空调维修</div>
      <div class="repairing-items text">更换
        <span> > </span>
      </div>
    </div>
    <!-- 线段 -->
    <div class="line"></div>
    <!-- icon区域 -->
    <div class="icon">
      <div class="icon-item">
        <img src="../assets/imgs/lijiyuyueIcon/shangmenfuwu.png"
             alt="">
        在线预约
      </div>
      <div class="icon-item">
        <img src="../assets/imgs/lijiyuyueIcon/mianfeijiance-jinhuang.png"
             alt="">
        免费检测
      </div>
      <div class="icon-item">
        <img src="../assets/imgs/lijiyuyueIcon/shoufeitouming.png"
             alt="">
        收费透明
      </div>
    </div>
    <!-- 空调机型 -->
    <div class="air">
      <div class="item">空调机型</div>
      <div class="item">请选择 <span> > </span></div>
    </div>
    <div class="line"></div>
    <!-- 空调功率 -->
    <div class="air">
      <div class="item">空调功率</div>
      <div class="item">请选择 <span> > </span></div>
    </div>
    <div class="line"></div>
    <!-- 报修数量 -->
    <div class="air number">
      <div class="item">报修数量</div>
      <div class="item num ">
        <div> - </div>
        <div>1</div>
        <div> + </div>
      </div>
    </div>
    <!-- *服务地址 -->
    <div class="repairing">
      <div class="repairing-items">
        <span class="start">*</span>
        服务地址</div>

      <div class="repairing-items text">请选择服务地址
        <span> > </span>
      </div>
    </div>
    <div class="line"></div>
    <!-- 上门时间 -->
    <div class="repairing">
      <div class="repairing-items">
        <span class="start">*</span>
        上门服务时间</div>

      <div class="repairing-items text">请选择
        <span> > </span>
      </div>
    </div>
    <div class="line"></div>
    <!-- 问题描述 -->
    <div class="question">
      <div><span>*</span>问题描述：</div>
      <div>
        <input type="text"
               placeholder="请描述存在问题…">
      </div>
    </div>
    <!-- 立即预约按钮 -->
    <van-button type="info"
                class="button">立即预约</van-button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
// 报修项目开始
.repairing {
  background-color: #fff;
  height: 88px;
  line-height: 88px;
  padding: 30px;
  box-sizing: border-box;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .repairing-items {
    .start {
      color: red;
    }
  }
  .text {
    color: #999;
  }
}
// 线段
.line {
  width: 690px;
  height: 2px;
  background: #d7d7d7;
  margin: auto;
}
// icon区域
.icon {
  background-color: #fff;
  height: 88px;
  line-height: 88px;
  margin-bottom: 20px;
  padding: 30px;
  box-sizing: border-box;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon-item {
    img {
      width: 19px;
      height: 22px;
      margin-right: 10px;
    }
  }
}
// 空调机型
.air {
  height: 88px;
  padding: 0 30px;
  font-size: 24px;
  background-color: #fff;
  line-height: 88px;
  display: flex;
  justify-content: space-between;
  & :nth-child(2) {
    color: #999;
  }
  .num {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    & > div {
      line-height: 24px;
      text-align: center;
      width: 24px;
      height: 24px;
      background: #ffffff;
      border: 2px solid #999999;
      border-radius: 50%;
    }
    & :nth-child(2) {
      border: 0;
      margin: 0 20px;
    }
  }
}
// 控制 报修数量与服务地址的距离
.number {
  margin-bottom: 20px;
}
// 问题描述
.question {
  height: 260px;
  font-size: 24px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  span {
    color: red;
    margin-right: 8px;
  }
}
// 立即预约按钮
.button {
  width: 690px;
  height: 98px;
  background: #0090ff;
  border-radius: 8px;
  position: fixed;
  bottom: 30px;
  left: 30px;
}
</style>
