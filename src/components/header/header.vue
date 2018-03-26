<template>
  <div class="header-container">
    <div class="header-logo">
      <img src="../../assets/logo.png">
    </div>
    <div class="header-name">
      <span>集美台商服务中心-能耗监管平台</span>
    </div>
    <div class="header-wather">
      <ul>
        <li class="item">
          <div class="item-img">
            <img src="../../assets/logo.png" alt="sign">
          </div>
          <div class="item-text">
            <h2 class="text-title">温度：32℃</h2>
            <p class="text-details">湿度：58%</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="header-qx">
      <span>admin</span>
      <span>退出</span>
    </div>
    <div>
      <i-menu></i-menu>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import iMenu from '@/components/menu/menu'
export default {
  data () {
    return {}
  },
  components: {
    iMenu
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/variable.less";
.header-container{
  position: relative;
  padding: 0 2em;
  width: 100%;
  height: 100%;
  background: @color-background-d;
  color: @color-text-line-d;
    .header-logo{
      float: left;
      font-size: 0;
      width: 6rem;
      height: 6rem;
        img{
          .img
        }
    }
    .header-name{
      display: inline-block;
      padding: 1rem;
      height: 6rem;
    }
    .header-qx{
      float: right;
      display: inline-block;
      padding: 1rem;
      height: 6rem;
    }
    .header-wather {
      float: right;
      padding: 1rem;
      color:  @color-text-dd;
      .item {
        display:flex;
        box-sizing:border-box;
        padding:0 20px 0 20px
      }
      .item-img{
        flex:0 0 60px;
        padding-right:20px;
        width:60px
      }
      .item-text{
        display:flex;
        flex-direction:column;
        justify-content:center;
        flex:1;
        line-height:20px;
        overflow:hidden;
        font-size:14px;
      }
      .text-title{
        margin-bottom:10px;
      }
      img{
        .img
      }
    }
}
</style>
