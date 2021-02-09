// 1。原生存在问题
// interface Bird {
//     fly: boolean,
//     sing: () => {},
// }
//
// interface Dog {
//     fly: boolean,
//     bark: () => {},
// }
//
// // 这里如果使用的多个类型的联合 那么就会将提示所有接口属性公共属性
// function trainAnial(animal: Bird | Dog) {
//     animal.fly;
// }

// 2。使用接口做数据提升
// interface Main {
//     fly: boolean,
// }
//
// interface Bird extends Main{
//     sing: () => {},
// }
//
// interface Dog extends Main {
//     bark: () => {},
// }
//
// // 这里如果使用的多个类型的联合 那么就会将提示所有接口属性公共属性
// // 就需要将公共属性和的方法提升成为一个新的接口 在方法提示中使用最新的数据接口
// function trainAnial(animal: Main) {
//     animal.fly;
// }

// 3。接口的类型保护

interface Bird {
    fly: boolean,
    sing: () => {},
}

interface Dog {
    fly: boolean,
    bark: () => {},
}

// 3。1 as 断言保护
// function trainAnial(animal: Dog | Bird) {
//     if (animal.fly) {
//         (animal as Bird).sing();
//     } else {
//         (animal as Dog).bark();
//     }
// }

// 3。2  in 语言实现断言保护
// function trainAnial(animal: Dog | Bird) {
//     if ('sing' in animal) {
//         animal.sing();
//     } else {
//         animal.bark();
//     }
// }

// 3.2 typeof 语法提示
// function add(first: string | number, second: string | number) {
//     if (typeof first === 'string' || typeof second === 'string') {
//         return `${first}${second}`;
//     }
//     return first + second;
// }

// 3.3 instanceof 语法 【只能使用 class 声明 不能使用 interface】
// class NumberObj {
//     count: number
// }
//
// function addSecond(first: object | NumberObj, second: object | NumberObj) {
//     if (first instanceof NumberObj && second instanceof NumberObj) {
//         return first.count + second.count;
//     }
//     return 0;
// }
