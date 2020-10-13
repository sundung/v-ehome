<template>
  <div>
    <div class="information_wrap">
      <div class="title">收费说明</div>
      <div class="content">
        空调维修免费上门、免费检测，根据维修项目收费标准和配件收费标准进行费用收取，费用透明，拒绝乱收费。如遇师傅私自乱收费，可向平台进行举报，不满意可重新服务！
      </div>
      <van-button class="button">点击查看全部说明</van-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.information_wrap {
  height: 309px;
  background-color: #fff;
  padding: 30px;
  box-sizing: border-box;
  .title {
    font-size: 28px;
    color: #111111;
    margin-bottom: 16px;
  }
  .content {
    font-size: 24px;
    color: #666;
  }
  .button {
    margin: 30px 204px 0;
    width: 282px;
    height: 64px;
    background: #ffffff;
    border-radius: 32px;
    border: 2px solid #0090ff;
    font-size: 24px;
    color: #0090ff;
  }
}
</style>
