namespace Components {

    // 命名空间可以暴露 interface 接口语法
    export interface User {
        name: string
    }

    // 命名空间还可以导出子命名空间
    export namespace SubComponents {
        export class Test {}
    }

    export class Header {
        constructor() {
            const header:HTMLElement = document.createElement('div');
            header.innerText = '头部';
            document.body.appendChild(header);
        }
    }

    export class Main {
        constructor() {
            const main:HTMLElement = document.createElement('div');
            main.innerText = '主题';
            document.body.appendChild(main);
        }
    }

    export class Footer {
        constructor() {
            const footer:HTMLElement = document.createElement('div');
            footer.innerText = '底部';
            document.body.appendChild(footer);
        }
    }
}
