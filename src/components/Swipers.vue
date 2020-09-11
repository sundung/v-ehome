<template>
  <div>
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      :auto-update="true"
      :auto-destroy="true"
    >
      <swiper-slide>
        <img
          src="http://p1.music.126.net/B-m4YqELE8eu4vJKx8ZNvA==/109951165309034514.jpg?imageView&quality=89"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="http://p1.music.126.net/prPyfG75Tuo4X49tOTVzMQ==/109951165308931930.jpg?imageView&quality=89"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="http://p1.music.126.net/qq9dLwxG3pYAClIIokhFqg==/109951165307844893.jpg?imageView&quality=89"
          alt=""
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Swipers',

  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="less" scoped>
.swiper {
  background-color: pink;
  .swiper-slide {
    height: 300px;
    width: 100vw;
    img {
      height: 100px;
      // width: 100%;
    }
  }
}
</style>
