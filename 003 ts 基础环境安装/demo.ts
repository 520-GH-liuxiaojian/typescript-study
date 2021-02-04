interface tsDemoInterface {
    x: number,
    y: number
}

function tsDemo(data: tsDemoInterface) {
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}

const result = tsDemo({ x: 256, y: 236 });

console.log(result);
