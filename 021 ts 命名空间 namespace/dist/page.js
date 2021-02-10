"use strict";
var Components;
(function (Components) {
    var Header = (function () {
        function Header() {
            var header = document.createElement('div');
            header.innerText = '头部';
            document.body.appendChild(header);
        }
        return Header;
    }());
    Components.Header = Header;
    var Main = (function () {
        function Main() {
            var main = document.createElement('div');
            main.innerText = '主题';
            document.body.appendChild(main);
        }
        return Main;
    }());
    Components.Main = Main;
    var Footer = (function () {
        function Footer() {
            var footer = document.createElement('div');
            footer.innerText = '底部';
            document.body.appendChild(footer);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
var Home;
(function (Home) {
    var Pages = (function () {
        function Pages() {
            new Components.Header();
            new Components.Main();
            new Components.Footer();
        }
        return Pages;
    }());
    Home.Pages = Pages;
})(Home || (Home = {}));
