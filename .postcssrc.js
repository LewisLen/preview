const path = require("path");

module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 80, // 设计稿宽度的1/10，用于计算 rem 的基准值
      unitPrecision: 4, // 小数位，用于设置 rem 的精度；
      minPixelValue: 2, // 转换的最小单位，小于该值的不做转换；
      selectorBlackList: [".ignore-container"], // 忽略的样式，可以设置一个数组或正则表达式；
      propList: ["*"], // 需要做转化处理的属性，如hight、margin等，也可以正则匹配；
      // include: /\/src\/.*\.vue$/,
      include: /src\/(views\/PreviewPage\.vue|components\/Preview.*\.vue)/, // 包含要转换的文件
      exclude: /(node_modules|src\/)/, // 排除不需要转换的文件，这里排除了 node_modules 目录下的文件。
    },
    "postcss-px-to-viewport": {
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      unitPrecision: 3, // 小数位
      viewportUnit: "vw",
      selectorBlackList: [".ignore-class"], // 指定不转换为视窗单位的类名
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      include: /src\/views\/m\/*.vue/,
      mediaQuery: false,
    },
  },
  /**
   * 移动端h5+vant配置
  const path = require("path");
  module.exports = ({ webpack }) => {
    const designWidth = webpack.resourcePath.includes(
      path.join("node_modules", "vant")
    )
      ? 375
      : 750;
    // console.log("-----"+webpack.resourcePath, designWidth);
    return {
      plugins: {
        autoprefixer: {
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8",
          ],
        },
        "postcss-px-to-viewport": {
          viewportWidth: designWidth, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
          unitPrecision: 3, // 小数位
          viewportUnit: "vw",
          selectorBlackList: [".ignore-class"], // 指定不转换为视窗单位的类名
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: false,
        },
      },
    };
  };
  */
};
