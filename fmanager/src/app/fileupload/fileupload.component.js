"use strict";

var __decorate = this && this.__decorate || function(e, t, o, r) {
    var i, l = arguments.length, n = l < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, o, r); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (n = (l < 3 ? i(n) : l > 3 ? i(t, o, n) : i(t, o)) || n);
    return l > 3 && n && Object.defineProperty(t, o, n), n;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), folder_1 = require("../shared/folder"), FileUploadComponent = function() {
    function e(e) {
        this.listService = e, this.multiple = !1;
    }
    return e.prototype.addPhoto = function(e) {
        if ("img" == this.sel_folder.type_of_file) return !1;
        var t = e.target || e.srcElement;
        if (this.files = t.files, this.files) for (var o = this.files, r = new FormData(), i = 0; i < o.length; i++) this.getBase64(this.lof, this.sel_folder.id, o[i]), 
        r.append("photo", o[i]);
    }, e.prototype.getBase64 = function(e, t, o) {
        var r = this, i = new FileReader();
        i.readAsDataURL(o), i.onload = function() {
            var l = o.name.split(".").pop().toLowerCase();
            return r.listService.isNameInFolder(o.name, t) ? (alert("Файл с именем " + o.name + " уже есть в папке " + r.sel_folder.name + "."), 
            !1) : -1 == [ "png", "jpg", "jpeg" ].indexOf(l) ? (alert("Файл " + o.name + " не является изображением."), 
            !1) : o.size > 3145728 ? (alert("Размер файла " + o.name + " превышает 3Мб."), !1) : (e.push(new folder_1.Folder(o.name, t, void 0, "img", i.result)), 
            r.listService.definition_img_sizes(), void r.listService.writeData());
        }, i.onerror = function(e) {
            console.log("Error: ", e);
        };
    }, e.prototype.ngAfterViewInit = function() {}, e.prototype.ngOnInit = function() {
        this.lof = this.listService.getList(), this.sel_folder = this.listService.sel_folder;
    }, e;
}();

__decorate([ core_1.Input() ], FileUploadComponent.prototype, "multiple", void 0), 
__decorate([ core_1.ViewChild("fileInput") ], FileUploadComponent.prototype, "inputEl", void 0), 
__decorate([ core_1.Input() ], FileUploadComponent.prototype, "sel_folder", void 0), 
FileUploadComponent = __decorate([ core_1.Component({
    selector: "app-file-upload",
    templateUrl: "./fileupload.component.html",
    styleUrls: [ "./fileupload.component.css" ]
}) ], FileUploadComponent), exports.FileUploadComponent = FileUploadComponent;