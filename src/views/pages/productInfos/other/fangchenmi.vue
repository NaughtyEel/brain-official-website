<template>
  <section>
    <div class="banner"></div>

    <el-button type="primary" style="background: #eee" @click="gotoBack" class="back">< 返回</el-button>

    <div class="info-box">
      <div class="info">
        <p class="text1">
          <span class="font1">服务热线：</span>
          <span class="font2">025-85550615</span>
        </p>
        <div class="text2">
          <p class="font1">附件一：监护人信息表明书<br/>
            附件二：被监护人信息表明书<br/>
            附件三：家长监护申请书<br/>
            申请条件：<br/>
            1、 申请人需为被监护未成年人的法定监护人；<br/>
            2、 申请人的被监护人年龄小于18周岁；<br/>
            3、 申请人需为大陆公民，不含港、澳、台人士。<br/>
            申请需提交材料：<br/>
            1、监护人信息表（包含监护人的身份证明复印件）；<br/>
            2、被监护人信息表（包含被监护人所玩游戏相关信息及身份证明复印件）；<br/>
            3、填写网络游戏未成年人家长监护申请书、保证书、授权书并手工签字（需下载，填写并打印，签字）；<br/>
            4、申请人与被监护人的监护关系证明文件（户口簿或有关机关出具的证明文件）。<br/>
            申请方式：<br/>
            1.电话服务<br/>
            监护人可以通过来专线电话来咨询，专线：025-85550615<br/>
            2.接待服务<br/>
            监护人可以直接上门进行申请，接待服务受理时间7*8小时（9:30—17:15），接待地址：杭州市西湖区三墩镇振中路202号7幢206室<br/>
            3.传真服务<br/>
            监护人可以通过传真发送相关信息，进行申请，传真24小时受理，<br/>
            传真号码：025-85550615<br/>
            进度查询：<br/>
            进度查询渠道：您可以拨打服务热线：025-85550615查询办理进度。<br/>
            其他要求：<br/>
            1.申请人应提交较完备的申请材料，对未提供的信息要及时补充；可请熟知电脑、互联网、游戏的人员进行协助，以便提供详实资料；<br/>
            2.申请人应保证提交的信息真实有效；对于提供虚假信息或伪造证件，我司将保留进一步追究法律责任的权利。<br/>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "product",
    components: {
    },
    data() {
      return {
      }
    },
    computed: {
      swiper() {
      }
    },
    mounted() {
    },
    methods: {
      gotoBack() {
        this.$router.replace('/product')
      },
    }
  }
</script>

<style lang="scss" scoped>
  .banner {
    width: 100%;
    height: 12.592593rem;
    background: url("../../../../../static/jianhu-banner.png") no-repeat center top;
    background-size: 32rem;
  }

  .back {
    outline:none;
    border-radius: 0.4rem;
    width: 1.5rem;
    height: 0.75rem;
    left: 3%;
    margin-top: 2%;
    position: absolute;
    background: #ffffff;
  }

  .info-box {
    width: 100%;
    height: 38rem;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -1rem;
    z-index: 0;

    .info {
      width: 80%;
      height: 36rem;
      background: #eeeeee;
      position: absolute;
      border-radius: 25px;
      .text1 {
        margin-top: 0.8rem;
        margin-left: 10%;
      }
      .text2 {
        margin-top: 0.8rem;
        margin-left: 10%;
      }
      .font1 {
        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:1.2rem;
      }
      .font2 {
        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:#F17C1D;
        line-height:40px;
      }
    }
  }
</style>
