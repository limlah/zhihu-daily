<template>
  <div class="container">
    <img :src="story.image">
    <p>{{story.title}}</p>
    <div v-html="story.body"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      story: {}
    }
  },
  mounted () {
    this.get_news()
  },
  methods: {
    get_news () {
      return axios.get(`/api/4/news/${this.$route.params.id}`).then(res => {
        if (res.status === 200 ) {
          this.story = res.data
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
