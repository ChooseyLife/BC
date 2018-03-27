<template>
  <div class="header-container">
    <div class="header-content">
      <div class="header-logo">
        <img src="../../assets/logo.png">
      </div>
      <div class="header-name">
        <span>集美台商服务中心-能耗监管平台</span>
      </div>
    </div>
    <i-menu></i-menu>
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
    .header-content{
      overflow: hidden;
      .header-logo{
        float: left;
        padding: 0.5rem;
        font-size: 0;
        width: 6rem;
        height: 6rem;
        img{
          .img
        }
      }
      .header-name{
        display: inline-block;
        padding-top: 2.5rem;
        height: 6rem;
        font-size: 1.2rem;
      }
    }
}
</style>
