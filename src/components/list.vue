<template>
  <div class="container">
    <p>{{date.substring(0,4)+"/"+date.substring(4,6)+"/"+date.substring(6,8)}}</p>
    <div 
      v-for="(story, index) in today_stories" 
      :key="index">
      <img :src="story.images">
      <p>{{story.title}}</p>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['today_stories', 'date'])
  }
}
</script>

<style lang="less" scoped>

</style>
