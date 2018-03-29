<template>
  <header class="app-head">
    <div class="head-wrapper">
      <nav class="nav">
        <div class="nav-left">
          <div class="nav-item nav-logo"></div>
          <Icon type="navicon" class="nav-item"></Icon>
        </div>
        <div class="nav-left" style="flex-grow:5">
          <span class="nav-item">能耗监管平台</span>
        </div>
        <div class="nav-right">
          <a class="nav-item" href="#">退出</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {}
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/variable.less";
.ivu-icon{
  font-size: 1.5rem;
}
.app-head{
  position: fixed;
  min-width: 100%;
  z-index: 1024;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  .nav-logo{
    margin-left: 2rem;
    width: 4rem;
    background: url(../../assets/logo.png)no-repeat center;
    background-size: 85% 85%;
  }
}
.head-wrapper{
  flex-grow: 0;
  flex-shrink: 0;
}
.nav{
  align-items: stretch;
  background-color: white;
  display: -ms-flexbox;
  display: flex;
  min-height: 4rem;
  position: relative;
  text-align: center;
  z-index: 2;
  .nav-item{
    align-items: center;
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 1rem;
    justify-content: center;
    padding: 0.5rem 0.75rem;
  }
}
.nav-left{
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
.nav-right{
  justify-content: flex-end;
  display: flex;
}
.nav-left, .nav-right {
  align-items: stretch;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
}
header{
  align-items: stretch;
  background-color: white;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
