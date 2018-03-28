<template>
  <div>
    <Row>
      <Col span="3">
      <Menu active-name="1-2" :open-names="['1']">
        <Submenu name="4">
          <template slot="title">
            <Icon type="ios-gear"></Icon>
            Navigation Three
          </template>
          <MenuItem name="4-1">Option 9</MenuItem>
          <MenuItem name="4-2">Option 10</MenuItem>
          <MenuItem name="4-3">Option 11</MenuItem>
          <MenuItem name="4-4">Option 12</MenuItem>
        </Submenu>
      </Menu>
      </Col>
    </Row>
  </div>
</template>
<script>
import Submenu from '../../../node_modules/iview/src/components/menu/submenu.vue'

export default {
  components: {Submenu},
  data () {
    return {
      theme1: 'light'
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../common/less/variable.less";
</style>
