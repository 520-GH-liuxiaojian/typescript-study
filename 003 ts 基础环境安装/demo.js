// 实现一个简单 勾股定理
function demo(data) {
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}

// 直接调用该方法 一定会产生报错 该传递参数没有正常的传递
demo();

// 正确的调用的方式
demo({ x: 20, y: 30 });
