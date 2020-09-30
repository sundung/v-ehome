<template>
  <div>
    <!-- 报修项目 -->
    <div class="repairing">
      <div class="repairing-items">
        <span class="start">*</span>
        报修项目</div>
      <div class="repairing-items">空调维修</div>
      <div class="repairing-items">更换
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
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
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
}
.line {
  width: 690px;
  height: 2px;
  background: #d7d7d7;
  margin: auto;
}
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
</style>
