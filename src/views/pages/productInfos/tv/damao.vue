<template>
  <section>
    <div class="banner"></div>

    <!--<el-button type="primary" @click="gotoBack" class="back">< 返回</el-button>-->

    <div class="info-box">
      <div class="info">
        <div class="title1">
          <img src="../../../../../static/ico_title.png" alt="> "/>
          <div class="title-info">&ensp;基础信息:</div>
        </div>

        <div class="game-banner">
          <img src="../../../../../static/tv-damao/logo.jpg" alt="游戏LOGO">
          <div class="banner-info">
            <p class="text1">达猫小分队</p>
            <p style="margin-top: 2%">
              <span class="text2">类别:</span>
              <span class="text3">&ensp;动作游戏</span>
            </p>
            <p style="margin-top: 2%">
              <span class="text2">语言:</span>
              <span class="text3">&ensp;中文</span>
            </p>
            <p style="margin-top: 2%">
              <span class="text2">简介:</span>
              <span class="text3">&ensp;《达猫小分队》是一款挑战玩家操纵和反应能力的益智休闲类电视游戏。</span>
            </p>
          </div>
        </div>

        <div class="line"></div>

        <div class="title1">
          <img src="../../../../../static/ico_title.png" alt="> "/>
          <div class="title-info">&ensp;游戏截图:</div>
        </div>

        <div class="lunbotu">
          <div class="button prev" @click="prevSlideClick"></div>
          <div class="swiper-container swiper-no-swiping">
            <swiper ref="productSwiper" :options="swiperOption1">
              <swiper-slide><img preview="6" src="../../../../../static/tv-damao/zhanshi-1.jpg"/></swiper-slide>
              <swiper-slide><img preview="6" src="../../../../../static/tv-damao/zhanshi-2.jpg"/></swiper-slide>
              <swiper-slide><img preview="6" src="../../../../../static/tv-damao/zhanshi-3.jpg"/></swiper-slide>
              <swiper-slide><img preview="6" src="../../../../../static/tv-damao/zhanshi-4.jpg"/></swiper-slide>
            </swiper>
          </div>
          <div class="button next" @click="nextSlideClick"></div>
        </div>

        <div class="line"></div>

        <div class="title1" style="margin-top: 4%">
          <img src="../../../../../static/ico_title.png" alt="> "/>
          <div class="title-info">&ensp;游戏描述:</div>
        </div>

        <div style="width: 80%;font-size: 18px;margin-left: 10%;margin-top: 2%">
          《达猫小分队》是一款益智休闲类电视游戏。玩家通过操控老鼠跳跃障碍、获得芝士从而躲避猫的追捕，赢得分数。刺激有趣的玩法体验,充满挑战的无限关卡，不断挑战自我！多次游戏都不会觉得厌烦，这是一个挑战玩家操纵和反应能力的游戏。
        </div>
      </div>
    </div>
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
          slidesPerView : 4,
          spaceBetween : '1%',
          navigation: {
            outline: 'none',
          },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.productSwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper);
    },
    methods: {
      gotoBack() {
        //跳转到上一次浏览的页面  this.$router.go(-1)
        this.$router.replace('/product')
      },
      prevSlideClick() {
        this.swiper.slidePrev();
      },
      nextSlideClick() {
        this.swiper.slideNext();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .banner {
    width: 100%;
    height: 12.592593rem;
    background: url("../../../../../static/tv-damao/banner.jpg") no-repeat center top;
    background-size: 100% 12.592593rem;
  }

  .back {
    outline:none;
    border-radius: 0.4rem;
    width: 1.5rem;
    height: 0.75rem;
    left: 3%;
    margin-top: 3%;
    position: absolute;
    background: #ffffff;
  }


  .info-box {
    width: 100%;
    height: 24rem;
    background: #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;

    .info {
      width: 80%;
      height: 23rem;
      background: #ffffff;
      position: absolute;

      .title-info {
        display: inline-block;
        font-size: 18px;
      }

      .title1 {
        margin-top: 0.4rem;
        margin-left: 2%;
      }

      .game-banner {
        margin-top: 0.4rem;
        margin-left: 2%;

        img {
          width: 4rem;
          height: 4rem;
        }

        .banner-info {
          height: 4rem;
          margin-left: 250px;
          margin-top: -210px;
          background: #ffffff;

          .text1 {
            font-size: 30px;
            font-weight: 900;
          }

          .text2 {
            margin-left: 0.2%;
            font-size: 18px;
          }

          .text3 {
            font-size: 18px;
            color: #4071e2;
          }
        }
      }

      .line {
        height: 2px;
        border-bottom: 1px solid #e2e2e2;
        margin: 40px auto 0px auto;
        width: 1230px;
      }

      .lunbotu {
        width: 80%;
        height: 7.6rem;
        background: #ffffff;
        margin-top: 0.6rem;
        margin-left: 10%;

        .swiper-container {
          width: 100%;
          height: 7.6rem;
          z-index: 0;
          img {
            width: 4.6rem;
            height: 2.6rem;
            margin-top: 50%;
          }
        }

        .button {
          top: 2.2rem;
          z-index: 0;
          position: absolute;
          display: inline-block;
          width: 1.04rem;
          height: 8.78rem;
          background: url(../../../../../src/assets/zuojiantou2.png) no-repeat center center;
          background-size: 100% 1.04rem;

          &.prev {
            position: absolute;
            margin-top: 20%;
            left: 4%;
          }

          &:hover, &.active {
            background-image: url(../../../../../src/assets/zuojiantou2-xuanzhong.png);
          }

          &.next {
            position: absolute;
            margin-top: 20%;
            right: 4%;
            background-image: url(../../../../../src/assets/youjiantou2.png);

            &:hover, &.active {
              background-image: url(../../../../../src/assets/youjiantou2-xuanzhong.png);
            }
          }
        }
      }


    }
  }
</style>
