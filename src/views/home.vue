<template>
  <div class="container">
    <header></header>
    <aside></aside>
    <main>
      <swiper></swiper>
      <list></list>
    </main>
  </div>
</template>

<script>
import swiper from '../components/swiper'
import list from '../components/list'

export default {
  components: {
    swiper,
    list
  }
}
</script>

<style lang="less" scoped>

</style>
