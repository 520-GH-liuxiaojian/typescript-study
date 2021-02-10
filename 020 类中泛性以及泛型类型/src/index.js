"use strict";
// class DateManager<T> {
//     constructor(private data: T[]) {}
//
//     getItem(index: number): T {
//         return this.data[index];
//     }
// }
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
console.log(123);
