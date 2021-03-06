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



## 复习

**日期类型**

```typescript
const date: Date = new Date();
```

**JSON 转化后类型**

```typescript
interface JsonParseResult {
    name: string,
    dell: string
}

const rawDate = '{"name": "dell"}';
const newDate: JsonParseResult = JSON.parse(rawDate);
```

**一个变量可以的设置多个类型**

```typescript
let temp: number | string = 123;
temp = '123';
```



## 数组和元组

### 数组

**数组单一存放指定数据类型值**

```typescript
const arr: number[] = [1, 2, 3];

const arrUndefined: undefined[] = [undefined];
```

**可以存放多个数据类型值**

```typescript
const arrString: (number | string)[] = [1, '2', 3];
```

**存放对象**

```typescript
const objectArr: {name: string, age: number}[] = [
    { name: 'dell', age: 18 },
];

// 使用类型别名进行限制
type User = {name: string, age: number}
const objectArr: User[] = [
    { name: 'dell', age: 18 },
];
```



### 元组

对数组中的每个数据类型进行限制 前提是数组的中的数据个数是有限制

```typescript
const teacherInfo: [string, string, string][] = ['xiao', 'jian', 'jian'];
```





## interface 接口

```typescript
const getPersonName = (person: {name: string}) => {
    console.log(person.name);
};

const setPersonName = (person: {name: string}, name: string) => {
    person.name = name;
};
```

通过以上的代码可以看到 为 person 对象上的 name 进行数据类型的限定 在两个方法中都重复了  **{name: string}**

这句代码就可以使用 interface 进行简化

```typescript
interface Person {
    name: string
}

const getPersonName = (person: Person) => {
    console.log(person.name);
};

const setPersonName = (person: Person, name: string) => {
    person.name = name;
};
```

**类型别名和接口区别**

+ 两者都可以指定数据类型 
+ interface 具体指对象 属性和数据类型
+ type 也可以指具体的对象 但是也可以指定具体的数据类型



潜规则： 能用 接口代替 就用接口的代替



## 复习

**ts 基础类型 boolean number string void undefined symbol null**

+ 特殊点

```typescript
let count; // 这里类型是 any
count = 123;
```



**对象类型 {} class function []**

**日期类型**

```typescript
const date: Date = new Date();
```

**JSON 转化的类型**

```typescript
interface JsonParseResult {
    name: string,
    dell: string
}

const rawDate = '{"name": "dell"}';
const newDate: JsonParseResult = JSON.parse(rawDate);
```

**一个变量可以的设置多个类型**

```typescript
let temp: number | string = 123;
temp = '123';
```





## 数组和元组

数组单一存放指定的数据类型值

```typescript
const arr: number[] = [1, 2, 3];
```

数组存放多个数据类型值

```typescript
const arrString: (number | string)[] = [1, '2', 3];
```

存放对象

```typescript
const objectArr: {name: string, age: number}[] = [
     { name: 'dell', age: 18 },
];
```

使用类型别名进行限制

```typescript
type User = {name: string, age: number}
const objectArr: User[] = [
    { name: 'dell', age: 18 },
];
```

元组 对数组中的每个数据类型进行限制

```typescript
const teacherInfo: [string, string, string][] = ['xiao', 'jian', 'jian'];
```



## interface 接口

```typescript
const getPersonName = (person: {name:string}) => {
    console.log(person.name);
};

const setPersonName = (person: {name:string}, name: string) => {
    person.name = name;
};
```

以上两段的代码的可以 person 的 name 属性都是的 string 这里的代码重复 对于重复的代码可以通过 接口的进行提取 interface

```typescript
interface Person {
  	// readonly 只读属性
    readonly name: string,
    // 可有可无
    age?: number,
    // 其他的属性 属性名为 string  值为 any  
    [propName: string]: any,
    // 方法 并且限定返回值
    say(): string,
}
```

```typescript
interface Person {
  name:string
}

const getPersonName = (person: Person) => {
    console.log(person.name);
};

const setPersonName = (person: Person, name: string) => {
    person.name = name;
};
```



**interface 和 type 的区别:**

两个的差别不是很大 但是还是有一定的别的 

+ interface 只可以代表一个对象 对象只能设置的属性和的属性值的数据类型
+ Type 可以代表对象 也可以代表一个的具体数据类型值



