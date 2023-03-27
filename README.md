# 可视化项目

前端：Vue3.x + Echarts5.0 + vue-router + axios + ts + pinia + element-plus + socket.io-client
后端：Nodejs + Express
屏幕适配：rem 屏幕适配 lib-flexible.js

```bash
npm install
npm install vue-router axios pinia echarts element-plus socket.io-client --save
```

## 屏幕适配

采用 lib-flexible.js + rem 单位进行适配

```js
function refreshRem() {
  var width = docEl.getBoundingClientRect().width;
  // 为了做PC端适配，适配范围最小值400 最大值 2560
  if (width / dpr < 400) {
    width = 400 * dpr;
  } else if (width / dpr > 2560) {
    width = 2560 * dpr;
  }
  // 默认是分成10份，1920设计稿，1rem就是对应192px。
  // 将屏幕分割成24份，1920设计稿，1rem就是对应80px。1920/24 = 80。利用cssrem插件转换单位
  var rem = width / 24;
  docEl.style.fontSize = rem + "px";
  flexible.rem = win.rem = rem;
}
```

> vscode 安装插件 px to rem & rpx & vw (cssrem)，将插件的 Root Font Size 设置为 80

也可以用 `postcss-pxtorem`，在项目中直接使用 `px` 单位，由插件自动转换，增加配置文件

```js
// .postcssrc.js文件
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 80, // 设计稿宽度的1/10
      unitPrecision: 4, // 小数位
      minPixelValue: 2, // 转换的最小单位
      selectorBlackList: [], // 忽略的样式, 正则
      propList: ["*"], // 需要做转化处理的属性，如`hight`、`margin`等，也可以正则匹配
      exclude: /node_modules/,
    },
  },
};
```



## 记录一些问题

#### tsconfig.json 提示错误信息：

> Cannot find type definition file for 'webpack-env'.The file is in the program because:Entry point of type library 'webpack-env' specified in compilerOptionsts

解决方案：因为Webpack需要引入webpack-env库

```bash
npm install @types/webpack-env --save-dev
```

#### vue文件

`<script setup>` 波澜线提示，只需要在 tsconfig.json 中添加配置信息，或者改成 `<script setup lang='ts'>` 即可

```json
{
  "allowJs": true, // 可以解决vue文件中<script>提示问题
}
```