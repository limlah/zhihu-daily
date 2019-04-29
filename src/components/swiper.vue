<template>
  <div class="container">
    <!-- 
    设置 v-if="top_stories.length > 0"  
    防止 vue-awesome-swiper插件使用 v-for渲染数据时，设置loop:true无效
    -->
    <swiper :options="swiperOption"  v-if="top_stories.length > 0">
      <swiper-slide 
        v-for="(story, index) in top_stories" 
        :key="index">
        <img :src="story.image">
        <div class="mask"></div>
        <h3>{{story.title}}</h3>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState } from 'vuex'
export default {
  name: "carrousel",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        loop: true,
        slidesPerView: 1
      }
    };
  },
  computed: {
    ...mapState(['top_stories'])
  }
};
</script>

<style lang="less" scoped>
</style>
