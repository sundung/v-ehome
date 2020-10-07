<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar left-text="新增地址"
                 left-arrow
                 fixed
                 @click-left="onClickLeft" />
    <Form class="address">
      <!-- 联系人 -->
      <van-field v-model="name"
                 class="people item"
                 label="联系人"
                 label-width='74px'
                 colon />
      <div class="line"></div>
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="tel"
                 class="phone item"
                 type="tel"
                 label="手机号"
                 label-width='74px'
                 colon />
      <div class="line"></div>
      <!-- 输入服务地址 -->
      <van-field v-model="address"
                 class="service-address item"
                 label="服务地址"
                 label-width='74px'
                 is-link
                 clearable
                 colon />

      <div class="line"></div>
      <!-- 详细地址 -->
      <van-field v-model="FullAddress"
                 colon
                 rows="2"
                 autosize
                 class="Full-address"
                 label="详细地址"
                 label-width='74px'
                 type="textarea" />
      <!-- 保存按钮 -->
      <van-button class='btn'
                  block
                  type="info"
                  native-type="submit">
        提交
      </van-button>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: '13267940376',
      name: '请输入姓名',
      address: '华人巨擘商业文化园',
      FullAddress: '6号楼6单元1606室'
    }
  },
  methods: {
    // 点击箭头跳转到上一级页面
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less' scoped>
// 导航栏
.van-nav-bar {
  height: 128px;

  background-color: #0090ff;
  /deep/.van-nav-bar__left {
    font-size: 34px;
    // 左侧箭头样式
    /deep/ .van-icon {
      color: #fff;
      font-size: 34px;
    }
    // 左侧文字样式
    /deep/.van-nav-bar__text {
      color: #fff;
    }
  }
}
// 表单
.address {
  margin-top: 128px;
  color: #666 !important;
  .item {
    padding: 0 30px;
    height: 88px;
    line-height: 88px;
    // 控制 联系人地址的右侧箭头垂直居中
    /deep/.van-icon::before {
      line-height: 88px;
    }
    // /deep/ .van-field__body {
    //   width: 100px;
    // }
    // 控制label文字颜色

    /deep/ .van-field__body {
      /deep/ .van-field__control {
        color: #666;
      }
    }
  }
  // 线段
  .line {
    height: 2px;
    background-color: #d7d7d7;
    width: 690px;
    margin: 0 auto;
  }
  // 详细地址
  .Full-address {
    padding: 0 30px;
    height: 128px;
    /deep/.van-field__label {
      padding-top: 28px;
    }
    // 控制label文字颜色
    /deep/ .van-field__control {
      padding-top: 28px;
      color: #666;
    }
  }
  // 保存按钮
  .btn {
    width: 690px;
    height: 98px;
    background: #0090ff;
    border-radius: 8px;
    position: fixed;
    bottom: 30px;
    left: 30px;
    font-size: 32px;
  }
}
</style>
