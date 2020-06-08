<template>
  <section>
    <div class="introduce-info">
      <img src="../../assets/introduce-jieshao.png" style="width: 10%;margin-top: 20%;margin-left: 20%;" alt="none"/>

      <div class="lunbotu">
        <div class="swiper-container" style="margin-top: 10%">
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
      </div>
      <div style="position: absolute;width: 45%;height: 10%;margin-top: -3%;margin-left: 42%">
        <div class="swiper-pagination" slot="pagination"></div>
      </div>
      <div style="width: 38%;position: absolute;margin-top: 3%;margin-left: 46%;">
        <div class="introduce-words1">
          我司集游戏、动画、软件研发业务为一体，是国内专业从事游戏研发与发行的互联网技术公司。公司坚持内容自主研发作为基础，自研游戏产品超过500款。公司是中国移动旗下咪咕互娱的自研游戏支撑方，也是华为海外游戏APPTouch平台长期排名Top3的联合运营合作伙伴。
        </div>
        <img src="../../assets/homePage-1-line.png" alt="none" style="width: 100%;margin-left: -1%;margin-top: 5%"/>
        <img src="../../assets/introduce-1-img1.png" alt="none" style="width: 40%;margin-top: 4%;margin-left: -4%"/>
        <div
          style="position: absolute;width: 60%;height: 52%;margin-top: -30%;margin-left: 40%;">
          <div class="introduce-title1" style="">愿景</div>
          <div class="introduce-words2" style="margin-top: 12%">让世界更有趣</div>
          <div class="introduce-title1" style="margin-top: 2%">使命</div>
          <div class="introduce-words2" style="margin-top: 14%">通过创新的技术手段为用户提供更有乐趣的交互体验。</div>
        </div>
      </div>
    </div>

    <div class="introduce-page1">
      <img style="height: 100%;width: 100%" src="../../assets/introduce-lichen.png" alt="图片未找到">
    </div>

    <div class="lianxiwo">
      <p class="lianxi-title"
         style="margin-left: 42%;margin-top: 6%;">江苏科源信息技术有限公司</p>
      <img src="../../assets/homePage-1-line.png"
           style="width: 40%;position: absolute;margin-top: 10%;margin-left: 42%;" alt="none">
      <div class="lianxi-words">地址：南京市雨花台区宁双路19号云密城K座1602室<br/>邮箱：zhangxu@keyuannet.com<br/>邮编：210000<br/>电话：025
        —85550615
      </div>
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
    background: #eeeeee;

    .lunbotu {
      width: 50%;
      margin-top: -28%;
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


  .introduce-page1 {
    display: inline-block;
    width: 100%;
    max-height: 693px;
    height: auto;
  }

  .lianxiwo {
    display: inline-block;
    width: 100%;
    background: url(../../assets/title.png) no-repeat center center;;
    background-size: 100%;
  }

  .lianxi-title {
    font-weight: bold;
    color: rgba(16, 124, 250, 1);
    font-family: Source Han Sans CN;
    position: absolute;
  }

  .lianxi-words {
    width: 42%;
    margin-left: 42%;
    margin-top: 11%;
    line-height: 200%;
    letter-spacing: 1px;
    font-family: Source Han Sans CN;
    color: rgba(49, 49, 49, 1);
  }

  .introduce-words1 {
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    letter-spacing: 2px;
    line-height: 175%;
  }

  .introduce-title1 {
    font-weight: bold;
    color: rgba(16, 124, 250, 1);
    font-family: Source Han Sans CN;
    position: absolute;
  }

  .introduce-words2 {
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(1, 1, 1, 1);
    letter-spacing: 1px;
  }

  @media (min-width: 1920px) {
    .introduce-info {
      height: 18rem;
    }
    .introduce-words1 {
      font-size: 15px;
    }
    .introduce-title1 {
      font-size: 0.6rem;
    }
    .introduce-words2 {
      font-size: 20px;
    }

    .lianxi-title {
      font-size: 0.55rem;
    }
    .lianxi-words {
      font-size: 22px;
    }
    .lianxiwo {
      height: 11rem;
    }
  }

  @media (min-width: 1000px) {
    .introduce-info {
      height: 16rem;
    }
    .introduce-words1 {
      font-size: 15px;
    }
    .introduce-title1 {
      font-size: 0.5rem;
    }
    .introduce-words2 {
      font-size: 18px;
    }

    .lianxi-title {
      font-size: 0.5rem;
    }
    .lianxi-words {
      font-size: 20px;
    }
    .lianxiwo {
      height: 9rem;
    }
  }

  @media (max-width: 1580px) {
    .introduce-info {
      height: 14.5rem;
    }
    .introduce-words1 {
      font-size: 14px;
    }
    .introduce-title1 {
      font-size: 0.4rem;
    }
    .introduce-words2 {
      font-size: 16px;
    }

    .lianxi-title {
      font-size: 0.45rem;
    }
    .lianxi-words {
      font-size: 18px;
    }
    .lianxiwo {
      height: 7rem;
    }
  }

  @media (max-width: 1320px) {
    .introduce-info {
      height: 12rem;
    }
    .introduce-words1 {
      font-size: 13px;
    }
    .introduce-title1 {
      font-size: 0.3rem;
    }
    .introduce-words2 {
      font-size: 14px;
    }

    .lianxi-title {
      font-size: 0.35rem;
    }
    .lianxi-words {
      font-size: 16px;
    }
    .lianxiwo {
      height: 6rem;
    }
  }
</style>
