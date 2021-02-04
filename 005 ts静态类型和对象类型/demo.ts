// 基础类型
// number string undefined symbol boolean
const count: number = 123;
const teacherName: string = 'abc';

// 数组数据类型 通过指定数据类型 该数组就只能存放指定的数据类型
// 正确做法
const numberArray: number[] = [1, 2, 3];

// 错误的写法 参杂了其他的数据类型
// const secondNumberArray: number[] = ['4', 5, 6];

// 对象类型
// 简单的对象类型
const teacher: { name: string, age: number } = {
    name: 'xiao',
    age: 18,
};

// 类 也是对象类型
class Person {}

const person: Person = new Person();

// 函数
const getTotal: () => number = () => 123;
