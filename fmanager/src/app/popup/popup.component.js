"use strict";

var __decorate = this && this.__decorate || function(t, e, o, p) {
    var i, n = arguments.length, r = n < 3 ? e : null === p ? p = Object.getOwnPropertyDescriptor(e, o) : p;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, p); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (n < 3 ? i(r) : n > 3 ? i(e, o, r) : i(e, o)) || r);
    return n > 3 && r && Object.defineProperty(e, o, r), r;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), PopupComponent = function() {
    function t() {
        this.close_popup = new core_1.EventEmitter();
    }
    return t.prototype.definitionPopupSizes = function(t) {
        this.src = t.src_base64 ? t.src_base64 : t.path, this.width = t.img_width, this.height = t.img_height;
        for (var e = document.body.clientWidth, o = document.body.clientHeight; this.width >= e || this.height >= o; ) this.width = .95 * this.width, 
        this.height = .95 * this.height;
        this.left = (e - this.width) / 2, this.top = (o - this.height) / 2;
    }, t.prototype.ngOnInit = function() {}, t.prototype.ngOnChanges = function() {
        this.sel_image || (this.sel_image = this.sel_folder), this.definitionPopupSizes(this.sel_image);
    }, t.prototype.closePopup = function() {
        this.close_popup.emit();
    }, t;
}();

__decorate([ core_1.Input() ], PopupComponent.prototype, "sel_folder", void 0), 
__decorate([ core_1.Input() ], PopupComponent.prototype, "sel_image", void 0), __decorate([ core_1.Output() ], PopupComponent.prototype, "close_popup", void 0), 
PopupComponent = __decorate([ core_1.Component({
    selector: "app-popup",
    templateUrl: "./popup.component.html",
    styleUrls: [ "./popup.component.css" ]
}) ], PopupComponent), exports.PopupComponent = PopupComponent;