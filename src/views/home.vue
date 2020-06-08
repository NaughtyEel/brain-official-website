<template>
  <div>
    <el-row class="container" :class="isopacity?'isopa':''">
      <el-col :span="12" style="width: 40%" class="logo">
        <div class="logoImg"></div>
      </el-col>
      <el-col :span="12" style="width: 60%" class="nav">
        <el-menu :default-active="$route.path" style="margin-left: 16%" class="el-menu-vertical-demo"
                 @open="handleopen"
                 @close="handleclose"
                 mode="horizontal"
                 @select="handleselect" unique-opened router>
          <el-menu-item index="/homePage" key="/homePage">
            <p style="margin-top: -0.18rem">公司首页</p>
            <p style="margin-top: -1rem">Home</p>
          </el-menu-item>
          <el-menu-item index="/introduce" key="/introduce">
            <p style="margin-top: -0.18rem">公司介绍</p>
            <p style="margin-top: -1rem">About Us</p>
          </el-menu-item>
          <el-submenu style="margin-right: 5%;" index="/product">
            <template slot="title">
              <span @click="gotoProduct()">
                <p style="margin-top: -0.18rem">公司产品</p>
                <p style="margin-top: -1rem">Products</p>
              </span>
            </template>
            <div style="
            border: none;
            border-radius: 2px;
            -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            width: 3.6rem;
            background: #ffffff;
            float: none;
            line-height: 32px;
            margin-top: 62px;
            z-index: 999999;
            padding: 0 10px;
            color: #909399;">
              <el-menu-item class="biaoti" index="/other/prevention-of-addiction"
                            key="/other/prevention-of-addiction">未成年人家长监护体系
              </el-menu-item>
              <el-menu-item class="biaoti" index="/product"
                            key="/product">公司游戏
              </el-menu-item>

              <!--<el-menu-item class="biaoti" index="/tv/yuanbao">源宝乐园
              </el-menu-item>-->

              <!--<el-menu-item style="
               outline:none;
            font-size: 13px;
            color: #712fda;
            padding: 0 16px;
            cursor: pointer;
            -webkit-transition: border-color .3s,background-color .3s,color .3s;
            transition: border-color .3s,background-color .3s,color .3s;
            box-sizing: border-box;" index="/product" key="/product">—— 查看所有产品 ——
              </el-menu-item>-->
            </div>
          </el-submenu>
          <el-menu-item index="/joinUs" key="/joinUs">
            <p style="margin-top: -0.18rem">加入我们</p>
            <p style="margin-top: -1rem">Join Us</p>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="content-wrapper">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-col>
    </el-row>
    <el-row class="footer">
      <div class="ownerShip">
        <router-link to="/homePage" style="font-size:14px;color: #ffffff;text-decoration: none">
          公司主页 ｜
        </router-link>
        <router-link to="/introduce" style="font-size:14px;color: #ffffff;text-decoration: none">
          公司介绍 ｜
        </router-link>
        <router-link to="/product" style="font-size:14px;color: #ffffff;text-decoration: none">
          公司产品 ｜
        </router-link>
        <router-link to="/joinUs" style="font-size:14px;color: #ffffff;text-decoration: none">
          加入我们
        </router-link>
      </div>
      <div class="ownerShip2">
        <span>Copyright @ 2016-2020 江苏科源网络技术有限公司 All rights reserved. 苏ICP备17070057号</span>
      </div>
    </el-row>
  </div>
</template>

<script>
  //import 'element-ui/lib/theme-chalk/index.css';
  export default {
    data() {
      return {
        screenHeight: document.body.clientHeight,
        isopacity: false,
      }
    },
    methods: {
      gotoProduct() {
        this.$router.replace('/product');
      },
      toProduct() {
        this.$router.replace('/product');
      },
      handleopen() {
        //console.log('handleopen');
      },
      handleclose() {
        //console.log('handleclose');
      },
      handleselect: function (a, b) {
      },
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 150) {
          this.isopacity = true;
        } else {
          this.isopacity = false;
        }
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      // 自适应屏幕分辨率
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenHeight = document.body.clientHeight
          that.screenHeight = window.screenHeight
        })()
      };
    },
    watch: {
      screenHeight(val) {
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if (!this.timer) {
          // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
          this.screenHeight = val
          this.timer = true
          let that = this
          setTimeout(function () {
            // 打印screenWidth变化的值
            console.log(that.screenHeight)
            that.timer = false
          }, 400)
        }
      }
    }
  };

