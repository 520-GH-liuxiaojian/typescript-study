class Header {
    constructor() {
        const element:HTMLElement = document.createElement('div');
        element.innerText = 'This is Header';
        document.body.appendChild(element);
    }
}

class Main {
    constructor() {
        const element:HTMLElement = document.createElement('div');
        element.innerText = 'This is Main';
        document.body.appendChild(element);
    }
}

class Footer {
    constructor() {
        const element:HTMLElement = document.createElement('div');
        element.innerText = 'This is Footer';
        document.body.appendChild(element);
    }
}

class Pages {
    constructor() {
        new Header();
        new Main();
        new Footer();
    }
}
