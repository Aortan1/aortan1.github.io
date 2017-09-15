"use strict";

var __decorate = this && this.__decorate || function(e, r, t, o) {
    var c, n = arguments.length, u = n < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, t) : o;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(e, r, t, o); else for (var i = e.length - 1; i >= 0; i--) (c = e[i]) && (u = (n < 3 ? c(u) : n > 3 ? c(r, t, u) : c(r, t)) || u);
    return n > 3 && u && Object.defineProperty(r, t, u), u;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), common_1 = require("@angular/common"), FirstModule = function() {
    function e(e) {
        this.router = e;
    }
    return e;
}();

FirstModule = __decorate([ core_1.NgModule({
    imports: [ common_1.CommonModule ],
    declarations: []
}) ], FirstModule), exports.FirstModule = FirstModule;