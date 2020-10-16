<template>
  <div class="hello">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o"
                       @click="goToHome">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? icon.indexActive : icon.indexNoActive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="home-o"
                       @click="goToOrder">
        <span>订单</span>
        <template #icon="props">
          <img :src="props.active ? icon.orderActive : icon.orderNoActive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="home-o"
                       @click="goToMine">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? icon.mineActive : icon.mineNoActive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data() {
    return {
      active: 0,
      icon: {
        // 首页的选中和未选中的 icon图片
        indexActive: require('../assets/imgs/shouye-xuanzhong.png'),
        indexNoActive: require('../assets/imgs/shouye-weixuanzhong.png'),
        // 订单的选中和未选中的 icon图片
        orderActive: require('../assets/imgs/dingdan-xuanzhong.png'),
        orderNoActive: require('../assets/imgs/dingdan-weixuanzhong.png'),
        // 我的 选中和未选中的 icon图片
        mineActive: require('../assets/imgs/wodedang-xuanzhong.png'),
        mineNoActive: require('../assets/imgs/wode-weixuanzhong.png')
      }
    }
  },
  methods: {
    // 跳转首页
    goToHome() {
      this.$router.push('/').catch(() => { })
    },
    // 跳转我的页面
    goToMine() {
      this.$router.push('/mine').catch(() => { })
    },
    // 跳转订单首页
    goToOrder() {
      this.$router.push('/order').catch(() => { })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.van-tabbar {
  height: 98px;
  // 修改 tabb 的字体大小
  .van-tabbar-item {
    font-size: 20px;
    // 修改 tab icon图片的大小
    .van-tabbar-item__icon {
      img {
        width: 44px;
        height: 44px;
        margin-bottom: 8px;
      }
    }
  }
}
// 修改 vant 的 Tabbar 的固定定位 ---> 绝对定位
.van-tabbar--fixed {
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
