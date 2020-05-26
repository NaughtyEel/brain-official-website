<template>
  <section>
    <div class="case">
      <div class="swiper-item">
        <div class="button prev" @click="prevSlideClick"></div>
        <MySwiper ref="swiper" v-if="list.length>0">
          <MySlide v-for="(item,index) in list" :key=index>
            <img :src="item.img" alt="图片失踪了ΣO△O!)"/>
          </MySlide>
        </MySwiper>
        <div class="button next" @click="nextSlideClick"></div>
      </div>
    </div>

    <div class="info">
      <ul class="home-page1">
        <img style="width: 100%;height: 100%" alt="NONE" src="../../assets/home-1.png"/>
      </ul>
      <ul class="home-page2">
        <img style="width: 100%;height: 100%" alt="NONE" src="../../assets/home-2.png"/>
      </ul>
      <ul class="home-page3">
        <img style="width: 100%;height: 100%" alt="NONE" src="../../assets/home-3.png"/>
      </ul>
      <ul class="home-page4">
        <img style="width: 100%;height: 100%" alt="NONE" src="../../assets/home-4.png"/>
      </ul>
      <ul class="home-page5">
        <img style="width: 100%;height: 100%" alt="NONE" src="../../assets/home-5.png"/>
      </ul>
    </div>
  </section>
</template>

<script>
  // import { Swiper, Slide } from 'vue-swiper-component'
  import {MySwiper, MySlide} from '../../components/index'

  export default {
    components: {
      MySwiper,
      MySlide
    },
    data() {
      return {
        list: [
          {
            img: require('../../assets/home-lunbo1.jpg')
          }
        ]
      }
    },
    methods: {
      getNum(i) {
        this.$toast(`==当前滑到了第${i}个`, 400);
      },
      prevSlideClick() {
        this.$refs.swiper.prevSlide()
      },
      nextSlideClick() {
        this.$refs.swiper.nextSlide()
      },
      slideToClick() {
        this.$refs.swiper.slideTo(2)
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  html, body {
    margin: 0;
    padding: 0;
  }

  .case {
    height: 58%;
    background: #ffffff;
    background-size: 100% 14.8rem;
    display: inline-block;
    width: 100%;

    .swiper-item {
      margin: 0 auto;
      text-align: center;
      height: 58%;

      .button {
        top: 2.2rem;
        z-index: 9999;
        position: absolute;
        display: inline-block;
        width: 1.04rem;
        height: 8.78rem;
        background: url(../../assets/but-left-nor.png) no-repeat center center;
        background-size: 100% 1.04rem;

        &.prev {
          position: absolute;
          left: 3%;
        }

        &:hover, &.active {
          background-image: url(../../assets/but-left-sel.png);
        }

        &.next {
          position: absolute;
          right: 3%;
          background-image: url(../../assets/but-right-nor.png);

          &:hover, &.active {
            background-image: url(../../assets/but-right-sel.png);
          }
        }
      }

      .wh_content {
        display: inline-block;
        width: 100%;

        .wh_swiper {
          .wh_slide {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            position: relative;

            img {
              display: inline-block;
              width: 100%;
              height: 100%;
              vertical-align: top;
              position: relative;
            }

            .disc {
              display: inline-block;
              text-align: justify;
              height: 8.78rem;
              padding: 0 0.926rem;
              z-index: 9999;
              box-sizing: border-box;
              position: absolute;
              color: #ffffff;
              margin-top: 160px;
              margin-left: 186px;
              left: 100px;
            }
          }
        }
      }
    }
  }

  .info {
    .home-page1 {
      display: inline-block;
      width: 100%;
      height: auto;
      max-height: 712px;
    }

    .home-page2 {
      display: inline-block;
      width: 100%;
      height: auto;
      max-height: 612.5px;
    }

    .home-page3 {
      display: inline-block;
      width: 100%;
      height: auto;
      max-height: 553px;
    }

    .home-page4 {
      display: inline-block;
      width: 100%;
      height: auto;
      max-height: 539px;
    }

    .home-page5 {
      display: inline-block;
      width: 100%;
      height: auto;
      max-height: 10.481481rem;
    }
  }
</style>
