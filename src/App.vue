<template>
  <div id="app">
    <keep-alive include="home">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="less">
#app {
  max-width: 650px;
  margin: 0 auto;
}
</style>