**类可以应用接口 当应用接口之后 就必须要使用 接口中的所有必填属性和方法**

```typescript
class User implements Person {
    name = 'dell'

    say(): string {
        return 'hello';
    }
}
```



**接口和接口之间是可以相互继承 【父接口属性和方法被继承接口中可以使用】**

```typescript
interface Teacher extends Person {
    teach(): string,
}
```



**接口可以应用函数**

```typescript
interface SayHi {
    (word: string): string
}

const say: SayHi = (word: string) => word;
```





## 类的定义和继承

Ts 中的类和 js 中类效果相同 都可以将公共的代码的进行在类中存放 但是 TS 中类的 相较于 JS 功能更强

```typescript
class Person {
    name = 'xiao'

    getName() {
        return this.name;
    }
}
```

类与类之间可以相互继承

```typescript
class Teacher extends Person {
    getTeacherName(): string {
        return 'Teacher';
    }

    // 子类可以重写父类的方法
    getName(): string {
        // return 'jian';

        // 通过 super 指向父类
        return super.getName();
    }
}
```

子类继承父类的之后的子类中的就可以通过 **super** 关键字的进行 父类函数和方法的调用

子类继承父类之后 子类可以重写父类的具体的方法 在实例化的中优先会调用 子类重写的方法



## 类中 getter 和 setter

在类中经常会有设置的某个属性或者获取某个的属性的特点 这个时候就可以通过 setter 和 getter 进行设置

在 getter 和 setter 中就可以设置在逻辑的执行的过程中设置额外逻辑

```typescript
class Person {
  	private _name: string

    constructor(name : string) {
        this.name = name;
    }

    // getter 用来获取类中的指定的值
    get name() {
        return `${this._name}lee`;
    }

    // setter 用来设置类中的指定的属性
    set name(name: string) {
        const realName = name.split(' ')[0];
        this._name = realName;
    }
}

const person = new Person('dell');

// 类中的 setter 和 getter 都是类的属性不是方法 在使用的时候都只能使用属性的点

// 获取类中 getter 属性的值 这是属性不是方法
console.log(person.name);

// 设置类中 setter 属性的值
person.name = 'hi';

console.log(person.name);
```

注意: **getter 和 setter 是属性 不能通过方法方式进行数据获取 只能通过 属性方式进行数据获取**



减少类中编码量

```typescript
class Person {
  	private _name: string

    constructor(name : string) {
        this.name = name;
    }
}
```

以上的代码就可以通过简化

```typescript
class Person {
    constructor(private name : string) {}
}
```



## 单列模式

单列模式就是提供一个 类 这个类只有一个的唯一的实例 不管类实例多少次 永远只有一个

+ 类中有一个的 构造函数 constructor 这个构造函数在类实例之后就会 立即执行 如果不想类被 new 就可以将类进行 private 化
+ 类中有一个属性和方法有一个修饰符 static 加上这个属性的就可以将属性和方法挂载类上 而不是类的实例上 外部就可以直接通过 类点出具体 static 方法

```typescript
class Demo {
    private static instance: Demo
  	
    // 将 constructor private 化之后 类不能通过 new 关键字使用
    // 无法通过 new 的关键字调用 就必须要给外部提供一个静态方法
    private constructor() {}

    // static 会将属性和方法挂载在类上 而不是类的实例上
    public static getInstance(): Demo {
        if (!this.instance) {
            this.instance = new Demo();
        }
        return this.instance;
    }
}
```



## 抽象类 abstract

如果多个类都同时需要有共同的方法 这个为了代码的严谨性 通常都会定义一个抽象类 让子类继承抽象类而实现抽象类的方法和属性

+ 抽象类和抽象方法都可以通过 abstract 进行修饰 通过抽象类修饰抽象方法 只能定义不能被具体实现 实现由子类实现

```typescript
abstract class Person {
    abstract getArea(): number
}

class Circlc extends Person {
    getArea() {
        return 123;
    }
}
```

+ 抽象类可以有自己的属性和方法 自己属性方法不加 abstract 可以被子类继承

```typescript
abstract class Person {
  	name: string;
  	public getTitle() {}
    abstract getArea(): number
}
```



## 爬虫编写

初始化 ts 项目

