<template>
  <div id="app">
    <m-header></m-header>
    <i-menu></i-menu>
  </div>
</template>

<script>
import MHeader from './components/header/header'
import iMenu from './components/menu/menu.vue'
export default {
  name: 'App',
  components: {
    MHeader,
    iMenu
  }
}
</script>

<style>

</style>
