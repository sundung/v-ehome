<template>
  <div>
    <!-- 报修项目 -->
    <div class="repairing">
      <div class="repairing-items">
        <span class="start">*</span>
        报修项目</div>
      <div class="repairing-items">空调维修</div>
      <div class="repairing-items text"
           @click="showPopup">更换
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
      <div class="item"
           @click="showAirPopup">请选择 <span> > </span></div>
    </div>
    <div class="line"></div>
    <!-- 空调功率 -->
    <div class="air">
      <div class="item">空调功率</div>
      <div class="item"
           @click="showAirPowerPopup">请选择 <span> > </span></div>
    </div>
    <div class="line"></div>
    <!-- 报修数量 -->
    <div class="air number">
      <div class="item">报修数量</div>
      <div class="item num ">
        <div @click="sub"> - </div>
        <div>{{count}}</div>
        <div @click="add"> + </div>
      </div>
    </div>
    <!-- *服务地址 -->
    <div class="repairing">
      <div class="repairing-items">
        <span class="start">*</span>
        服务地址</div>

      <div class="repairing-items text"
           @click="showAddressPopup">请选择服务地址
        <span> > </span>
      </div>
    </div>
    <div class="line"></div>
    <!-- 上门时间 -->
    <div class="repairing">
      <div class="repairing-items">
        <span class="start">*</span>
        上门服务时间</div>
      <div>{{HometimeValue}}</div>
      <div class="repairing-items text"
           @click='showHomeTimePopup'>请选择
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
    <!-- 点击报修项目的更换弹出Popup 弹出层 -->
    <van-popup v-model="show"
               :close-on-click-overlay="false"
               class="popup-project"
               round
               position="bottom"
               :style="{ height: '300px' }">
      <div class="top">
        <div class="item"
             @click="closeProject">X</div>
        <div class="item">选择服务项目</div>
        <div class="item">✔️</div>
      </div>
      <div class="content">
        <div class="item active">空调加氟</div>
        <div class="item">空调维修</div>
        <div class="item">冰箱维修</div>
        <div class="item">电视维修</div>
        <div class="item">洗衣机维修</div>
        <div class="item">燃气灶维修</div>
        <div class="item">燃气热水器维修</div>
        <div class="item">电热水器维修</div>
      </div>
    </van-popup>
    <!-- 点击请选择空调机型弹出框 -->
    <van-popup v-model="showAir"
               :close-on-click-overlay="false"
               class="popup-project"
               round
               position="bottom"
               :style="{ height: '300px' }">
      <div class="top">
        <div class="item"
             @click="closeAirProject">X</div>
        <div class="item">请选择空调机型</div>
        <div class="item">✔️</div>
      </div>
      <div class="content">
        <div class="item active">定频挂机</div>
        <div class="item">定频柜机</div>
        <div class="item">变频挂机</div>
        <div class="item">变频柜机</div>
        <div class="item">风管机、天井机</div>
      </div>
    </van-popup>
    <!-- 点击空调功率弹出框 -->
    <van-popup v-model="showAirPower"
               :close-on-click-overlay="false"
               class="popup-project"
               round
               position="bottom"
               :style="{ height: '300px' }">
      <div class="top">
        <div class="item"
             @click="closeAirPowerProject">X</div>
        <div class="item">请选择空调频率</div>
        <div class="item">✔️</div>
      </div>
      <div class="content">
        <div class="item active">1P</div>
        <div class="item">1.5P</div>
        <div class="item">2P</div>
        <div class="item">3P</div>
        <div class="item">4P</div>
        <div class="item">5P</div>
      </div>
    </van-popup>

    <!-- 点击上门上门服务时间弹出层 -->
    <van-popup v-model="showHomeTime"
               :close-on-click-overlay="false"
               class="popup-project"
               round
               position="bottom"
               :style="{ height: '300px' }">
      <van-datetime-picker v-model="currentDate"
                           @cancel='cancelMask'
                           @confirm='confirmMask'
                           title="选择上门时间"
                           confirm-button-text='✔️'
                           cancel-button-text='X'
                           :min-date="minDate"
                           :max-date="maxDate" />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 报修项目
      show: false,
      // 空调机型
      showAir: false,
      // 空调功率
      showAirPower: false,
      // 报修数量默认值
      count: 1,
      // 默认上门时间
      HometimeValue: '',
      // 上门服务时间
      showHomeTime: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      // 获取当前时间
      currentDate: new Date()

    }
  },

  methods: {
    // 打开报修项目弹出层
    showPopup() {
      this.show = true
    },
    // 打开空调机型弹出层
    showAirPopup() {
      this.showAir = true
    },
    // 打开空调功率弹出层
    showAirPowerPopup() {
      this.showAirPower = true
    },
    // 打开服务地址
    showAddressPopup() {
      console.log('1')
      this.showAddress = true
    },
    // 打开上门服务时间弹出层
    showHomeTimePopup() {
      this.showHomeTime = true
    },
    // 关闭报修项目弹出层
    closeProject() {
      this.show = false
    },
    // 关闭空调机型弹出层
    closeAirProject() {
      this.showAir = false
    },
    // 关闭空调功率弹出层
    closeAirPowerProject() {
      this.showAirPower = false
    },
    // 点击数量按钮 加法
    add() {
      this.count += 1
    },
    sub() {
      if (this.count <= 1) return
      this.count -= 1
    },
    // 点击上门服务时间关闭按钮,关闭弹出层
    cancelMask() {
      this.showHomeTime = false
    },
    confirmMask() {
      this.HometimeValue = this.timeFormat(this.currentDate)
      this.showHomeTime = false
    },
    // 格式化时间函数
    timeFormat(time) { // 时间格式化 2019-09-08
      const year = time.getFullYear()
      const month = time.getMonth() + 1
      const day = time.getDate()
      const hour = time.getHours()
      const mm = time.getMinutes()
      // 日期以 短横线样式展示
      var clock = year + '-'

      if (month < 10) { clock += '0' }

      clock += month + '-'

      if (day < 10) { clock += '0' }

      clock += day + ' '

      if (hour < 10) { clock += '0' }

      clock += hour + ':'
      if (mm < 10) clock += '0'
      clock += mm
      return (clock)
    }

  },
  mounted() {
    this.timeFormat(new Date())
  }
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
// 点击报修项目的更换弹出Popup 弹出层
.popup-project {
  padding: 30px;
  box-sizing: border-box;
  .top {
    display: flex;
    justify-content: space-between;
    font-size: 32px;
    margin-bottom: 80px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      font-size: 24px;
      width: 210px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      background: #ffffff;
      border-radius: 8px;
      border: 2px solid #999;
      margin-bottom: 30px;
      color: #999;
    }
  }
}
// 点击报修项目的更换弹出Popup 弹出层 选中的高亮样式
.active {
  border: 2px solid #0090ff;
  color: #0090ff;
  font-size: 24px;
  width: 210px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 30px;
}
</style>
