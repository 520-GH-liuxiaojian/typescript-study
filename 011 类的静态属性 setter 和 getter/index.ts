// class Person {
//     private _name: string
//
//     constructor(name : string) {
//         this.name = name;
//     }
//
//     // getter 用来获取类中的指定的值
//     get name() {
//         return `${this._name}lee`;
//     }
//
//     // setter 用来设置类中的指定的属性
//     set name(name: string) {
//         const realName = name.split(' ')[0];
//         this._name = realName;
//     }
// }
//
// const person = new Person('dell');
//
// // 类中的 setter 和 getter 都是类的属性不是方法 在使用的时候都只能使用属性的点
//
// // 获取类中 getter 属性的值 这是属性不是方法
// console.log(person.name);
//
// // 设置类中 setter 属性的值
// person.name = 'hi';
//
// console.log(person.name);

// 单例模式【不管实例多少次 都只能得到一个唯一的实例】
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
//
// const demo1 = Demo.getInstance();
// const demo2 = Demo.getInstance();
