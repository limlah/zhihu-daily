<template>
  <div class="article">
    <div class="icon" >
      <span class="iconfont icon-fanhui" @click="back"></span>
    </div>
    <div class="item">
      <img :src="story.image">
      <div class="mask"></div>
      <h3 class="title">{{story.title}}</h3>
      <div class="container" v-html="story.body"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      story: {}
    };
  },
  mounted() {
    this.get_news();
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    get_news() {
      return axios.get(`/api/4/news/${this.$route.params.id}`).then(res => {
        if (res.status === 200) {
          this.story = res.data;
        }
      });
    }
  }
};
</script>

<style  scoped>

@media screen and (min-width: 650px) {
  .item {
    width: 650px;
    left: 50%;
    transform: translate(-50%)
  }
}

.icon {
  position: fixed;
  background-image: linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.5) 95%);
  width: 100vw;
  height: 8vh;
  z-index: 6;
}

.icon-fanhui {
  display: inline-block;
  color: #fff;
  font-size: 4vh;
  padding-top: 2vh;
  padding-left: 2vw;
}

.item {
  position: relative;
  height: 55vh;
}
.item .mask {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
  z-index: 0;
}
.item .title {
  position: absolute;
  width: 60%;
  bottom: 20%;
  right: 5%;
  color: #fff;
}
.item img {
  width: 100%;
  height: 100%;
}

.container {
  margin: 0 2vw;
}

.container >>> .meta {
  display: flex;
  align-items: center;
}

.container >>> .meta span {
  margin-left: 1vw;
  font-size: 2vh;
  color: rgb(153, 160, 153);
}

.container >>> .meta .author {
  color: rgb(99, 212, 216);
}

.container >>> .meta img {
  border-radius: 0.5vw;
}

.container >>> .content {
  line-height: 150%;
  color: rgb(73, 67, 67);
}

.container >>> .content a,
.container >>> .view-more a {
  text-decoration: none;
  color: #3d7e9a;
}

.container >>> .view-more {
  padding: 2vh 0;
  text-align: center;
}

.container >>> .content img {
  border-radius: 1vw;
  width: 100%;
  height: 100%;
}
</style>
