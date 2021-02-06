// 类型注解： 由自己告诉 TS 变量是属于什么类型
// 类型推断： Ts 在编译的时候就可以通过内置的变量的类型推断出变量是什么类型

// 类型注解
let count: number;
count = 123;

// 可以通过数据的类型推断的变量的数据类型
const countInference = 123;

/**
 * 总结:
 * 如果 Ts 能够分析变量的类型 我们便无需指定变量的数据类型
 */

// 这个的时候就需要类型的注解帮助指定变量的数据类型 否则就是 any 类型
function getTotal(firstName: string, secondName: number): string {
    return firstName + secondName;
}
