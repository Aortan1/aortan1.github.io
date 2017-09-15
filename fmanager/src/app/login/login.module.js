"use strict";

var __decorate = this && this.__decorate || function(e, o, r, t) {
    var n, c = arguments.length, u = c < 3 ? o : null === t ? t = Object.getOwnPropertyDescriptor(o, r) : t;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(e, o, r, t); else for (var i = e.length - 1; i >= 0; i--) (n = e[i]) && (u = (c < 3 ? n(u) : c > 3 ? n(o, r, u) : n(o, r)) || u);
    return c > 3 && u && Object.defineProperty(o, r, u), u;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), common_1 = require("@angular/common"), router_1 = require("@angular/router"), login_component_1 = require("../login/login.component"), LoginModule = function() {
    function e() {}
    return e;
}();

LoginModule = __decorate([ core_1.NgModule({
    imports: [ common_1.CommonModule, router_1.RouterModule.forRoot([ {
        path: "login",
        component: login_component_1.LoginComponent
    } ]) ],
    declarations: []
}) ], LoginModule), exports.LoginModule = LoginModule;