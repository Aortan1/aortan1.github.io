"use strict";

var __decorate = this && this.__decorate || function(e, t, o, n) {
    var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
    return c > 3 && r && Object.defineProperty(t, o, r), r;
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
        this.listService.add_class_selected_in_sub(e), this.select.emit(e);
    }, e.prototype.onDoubleClickInSub = function(e) {
        this.double_click.emit(e);
    }, e.prototype.onClickButtonUp = function(e) {
        this.button_up_click.emit(e);
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