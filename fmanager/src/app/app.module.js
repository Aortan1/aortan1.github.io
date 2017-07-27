"use strict";

var __decorate = this && this.__decorate || function(e, o, r, p) {
    var n, t = arguments.length, l = t < 3 ? o : null === p ? p = Object.getOwnPropertyDescriptor(o, r) : p;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, o, r, p); else for (var i = e.length - 1; i >= 0; i--) (n = e[i]) && (l = (t < 3 ? n(l) : t > 3 ? n(o, r, l) : n(o, r)) || l);
    return t > 3 && l && Object.defineProperty(o, r, l), l;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var platform_browser_1 = require("@angular/platform-browser"), core_1 = require("@angular/core"), forms_1 = require("@angular/forms"), http_1 = require("@angular/http"), app_component_1 = require("./app.component"), folders_component_1 = require("./folders/folders.component"), isinfolder_pipe_1 = require("./folders/isinfolder.pipe"), listoffolders_service_1 = require("./shared/listoffolders.service"), subwindow_component_1 = require("./subwindow/subwindow.component"), fileupload_component_1 = require("./fileupload/fileupload.component"), popup_component_1 = require("./popup/popup.component"), AppModule = function() {
    function e() {}
    return e;
}();

AppModule = __decorate([ core_1.NgModule({
    declarations: [ app_component_1.AppComponent, folders_component_1.FoldersComponent, isinfolder_pipe_1.IsInFolder, subwindow_component_1.SubwindowComponent, fileupload_component_1.FileUploadComponent, popup_component_1.PopupComponent ],
    imports: [ platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule ],
    providers: [ listoffolders_service_1.ListOfFoldersService ],
    bootstrap: [ app_component_1.AppComponent ]
}) ], AppModule), exports.AppModule = AppModule;