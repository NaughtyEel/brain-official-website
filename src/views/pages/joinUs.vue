<template>
  <section>
    <div class="join-case">
      <div class="swiper-item">
        <MySwiper ref="swiper" v-if="list.length>0">
          <MySlide v-for="(item,index) in list" :key=index>
            <img :src="item.img"/>
          </MySlide>
        </MySwiper>
      </div>
    </div>

    <div class="joinUs-info">
      <ul class="join-page1">
        <img src="../../assets/shuxian.png" alt="|"/>
        <li class="title">Java高级开发工程师</li>
        <div class="text">
          <div class="title2">职位描述:</div>
          <div style="height: 0.3rem"/>
          <div class="words">1. 负责开发公司软件产品平台服务端</div>
          <div class="words">2. 参与产品的需求分析和系统设计，关注功能可实现性</div>
          <div class="words">3. 负责产品功能设计实现，负责代码评审及单元测试</div>
          <div class="words">4. 负责相关技术文档规范和用户使用文档评审</div>
          <div style="height: 0.3rem"/>
          <div class="title2">任职要求:</div>
          <div style="height: 0.3rem"/>
          <div class="words">1. 计算机或相关专业本科或以上学历。精通Java语言以及J2EE相关技术，5年以上<br/>JAVA开发经验，3年以上大型平台系统开发经验</div>
          <div class="words">2. 精通Spring/SpringMVC/MyBatis等主流框架开发过程</div>
          <div class="words">3. 熟练使用Netty/Mina开发经验者优先</div>
          <div class="words">4. 掌握SQL语法，熟悉MySQL数据库管理系统,有较强的sql编写能力；熟悉数据库<br/>设计理论，具备一定的数据库调优能力</div>
          <div class="words">5. 有规范化、标准化的代码编写习惯，能独立编写技术文档，熟悉软件开发流程，<br/>对业务建模和相应的建模工具有一定的使用经验和理解</div>
          <div class="words">6. 有互联网产品分析设计、开发经验，熟悉多层和分布式开发</div>
          <div class="words">7. 良好的沟通能力及业务理解力</div>
          <div class="words">8. 熟悉Maven，SVN，Eclipse等常用项目管理工具、开发工具 </div>
          <div class="words">9. 熟悉Redis等互联网常用分布式系统 </div>
          <div class="words">10. 有开放API开发经验者优先</div>
        </div>
      </ul>

      <ul class="join-page2">
        <img src="../../assets/shuxian.png" alt="|"/>
        <li class="title">Java开发工程师</li>
        <div class="text">
          <div class="title2">职位描述:</div>
          <div style="height: 0.3rem"/>
          <div class="words">1. 负责开发公司软件产品平台服务端</div>
          <div class="words">2. 参与产品的需求分析和系统设计，关注功能可实现性</div>
          <div class="words">3. 负责产品功能设计实现，负责代码评审及单元测试</div>
          <div class="words">4. 负责相关技术文档规范和用户使用文档评审</div>
          <div style="height: 0.3rem"/>
          <div class="title2">任职要求:</div>
          <div style="height: 0.3rem"/>
          <div class="words">1. 本科及以上学历，计算机软件相关专业，4年以上开发经验</div>
          <div class="words">2. 精通Java语言和JavaEE体系结构，具备Web性能调优技能，掌握Web安全规范</div>
          <div class="words">3. 熟悉重构技术和设计模式</div>
          <div class="words">4. 熟悉常用开发框架和中间件，比如Spring、iBatis/MyBatis、Redis、ActiveMQ 等</div>
          <div class="words">5. 熟悉数据库MySQL，能够进行SQL性能调优</div>
          <div class="words">6. 熟悉TCP协议、NIO、多线程编程，有Netty、Mina使用经验优先</div>
          <div class="words">7. 熟悉分布式系统的设计和应用，熟悉分布式服务框架等机制，能对分布式常用技术进行合理应用解决问题</div>
          <div class="words">8. 工作有激情，学习能力强，团队协作能力强</div>
        </div>
      </ul>

        <ul class="join-page3">
          <img src="../../assets/shuxian.png" alt="|"/>
          <li class="title">高级Unity3d开发工程师</li>
          <div class="text">
            <div class="title2">职位描述:</div>
            <div style="height: 0.3rem"/>
            <div class="words">1. 能领导开发小组，快速准确的理解产品策划案，进行工作量预估和任务分配</div>
            <div class="words">2. 参与项目的客户端引擎设计与开发</div>
            <div class="words">3. 负责Unity3D游戏的设计、开发</div>
            <div class="words">4. 解决研发过程中的技术难题，优化游戏性能</div>
            <div style="height: 0.3rem"/>
            <div class="title2">任职要求:</div>
            <div style="height: 0.3rem"/>
            <div class="words">1. 计算机及相关专业，本科及以上学历</div>
            <div class="words">2. 具有3年以上游戏客户端研发经验或1款成功上线产品项目经验</div>
            <div class="words">3. 熟悉C#语言、Unity引擎开发，熟练使用Unity游戏开发相关的插件</div>
            <div class="words">4. 精通Unity3D引擎，精通数据结构和算法，精通常用设计模式</div>
            <div class="words">5. 熟悉图形学，能够与美术配合优化美术效果，以及相关性能优化</div>
            <div class="words">6. 具有良好的编码习惯和注释风格，富有责任感</div>
            <div class="words">7. 有较强的学习能力、分析能力、沟通能力和独立解决问题的能力</div>
            <div class="words">8. 热爱游戏、具备认真积极负责的工作态度,注重细节及用户体验的完善</div>
          </div>
        </ul>

        <ul class="join-page4">
          <img src="../../assets/shuxian.png" alt="|"/>
          <li class="title">人设美术</li>
          <div class="text">
            <div class="title2">职位描述:</div>
            <div style="height: 0.3rem"/>
            <div class="words">1.协助主美，完成游戏美术的开发包括：角色人设立绘、角色元件、道具设计、武器设计等。</div>
            <div style="height: 0.3rem"/>
            <div class="title2">任职要求:</div>
            <div style="height: 0.3rem"/>
            <div class="words">1. 热爱游戏，热爱动漫，熟悉并喜爱萌系饱和明亮色调的游戏风格，有3年以上玩各项<br/>游戏的经历。</div>
            <div class="words">2. 美术基础扎实，手绘能力强；有较强的鉴赏能力和美术修养</div>
            <div class="words">3. 熟练掌握2D游戏制作，通晓角色设计流程及方法，能在具体项目中美术风格基础上发挥设计和创意</div>
            <div class="words">5. 熟练掌握PS/AI/SAI/Painter/Flash等设计软件，对3D软件有一定程度的了解</div>
            <div class="words">6. 至少一款完整手游或网络休闲游戏原画设计工作经验</div>
            <div class="words">7. 有IOS或Android平台游戏制作经验者优先，有动画基础者优先 注：应聘简历中，请附代表性作品</div>
          </div>
        </ul>
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

  export default {
    components: {
      MySwiper,
      MySlide
    },
    name: "joinUs",
    data() {
      return {
        list: [
          {
            img: require('../../assets/banner1.png')
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

  .join-case {
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

  .joinUs-info {
    width: 100%;
    .join-page1 {
      width: 100%;
      background: #ffffff;

      img {
        width: 0.25%;
        margin-top: 28%;
        margin-left: 20%;
      }

      .text {
        position: absolute;
        width: 40%;
        margin-top: -29%;
        margin-left: 48%;
        display: block;

        .title2 {
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: rgba(49, 49, 49, 1);
        }
      }
    }

    .join-page2 {
      width: 100%;
      background: #eee;

      img {
        width: 0.25%;
        margin-top: 28%;
        margin-left: 20%;
      }

      .text {
        position: absolute;
        width: 40%;
        margin-top: -26%;
        margin-left: 48%;
        display: block;

        .title2 {
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: rgba(49, 49, 49, 1);
        }
      }
    }

    .join-page3 {
      width: 100%;
      background: #ffffff;

      img {
        width: 0.25%;
        margin-top: 28%;
        margin-left: 20%;
      }

      .text {
        position: absolute;
        width: 40%;
        margin-top: -24%;
        margin-left: 48%;
        display: block;

        .title2 {
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: rgba(49, 49, 49, 1);
        }
      }
    }

    .join-page4 {
      width: 100%;
      background: #eee;

      img {
        width: 0.25%;
        margin-top: 18%;
        margin-left: 20%;
      }

      .text {
        position: absolute;
        width: 40%;
        margin-top: -15%;
        margin-left: 48%;
        display: block;

        .title2 {
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: rgba(49, 49, 49, 1);
        }
      }
    }
  }

  .title {
    width: 20%;
    font-weight: bold;
    color: rgba(49, 49, 49, 1);
    line-height: 37px;
    position: absolute;
    margin-left: 22%;
    margin-top: -2.5%;
  }

  .words {
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: rgba(130, 130, 130, 1);
    line-height: 280%;
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

  @media (max-width: 1680px) {
    .words {
      font-size: 16px;
    }
    .title {
      font-size: 26px;
    }
    .title2 {
      font-size: 26px;
    }

    .join-page1 {
      height: 18rem;
    }
    .join-page2 {
      height: 16rem;
    }
    .join-page3 {
      height: 16rem;
    }
    .join-page4 {
      height: 14.2rem;
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
    .words {
      font-size: 15px;
    }
    .title {
      font-size: 24px;
    }
    .title2 {
      font-size: 24px;
    }

    .join-page1 {
      height: 17rem;
    }
    .join-page2 {
      height: 15rem;
    }
    .join-page3 {
      height: 15rem;
    }
    .join-page4 {
      height: 13.2rem;
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

  @media (max-width: 1480px) {
    .words {
      font-size: 14px;
    }
    .title {
      font-size: 22px;
    }
    .title2 {
      font-size: 22px;
    }

    .join-page1 {
      height: 16rem;
    }
    .join-page2 {
      height: 14rem;
    }
    .join-page3 {
      height: 14rem;
    }
    .join-page4 {
      height: 12.2rem;
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

  @media (max-width: 1380px) {
    .words {
      font-size: 13px;
    }
    .title {
      font-size: 20px;
    }
    .title2 {
      font-size: 20px;
    }

    .join-page1 {
      height: 15rem;
    }
    .join-page2 {
      height: 13rem;
    }
    .join-page3 {
      height: 13rem;
    }
    .join-page4 {
      height: 11.6rem;
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

  @media (max-width: 1280px) {
    .words {
      font-size: 12px;
    }
    .title {
      font-size: 18px;
    }
    .title2 {
      font-size: 18px;
    }

    .join-page1 {
      height: 14rem;
    }
    .join-page2 {
      height: 12rem;
    }
    .join-page3 {
      height: 12rem;
    }
    .join-page4 {
      height: 10.8rem;
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
