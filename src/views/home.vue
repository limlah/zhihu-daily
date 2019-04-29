<template>
  <div class="container">
    <header></header>
    <aside></aside>
    <main>
      <mescroll-vue ref="mescroll" 
        :down="mescrollDown" 
        :up="mescrollUp" 
        @init="mescrollInit">
        <swiper></swiper>
        <list></list>
      </mescroll-vue>
    </main>
  </div>
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue' //mescroll插件
import swiper from '../components/swiper'
import list from '../components/list'
import { mapActions, mapMutations } from 'vuex'
export default {
  components: {
    swiper,
    list,
    MescrollVue
  },
  data() {
    return {
      mescroll: null,
      mescrollDown: {
        callback: this.downCallbakc
      },
      mescrollUp: {
        callback: this.upCallback
      }
    };
  },
  created() {
    this.get_news_latest()
  },
  methods: {
    ...mapMutations(['clear_before_stories']),
    ...mapActions(["get_news_latest", "get_before_stories"]),

    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    // 上拉加载
    upCallback(page, mescroll) {
      this.get_before_stories().then(res => {
        this.$nextTick(() => {
          mescroll.endSuccess()
          })
        }).catch((e) => {
          mescroll.endErr()
        })
    },
    // 下拉刷新
    downCallbakc (mescroll) {
      this.clear_before_stories()
      this.get_news_latest().then(()=> {
        this.$nextTick(() => {
          mescroll.endSuccess()
        })
      }).catch((e) => {
          mescroll.endErr()
        })
    },
  }
};
</script>

<style lang="less" scoped>
.mescroll {
  position: fixed;
  top: 0;
  bottom: 0;
  height: auto;
}
</style>
