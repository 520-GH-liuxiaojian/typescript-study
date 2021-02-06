// Ts 定义函数和 Js 定义函数是相同的 没有什么的区别
function hello() {}
const hello2 = function () {};
const hello3 = () => {};

// 函数定义的参数需要指定的具体的数据类型
// 如何在条件允许的情况下需要指定函数返回值类型
function add(first: number, second: number): number {
    return first + second;
}

const result: number = add(10, 20);

console.log(result);

// 定义函数设置的无返回值
function sayHelllo():void {
    console.log('hello');
}

// 定义一个无法执行到最后的函数
function errorEmitter(): never {
    throw new Error('error');
    console.log(123);
}

// 针对函数参数结构的情况
function minus({ first, second }: {first: string, second: string}): string {
    return first + second;
}
