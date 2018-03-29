<template>
  <div id="app">
    <header-bar></header-bar>
    <i-menu></i-menu>
    <app-main></app-main>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HeaderBar from '@/components/layout/HeaderBar.vue'
import AppMain from '@/components/layout/AppMain.vue'
import FooterBar from '@/components/layout/FooterBar.vue'
import iMenu from '@/components/layout/Navbar'
export default {
  name: 'App',
  components: {
    HeaderBar,
    iMenu,
    AppMain,
    FooterBar
  }
}
</script>

<style>

</style>