</script>
<style>
  .el-submenu__title {
    height: 0.2rem;
  }

  .el-menu--horizontal {
    overflow: auto;
    height: 3.6rem;
  }
</style>
<style scoped lang="scss">
  .biaoti {
    outline: none;
    font-size: 12px;
    color: #303133;
    padding: 0 10px;
    cursor: pointer;
    -webkit-transition: border-color .3s, background-color .3s, color .3s;
    transition: border-color .3s, background-color .3s, color .3s;
    box-sizing: border-box;
  }

  .container {
    position: fixed;
    width: 100%;
    top: 0;
    height: 75px;
    line-height: 75px;
    background: #fff;
    z-index: 1000;
    display: flex;
    /*opacity: 0.9;*/
    .el-col {
      display: inline-block;
    }

    .logo {
      text-align: center;

      img {
        vertical-align: middle;
        width: 85px;
      }

      .logoImg {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        background: url(../assets/keyuan-logo.png) no-repeat center center;
        background-size: 150%;
        vertical-align: middle;
        position: absolute;
        top: -24%;
      }
    }

    .nav {
      .el-menu-item {
        display: inline-block;
        padding: 0 20px;
        cursor: pointer;
        margin-right: 6%;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #4a4a4a;
        outline: none;
        text-align: center;

        &.is-active {
          color: #FFAA09;
          font-size: 16px;
          font-weight:bold;
          text-shadow: 0px 6px 1px #eeeeee;
        }
      }

      .el-submenu {
        list-style: none;
        display: inline-block;
        padding: 0 20px;
        cursor: pointer;
        margin-right: 70px; //0.7rem;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #4a4a4a;
        outline: none;

        &.is-active {
          color: #FFAA09;
          font-size: 16px;
          font-weight:bold;
          text-shadow: 0px 6px 1px #eeeeee;
        }

        li {
          display: list-item;
          text-align: -webkit-match-parent;
        }

        .el-menu {
          border-right: solid 1px #e6e6e6;
          list-style: none;
          position: relative;
          margin: 0;
          padding-left: 0;
          background-color: #FFF;
        }

        ul {
          list-style-type: disc;
        }
      }
    }

    &.isopa {
      opacity: 0.1;
    }

    &:hover {
      opacity: 1;
    }
  }

  .content-wrapper {
    margin-top: 45px;
  }

  .footer {
    width: 100%;
    .build {
      height: 340px; //6.29rem;//340px;
      background: #eee;
      text-align: center;
      padding-top: 1.33rem;
      box-sizing: border-box;

      .builders {
        display: inline-block;
        box-sizing: border-box;
        text-align: left;
        width: 9.28rem;
        margin-right: 5rem;

        li {
          font-family: PingFangSC-Light;
          font-size: 18px; //0.33rem;//
          color: #757575;
          letter-spacing: 0;
          margin-bottom: 10px; //0.18rem;
          &.title {
            font-size: 30px; //0.56rem;
            margin-bottom: 30px; //0.56rem;
          }

          &.building {
            margin-bottom: 38px; // 0.7rem;
            img {
              display: inline-block;
              width: 143px; //2.65rem;
              margin-right: 58px; //1.07rem;
              vertical-align: middle;
            }
          }
        }
      }

      .qrCode {
        display: inline-block;
        width: 2.78rem; //37%;
        text-align: center;

        span {
          display: inline-block;
          width: 100%;
          margin-bottom: 15px; //0.27rem;
          font-family: PingFangSC-Light;
          font-size: 18px; //0.33rem;
          color: #757575;
          letter-spacing: 0;

          &.qr {
            width: 150px; //2.78rem;
            height: 150px; //2.78rem;
            background: white;
            background-size: 150px; //2.78rem;
          }
        }
      }
    }

    .ownerShip {
      background: #4A4A4A;
      height: 30px;
      line-height: 60px;
      text-align: center;
    }

    .ownerShip2 {
      background: #4A4A4A;
      height: 60px;
      line-height: 60px;
      text-align: center;

      span {
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        margin: 0 20px;
      }
    }
  }
</style>
