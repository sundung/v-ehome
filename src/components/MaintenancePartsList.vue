<template>
  <div>
    <div class="list_wrap">

      <van-cell title="维修清单"
                center
                value="重新获取"
                value-class='getData'
                to="/Maintenance" />
      <div class="line"></div>
      <van-cell title="维修类型"
                center
                value="中修/60元"
                value-class='getData' />
      <div class="line"></div>
      <van-cell center
                title="维修说明：" />
      <van-cell center
                title="需要更换电池" />
      <div class="line"></div>
      <van-cell title="使用材料："
                center />
      <van-cell title="电源线"
                center
                value="120元/根 X 1"
                value-class='getData' />
      <div class="line"></div>
      <van-cell value-class='getData'
                title=''
                value="合计：180元"
                center />
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
    // 提交维修清单,跳转到服务中订单详情页面
    onSubmit() {
      this.$router.push('/OrderServingDetail')
    }
  }
}
</script>

<style lang='less' scoped>
// 维修清单主题开始
.list_wrap {
  height: 568px;
  background-color: #fff;
  padding: 0 30px;
  margin-bottom: 20px;
  .van-cell {
    height: 80px;
    line-height: 80px;
    font-size: 24px;
    // 设置 重新获取 文字的颜色
    .getData {
      color: #0090ff;
    }
  }
  .line {
    width: 690px;
    height: 2px;
    background-color: #ccc;
  }
}
</style>
