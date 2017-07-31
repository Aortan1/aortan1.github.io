"use strict";

var __decorate = this && this.__decorate || function(e, t, o, r) {
    var i, n = arguments.length, s = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (s = (n < 3 ? i(s) : n > 3 ? i(t, o, s) : i(t, o)) || s);
    return n > 3 && s && Object.defineProperty(t, o, s), s;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), FoldersComponent = function() {
    function e(e) {
        this.listService = e, this.select = new core_1.EventEmitter(), this.created = new core_1.EventEmitter(), 
        this.deleted = new core_1.EventEmitter(), this.renamed = new core_1.EventEmitter(), 
        this.show_rename = !1;
    }
    return e.prototype.ngOnInit = function() {
        this.lof_child = this.listService.getList();
    }, e.prototype.ngOnChanges = function() {
        this.lof_child = this.listService.getList();
    }, e.prototype.onCreateEmit = function() {
        this.created.emit();
    }, e.prototype.onDeleteEmit = function() {
        this.deleted.emit();
    }, e.prototype.onNameDoubleClick = function(e) {
        this.show_rename = !this.show_rename, e.childNodes[1].childNodes[1].classList.add("show_rename"), 
        e.childNodes[1].childNodes[1].focus();
    }, e.prototype.onBlur = function() {
        var e = document.getElementsByClassName("show_rename")[0];
        e && e.classList.remove("show_rename");
    }, e.prototype.onRenameEmit = function() {
        this.renamed.emit();
    }, e.prototype.renameFile = function(e, t) {
        alert(e), this.listService.isNameInFolder(e, this.parent) && alert("Такое имя в каталоге уже существует."), 
        this.lof_child[this.listService.getIndex(t.id)].name = e;
    }, e.prototype.create = function(e, t) {
        this.listService.createDir(e, t), this.onCreateEmit();
    }, e.prototype.delete = function(e) {
        this.listService.deleteDir(e), this.onDeleteEmit();
    }, e.prototype.rename = function(e, t) {
        this.listService.renameFile(e, t), this.onRenameEmit(), this.lof_child = this.listService.getList();
    }, e.prototype.onSelectEmit = function(e) {
        this.listService.sel_image && this.listService.sel_image.id == e || this.select.emit(e);
    }, e;
}();

__decorate([ core_1.Input() ], FoldersComponent.prototype, "parent", void 0), __decorate([ core_1.Output() ], FoldersComponent.prototype, "select", void 0), 
__decorate([ core_1.Output() ], FoldersComponent.prototype, "created", void 0), 
__decorate([ core_1.Output() ], FoldersComponent.prototype, "deleted", void 0), 
__decorate([ core_1.Output() ], FoldersComponent.prototype, "renamed", void 0), 
FoldersComponent = __decorate([ core_1.Component({
    moduleId: module.id,
    selector: "folders",
    templateUrl: "folders.component.html",
    styleUrls: [ "folders.component.css" ]
}) ], FoldersComponent), exports.FoldersComponent = FoldersComponent;