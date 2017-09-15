"use strict";

var __decorate = this && this.__decorate || function(o, e, t, n) {
    var r, u = arguments.length, p = u < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, t) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) p = Reflect.decorate(o, e, t, n); else for (var c = o.length - 1; c >= 0; c--) (r = o[c]) && (p = (u < 3 ? r(p) : u > 3 ? r(e, t, p) : r(e, t)) || p);
    return u > 3 && p && Object.defineProperty(e, t, p), p;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), common_1 = require("@angular/common"), router_1 = require("@angular/router"), app_component_1 = require("../app.component"), page_not_found_component_1 = require("../page-not-found/page-not-found.component"), login_module_1 = require("../login/login.module"), ROUTES = [ {
    path: "system",
    component: app_component_1.AppComponent
}, {
    path: "",
    redirectTo: "system",
    pathMatch: "full"
}, {
    path: "**",
    component: page_not_found_component_1.PageNotFoundComponent
} ], AppRoutingModule = function() {
    function o() {}
    return o;
}();

AppRoutingModule = __decorate([ core_1.NgModule({
    declarations: [],
    imports: [ common_1.CommonModule, router_1.RouterModule.forRoot(ROUTES), login_module_1.LoginModule ],
    exports: [ router_1.RouterModule ],
    providers: [],
    bootstrap: []
}) ], AppRoutingModule), exports.AppRoutingModule = AppRoutingModule;