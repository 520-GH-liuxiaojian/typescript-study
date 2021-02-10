// 泛指的类型 泛型
// 泛指使得参数的类型的可以有调用方参数的数据类型进行限制

function join<T>(first: T, second: T) {
    return `${first}${second}`;
}

join<number>(1, 1);

// 数据泛指类型
function map<T>(params: Array<T>) {
    return params;
}

map<string>(['1', '2']);

// 多个类型泛指类型限制
function newJoin<T, P>(first: T, second: P) {
    return `${first}${second}`;
}

newJoin<string, number>('a', 1);
// 这里不用写上固定数据类型 ts 会自动做类型推断
newJoin('a', 1);
