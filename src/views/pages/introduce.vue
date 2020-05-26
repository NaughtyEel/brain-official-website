<template>
  <section>
    <div class="introduce-case">
      <div class="swiper-item">
        <MySwiper ref="swiper" v-if="list.length>0">
          <MySlide v-for="(item,index) in list" :key=index>
            <img :src="item.img"/>
          </MySlide>
        </MySwiper>
      </div>
    </div>

    <el-row class="introduce-info">
      <el-col :span="12">
        <div class="img-jieshao">
          <img src="../../assets/introduce-jieshao.png" alt="none"/>
        </div>
      </el-col>
      <el-col :span="12">
        <el-row class="lunbotu">
          <div class="swiper-container">
            <swiper :options="swiperOption">
              <swiper-slide><img src="../../../static/introduce-heying1.jpg"/></swiper-slide>
              <swiper-slide><img src="../../../static/introduce-heying2.jpg"/></swiper-slide>
              <swiper-slide><img src="../../../static/introduce-heying3.jpg"/></swiper-slide>
              <swiper-slide><img src="../../../static/introduce-heying4.jpg"/></swiper-slide>
              <swiper-slide><img src="../../../static/introduce-heying5.jpg"/></swiper-slide>
              <swiper-slide><img src="../../../static/introduce-heying6.jpg"/></swiper-slide>
              <swiper-slide><img src="../../../static/introduce-heying7.jpg"/></swiper-slide>
            </swiper>
          </div>
        </el-row>
        <div style="position: absolute;width: 45%;height: 10%;margin-top: -3%;margin-left: 42%">
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
        <el-row>
          <div class="img-xiaotu1">
            <img src="../../assets/introduce-xiaotu1.png" alt="none"/>
          </div>
        </el-row>
        <el-row>
          <div style="margin-left: 43%;margin-top: 8%;">
          </div>
        </el-row>
      </el-col>
    </el-row>

    <div class="secends-info">
      <ul class="introduce-page1">
        <img style="height: 100%;width: 100%" src="../../assets/introduce-lichen.png" alt="图片未找到">
      </ul>
      <ul class="introduce-page2">
        <img style="height: 100%;width: 100%" src="../../assets/introduce-jiangxiang.png" alt="图片未找到">
      </ul>
      <ul class="introduce-page3">
        <img style="height: 100%;width: 100%" src="../../assets/home-5.png" alt="图片未找到">
      </ul>
    </div>
  </section>
</template>

<script>
  import {MySwiper, MySlide} from '../../components/index';
  import {Swiper, SwiperSlide} from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    components: {
      MySwiper,
      MySlide,
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        xzsrc: require('../../assets/lunbo-xz.png'),
        wxzsrc: require('../../assets/lunbo-wxz.png'),
        list: [
          {
            img: require('../../assets/banner1.png')
          }
        ],
        swiperOption: {
          autoplay: true,
          speed: 300,
          grabCursor: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              const xz =
                '<div style="margin: 3px;display:inline"><img src="./static/lunbo-xz.png" style="width: 2.5%;height: 2.5%"/></div>';
              const wxz =
                '<div style="margin: 3px;display:inline"><img src="./static/lunbo-wxz.png" style="width: 2.5%;height: 2.5%"/></div>';
              let res = '';
              if (current === 1) {
                res = xz + wxz + wxz + wxz + wxz + wxz + wxz;
              } else if (current === 2) {
                res = wxz + xz + wxz + wxz + wxz + wxz + wxz;
              } else if (current === 3) {
                res = wxz + wxz + xz + wxz + wxz + wxz + wxz;
              } else if (current === 4) {
                res = wxz + wxz + wxz + xz + wxz + wxz + wxz;
              } else if (current === 5) {
                res = wxz + wxz + wxz + wxz + xz + wxz + wxz;
              } else if (current === 6) {
                res = wxz + wxz + wxz + wxz + wxz + xz + wxz;
              } else if (current === 7) {
                res = wxz + wxz + wxz + wxz + wxz + wxz + xz;
              } else {
                res = wxz + wxz + wxz + wxz + wxz + wxz + wxz;
              }
              return res;
            }
          }
        }
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

  .swiper-slide .swiper-slide-duplicate {
    margin-top: 8% !important;
  }

  .swiper-slide .swiper-slide-duplicate .swiper-slide-duplicate-next {
    margin-top: 8% !important;
  }

  .el-col {
    border-radius: 4px;
  }

  .introduce-case {
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

  .swiper-pagination {
    width: 100%;

  }

  .introduce-info {
    width: 100%;
    max-height: 16.888889rem;
    height: auto;
    background: #ffffff;

    .img-jieshao {
      width: 13%;
      height: 25%;
      margin-top: 20%;
      margin-left: 21%;

      img {
        width: 80%;
        height: 80%;
      }
    }

    .lunbotu {
      width: 50%;
      margin-top: -25%;
      margin-left: 40%;

      .swiper-container {
        width: 90%;
        height: 80%;

        img {
          width: 100%;
          height: 85%;
        }
      }
    }

    .img-xiaotu1 {
      margin-left: 43%;
      margin-top: 4%;
      width: 44%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .secends-info {
    .introduce-page1 {
      display: inline-block;
      width: 100%;
      max-height: 693px;
      height: auto;
    }

    .introduce-page2 {
      display: inline-block;
      width: 100%;
      max-height: 777.875px;
      height: auto;
    }

    .introduce-page3 {
      display: inline-block;
      width: 100%;
      max-height: 10.481481rem;
      height: auto;
    }
  }
</style>
