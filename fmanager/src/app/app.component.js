"use strict";

var __decorate = this && this.__decorate || function(e, t, i, o) {
    var s, r = arguments.length, l = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, i, o); else for (var n = e.length - 1; n >= 0; n--) (s = e[n]) && (l = (r < 3 ? s(l) : r > 3 ? s(t, i, l) : s(t, i)) || l);
    return r > 3 && l && Object.defineProperty(t, i, l), l;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), listoffolders_service_1 = require("./shared/listoffolders.service"), AppComponent = function() {
    function e(e) {
        this.listService = e, this.parent = "", this.show_popup = !1;
    }
    return e.prototype.ngOnInit = function() {
        this.listService.readSessionLoginFromLoc(), this.listService.session_login && this.userEnter(), 
        this.lof = this.listService.getList(), this.sel_folder = this.listService.sel_folder;
    }, e.prototype.userEnter = function() {
        this.greeting = "Hello, " + this.listService.session_login + ".", document.getElementsByTagName("app-login")[0].classList.add("login-display-none");
    }, e.prototype.userGreeting = function(e) {
        this.greeting = "Hello, " + e + ".", this.listService.session_login = e, this.listService.writeSessionLoginToLoc();
    }, e.prototype.userExit = function() {
        document.getElementsByTagName("app-login")[0].classList.remove("login-display-none"), 
        this.listService.session_login = "", this.greeting = "", this.listService.writeSessionLoginToLoc();
    }, e.prototype.ngAfterViewInit = function() {
        this.listService.makeSelection(this.sel_folder.id);
    }, e.prototype.toggle_show_popup = function(e) {
        this.show_popup = !this.show_popup, this.sel_image = this.listService.getFolder(e);
    }, e.prototype.onSelectedInWin = function(e) {
        this.listService.add_class_selected(e), this.listService.open_tree_till(e);
    }, e.prototype.goToFolder = function(e) {
        this.listService.add_class_selected(e), "dir" == this.listService.getFolder(e).type_of_file ? this.sel_folder = this.listService.getFolder(e) : (this.sel_image = this.listService.getFolder(e), 
        this.listService.sel_image = this.sel_image, this.sel_folder = this.listService.getFolder(this.listService.getParent(e))), 
        this.listService.sel_folder = this.sel_folder, this.listService.writeSelectionToLoc();
    }, e.prototype.onDoubleClickInWin = function(e) {
        this.goToFolder(e), "img" == this.listService.getFolder(e).type_of_file && this.toggle_show_popup(e);
    }, e.prototype.onClickButtonUpInWin = function(e) {
        var t = this.listService.getParent(e);
        t && (this.goToFolder(t), this.listService.add_class_selected(t), this.listService.open_tree_till(t));
    }, e;
}();

AppComponent = __decorate([ core_1.Component({
    moduleId: module.id,
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: [ "app.component.css" ],
    providers: [ listoffolders_service_1.ListOfFoldersService ]
}) ], AppComponent), exports.AppComponent = AppComponent;