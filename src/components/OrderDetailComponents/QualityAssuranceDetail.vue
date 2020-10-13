<template>
  <div class="body">
    <!-- 导航条 -->
    <van-nav-bar class="nav-bar"
                 left-text="服务保障"
                 left-arrow
                 @click-left="onClickLeft"
                 fixed />
    <div class="quality_detail_wrap">
      <div class="item">
        <div class="title">
          <img src="../../assets/imgs/feiyong.png"
               alt=""
               class="img">
          <div class="text">无前期费用</div>
        </div>
        <div class="content">
          无上门费、无检测费、只有维修，才会产生费用；
        </div>
      </div>
      <div class="item">
        <div class="title">
          <img src="../../assets/imgs/pinzhibaozhang.png"
               alt=""
               class="img">
          <div class="text">品质有保障</div>
        </div>
        <div class="content">
          收费透明、服务有保障；
        </div>
      </div>
      <div class="item">
        <div class="title">
          <img src="../../assets/imgs/shouhou.png"
               alt=""
               class="img">
          <div class="text">超长售后</div>
        </div>
        <div class="content">
          维修周期短，售后时间长（保修120天）；
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    // 返回上一级路由
    onClickLeft() {
      this.$router.go(-1)
    }
  },
  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'background:#fff')
  },
  beforeDestroy() {
    document.querySelector('body').setAttribute('style', 'background:#f8f8f8')
  }
}
</script>

<style lang='less' scoped>
// 修改导航栏左侧文字样式
/deep/.van-nav-bar__text {
  font-size: 34px;
  color: #fff;
}
// 导航条
.nav-bar {
  height: 100px;
  background-color: #0090ff;
  /deep/.van-nav-bar__left {
    // 修改左侧箭头大小
    .van-nav-bar__arrow {
      font-size: 38px;
    }
    // 修改左侧箭头颜色
    .van-icon::before {
      color: #fff;
    }
  }
}
// 服务保障页面详情开始
.quality_detail_wrap {
  margin-top: 100px;
  background-color: #fff;
  padding: 30px;
  .item {
    margin-bottom: 60px;
    .title {
      display: flex;
      align-items: center;
      font-size: 30px;
      margin-bottom: 20px;
      .img {
        width: 30px;
        height: 30px;
        margin-right: 12px;
      }
    }
    .content {
      font-size: 26px;
      color: #333333;
      margin-left: 40px;
    }
  }
}
</style>
