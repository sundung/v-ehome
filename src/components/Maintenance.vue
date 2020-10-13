<template>
  <div>
    <!-- 导航条 -->
    <van-nav-bar class="nav-bar"
                 left-text="维修清单"
                 left-arrow
                 @click-left="onClickLeft"
                 fixed />
    <!-- 维修清单主题 -->
    <div class="main">
      <van-form @submit="onSubmit">
        <van-field class="item"
                   readonly
                   name="维修清单"
                   label="维修清单" />
        <div class="line"></div>
        <!-- 维修类型 -->
        <van-field v-model="maintenance_widget"
                   class="item"
                   placeholder="中修/60元"
                   input-align='right'
                   name="维修类型"
                   label="维修类型" />
        <div class="line"></div>
        <!-- 维修说明 -->
        <van-field class="info"
                   readonly
                   label="维修说明" />
        <van-field v-model="battery"
                   class="info"
                   name="维修说明"
                   placeholder="需要更换电池" />

        <div class="line"></div>
        <!-- 维修材料 -->
        <van-field class="info"
                   readonly
                   label="使用材料：" />

        <div class="materials">
          <van-field v-model="materials"
                     class="info"
                     name="电源线"
                     input-align='left'
                     placeholder="电源线" />
          <van-field v-model="price"
                     class="info"
                     name="价格"
                     input-align='right'
                     placeholder="120元/根" />
          <van-field v-model="num"
                     class="info"
                     name="数量"
                     input-align='right'
                     placeholder="X 1" />
        </div>
        <!-- 确认维修按钮 -->
        <div class="button">
          <van-button round
                      block
                      type="info"
                      native-type="submit">
            确认维修
          </van-button>
        </div>
      </van-form>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // 维修类型
      maintenance_widget: '中修/60元',
      // 维修说明
      info: '',
      // 维修说明
      battery: '需要更换电池',
      // 更换的材料
      materials: '电源线',
      // 价格
      price: '120元/根',
      // 数量
      num: '1'

    }
  },
  methods: {
    // 返回上一级路由
    onClickLeft() {
      this.$router.go(-1)
    },
    // 提交维修清单,跳转到服务中订单详情页面
    onSubmit() {
      this.$router.push('/OrderServingDetail')
    }
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
// 维修清单主题开始
.main {
  margin-top: 100px;
  padding: 0 30px;
  box-sizing: border-box;
  background-color: #fff;
  // 清除 form中的字段的 van-field 内置 padding值
  .van-form {
    .van-cell {
      padding: 0;
    }
  }
  // 横线
  .line {
    height: 2px;
    width: 690px;
    margin: 0 auto;
    background-color: #d7d7d7;
  }
  .item {
    height: 88px;
    line-height: 88px;
    /deep/.van-field__label {
      width: 144px;
    }
  }
  // 维修说明
  .info {
    height: 75px;
    line-height: 75px;
    /deep/.van-field__label {
      width: 144px;
      height: 44px;
      // margin-top: 28px;
    }
  }
  // 维修材料
  .materials {
    display: flex;
  }
}
// 确认维修按钮
.button {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 30px;
  box-sizing: border-box;
  width: 750px;
  height: 158px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 0px rgba(153, 153, 153, 0.2);
  .van-button {
    width: 690px;
    height: 98px;
    background: #0090ff;
    border-radius: 8px;
    font-size: 32px;
  }
}
</style>
