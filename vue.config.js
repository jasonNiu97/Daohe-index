const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const targets = {
  serve: 'https://vintex.gtja.com/cos/', // 开发
  test1: 'https://vintex.gtja.com/cos/', // 测试1
  test2: 'http://localhost:8082/' // 测试2
}
const target = targets[process.env.FIRST_ENV]

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: { // 设置代理
      '/api': { // 设置拦截器
        target: target, // 目标地址
        ws: true,
        changeOrigin: true, // 设置同源
        pathRewrite: { // 路径重写
          '^/api': '' // 忽略拦截器里面的单词
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})
