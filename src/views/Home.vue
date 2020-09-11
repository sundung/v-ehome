<template>
  <div class="container">
    <!-- 轮播图 -->
    <Swipers></Swipers>
    <!-- grid宫格区域 -->
    <van-grid :column-num="3" :gutter="10" :border="false">
      <van-grid-item v-for="item in iconGrid" :key="item.text">
        <img :src="item.iconUrl" alt="" />
        <span>{{ item.text }}</span>
      </van-grid-item>
    </van-grid>
    <!-- 家电维修模块 -->
    <div class="jiadianweixiu" v-for="item in jiadian" :key="item.title">
      <div class="text">{{ item.title }}</div>
      <van-grid :column-num="3" :border="false">
        <van-grid-item v-for="(n, inx) in jiadian" :key="inx">
          <img :src="n.imgUrl" alt="" />
          <span>{{ n.span }}</span>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- Tabbar组件 -->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
// 导入 Tabbar 组件
import Tabbar from '@/components/Tabbar'
// 导入轮播图组件
import Swipers from '@/components/Swipers'
export default {
  // 注册组件
  components: {
    Tabbar,
    Swipers
  },
  data() {
    return {
      // icon 区域数据
      iconGrid: [
        {
          text: '家电维修',
          iconUrl: require('../assets/goods_icon/jiadianweixiu.png')
        },
        {
          text: '家电清洗',
          iconUrl: require('../assets/goods_icon/jiadianqingxi.png')
        },
        {
          text: '家电安装',
          iconUrl: require('../assets/goods_icon/jiadiananzhuang.png')
        },
        {
          text: '管道疏通',
          iconUrl: require('../assets/goods_icon/guandaoshutong.png')
        },
        {
          text: '水路维修',
          iconUrl: require('../assets/goods_icon/shuiluweixiu.png')
        },
        {
          text: '电路维修',
          iconUrl: require('../assets/goods_icon/dianluweixiu.png')
        }
      ],
      // 家电维修模块数据
      jiadian: [
        {
          title: '家电维修',
          imgUrl: require('../assets/goods_icon/tp-kongtiaojiafu.png'),
          span: '空调加氟'
        },
        {
          title: '家电安装',
          imgUrl: require('../assets/goods_icon/tp-kongtiaoweixiu.png'),
          span: '空调维修'
        },
        {
          title: '管道疏通',
          imgUrl: require('../assets/goods_icon/tp-reshuiqiweixiu.png'),
          span: '热水器维修'
        }
      ]
    }
  },
  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'background:#f8f8f8')
  },
  beforeDestroy() {
    document.querySelector('body').setAttribute('style', '')
  }
}
</script>

<style lang="less">
.container {
  width: 100%;
  height: 100%;
  .van-grid {
    margin-bottom: 0.25rem;
    background-color: #fff;
    img {
      height: 1rem;
      width: 1rem;
    }
    span {
      font-size: 0.3rem;
    }
  }
  // 家电维修模块
  .jiadianweixiu {
    height: 4.9125rem;
    background-color: #fff;
    margin-bottom: 1rem;
    .text {
      font-size: 0.45rem;
      padding: 0.375rem;
    }
    img {
      height: 2.625rem;
      width: 2.625rem;
    }
    span {
      margin-top: 0.25rem;
    }
  }
}
</style>
