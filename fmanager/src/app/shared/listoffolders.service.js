"use strict";

var __decorate = this && this.__decorate || function(e, t, o, i) {
    var r, s = arguments.length, l = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, i); else for (var d = e.length - 1; d >= 0; d--) (r = e[d]) && (l = (s < 3 ? r(l) : s > 3 ? r(t, o, l) : r(t, o)) || l);
    return s > 3 && l && Object.defineProperty(t, o, l), l;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var folder_1 = require("./folder"), core_1 = require("@angular/core");

require("rxjs/add/observable/throw"), require("rxjs/add/operator/map"), require("rxjs/add/operator/catch");

var ListOfFoldersService = function() {
    function e(e, t) {
        this.http = e, this.authService = t, this.path1 = "http://aortan1.github.io/webcoder/tem/", 
        this.list_of_folders = [], this.host = "api", this.readData();
    }
    return e.prototype.getSelFolder = function() {
        return this.sel_folder;
    }, e.prototype.sortObjectsByProperty = function(e, t) {
        e.sort(function(e, o) {
            return e[t] < o[t] ? -1 : e[t] > o[t] ? 1 : 0;
        });
    }, e.prototype.findNextId = function(e) {
        void 0 === e && (e = this.sel_file.id);
        var t = this.getIndex(e), o = this.getParent(e);
        do {
            ++t > this.list_of_folders.length && (t = 0);
        } while (this.list_of_folders[t] && this.list_of_folders[t].parent_id != o);
        return this.list_of_folders[t] ? this.list_of_folders[t].id : e;
    }, e.prototype.findPreviousId = function(e) {
        void 0 === e && (e = this.sel_file.id);
        var t = this.getIndex(e), o = this.getParent(e);
        do {
            --t < 0 && (t = this.list_of_folders.length);
        } while (this.list_of_folders[t] && this.list_of_folders[t].parent_id != o);
        return this.list_of_folders[t] ? this.list_of_folders[t].id : e;
    }, e.prototype.findFirstId = function(e) {
        void 0 === e && (e = this.sel_file.id);
        var t = this.list_of_folders.find(function(t) {
            return t.parent_id == e;
        });
        if (t) return t.id;
    }, e.prototype.readListFromLoc = function() {
        localStorage.getItem("list_of_folders") ? (console.info("Чтение list_of_folders из локалки."), 
        this.list_of_folders = JSON.parse(localStorage.getItem("list_of_folders"))) : this.setInitialData(), 
        this.definition_img_sizes();
    }, e.prototype.readSelectionFromLoc = function() {
        localStorage.getItem("sel_folder") && (console.info("Чтение sel_folder из локалки."), 
        this.sel_folder = JSON.parse(localStorage.getItem("sel_folder")));
    }, e.prototype.readData = function() {
        this.authService.getLogin(), this.readListFromLoc(), this.readSelectionFromLoc(), 
        this.sortObjectsByProperty(this.list_of_folders, "type_of_file");
    }, e.prototype.writeListToLoc = function() {
        console.info("Запись list_of_folders в локалку."), localStorage.setItem("list_of_folders", JSON.stringify(this.list_of_folders));
    }, e.prototype.writeSelectionToLoc = function() {
        console.info("Запись sel_folder в локалку."), localStorage.setItem("sel_folder", JSON.stringify(this.sel_folder));
    }, e.prototype.writeData = function() {
        this.authService.setLogin(), this.writeListToLoc(), this.writeSelectionToLoc();
    }, e.prototype.setInitialData = function() {
        console.info("Инициализация."), this.list_of_folders = [], this.list_of_folders.push(new folder_1.Folder("SYSTEM", "", "dir0")), 
        this.list_of_folders.push(new folder_1.Folder("Видео", "dir0", "dirx1")), this.list_of_folders.push(new folder_1.Folder("Музыка", "dir0", "dirx2")), 
        this.list_of_folders.push(new folder_1.Folder("Документы", "dir0", "dirx3")), this.list_of_folders.push(new folder_1.Folder("Изображения", "dir0", "dirx4")), 
        this.list_of_folders.push(new folder_1.Folder("Фильмы", "dirx1", "dirx5")), this.list_of_folders.push(new folder_1.Folder("Клипы", "dirx1", "dirx6")), 
        this.list_of_folders.push(new folder_1.Folder("Girls", "dirx4", "dirx7")), this.list_of_folders.push(new folder_1.Folder("Cars", "dirx4", "dirx8")), 
        this.list_of_folders.push(new folder_1.Folder("s-photo1.jpg", "dirx7", void 0, "img")), 
        this.list_of_folders.push(new folder_1.Folder("s-photo2.jpg", "dirx7", void 0, "img")), 
        this.list_of_folders.push(new folder_1.Folder("s-photo3.jpg", "dirx7", void 0, "img")), 
        this.list_of_folders.push(new folder_1.Folder("s-photo4.jpg", "dirx7", void 0, "img")), 
        this.list_of_folders.push(new folder_1.Folder("s-photo5.jpg", "dirx7", void 0, "img")), 
        this.list_of_folders.push(new folder_1.Folder("s-photo6.jpg", "dirx7", void 0, "img")), 
        this.list_of_folders.push(new folder_1.Folder("s-photo7.jpg", "dirx7", void 0, "img")), 
        this.list_of_folders.push(new folder_1.Folder("cars01.jpg", "dirx8", void 0, "img")), 
        this.list_of_folders.push(new folder_1.Folder("cars02.jpg", "dirx8", void 0, "img")), 
        this.list_of_folders.push(new folder_1.Folder("cars03.jpg", "dirx8", void 0, "img")), 
        this.list_of_folders.push(new folder_1.Folder("cars04.jpg", "dirx8", void 0, "img")), 
        this.list_of_folders.push(new folder_1.Folder("cars05.jpg", "dirx8", void 0, "img")), 
        console.log(this.list_of_folders), this.sel_folder = this.list_of_folders[0], this.definition_img_sizes();
    }, e.prototype.getList = function() {
        return this.list_of_folders;
    }, e.prototype.getIndex = function(e) {
        var t = -1;
        return this.list_of_folders.forEach(function(o, i, r) {
            o.id == e && (t = i);
        }), t;
    }, e.prototype.getName = function(e) {
        var t;
        return this.list_of_folders.forEach(function(o, i, r) {
            o.id == e && (t = o.name);
        }), t || console.error("У файла " + e + " нет свойства name."), t;
    }, e.prototype.getTypeOfFile = function(e) {
        var t;
        if (this.list_of_folders.forEach(function(o, i, r) {
            o.id == e && (t = o.type_of_file);
        }), t) return t;
        console.error("У файла " + e + " нет типа.");
    }, e.prototype.getPath = function(e) {
        var t = "";
        return this.list_of_folders.forEach(function(o, i, r) {
            o.id == e && (t = o.path);
        }), t || console.error("У файла " + e + " нет свойства path."), t;
    }, e.prototype.getImgWidth = function(e) {
        var t = 0;
        return this.list_of_folders.forEach(function(o, i, r) {
            "img" == o.type_of_file && o.id == e && (t = o.img_width);
        }), t;
    }, e.prototype.getParent = function(e) {
        var t = "";
        return this.list_of_folders.forEach(function(o, i, r) {
            o.id == e && (t = o.parent_id);
        }), t;
    }, e.prototype.close_tree = function(e) {
        void 0 === e && (e = ""), this.list_of_folders.forEach(function(t, o, i) {
            "dir" == t.type_of_file && t.id != e && document.getElementById(t.id).removeAttribute("open");
        });
    }, e.prototype.open_tree_till = function(e, t, o) {
        void 0 === t && (t = 0), void 0 === o && (o = 0);
        var i = document.getElementById(e), r = this.getParent(e);
        if (console.log("pareint ID = " + r + ", open = " + i.getAttribute("open")), i.setAttribute("open", "true"), 
        t += i.offsetLeft, o += i.offsetTop, !r) return !1;
        document.getElementById("#" + r);
        this.open_tree_till(r, t, o);
    }, e.prototype.remove_class_selected = function() {
        var e = document.getElementsByClassName("selected")[0];
        e && e.classList.remove("selected");
    }, e.prototype.remove_class_active = function() {
        var e = document.getElementsByClassName("active")[0];
        e && e.classList.remove("active");
    }, e.prototype.add_class_selected = function(e) {
        this.remove_class_selected(), document.getElementById(e).classList.add("selected");
    }, e.prototype.add_class_active = function(e) {
        this.remove_class_active(), document.getElementById(e).classList.add("active");
    }, e.prototype.add_class_selected_in_sub = function(e) {
        var t = document.getElementsByClassName("selected-in-sub")[0];
        t && t.classList.remove("selected-in-sub");
        new Promise(function(o) {
            setTimeout(function() {
                t = document.getElementById("w" + e), o();
            }, 0);
        }).then(function(e) {
            t && t.classList.add("selected-in-sub");
        });
    }, e.prototype.getFolder = function(e) {
        return this.list_of_folders.find(function(t) {
            return t.id == e;
        });
    }, e.prototype.goToFolder = function(e) {
        console.log("goToFolder(" + e + ");"), this.sel_folder = this.getFolder(e), this.writeSelectionToLoc();
    }, e.prototype.makeSelection = function(e) {
        this.goToFolder(e), this.open_tree_till(e), this.add_class_selected(e);
    }, e.prototype.seachFile = function(e) {
        var t, o = new RegExp(e, "i");
        return this.list_of_folders.forEach(function(e, i, r) {
            o.test(e.name) && !t && (t = e.id);
        }), t && this.makeSelection(t), !1;
    }, e.prototype.reload = function() {
        window.location.reload();
    }, e.prototype.definition_img_sizes = function() {
        var e = document.getElementById("viewImg"), t = e ? e.clientWidth : 800;
        this.list_of_folders.forEach(function(e, o, i) {
            if ("img" == e.type_of_file) {
                e.big_or_small = !0;
                var r = new Image();
                r.src = e.src_base64 ? e.src_base64 : e.path, r.alt = "", r.addEventListener("load", function() {
                    e.img_width = r.width, e.img_height = r.height, e.big_or_small = e.img_width > t;
                });
            }
        });
    }, e.prototype.isNameInFolder = function(e, t) {
        var o = !1;
        return this.list_of_folders.forEach(function(i, r, s) {
            i.name == e && i.parent_id == t && (o = !0);
        }), o;
    }, e.prototype.createDir = function(e, t) {
        if (this.isNameInFolder(e, t)) return alert("Папка с таким именем уже существует."), 
        !1;
        if ("" == e) {
            e = "Новая папка";
            for (var o = this.isNameInFolder(e, t), i = 2; o; ) e = "Новая папка(" + i++ + ")", 
            o = this.isNameInFolder(e, t);
        }
        var r = new folder_1.Folder(e, t, void 0, "dir");
        return this.list_of_folders.push(r), console.log(this.list_of_folders), this.sortObjectsByProperty(this.list_of_folders, "name"), 
        this.writeListToLoc(), this.makeSelection(r.id), !1;
    }, e.prototype.deleteDir = function(e) {
        if (this.authService.isAdmin()) {
            var t = this.getParent(e);
            t && this.makeSelection(t);
            var o = this.getIndex(e), i = "dir" == this.getTypeOfFile(e) ? "папку" : "файл", r = confirm("Вы уверены, что хотите удалить " + i + " " + this.getName(e) + " ?");
            "dir0" != e ? (o >= 0 && r && this.list_of_folders.splice(o, 1), console.log(this.list_of_folders), 
            this.writeData()) : alert("Вы не можете удалить корневую папку.");
        } else alert("Удалять папки и файлы может только администратор.");
    }, e.prototype.renameFile = function(e, t) {
        return document.querySelector("input:focus").classList.remove("js-show_rename"), 
        t.name != e && ("" == e ? (alert("Введите имя."), !1) : this.isNameInFolder(e, this.getParent(t.id)) ? (alert("Такое имя в каталоге уже существует."), 
        !1) : (this.list_of_folders[this.getIndex(t.id)].name = e, this.writeData(), !1));
    }, e;
}();

ListOfFoldersService = __decorate([ core_1.Injectable() ], ListOfFoldersService), 
exports.ListOfFoldersService = ListOfFoldersService;