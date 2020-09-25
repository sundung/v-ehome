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
          <img src="../assets/imgs/kongtiaoweix-weidianji.png"
               alt="">
        </div>
      </div>
      <div class="area-item">
        <div>
          <span>冰箱维修</span>
          <img src="../assets/imgs/bingxiang-weidianji.png"
               alt="">
        </div>
      </div>
      <div class="area-item">
        <div>
          <span>电视维修</span>
          <img src="../assets/imgs/dianshi-weixuanzhong.png"
               alt="">
        </div>
      </div>
      <div class="area-item">
        <div>
          <span>洗衣机维修</span>
          <img src="../assets/imgs/xiyiji-weixuanzhong.png"
               alt="">
        </div>
      </div>
      <div class="area-item">
        <div>
          <span>燃气灶维修</span>
          <img src="../assets/imgs/ranqizao-weixuanzhong.png"
               alt="">
        </div>
      </div>
      <div class="area-item">
        <div>
          <span>燃气热水器维修</span>
          <img src="../assets/imgs/ranqireshuiqi-weixuanzhong.png"
               alt="">
        </div>
      </div>
      <div class="area-item">
        <div>
          <span>电热水器维修</span>
          <img src="../assets/imgs/dianreshuiqi-weixuanzhong.png"
               alt="">
        </div>
      </div>

    </div>
    <!-- 空白区域 -->
    <div class="blank-area"></div>
    <!-- 服务保障区域 -->
    <div class="service-assurance">
      <div class="title">服务保障</div>
      <div class="content">
        <div class="item">
          <img src="../assets/imgs/feiyong.png"
               alt="">
          <span>无前期费用</span>
        </div>
        <div class="item">
          <img src="../assets/imgs/pinzhibaozhang.png"
               alt="">
          <span>品质有保障</span>
        </div>
        <div class="item">
          <img src="../assets/imgs/shouhou.png"
               alt="">
          <span>超长售后</span>
        </div>
      </div>
    </div>
    <!-- 收费说明区域 -->
    <ChargesNotes></ChargesNotes>
  </div>
</template>

<script>
import ChargesNotes from '../components/ChargesNotes'
export default {
  components: {
    ChargesNotes
  }
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
  // 空白区域
  .blank-area {
    height: 211px;
    width: 100%;
    background-color: #fff;
    margin-top: -188px;
  }
  // 服务保障区域
  .service-assurance {
    height: 131px;
    background-color: #fff;
    padding: 0 30px;
    font-size: 24px;
    .title {
      font-size: 28px;
    }
    .content {
      display: flex;
      justify-content: space-around;
      margin-top: 30px;
      .item {
        img {
          width: 24px;
          height: 24px;
        }
        span {
          margin-left: 12px;
        }
      }
    }
  }
}
</style>
