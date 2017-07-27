"use strict";

var __decorate = this && this.__decorate || function(e, t, o, p) {
    var i, n = arguments.length, s = n < 3 ? t : null === p ? p = Object.getOwnPropertyDescriptor(t, o) : p;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, o, p); else for (var r = e.length - 1; r >= 0; r--) (i = e[r]) && (s = (n < 3 ? i(s) : n > 3 ? i(t, o, s) : i(t, o)) || s);
    return n > 3 && s && Object.defineProperty(t, o, s), s;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), PopupComponent = function() {
    function e() {
        this.close_popup = new core_1.EventEmitter();
    }
    return e.prototype.closePopup = function() {
        this.close_popup.emit();
    }, e.prototype.ngOnInit = function() {}, e.prototype.ngOnChanges = function() {
        this.sel_image || (this.sel_image = this.sel_folder), this.src = this.sel_image.src_base64 ? this.sel_image.src_base64 : this.sel_image.path, 
        this.width = this.sel_image.img_width, this.height = this.sel_image.img_height;
        for (var e = document.body.clientWidth, t = document.body.clientHeight; this.width >= e || this.height >= t; ) this.width = .95 * this.width, 
        this.height = .95 * this.height;
        this.left = (e - this.width) / 2, this.top = (t - this.height) / 2;
    }, e;
}();

__decorate([ core_1.Input() ], PopupComponent.prototype, "sel_folder", void 0), 
__decorate([ core_1.Input() ], PopupComponent.prototype, "sel_image", void 0), __decorate([ core_1.Output() ], PopupComponent.prototype, "close_popup", void 0), 
PopupComponent = __decorate([ core_1.Component({
    selector: "app-popup",
    templateUrl: "./popup.component.html",
    styleUrls: [ "./popup.component.css" ]
}) ], PopupComponent), exports.PopupComponent = PopupComponent;