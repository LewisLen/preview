const { defineConfig } = require("@vue/cli-service");
const isPrd = process.env.NODE_ENV === "production";
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "len",
  publicPath: isPrd ? "./" : "/",
  configureWebpack(config) {
    // vscode调试代码 配合 Debugger for Chrome
    config.devtool = "cheap-module-source-map";
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      scss: {
        // 和sass-loader有关，有的版本配置项是prependData
        additionalData: `@import "~@/assets/style/index.scss";`,
      },
    },
    extract: {
      ignoreOrder: true,
    },
  },
  devServer: {
    port: 3000,
    hot: true,
  },
});
