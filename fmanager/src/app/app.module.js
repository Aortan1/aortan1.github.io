"use strict";

var __decorate = this && this.__decorate || function(e, o, r, n) {
    var t, p = arguments.length, _ = p < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, r) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) _ = Reflect.decorate(e, o, r, n); else for (var i = e.length - 1; i >= 0; i--) (t = e[i]) && (_ = (p < 3 ? t(_) : p > 3 ? t(o, r, _) : t(o, r)) || _);
    return p > 3 && _ && Object.defineProperty(o, r, _), _;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var platform_browser_1 = require("@angular/platform-browser"), core_1 = require("@angular/core"), forms_1 = require("@angular/forms"), app_component_1 = require("./app.component"), folders_component_1 = require("./folders/folders.component"), listoffolders_service_1 = require("./shared/listoffolders.service"), subwindow_component_1 = require("./subwindow/subwindow.component"), fileupload_component_1 = require("./fileupload/fileupload.component"), popup_component_1 = require("./popup/popup.component"), login_component_1 = require("./login/login.component"), http_1 = require("@angular/http"), angular_in_memory_web_api_1 = require("angular-in-memory-web-api"), usersdata_service_1 = require("./shared/usersdata.service"), first_component_1 = require("./first/first.component"), login_module_1 = require("./login/login.module"), page_not_found_component_1 = require("./page-not-found/page-not-found.component"), app_routing_module_1 = require("./app-routing/app-routing.module"), AppModule = function() {
    function e() {}
    return e;
}();

AppModule = __decorate([ core_1.NgModule({
    declarations: [ app_component_1.AppComponent, folders_component_1.FoldersComponent, subwindow_component_1.SubwindowComponent, fileupload_component_1.FileUploadComponent, popup_component_1.PopupComponent, login_component_1.LoginComponent, first_component_1.FirstComponent, page_not_found_component_1.PageNotFoundComponent ],
    imports: [ platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(usersdata_service_1.UsersData), login_module_1.LoginModule, app_routing_module_1.AppRoutingModule ],
    providers: [ listoffolders_service_1.ListOfFoldersService ],
    bootstrap: [ first_component_1.FirstComponent ]
}) ], AppModule), exports.AppModule = AppModule;