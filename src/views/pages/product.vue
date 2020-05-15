<template>
  <section>
    <div class="banner">
      <div class="lunbotu">
        <div class="button prev" @click="prevSlideClick"></div>
        <div class="swiper-container">
          <swiper ref="productSwiper" :options="swiperOption1">
            <swiper-slide><img src="../../assets/chanpina1.jpg"/></swiper-slide>
            <swiper-slide><img src="../../assets/chanpina2.jpg"/></swiper-slide>
            <swiper-slide><img src="../../assets/chanpina3.png"/></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="button next" @click="nextSlideClick"></div>
      </div>
    </div>

    <div class="shouji">
      <img class="title" src="../../../static/shoujititle.png">
      <div class="shouji-lunbo">
        <div class="lunbotu2">
          <div class="button2 prev2" @click="prevSlideClick2"></div>
          <div class="swiper-container2">
            <swiper ref="productSwiper2" :options="swiperOption2">
              <swiper-slide><img src="../../assets/chanpina1.jpg"/></swiper-slide>
              <swiper-slide><img src="../../assets/chanpina2.jpg"/></swiper-slide>
              <div class="swiper-pagination2" slot="pagination"></div>
            </swiper>
          </div>
          <div class="button2 next2" @click="nextSlideClick2"></div>
        </div>
      </div>
    </div>

    <div class="tv">
      <img class="title" src="../../../static/TVtitle.png">
      <div class="tv-lunbo">
        <div class="lunbotu3">
          <div class="button3 prev3" @click="prevSlideClick3"></div>
          <div class="swiper-container3">
            <swiper ref="productSwiper3" :options="swiperOption3">
              <swiper-slide><img src="../../assets/tvproduct1.jpg"/></swiper-slide>
              <swiper-slide><img src="../../assets/tvproduct2.jpg"/></swiper-slide>
              <swiper-slide><img src="../../assets/tvproduct3.jpg"/></swiper-slide>
              <swiper-slide><img src="../../assets/tvproduct4.jpg"/></swiper-slide>
              <swiper-slide><img src="../../assets/tvproduct5.jpg"/></swiper-slide>
              <div class="swiper-pagination3" slot="pagination"></div>
            </swiper>
          </div>
          <div class="button3 next3" @click="nextSlideClick3"></div>
        </div>
      </div>
    </div>

    <div class="yewu"></div>
  </section>
</template>

<script>
  import {Swiper, SwiperSlide} from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: "product",
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption1: {
          autoplay: true,
          speed: 300,
          grabCursor: true,
          loop: true,
          navigation: {
            outline: 'none',
          },
        },
        swiperOption2: {
          autoplay: true,
          speed: 300,
          grabCursor: true,
          loop: true,
          slidesPerView : 3,
          centeredSlides : true,
          spaceBetween : 100,
          navigation: {
            outline: 'none',
          },
        },
        swiperOption3: {
          autoplay: true,
          speed: 300,
          grabCursor: true,
          loop: true,
          slidesPerView : 3,
          centeredSlides : true,
          spaceBetween : 100,
          navigation: {
            outline: 'none',
          },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.productSwiper.$swiper
      },
      swiper2() {
        return this.$refs.productSwiper2.$swiper
      },
      swiper3() {
        return this.$refs.productSwiper3.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper);
    },
    methods: {
      prevSlideClick() {
        this.swiper.slidePrev();
      },
      nextSlideClick() {
        this.swiper.slideNext();
      },
      prevSlideClick2() {
        this.swiper2.slidePrev();
      },
      nextSlideClick2() {
        this.swiper2.slideNext();
      },
      prevSlideClick3() {
        this.swiper3.slidePrev();
      },
      nextSlideClick3() {
        this.swiper3.slideNext();
      }

    }
  }
</script>

