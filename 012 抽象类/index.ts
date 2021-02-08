// class Person {
//     // 公开属性 nam改 只能不能该
//     public readonly name: string
//
//     constructor(name: string) {
//         this.name = name;
//     }
// }
//
// 抽象类
// 如果多个类中都一个或者多个公共的方法 那么些个方法就可以被抽象成为一个单独的类【抽象类】
// 抽象类只能被继承 不能被实例化
// 如果一个类继承一个抽象类 抽象类中的抽象的方法就必须在子类当中重写
// 抽象类中也可以有属于自己 属性和方法
// abstract class Gemo {
//     getType() {}
//     abstract getArea(): number
// }
//
// class Circlc extends Gemo {
//     getArea() {
//         return 123;
//     }
// }

// 接口
