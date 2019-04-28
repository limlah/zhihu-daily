import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    top_stories: [],  // swiper组件中需要用到的数据
    today_stories: [], // 当日新闻
    date: '', // 日期
    before_stories: [], // 今天之前的新闻
  },
  mutations: {

  },
  actions: {

  }
})
