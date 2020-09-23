<template>
  <div class='container'>
    <!-- 背景图 -->
    <img src="../assets/imgs/banner.png"
         alt="">
    <!-- 压住背景图区域 -->
    <div class="area">
      <div class="area-item">
        <div>
          <span>空调加氟</span>
          <img src="../assets/imgs/kongtiaojiafu-dianji.png"
               alt="">
        </div>
      </div>
      <div class="area-item">
        <div>
          <span>空调维修</span>
          <img src="../assets/imgs/kongtiaojiafu-dianji.png"
               alt="">
        </div>
      </div>
      <div class="area-item">
        <div>
          <span>冰箱维修</span>
          <img src="../assets/imgs/kongtiaojiafu-dianji.png"
               alt="">
        </div>
      </div>
      <div class="area-item">
        <div>
          <span>电视维修</span>
          <img src="../assets/imgs/kongtiaojiafu-dianji.png"
               alt="">
        </div>
      </div>
      <div class="area-item">
        <div>
          <span>洗衣机维修</span>
          <img src="../assets/imgs/kongtiaojiafu-dianji.png"
               alt="">
        </div>
      </div>
      <div class="area-item">
        <div>
          <span>燃气灶维修</span>
          <img src="../assets/imgs/kongtiaojiafu-dianji.png"
               alt="">
        </div>
      </div>
      <div class="area-item">
        <div>
          <span>燃气热水器维修</span>
          <img src="../assets/imgs/kongtiaojiafu-dianji.png"
               alt="">
        </div>
      </div>
      <div class="area-item">
        <div>
          <span>电热水器维修</span>
          <img src="../assets/imgs/kongtiaojiafu-dianji.png"
               alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.container {
  img {
    height: 273px;
  }
  .area {
    height: 174px;
    width: 690px;
    box-shadow: 0px 6px 10px 2px rgba(204, 204, 204, 0.2);
    border-radius: 8px;
    background-color: #fff;
    position: relative;
    left: 30px;
    top: -60px;
    padding: 20px;
    box-sizing: border-box;
    font-size: 30px;
    white-space: nowrap; /*文本不会换行，文本会在在同一行上继续*/
    overflow-x: auto; /*可滑动*/
    // 禁止y轴滑动
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    .area-item {
      display: inline-block; /*行内块元素*/
      width: 240px;
      height: 134px;
      background: #ffffff;
      box-shadow: 0px 0px 10px 0px rgba(196, 196, 196, 0.3);
      border-radius: 8px;
      margin-right: 18px;
      padding: 12px;
      box-sizing: border-box;
      // display: flex;
      div {
        display: flex;
        flex-direction: column;
        img {
          height: 38px;
          width: 64px;
          margin-top: 30px;
        }
      }
    }
    & div:nth-last-child(1) {
      margin-right: 0;
    }
  }
}
</style>
