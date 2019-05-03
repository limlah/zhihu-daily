<template>
  <div class="list">
    <p class="time">
      {{date.substring(0,4)+"/"+date.substring(4,6)+"/"+date.substring(6,8)}}
    </p>
    <div 
      class="item"
      v-for="(story, index) in today_stories" 
      :key="index"
      @click="get_news_detail(story.id)">
      <img :src="story.images">
      <p>{{story.title}}</p>
    </div>

    <div v-for="(item, index) in before_stories" :key="'index' + index">
      <p class="time">
        {{ item.date.substring(0,4)+"/"+item.date.substring(4,6)+"/"+item.date.substring(6,8) }}
      </p>
      <div 
        class="item"
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
.list {
  display: block;
  margin: 0 3vw;
  .item {
    display: flex;
    margin: 3vh 0;
    box-shadow: 0 2px 10px 0 rgba(79, 95, 114, 0.1);
    border-radius: 1vw 1vw; 
    p {
      margin: 2vw;
      align-self: center;
    }
    img {
      border-radius: 1vw 1vw; 
    }
  }
}
</style>
