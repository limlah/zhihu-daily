<template>
  <div class="swiper">
    <!-- 
    设置 v-if="top_stories.length > 0"  
    防止 vue-awesome-swiper插件使用 v-for渲染数据时，设置loop:true无效
    -->
    <swiper  class=".swiper-container"
      :options="swiperOption"
      v-if="top_stories.length > 0">
      <!--在swiper-slide上绑click事件 添加 native-->
      <swiper-slide 
        @click.native="get_news_detail(story.id)"
        v-for="(story, index) in top_stories" 
        :key="index">
        <img :src="story.image">
        <div class="mask"></div>
        <h3 class="title">{{story.title}}</h3>
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
  },
  methods: {
    get_news_detail( id ) {
      this.$router.push({path: `article/${id}`})
    }
  }
};
</script>

<style lang="less" scoped>
.swiper {
  cursor: pointer;
  .swiper-container {
  position: relative;
  height: 55vh;
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
  }
  .title {
    position: absolute;
    width: 60%;
    bottom: 20%;
    right: 5%;
    color: #fff;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
}
</style>
