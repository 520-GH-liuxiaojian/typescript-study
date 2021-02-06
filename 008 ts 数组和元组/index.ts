// 数组单一存放指定的值
const arr: number[] = [1, 2, 3];

// 可以存放多个数据类型值
const arrString: (number | string)[] = [1, '2', 3];

// 只能存放 undefined
const arrUndefined: undefined[] = [undefined];

// 存放对象
const objectArr: {name: string, age: number}[] = [
    { name: 'dell', age: 18 },
];

// 使用类型别名进行限制
type User = {name: string, age: number}
const objectArr: User[] = [
    { name: 'dell', age: 18 },
];

// 元组 对数组中的每个数据类型进行限制
const teacherInfo: [string, string, string][] = ['xiao', 'jian', 'jian'];
