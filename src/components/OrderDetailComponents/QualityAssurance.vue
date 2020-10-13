<template>
  <div>
    <div class="quality_wrap">
      <div class="item">
        <img src="../../assets/imgs/feiyong.png"
             alt=""
             class="img">
        <div class="text">无前期费用</div>
      </div>
      <div class="item">
        <img src="../../assets/imgs/pinzhibaozhang.png"
             alt=""
             class="img">
        <div class="text">品质有保障</div>
      </div>
      <div class="item">
        <img src="../../assets/imgs/shouhou.png"
             alt=""
             class="img">
        <div class="text">超长售后</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.quality_wrap {
  height: 88px;
  line-height: 88px;
  background-color: #fff;
  margin: 20px 0;
  padding: 0 30px;
  // box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .item {
    display: flex;
    align-items: center;
    .img {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }
    .text {
      font-size: 24px;
    }
  }
}
</style>
