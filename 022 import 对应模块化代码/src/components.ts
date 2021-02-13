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
