/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
/**
 * 
它的作用是告诉 TypeScript，当在代码中引用以 .vue 结尾的文件时，应该将其解析为一个 Vue 组件。
具体来说，代码中的 declare module '*.vue' 是一个模块声明，表示所有以 .vue 结尾的文件都属于这个模块。然后，通过 import type 引入了 Vue.js 的 DefineComponent 类型，并将其作为组件的类型。
最后，通过 const component: DefineComponent<{}, {}, any> 定义了一个默认的组件变量 component，它的类型为 DefineComponent<{}, {}, any>，表示一个没有 props、没有 emit 和没有插槽的 Vue 组件，其它属性是任意类型。
最后，通过 export default component 导出了这个默认组件。这样，在其它代码中引用 .vue 文件时，就可以通过默认导入的方式获取到这个组件，并且 TypeScript 会对组件的类型进行检查。
 */


// declare module 'vue-router' {
//   interface RouteMeta {
//     title?: string;
//   }
// }