全局安装 typescript 运行 tsc --init

全局安装 ts-node 



**注意以上两者也可以通过项目安装**



**superagent** 获取公共网页上相关 html 文本信息

**cheerio** 将指定的文本节点进行成为具体节点 使用的 JQuery 语法



注意: **有的项目是通过 js 进行编写的 在引入的时候是没有相关的提示信息 这个时候要通过 类型文件进行代码提示**



## 工具安装

Ts-node 直接运行 ts 代码

nodemon 监听 js 变化 如果变化就可以重新进行编译



## Ts 编译运转原理

可以在项目中运行 tsc 命令 通过这个命令就可以将项目的下的 ts 文件进行编译

```shell
# tsc 编译文件
# tsc 指定文件.ts
```

这个时候可以的配置的 tsconfig.json 文件



## ts 配置文件的信息

注意：只能使用 tsc 进行编译 使用 tsc 执行文件的编译 并不会去除注释信息

ts 进行编译的时候 会默认读取 tsConfig 配置文件信息 然后进行编译

```json
"include": ["index.ts"], // 只编译指定的文件 
"extends": ["index.js"], // 编译排除指定的文件
"files": ["文件"] // 只编译指定的文件
```

**compilerOptions 编译时候配置信息**

+ ```json
  "removeComments": true, // 去除编译后注释信息
  ```

+ ```json
  "strict": false, // 这里的选项为 true 的话 那么以下的选项就是 true
  "noImplicitAny": false, // 不是显示要求 any 类型 【any 类型必须指定 any】
  "strictNullChecks": false, // 不强制检查 null 类型
  "strictFunctionTypes": true,
  "strictBindCallApply": true,
  "strictPropertyInitialization": true,
  "noImplicitThis": true,
  "alwaysStrict": true,
  ```

+ ```json
  "rootDir": "./src", // 编译的入口文件
  ```

+ ```json
  "incremental": true, // 渐进式编译【此时编译完成 就无需再次编译】
  ```

+ ```json
  "checkJs": true, // 检测 js 文件
  ```

+ ```json
  "sourceMap": true, // 编译之后生成 sourceMap 文件
  ```

+ ```json
  "noUnusedLocals": true, // 检测未使用的变量
  "noUnusedParameters": true, // 检测未使用的函数
  ```



## 联合类型保护

存在问题 一个函数中的参数存在信息时 这个的参数可以使用多个的接口或者类型时候 ts 默认的只会提示其中公共部分内容 为不会提示其他的非公共存在的内容

```typescript
interface Bird {
    fly: boolean,
    sing: () => {},
}

interface Dog {
    fly: boolean,
    bark: () => {},
}

// 这里如果使用的多个类型的联合 那么就会将提示所有接口属性公共属性
// 这句语法就会提示报错
function trainA()al(animal: Bird | Dog) {
    animal.fly();
}
```

如何解决 使用类型保护的机制进行限定

+ 使用接口做数据提示

``` typescript
interface Main {
  fly: boolean,
}

interface Bird extends Main {
    sing: () => {},
}

interface Dog  {
    bark: () => {},
}

function trainAnial(animal: Main) {
    animal.fly();
}
```

+ 断言保护 **as 关键字**

```typescript
function trainAnial(animal: Dog | Bird) {
    if (animal.fly) {
        (animal as Bird).sing();
    } else {
        (animal as Dog).bark();
    }
}
```

+ in 语言实现断言保护

```typescript
function trainAnial(animal: Dog | Bird) {
    if ('sing' in animal) {
        animal.sing();
    } else {
        animal.bark();
    }
}
```

+ typeof 语法提示

```typescript
function add(first: string | number, second: string | number) {
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`;
    }
    return first + second;
}
```

+ instanceof 语法 【只能使用 class 声明 不能使用 interface】

```typescript
class NumberObj {
    count: number
}

function addSecond(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}
```





## 枚举类型

```javascript
function getResult(status) {
    if (status === 0) {
        return 'offline';
    }

    if (status === 1) {
        return 'online';
    }

    if (status === 2) {
        return 'deleted';
    }

    return 'error';
}
```

以下的代码实现逻辑虽然的简单的 但是代码字面亮意义看不出来代码存在的实际意义 字面意义不是特别的强

这时我们可以的 js 中使用 对象类型进行限定 【限定之后 代码意义就会强很多】

```typescript
const Status = {
    OFFLINE: 0,
    ONLINE: 1,
    DELETED: 2,
};

