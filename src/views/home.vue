<template>
  <div class="container">
     <header>
      <span class="iconfont icon-caidan"></span>
    </header>
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
import MescrollVue from "mescroll.js/mescroll.vue"; //mescroll插件
import swiper from "../components/swiper";
import list from "../components/list";
import { mapActions, mapMutations } from "vuex";
export default {
  name: 'home',
  components: {
    swiper,
    list,
    MescrollVue,
  },
  created() {
    this.get_news_latest();
  },
  data() {
    return {
      mescroll: null,
      mescrollDown: {
        callback: this.downCallbakc
      },
      mescrollUp: {
        callback: this.upCallback,
        toTop: {
          html: 'Top',
          offset: 1000
        }
      }
    };
  },
  beforeRouteEnter (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
    // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
      vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter() // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
    })
  },
  beforeRouteLeave (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
  // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteLeave方法
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
    next()
  },
  methods: {
    ...mapMutations(["clear_before_stories"]),
    ...mapActions(["get_news_latest", "get_before_stories"]),

    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    // 上拉加载
    upCallback(page, mescroll) {
      this.get_before_stories()
        .then(res => {
          this.$nextTick(() => {
            mescroll.endSuccess();
          });
        })
        .catch(e => {
          mescroll.endErr();
        });
    },
    // 下拉刷新
    downCallbakc(mescroll) {
      this.clear_before_stories();
      this.get_news_latest()
        .then(() => {
          this.$nextTick(() => {
            mescroll.endSuccess();
          });
        })
        .catch(e => {
          mescroll.endErr();
        });
    }
  }
};
</script>

<style lang="less" scoped>

@media screen and (min-width: 650px) {
  main {
    width: 650px;
    left: 50%;
    transform: translate(-50%)
  }
}

.container {
  header {
    position: fixed;
    background-image: linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.5) 95%);
    width: 100vw;
    height: 8vh;
    z-index: 4;
    .icon-caidan {
      display: inline-block;
      color: #fff;
      font-size: 4vh;
      padding-top: 2vh;
      padding-left: 2vw;
    }
  }
  main {
    position: relative;
    .mescroll {
      z-index: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      height: 100vh;
    }
  }
  
}
</style>
