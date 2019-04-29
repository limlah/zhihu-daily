<template>
  <div class="container">
    <p>{{date.substring(0,4)+"/"+date.substring(4,6)+"/"+date.substring(6,8)}}</p>
    <div 
      v-for="(story, index) in today_stories" 
      :key="index"
      @click="get_news_detail(story.id)">
      <img :src="story.images">
      <p>{{story.title}}</p>
    </div>

    <div v-for="(item, index) in before_stories" :key="'index' + index">
      <p>
        {{ item.date.substring(0,4)+"/"+item.date.substring(4,6)+"/"+item.date.substring(6,8) }}
      </p>
      <div 
        v-for="(story, index) in item.stories" 
        :key="'index'+ index"
        @click="get_news_detail(story.id)">
        <img :src="story.images">
        <p>{{ story.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['today_stories', 'date', 'before_stories'])
  },
  methods: {
    get_news_detail( id ) {
      this.$router.push({path: `article/${id}`})
    }
  }
}
</script>

<style lang="less" scoped>

</style>
