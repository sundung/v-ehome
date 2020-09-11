<template>
  <van-swipe class="goods-swipe" :autoplay="2500">
    <van-swipe-item v-for="thumb in goods.thumbs" :key="thumb">
      <img :src="thumb" alt="apple" />
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
          'https://yanxuan.nosdn.127.net/45b56c310ba2658f013a7847129cb4e2.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/b6eb9066fb29c0fd14373e554b4cc838.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/72440d65cbb26a337dbf84233d97e23b.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
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
