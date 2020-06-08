<template>
  <section>
    <div class="case">
      <div class="swiper-item">
        <!-- <div class="button prev" @click="prevSlideClick"></div>-->
        <MySwiper ref="swiper" v-if="list.length>0">
          <MySlide v-for="(item,index) in list" :key=index>
            <img :src="item.img" alt="图片失踪了ΣO△O!)"/>
          </MySlide>
        </MySwiper>
        <!--<div class="button next" @click="nextSlideClick"></div>-->
      </div>
    </div>

    <div class="info">
      <ul class="home-page0">
        <img src="../../assets/homePage-1-title.png" alt="none"
             style="width: 18%;margin-top: 15%;margin-left: 19%">
        <div style="background: rgb(255, 255, 255);width: 50%;height: 80%;margin-left: 44%;margin-top: -18%;">
          <img src="../../assets/homePage-1-img1.png" alt="none"
               style="width: 14%;position: absolute;">
          <p class="homePage-title-number"
             style="margin-left: 16%">01</p>
          <div class="words" style="width: 26%;margin-left: 16%;margin-top: 3%;position: absolute;">
            咪咕互娱游戏研发支撑方：多年支撑咪咕互娱自研游戏和政企快游的产品研发，主要作品包括《咪咕斗地主》、《我为歌狂》、《移答到底》、《百团大战》等，其中《我为歌狂》被评为2019年金翎奖“玩家最期待游戏奖”。
          </div>
          <img src="../../assets/homePage-1-line.png" style="width: 38%;position: absolute;margin-top: 13%;" alt="none">
          <p class="homePage-title-number"
             style="margin-top: 14%">02</p>
          <div class="words" style="width: 26%;margin-top: 17%;position: absolute;">
            自研游戏：公司拥有强大的游戏研发能力，自研游戏超过300款，产品包括《病毒砰砰砰》、《乒乓加油》、《Need For Speeds》等优质游戏。
          </div>
          <img src="../../assets/homePage-1-img2.png" alt="none"
               style="width: 14%;position: absolute;margin-top: 15%;margin-left: 28%;">
        </div>
      </ul>
      <ul class="home-page1">
        <img src="../../assets/homePage-2-title.png" alt="none"
             style="width: 18%;margin-top: 14%;margin-left: 19%">
        <div style="background: #eeeeee;width: 50%;height: 80%;margin-left: 44%;margin-top: -20%;">
          <img src="../../assets/homePage-2-img1.png" style="width: 24%" alt="none">
          <img src="../../assets/homePage-2-img2.png" style="width: 24%;margin-left: 3%" alt="none">
          <img src="../../assets/homePage-2-img3.png" style="width: 24%;margin-left: 3%" alt="none">
          <div class="words" style="width: 40%;margin-top: 1%;position: absolute;">
            ① 海外发行：华为APPtouch平台长期排名TOP3的合作伙伴，在包括东南亚、中东、非洲等多个区域的26个国家、40多个项目为华为提供游戏产品和运营推广，累计发展订阅用户超100万。<br/>②
            国内发行：我们与QQ小游戏、海信等优质渠道合作，发行多款手机游戏、电视游戏，拥有丰富的国内游戏发行经验。
          </div>
        </div>
      </ul>
      <ul class="home-page2">
        <img src="../../assets/homePage-3-title.png" alt="none"
             style="width: 19%;margin-top: 15%;margin-left: 19%">
        <div style="width: 50%;height: 80%;margin-left: 44%;margin-top: -20%;">
          <img src="../../assets/homePage-3-img1.png" style="width: 28%" alt="none">
          <div class="page3-title" style="position: absolute;margin-left: 16%;margin-top: -8.5%;">ZStore手游平台</div>
          <div class="words" style="width: 32%;margin-top: -6.2%;margin-left: 16%;position: absolute;">
            由科源自主研发，为运营商提供的一套提升用户剩余价值的解决方案。平台通过精美小游戏和丰富运营活动，结合运营商计费能力，实现用户价值变现。目前该平台已正式于埃及，墨西哥，南非等国运营商签署合作协议。
          </div>
          <img src="../../assets/homePage-3-line.png" alt="none"
               style="width: 35%;position: absolute;margin-top: 13%;margin-left: -14%;"/>
          <img src="../../assets/homePage-3-img2.png"
               style="width: 14%;margin-top: 15%;margin-left: -14%;position: absolute;" alt="none">
          <div class="page3-title" style="position: absolute;margin-left: 16%;margin-top: 6.5%;">科宝乐园电视游戏平台</div>
          <div class="words" style="width: 32%;margin-top: 9%;margin-left: 16%;position: absolute;">
            与知名教育公司童印合作，面向学龄前幼儿教育市场，为儿童早期情商培养、性格养成、社会探索等提供启发教育。产品均为自主研发，目前已在天津、河南、河北、贵州、吉林、山东等九省联通的IPTV上线。
          </div>
        </div>
      </ul>
      <div class="home-page3">
        <img src="../../assets/home-04.png" alt="none" style="width: 100%">
      </div>
      <div class="home-page4">
        <p class="lianxi-title"
           style="margin-left: 42%;margin-top: 6%;">江苏科源信息技术有限公司</p>
        <img src="../../assets/homePage-1-line.png" style="width: 40%;position: absolute;margin-top: 10%;margin-left: 42%;" alt="none">
        <div class="lianxi-words">地址：南京市雨花台区宁双路19号云密城K座1602室<br/>邮箱：zhangxu@keyuannet.com<br/>邮编：210000<br/>电话：025
          —85550615</div>
      </div>
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
            img: require('../../assets/home-lunbo1.png')
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
    .home-page0 {
      display: inline-block;
      width: 100%;
    }

    .home-page1 {
      display: inline-block;
      width: 100%;
      background: #eeeeee;
    }

    .home-page2 {
      display: inline-block;
      width: 100%;
    }

    .home-page3 {
      display: inline-block;
      width: 100%;
      height: auto;
    }

    .home-page4 {
      display: inline-block;
      width: 100%;
      background:  url(../../assets/title.png) no-repeat center center;;
      background-size: 100%;
    }
  }

  .homePage-title-number {
    font-weight: bold;
    color: rgba(16, 124, 250, 1);
    font-family: Source Han Sans CN;
    position: absolute;
  }

  .lianxi-title {
    font-weight: bold;
    color: rgba(16, 124, 250, 1);
    font-family: Source Han Sans CN;
    position: absolute;
  }

  .words {
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: rgba(130, 130, 130, 1);
  }

  .lianxi-words {
    width: 42%;
    margin-left: 42%;
    margin-top: 11%;
    line-height: 200%;
    letter-spacing: 1px;
    font-family:Source Han Sans CN;
    color:rgba(49,49,49,1);
  }

  .page3-title {
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: rgba(49, 49, 49, 1);
  }

  @media (min-width: 1920px) {
    .homePage-title-number {
      font-size: 0.6rem;
    }
    .words {
      font-size: 0.45rem;
    }
    .page3-title {
      font-size: 0.55rem;
    }
    .lianxi-title {
      font-size: 0.55rem;
    }
    .lianxi-words {
      font-size: 22px;
    }

    .home-page0 {
      height: 14rem;
    }
    .home-page1 {
      height: 13rem;
    }
    .home-page2 {
      height: 13.5rem;
    }
    .home-page4 {
      height: 11rem;
    }
  }

  @media (min-width: 1000px) {
    .homePage-title-number {
      font-size: 0.55rem;
    }
    .words {
      font-size: 0.35rem;
    }
    .page3-title {
      font-size: 0.48rem;
    }
    .lianxi-title {
      font-size: 0.5rem;
    }
    .lianxi-words {
      font-size: 20px;
    }

    .home-page0 {
      height: 12rem;
    }
    .home-page1 {
      height: 11rem;
    }
    .home-page2 {
      height: 11.5rem;
    }
    .home-page4 {
      height: 9rem;
    }
  }

  @media (max-width: 1580px) {
    .homePage-title-number {
      font-size: 0.5rem;
    }
    .words {
      font-size: 0.3rem;
    }
    .page3-title {
      font-size: 0.4rem;
    }
    .lianxi-title {
      font-size: 0.45rem;
    }
    .lianxi-words {
      font-size: 18px;
    }

    .home-page0 {
      height: 10rem;
    }
    .home-page1 {
      height: 9rem;
    }
    .home-page2 {
      height: 9.5rem;
    }
    .home-page4 {
      height: 7rem;
    }
  }

  @media (max-width: 1280px) {
    .homePage-title-number {
      font-size: 0.4rem;
    }
    .words {
      font-size: 0.2rem;
    }
    .page3-title {
      font-size: 0.3rem;
    }
    .lianxi-title {
      font-size: 0.35rem;
    }
    .lianxi-words {
      font-size: 16px;
    }

    .home-page0 {
      height: 8rem;
    }
    .home-page1 {
      height: 7rem;
    }
    .home-page2 {
      height: 8rem;
    }
    .home-page4 {
      height: 6rem;
    }
  }
</style>
