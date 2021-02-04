# typescript-study

Ts 语言是 Js 语言超集 这么语言的收集了很多的其他的语言的精妙的语法 融入到该语言中 从而将 js 带到了一个新的维度 这么语言的有以下的特点

+ 静态类型
+ 面向对象
+ 语法扩展



## 安装编辑器

学习的 TS 推荐安装 [VSCode](https://code.visualstudio.com/) 编辑器 因为 TS 这么语言是由 微软开发的 VsCode 也是由微软进行开发 在 VsCode 中天然的优化的 Ts 语法的提示 对于前端有天然的亲近力



## 安装 eslint

全局安装 typescript tslint

```shell
sudo npm install typescript -g
sudo npm install tslint -g
```

使用 eslint 配置项目规范化配置文件

```javascript
npx eslint --init
```

渲染 arbnb 配置 比较变态



## 什么是 TS

Ts 是 Js 语言超集 并且具有**静态类型**的机制 不会再浏览器的上被直接的执行 而是需要通过编译器编译成为 js 过后执行

+ 动态类型

  + js 是动态类型 声明变量的关键字的是 let const var 类型是通过 具体的值进行反推断
  + 后期动态编程其他的值 不会有任何的问题

  ```javascript
  let a = 123
  a = '123'
  ```

+ 静态类型

  + 静态类型 变量一旦声明为指定类型 就不可以在更改

  ```typescript
  let a = 123
  
  // 这里就不可以在赋值为其他的数据类型只能是 数字类型
  a = '123'
  ```

  在 ts 中正确声明变量的类型应该是以下的方法

  ```javascript
  // ts 中正确声明表变量的方法
  let c: string = '124'
  let d: number = 456
  ```

  在生命变量的时候的就赋与指定的数据类型 这是正确的声明变量的方法



## Ts 带来的优势

+ 在开发过程中及时发现和处理的项目中的潜在的问题

  + js 代码

  ```javascript
  // 实现一个简单 勾股定理
  function demo(data) {
      return Math.sqrt(data.x ** 2 + data.y ** 2);
  }
  
  // 直接调用该方法 一定会产生报错 该传递参数没有正常的传递
  demo();
  
  // 正确的调用的方式 否则就会报错
  demo({ x: 20, y: 30 });
  ```

  js 代码的在编写过程中 不会出现任何提示 报错 【即便代码的写错也不会有编辑器处理编写过程中的问题】

  + ts

  ```typescript
  interface tsDemoInterface {
      x: number,
      y: number
  }
  
  function tsDemo(data: tsDemoInterface) {
      return Math.sqrt(data.x ** 2 + data.y ** 2);
  }
  
  tsDemo({ x: 256, y: 236 });
  
  ```

  使用 ts 编写代码 可以开发的过程中 做出相应数据类型 API 提示 和提示信息 错误消息的补全 可以在开发的过程中及时的规避相应的问题

  

+ 编辑器提示会更加的优化

  因为在开发的过程中每个变量的都会有的自己数据的类型 所以的就会有相应的代码的提示信息的 编辑器提示会更加的友好

  

+ 代码的语义化会更加的明显



## Ts 基础环境搭建

+ 安装 node

+ 全局安装 typescript

  + 编译 ts 文件

  + ```shell
    tsc file.ts
    ```

+ 全局安装 ts-node





