// ts 基础类型 boolean number string void undefined symbol null
let count; // 这里类型是 any
count = 123;

// 对象类型 {} class function []
const func = (str: string): number => parseInt(str, 10);

// 日期类型
const date: Date = new Date();

// JSON 转化的类型
interface JsonParseResult {
    name: string,
    dell: string
}

const rawDate = '{"name": "dell"}';
const newDate: JsonParseResult = JSON.parse(rawDate);

// 一个变量可以的设置多个类型
let temp: number | string = 123;
temp = '123';
