import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    set_today_stories ( state, data) {
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
    get_news_latest ({ commit }) {
      return axios.get('/api/4/news/latest').then( res => {
        if ( res.status === 200 ) {
          commit('set_top_stories', res.data.top_stories)
          commit('set_today_stories', res.data.stories)
          commit('set_date', res.data.date)
        } else {console.log('访问失败')}
      })
    },
    get_before_stories ({ state, commit }) {
      let date = ''
      if ( state.before_stories.length === 0 ) {
        date = state.date
      } else {
        date = state.before_stories[state.before_stories.length - 1].date
      }

      return axios.get('/api/4/news/before/' + date).then( res => {
        if ( res.status === 200 ) {
          commit('add_stories', res.data)
        }
      })
    }
  }
})

