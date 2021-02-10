// class Header {
//     constructor() {
//         const header:HTMLElement = document.createElement('div');
//         header.innerText = '头部';
//         document.body.appendChild(header);
//     }
// }
//
// class Main {
//     constructor() {
//         const main:HTMLElement = document.createElement('div');
//         main.innerText = '主题';
//         document.body.appendChild(main);
//     }
// }
//
// class Footer {
//     constructor() {
//         const footer:HTMLElement = document.createElement('div');
//         footer.innerText = '底部';
//         document.body.appendChild(footer);
//     }
// }
//
// // 直接通过这种方法编译类 浏览器直接就可以new
// // 在浏览器中 只需要 new pages 即可 但是将内部所有类暴露到了浏览器中 形成全局变量而污染了的代码纯洁性
// // 这里就需要使用到命名空间 namespace
//
// class Pages {
//     constructor() {
//         new Header();
//         new Main();
//         new Footer();
//     }
// }

// namespace 就会将 内部的类从全局代码变成局部的代码 如何有方法需要进行导出 需要使用 export
//  "outFile": "./dist/page.js", 将模块化的文件的打包成为一个文件
// 更改 outfile 配置之后 module 的 编码方式就需要改成 amd system 其他的不支持
// 在写这样的 命名空间依赖的时候 需要注释说明依赖关系
//

/// <reference path='./components.ts'
namespace Home {
    export class Pages {
        user: Components.User = {
            name: 'xiao',
        }

        constructor() {
            new Components.Header();
            new Components.Main();
            new Components.Footer();
        }
    }
}
