<template>
  <div>
    <div class="main">
      <div class="title">收费说明</div>
      <div class="content">
        空调维修免费上门、免费检测，根据维修项目收费标准和配件收费标准进行费用收取，费用透明，拒绝乱收费。如遇师傅私自乱收费，可向平台进行举报，不满意可重新服务！
        <div class='total'>维修总价=维修费+配件费（如有）+高空作业费（如有）</div>
      </div>
      <button class="btn">点击查看全部说明</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.main {
  height: 366px;
  width: 100%;
  background-color: #fff;
  padding: 30px;
  box-sizing: border-box;
  margin: 20px 0;
  .title {
    font-size: 28px;
  }
  .content {
    font-size: 24px;
    color: #666;
    margin-top: 16px;
    .total {
      margin-top: 16px;
    }
  }
  .btn {
    width: 282px;
    height: 64px;
    background: #ffffff;
    border-radius: 32px;
    border: 2px solid #0090ff;
    color: #0090ff;
    font-size: 24px;
    margin-top: 38px;
    margin-left: 234px;
  }
}
</style>
