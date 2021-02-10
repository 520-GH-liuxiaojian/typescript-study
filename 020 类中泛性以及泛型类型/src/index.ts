// class DateManager<T> {
//     constructor(private data: T[]) {}
//
//     getItem(index: number): T {
//         return this.data[index];
//     }
// }
//
// const data = new DateManager<number>([1]);
// data.getItem(0);

// interface Item {
//     name: string
// }
//
// class DateManager<T extends Item> {
//     constructor(private data: T[]) {}
//
//     getItem(index: number): string {
//         return this.data[index].name;
//     }
// }
//
// const data = new DateManager([
//     { name: 'dell' },
// ]);

// 限制 T 的数据类型为 string number
// class DateManager<T extends string | number> {
//     constructor(private data: T[]) {}
//
//     getItem(index: number): string {
//         return this.data[index].name;
//     }
// }
//
// const data = new DateManager<string>('abc');

// console.log(123);

// 如何使用泛型作为一个具体的类型注解
function hello<T>(params: T) {
    return params;
}

const func: <T>(params: T) => T = hello;