function getResult(status: number) {
    if (status === Status.OFFLINE) {
        return 'offline';
    }

    if (status === Status.ONLINE) {
        return 'online';
    }

    if (status === Status.DELETED) {
        return 'deleted';
    }

    return 'error';
}
```



在 ts 中就可以使用 枚举类型进行限定

```typescript
enum Status {
    OFFLINE,
    ONLINE,
    DELETED
}

function getResult(status: number) {
    if (status === Status.OFFLINE) {
        return 'offline';
    }

    if (status === Status.ONLINE) {
        return 'online';
    }

    if (status === Status.DELETED) {
        return 'deleted';
    }

    return 'error';
}
```

通过枚举类型进行限定之后的代码的意义强了不少 简化代码的编写

+ 枚举类型的索引值默认从 0 开始 传入索引值索取指定区域值 传入 指定就会获取索引值
+ 索引值可以手动被更改 更改之后 就必须使用更改之后的值

```typescript
enum Status {
    OFFLINE,
    ONLINE = 3,
    DELETED
}
```

+ 枚举类型还可以反查 不再索引值划分的区域内 得到的值是 undefined

```typescript
enum Status {
    OFFLINE,
    ONLINE = 3,
    DELETED
}

Status[0] = OFFLINE
Status[3] = ONLINE
Status[4] = DELETED
```



## 函数泛型 增加代码执行过程中灵活性

在 ts 数据类型 常常需要动态的设置的数据类型 这个时候就需要用到泛型 泛指使得参数的类型的可以有调用方参数的数据类型进行限制

```typescript
// 这个时候 first second 数据类型就是通过调用者动态设置
function join<T>(first: T, second: T) {
    return `${first}${second}`;
}

join<string>(1, 2)
```



泛型设置数组

```typescript
// 数据泛指类型 T[]
function map<T>(params: Array<T>) {
    return params;
}

map<string>(['1', '2']);
```



多个类型泛指类型限制

```typescript
function newJoin<T, P>(first: T, second: P) {
    return `${first}${second}`;
}

newJoin<string, number>('a', 1);
```



这里不用写上固定数据类型 ts 会自动做类型推断

```typescript
newJoin('a', 1);
```



## 类中的泛型以及泛型类型

在编写面向对象的代码时候 也会用到泛型提升代码灵活度

+ 简单使用

```typescript
class DateManager<T> {
    constructor(private data: T[]) {}

    getItem(index: number): T {
        return this.data[index];
    }
}

const data = new DateManager<number>([1]);
data.getItem(0);
```



+ 配合 interface 接口使用

```typescript
interface Item {
    name: string
}

class DateManager<T extends Item> {
    constructor(private data: T[]) {}

    getItem(index: number): string {
        return this.data[index].name;
    }
}

const data = new DateManager([
    { name: 'dell' },
]);
```

+ 使用泛型作为一个具体的类型注解

```typescript
function hello<T>(params: T) {
    return params;
}

const func: <T>(params: T) => T = hello;
```

+ 限制 T 的数据类型为 string number

```typescript
class DateManager<T extends string | number> {
    constructor(private data: T[]) {}

    getItem(index: number): string {
        return this.data[index].name;
    }
}

const data = new DateManager<string>('abc');
```



## namespace 命名空间提供模块化编程

场景

```typescript
class Header {
    constructor() {
        const header:HTMLElement = document.createElement('div');
        header.innerText = '头部';
        document.body.appendChild(header);
    }
}

class Main {
    constructor() {
        const main:HTMLElement = document.createElement('div');
        main.innerText = '主题';
        document.body.appendChild(main);
    }
}

class Footer {
    constructor() {
        const footer:HTMLElement = document.createElement('div');
        footer.innerText = '底部';
        document.body.appendChild(footer);
    }
}

// 直接通过这种方法编译类 浏览器直接就可以new
// 在浏览器中 只需要 new pages 即可 但是将内部所有类暴露到了浏览器中 形成全局变量而污染了的代码纯洁性
// 这里就需要使用到命名空间 namespace

