"use strict";

var __decorate = this && this.__decorate || function(e, o, r, n) {
    var p, t = arguments.length, i = t < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, r) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, o, r, n); else for (var _ = e.length - 1; _ >= 0; _--) (p = e[_]) && (i = (t < 3 ? p(i) : t > 3 ? p(o, r, i) : p(o, r)) || i);
    return t > 3 && i && Object.defineProperty(o, r, i), i;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var platform_browser_1 = require("@angular/platform-browser"), core_1 = require("@angular/core"), forms_1 = require("@angular/forms"), app_component_1 = require("./app.component"), folders_component_1 = require("./folders/folders.component"), listoffolders_service_1 = require("./shared/listoffolders.service"), subwindow_component_1 = require("./subwindow/subwindow.component"), fileupload_component_1 = require("./fileupload/fileupload.component"), popup_component_1 = require("./popup/popup.component"), login_component_1 = require("./login/login.component"), http_1 = require("@angular/http"), angular_in_memory_web_api_1 = require("angular-in-memory-web-api"), inMemoryServer_1 = require("./login/inMemoryServer"), AppModule = function() {
    function e() {}
    return e;
}();

AppModule = __decorate([ core_1.NgModule({
    declarations: [ app_component_1.AppComponent, folders_component_1.FoldersComponent, subwindow_component_1.SubwindowComponent, fileupload_component_1.FileUploadComponent, popup_component_1.PopupComponent, login_component_1.LoginComponent ],
    imports: [ platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(inMemoryServer_1.UsersData) ],
    providers: [ listoffolders_service_1.ListOfFoldersService ],
    bootstrap: [ app_component_1.AppComponent ]
}) ], AppModule), exports.AppModule = AppModule;