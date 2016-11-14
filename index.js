"use strict";
var deku_1 = require('deku');
function default_1(el, dispatch) {
    var app = deku_1.createApp(el, dispatch);
    var thunk;
    return function (vnode, context) {
        if (!thunk) {
            requestAnimationFrame(function () {
                thunk();
                thunk = undefined;
            });
        }
        thunk = function () { return app(vnode); };
    };
}
exports.__esModule = true;
exports["default"] = default_1;
