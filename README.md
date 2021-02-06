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



## ts 静态类型的深入理解

```typescript
interface PointInterface {
    x: number,
    y: number,
}

const point: PointInterface = {
    x: 123,
    y: 256,
};
```

数据类型一旦确定 就会使用具体的数据的类型属性及其方法

变量类型的一旦确定 变量提示的属性和方法基本就确定了 不能在更改



## ts 基础类型和对象类型

基础类型 string number boolean symbol null

声明变量的方式

```typescript
const count: number = 123;
const teacherName: string = 'abc';
....
```



数组数据类型

+ 通过指定数据类型 该数组就只能存放指定的数据类型

  + 正确写法

  ```typescript
  const numberArray: number[] = [1, 2, 3];
  ```

  + 错误的写法 参杂了其他的数据类型

  ```javascript
  const secondNumberArray: number[] = ['4', 5, 6];
  ```



对象类型

+ 简单的对象类型

```typescript
const teacher: { name: string, age: number } = {
    name: 'xiao',
    age: 18,
};
```

+ 类 也是对象类型

```javascript
class Person {}

const person: Person = new Person();
```



函数类型

+ 有返回值

```javascript
const getTotal: () => number = () => {
  return  123;
}
```

+ 无返回值

  ```javascript
  const getTotal: () => void = () => {
    ....
  }
  ```

  

## 类型注解和类型推断

类型注解： 由自己告诉 TS 变量是属于什么类型

类型推断： Ts 在编译的时候就可以通过内置的变量的类型推断出变量是什么类型



类型注解

```javascript
let count: number;
count = 123;
```

类型推断

```javascript
// 可以通过数据的类型推断的变量的数据类型
const countInference = 123;
```

总结: 

+ 如果 Ts 能够分析变量的类型 我们便无需指定变量的数据类型
+ 如果 Ts 无法分析变量类型的话 我们就需要使用类型注解



场景：

+ 常规的变量定义并且赋值无需类型注解

+ 方法参数需要指定数据类型 【否则就是 any 类型】

  ```javascript
  function getTotal(firstName: number, secondName: number) {
      return firstName + secondName;
  }
  ```



Ts 存在的意义就是让每一个的变量都有属于自己的类型



## ts 函数类型

Ts 和 js 函数一样 定义的函数的方式是一样的

```typescript
function hello() {}
const hello2 = function () {};
const hello3 = () => {};
```



**函数定义的参数需要指定的具体的数据类型**

**如何在条件允许的情况下需要指定函数返回值类型**

```typescript
function add(first: number, second: number): number {
    return first + second;
}

const result: number = add(10, 20);
```



**定义函数设置的无返回值**

```javascript
function sayHelllo():void {
    console.log('hello');
}
```

**定义一个执行不到最后的函数返回值**

```typescript
function errorEmitter(): never {
    throw new Error('error');
    console.log(123);
}
```



**针对函数参数结构的情况**

```typescript
function minus({ first, second }: {first: string, second: string}): string {
    return first + second;
}
```

