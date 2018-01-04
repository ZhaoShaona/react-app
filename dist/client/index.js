"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var app_1 = require("./component/app");
function renderApp() {
    ReactDOM.hydrate(React.createElement(app_1.default, null), document.getElementById('app'));
}
window.onload = function () {
    renderApp();
};
