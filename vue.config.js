
module.exports = {
  /* 
  如果打算将项目部署到 https://<USERNAME>.github.io/<REPO>/ 上,
  可将 publicPath 设为 "/<REPO>/" 。
  publicPath 配置的路径就是“/你的项目名称/”
 */
  publicPath: './',
  //当运行 npm run build 时生成的生产环境构建文件的目录
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 
  // 默认为 ''
  assetsDir: './static',
  productionSourceMap: false,
  filenameHashing: true,
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html", // 这里用来区分加载那个 html
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  // CSS 相关选项
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {}, // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    modules: false
  },
  devServer: {// 环境配置
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    open: true, //配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'https://news-at.zhihu.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};