class Pages {
    constructor() {
        new Header();
        new Main();
        new Footer();
    }
}
```

通过以上的代码 可知 编译成为 js 代码的时候 每一个类都会作为全局变量在浏览器中 从而污染全局变量 这里需要用到 命名空间的提供模块化编程

```typescript
class Header {
    constructor() {
        const header:HTMLElement = document.createElement('div');
        header.innerText = '头部';
        document.body.appendChild(header);
    }
}

class Main {
    constructor() {
        const main:HTMLElement = document.createElement('div');
        main.innerText = '主题';
        document.body.appendChild(main);
    }
}

class Footer {
    constructor() {
        const footer:HTMLElement = document.createElement('div');
        footer.innerText = '底部';
        document.body.appendChild(footer);
    }
}

// 直接通过这种方法编译类 浏览器直接就可以new
// 在浏览器中 只需要 new pages 即可 但是将内部所有类暴露到了浏览器中 形成全局变量而污染了的代码纯洁性
// 这里就需要使用到命名空间 namespace

export class Pages {
    constructor() {
        new Header();
        new Main();
        new Footer();
    }
}
```

要将全局代码进行模块化 加上 namespace 命名空间概念 如果需要将命名空间指定方法进行导出 则需要使用 **export** 关键字

**命名空间可以相互引入导出**

Components 命名空间

```typescript
namespace Components {
    export class Header {
        constructor() {
            const header:HTMLElement = document.createElement('div');
            header.innerText = '头部';
            document.body.appendChild(header);
        }
    }

    export class Main {
        constructor() {
            const main:HTMLElement = document.createElement('div');
            main.innerText = '主题';
            document.body.appendChild(main);
        }
    }

    export class Footer {
        constructor() {
            const footer:HTMLElement = document.createElement('div');
            footer.innerText = '底部';
            document.body.appendChild(footer);
        }
    }
}

```

index.ts

```typescript
/// <reference path='./components.ts'
namespace Home {
    export class Pages {
        constructor() {
            new Components.Header();
            new Components.Main();
            new Components.Footer();
        }
    }
}
```

通过 这样的方式就可以将指定模块化方法进导入和引入

由于在引入时候没有使用 import 语法 命名空间的相关关系需要在引入的时候进行注明

```typescript
/// <reference path='./components.ts'
```

+ namespace 可以导出子命名空间

```typescript
namespace Components {
      // 命名空间还可以导出子命名空间
    export namespace SubComponents {
        export class Test {}
    }
}
```

+ namespace 可以导出指定接口

```typescript
namespace Components {
  	// 命名空间可以暴露 interface 接口语法
    export interface User {
        name: string
    }
}
  
namespace Home {
    export class Pages {
        user: Components.User = {
            name: 'xiao',
        }
    }
}
```

**注意：**

+ > "outFile": "./dist/page.js", 将模块化的文件的打包成为一个文件, 更改 outfile 配置之后 module 的 编码方式就需要改成 amd system 其他的不支持





## import 对应的模块化

Namespace 命名空间存在问题 **模块和模块之间的饮用关系不明确**

在 ts 中也可以使用 import 语法 打包生成的代码的就是 amd 规范代码的只能在 node 中使用

因为在编译过后代码中有 node 的核心语法 只能在 node 才能狗使用

如果编译的代码需要在浏览器中使用 则需要引入的 requireJs CDN 核心语法之后才能使用

```typescript
import { Header, Main, Footer } from './components';

class Pages {
    constructor() {
        new Components.Header();
        new Components.Main();
        new Components.Footer();
    }
}
```

```typescript
export class Header {
    constructor() {
        const header:HTMLElement = document.createElement('div');
        header.innerText = '头部';
        document.body.appendChild(header);
    }
}

export class Main {
    constructor() {
        const main:HTMLElement = document.createElement('div');
        main.innerText = '主题';
        document.body.appendChild(main);
    }
}

export class Footer {
    constructor() {
        const footer:HTMLElement = document.createElement('div');
        footer.innerText = '底部';
        document.body.appendChild(footer);
    }
}
```



## 使用 parcel 打包工具进行项目打包

对于 ts 编译可以使用 parcel 或者的 webpack 进行打包

[parcel](https://github.com/parcel-bundler/parcel)





## 描述文件中的全局类型 **.d.ts

