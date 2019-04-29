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
import { mapActions } from 'vuex'
export default {
  components: {
    swiper,
    list
  },
  created () {
    this.get_news_latest()
  },
  methods: {
    ...mapActions(['get_news_latest'])
  }
}
</script>

<style lang="less" scoped>

</style>
