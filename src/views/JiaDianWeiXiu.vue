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
    <!-- 收费标准区域 -->
    <ChargingStandards></ChargingStandards>
    <!-- 服务流程 -->
    <div class="service-process">
      <div class="title">服务流程</div>
      <div class="content">
        <div class="item">
          <img src="../assets/imgs/yuyue.png"
               alt="">
          <div>在线预约</div>
          <div>报修问题</div>
          <div>免费下单</div>
        </div>
        <div class="item">
          <img src="../assets/imgs/weixiu.png"
               alt="">
          <div>确认维修</div>
          <div>确认故障</div>
          <div>提交维修清单</div>
        </div>
        <div class="item">
          <img src="../assets/imgs/yanshou.png"
               alt="">
          <div>验收</div>
          <div>服务验收</div>
          <div>售后有保障</div>
        </div>
      </div>
    </div>
    <!-- 在线预约 -->
    <div class="online">
      <button class="button">在线预约</button>
    </div>

  </div>
</template>

<script>
// 引入 收费说明组件
import ChargesNotes from '../components/ChargesNotes'
// 引入收费标准
import ChargingStandards from '../components/ChargingStandards'
export default {
  components: {
    ChargesNotes,
    ChargingStandards
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
  // 服务流程区域
  .service-process {
    height: 271px;
    background-color: #fff;
    padding: 30px;
    box-sizing: border-box;
    .title {
      font-size: 28px;
    }
    .content {
      margin-top: 30px;
      display: flex;
      justify-content: space-around;

      .item {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        font-size: 24px;
        color: #999;
        img {
          width: 26px;
          height: 26px;
        }
        & div:nth-child(2) {
          font-size: 26px;
          color: #0090ff;
          margin-top: 10px;
        }
      }
    }
  }
  // 在线预约按钮区域
  .online {
    height: 158px;
    width: 100%;
    background-color: #fff;
    padding: 30px;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    .button {
      width: 690px;
      height: 98px;
      background: #0090ff;
      border-radius: 8px;
      color: #fff;
      font-size: 32px;
    }
  }
}
</style>
