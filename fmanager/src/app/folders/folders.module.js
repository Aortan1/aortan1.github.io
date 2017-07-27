"use strict";

var __decorate = this && this.__decorate || function(e, r, o, t) {
    var l, s = arguments.length, p = s < 3 ? r : null === t ? t = Object.getOwnPropertyDescriptor(r, o) : t;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) p = Reflect.decorate(e, r, o, t); else for (var n = e.length - 1; n >= 0; n--) (l = e[n]) && (p = (s < 3 ? l(p) : s > 3 ? l(r, o, p) : l(r, o)) || p);
    return s > 3 && p && Object.defineProperty(r, o, p), p;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var platform_browser_1 = require("@angular/platform-browser"), core_1 = require("@angular/core"), forms_1 = require("@angular/forms"), http_1 = require("@angular/http"), app_component_1 = require("../app.component"), listoffolders_service_1 = require("../shared/listoffolders.service"), FoldersModule = function() {
    function e() {}
    return e;
}();

FoldersModule = __decorate([ core_1.NgModule({
    declarations: [ app_component_1.AppComponent ],
    imports: [ platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule ],
    providers: [ listoffolders_service_1.ListOfFoldersService ],
    bootstrap: [ app_component_1.AppComponent ]
}) ], FoldersModule), exports.FoldersModule = FoldersModule;