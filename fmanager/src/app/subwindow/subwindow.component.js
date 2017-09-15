"use strict";

var __decorate = this && this.__decorate || function(e, t, o, i) {
    var n, r = arguments.length, c = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, i); else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(t, o, c) : n(t, o)) || c);
    return r > 3 && c && Object.defineProperty(t, o, c), c;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), SubwindowComponent = function() {
    function e(e) {
        this.listService = e, this.select = new core_1.EventEmitter(), this.double_click = new core_1.EventEmitter(), 
        this.button_up_click = new core_1.EventEmitter();
    }
    return e.prototype.onSelectInSub = function(e) {
        this.listService.getParent(e) && (this.listService.sel_file = this.listService.getFolder(e), 
        this.listService.add_class_selected_in_sub(e), this.select.emit(e));
    }, e.prototype.goInside = function(e) {
        this.double_click.emit(e);
        var t = this.listService.findFirstId();
        t && this.onSelectInSub(t);
    }, e.prototype.onClickButtonUp = function(e) {
        this.button_up_click.emit(e), this.onSelectInSub(e);
    }, e.prototype.ngOnInit = function() {
        this.lof = this.listService.getList(), this.sel_folder = this.listService.sel_folder;
    }, e;
}();

__decorate([ core_1.Input() ], SubwindowComponent.prototype, "sel_folder", void 0), 
__decorate([ core_1.Output() ], SubwindowComponent.prototype, "select", void 0), 
__decorate([ core_1.Output() ], SubwindowComponent.prototype, "double_click", void 0), 
__decorate([ core_1.Output() ], SubwindowComponent.prototype, "button_up_click", void 0), 
SubwindowComponent = __decorate([ core_1.Component({
    selector: "subwindow",
    templateUrl: "./subwindow.component.html",
    styleUrls: [ "./subwindow.component.css" ]
}) ], SubwindowComponent), exports.SubwindowComponent = SubwindowComponent;