<style lang="scss" scoped>
  .banner {
    width: 100%;
    height: 12.592593rem;
    background: url("../../assets/product-banner.png") no-repeat center top;
    background-size: 100% 12.592593rem;
    position: relative;

    .lunbotu {
      width: 20rem;
      height: 11rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #ffffff;

      .swiper-container {
        width: 20rem;
        height: 11rem;

        img {
          width: 20rem;
          height: 11rem;
        }
      }

      .button {
        top: 2.2rem;
        z-index: 9999;
        position: absolute;
        display: inline-block;
        width: 1.04rem;
        height: 8.78rem;
        background: url(../../assets/zuojiantou1.png) no-repeat center center;
        background-size: 100% 1.04rem;

        &.prev {
          position: absolute;
          margin-top: -1rem;
          left: -22%;
        }

        &:hover, &.active {
          background-image: url(../../assets/zuojiantou1-xuanzhong.png);
        }

        &.next {
          position: absolute;
          margin-top: -1rem;
          right: -22%;
          background-image: url(../../assets/youjiantou1.png);

          &:hover, &.active {
            background-image: url(../../assets/youjiantou1-xuanzhong.png);
          }
        }
      }
    }
  }

  .shouji {
    width: 100%;
    height: 572px;
    background: white;
    background-size: 100% 572px;
    position: relative;

    .title {
      width: 8rem;
      margin-left: 6rem;
      margin-top: 1.2rem;
    }

    .shouji-lunbo {
      width: 25rem;
      height: 6rem;
      position: absolute;
      left: 50%;
      top: 70%;
      transform: translate(-50%, -70%);
      border-style: solid;
      border-width: 2px;
      background: #ffffff;
      .lunbotu2 {
        width: 24rem;
        height: 4rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #ffffff;

        .swiper-container {
          width: 24rem;
          height: 4rem;

          img {
            width: 8.2rem;
            height: 4rem;
          }
        }

        .button2 {
          top: 2.2rem;
          z-index: 9999;
          position: absolute;
          display: inline-block;
          width: 1.04rem;
          height: 8.78rem;
          background: url(../../assets/zuojiantou2.png) no-repeat center center;
          background-size: 100% 1.04rem;

          &.prev2 {
            position: absolute;
            margin-top: -4.64rem;
            left: -8%;
          }

          &:hover, &.active {
            background-image: url(../../assets/zuojiantou2-xuanzhong.png);
          }

          &.next2 {
            position: absolute;
            margin-top: -4.64rem;
            right: -8%;
            background-image: url(../../assets/youjiantou2.png);

            &:hover, &.active {
              background-image: url(../../assets/youjiantou2-xuanzhong.png);
            }
          }
        }
      }
    }
  }

  .tv {
    width: 100%;
    height: 572px;
    background: #eeeeee;
    background-size: 100% 572px;
    position: relative;

    .title {
      width: 8rem;
      margin-left: 6rem;
      margin-top: 1.2rem;
    }

    .tv-lunbo {
      width: 25rem;
      height: 6rem;
      position: absolute;
      left: 50%;
      top: 70%;
      transform: translate(-50%, -70%);
      border-style: solid;
      border-width: 2px;
      background: #eeeeee;
      .lunbotu3 {
        width: 24rem;
        height: 4rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #eeeeee;

        .swiper-container {
          width: 24rem;
          height: 4rem;

          img {
            width: 8.2rem;
            height: 4rem;
          }
        }

        .button3 {
          top: 2.2rem;
          z-index: 9999;
          position: absolute;
          display: inline-block;
          width: 1.04rem;
          height: 8.78rem;
          background: url(../../assets/zuojiantou2.png) no-repeat center center;
          background-size: 100% 1.04rem;

          &.prev3 {
            position: absolute;
            margin-top: -4.64rem;
            left: -8%;
          }

          &:hover, &.active {
            background-image: url(../../assets/zuojiantou2-xuanzhong.png);
          }

          &.next3 {
            position: absolute;
            margin-top: -4.64rem;
            right: -8%;
            background-image: url(../../assets/youjiantou2.png);

            &:hover, &.active {
              background-image: url(../../assets/youjiantou2-xuanzhong.png);
            }
          }
        }
      }
    }
  }

  .yewu {
    width: 100%;
    height: 12.96rem;
    background: url(../../assets/product-yewu.png) no-repeat center center;
    background-size: 100% 12.96rem;
  }
</style>
