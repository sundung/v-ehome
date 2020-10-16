<template>
  <van-swipe class="goods-swipe"
             :autoplay="2500">
    <van-swipe-item v-for="item in goods.thumbs"
                    :key="item">
      <img :src="item"
           alt="网络出问题了" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data() {
    return {
      goods: {
        // 轮播图图片
        thumbs: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg',
          'https://img.yzcdn.cn/vant/apple-3.jpg'
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-swipe {
  .van-swipe-item {
    img {
      height: 274px;
      width: 100%;
    }
  }
}
</style>
