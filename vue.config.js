const { defineConfig } = require('@vue/cli-service')

const port = process.env.port || 9528 // dev port

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: port,
    // disableHostCheck: true,
    proxy: {
      "/api": {
        target: "http://v.juhe.cn/",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          "^/api/": ""
        }
      }
    }
  },
  lintOnSave: false
})
