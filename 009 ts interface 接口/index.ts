// interface Person {
//     readonly name: string, // 只读属性
//     age?: number, // 可有可无
//     [propName: string]: any, // 其他的属性 属性名为 string  值为 any
//     say(): string, // 方法 并且限定返回值
// }

// type PersonFirst = string
//
// const getPersonName = (person: Person) => {
//     console.log(person.name);
// };
//
// const setPersonName = (person: Person, name: string) => {
//     person.name = name;
// };
//
// const person: Person = {
//     name: 'xiaojianjain',
// };
//
// getPersonName(person);
// setPersonName(person, 'xiaojianjian1');

// 类可以应用接口 当应用接口之后 就必须要使用 接口中的所有必填属性和方法
// class User implements Person {
//     name = 'dell'
//
//     say(): string {
//         return 'hello';
//     }
// }

// 接口和接口之间是可以相互继承
// 父接口属性和方法被继承接口中可以使用
// interface Teacher extends Person {
//     teach(): string,
// }

// 接口可以应用函数
// interface SayHi {
//     (word: string): string
// }
//
// const say: SayHi = (word: string) => word;
