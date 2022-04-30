const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const BASE_URL = process.env.NODE_ENV === "production" ? "./" : "/";
module.exports = {
  publicPath: BASE_URL,
}