<template>
  <div>
    <div class="contact_info_wrap">
      <div class="item">
        <div class="title">联系人：</div>
        <div class="content">张三 13252524141</div>
      </div>
      <div class="item">
        <div class="title">服务地址：</div>
        <div class="content">北京朝阳区香江北路20号马泉营一区</div>
      </div>
      <div class="item">
        <div class="title">下单时间：</div>
        <div class="content">2020-07-17（周五）17:24</div>
      </div>
      <div class="item">
        <div class="title">上门服务时间：</div>
        <div class="content">2020-07-17（周五）17:24</div>
      </div>
      <div class="item">
        <div class="title">订单编号：</div>
        <div class="content">3677438945678476788</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.contact_info_wrap {
  .item {
    background-color: #fff;
    height: 88px;
    line-height: 88px;
    padding: 0 30px;
    color: #666;
    font-size: 24px;
    display: flex;
    .title {
      width: 168px;
    }
    .content {
      text-align: right;
    }
  }
}
</style>
