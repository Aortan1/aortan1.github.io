"use strict";

var __decorate = this && this.__decorate || function(e, t, i, s) {
    var o, r = arguments.length, l = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (l = (r < 3 ? o(l) : r > 3 ? o(t, i, l) : o(t, i)) || l);
    return r > 3 && l && Object.defineProperty(t, i, l), l;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), listoffolders_service_1 = require("./shared/listoffolders.service"), AppComponent = function() {
    function e(e, t, i) {
        this.listService = e, this.authService = t, this.router = i, this.parent = "", this.show_popup = !1;
    }
    return e.prototype.ngOnInit = function() {
        this.authService.getLogin(), this.authService.isLoggedIn() ? (this.router.navigate([ "/system" ]), 
        this.userEnter()) : this.router.navigate([ "/login" ]), this.lof = this.listService.getList(), 
        this.sel_folder = this.listService.sel_folder;
    }, e.prototype.userEnter = function() {
        console.log("ENTER."), this.greeting = "Hello, " + this.authService.current_login + ".";
    }, e.prototype.userExit = function() {
        console.log("EXIT."), document.getElementsByTagName("app-login")[0].classList.remove("login-display-none"), 
        this.greeting = "", this.authService.setLogin(""), this.router.navigate([ "/login" ]);
    }, e.prototype.ngAfterViewInit = function() {
        this.listService.makeSelection(this.sel_folder.id);
    }, e.prototype.toggle_show_popup = function(e) {
        this.show_popup = !this.show_popup, this.sel_image = this.listService.getFolder(e);
    }, e.prototype.onSelectedInApp = function(e) {
        var t = this.listService.getParent(e);
        t || (t = e), this.listService.remove_class_selected(), this.listService.add_class_active(t), 
        this.listService.close_tree(), this.listService.open_tree_till(t), this.listService.add_class_selected_in_sub(e);
    }, e.prototype.goToFolder = function(e) {
        this.listService.remove_class_active(), this.listService.add_class_selected(e), 
        "dir" == this.listService.getFolder(e).type_of_file ? this.sel_folder = this.listService.getFolder(e) : (this.sel_image = this.listService.getFolder(e), 
        this.listService.sel_image = this.sel_image, this.sel_folder = this.listService.getFolder(this.listService.getParent(e))), 
        this.listService.sel_folder = this.sel_folder, this.listService.writeSelectionToLoc();
    }, e.prototype.goInside = function(e) {
        this.goToFolder(e), "img" == this.listService.getFolder(e).type_of_file && this.toggle_show_popup(e);
    }, e.prototype.onClickButtonUpInWin = function(e) {
        var t = this.listService.getParent(e);
        console.log("!!parent = " + !!t + ". From " + e + " UP to " + t), t && (this.goToFolder(t), 
        this.listService.remove_class_selected(), this.listService.add_class_active(e), 
        this.listService.sel_folder = this.listService.getFolder(t));
    }, e;
}();

AppComponent = __decorate([ core_1.Component({
    moduleId: module.id,
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: [ "app.component.css" ],
    providers: [ listoffolders_service_1.ListOfFoldersService ]
}) ], AppComponent), exports.AppComponent = AppComponent;