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
    set_top_stories ( state, data) {
      state.top_stories = data
    },
    set_top_stories ( state, data) {
      state.today_stories = data
    },
    set_date ( state, data) {
      state.date = data
    },
    add_before_stories ( state, data ) {
      state.before_stories.push(data)
    },
    clear_before_stories ( state ) {
      state.before_stories = []
    }
  },
  actions: {

  }
})
