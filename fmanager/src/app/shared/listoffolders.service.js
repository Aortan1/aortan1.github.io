"use strict";

var __decorate = this && this.__decorate || function(e, t, o, i) {
    var r, s = arguments.length, l = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, i); else for (var d = e.length - 1; d >= 0; d--) (r = e[d]) && (l = (s < 3 ? r(l) : s > 3 ? r(t, o, l) : r(t, o)) || l);
    return s > 3 && l && Object.defineProperty(t, o, l), l;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var folder_1 = require("./folder"), core_1 = require("@angular/core"), ListOfFoldersService = function() {
    function e() {
        this.path1 = "http://aortan1.github.io/webcoder/tem/", this.list_of_folders = [], 
        this.readData();
    }
    return e.prototype.getSelFolder = function() {
        return this.sel_folder;
    }, e.prototype.readListFromLoc = function() {
        localStorage.getItem("list_of_folders") ? (console.info("Чтение list_of_folders из локалки."), 
        this.list_of_folders = JSON.parse(localStorage.getItem("list_of_folders"))) : this.setInitialData(), 
        this.definition_img_sizes();
    }, e.prototype.readSelectionFromLoc = function() {
        localStorage.getItem("sel_folder") && (console.info("Чтение sel_folder из локалки."), 
        this.sel_folder = JSON.parse(localStorage.getItem("sel_folder")));
    }, e.prototype.readData = function() {
        this.readListFromLoc(), this.readSelectionFromLoc();
    }, e.prototype.writeListToLoc = function() {
        console.info("Запись list_of_folders в локалку."), localStorage.setItem("list_of_folders", JSON.stringify(this.list_of_folders));
    }, e.prototype.writeSelectionToLoc = function() {
        console.info("Запись sel_folder в локалку."), localStorage.setItem("sel_folder", JSON.stringify(this.sel_folder));
    }, e.prototype.writeData = function() {
        this.writeListToLoc(), this.writeSelectionToLoc();
    }, e.prototype.setInitialData = function() {
        console.info("Инициализация."), this.list_of_folders = [], this.list_of_folders.push(new folder_1.Folder("ROOT FOLDER", "", "dir0")), 
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
    }, e.prototype.open_tree_till = function(e) {
        var t = document.getElementById(e), o = this.getParent(e);
        if (console.log("pareint ID = " + o + ", open = " + t.getAttribute("open")), t.setAttribute("open", "true"), 
        !o) return !1;
        document.getElementById("#" + o);
        this.open_tree_till(o);
    }, e.prototype.add_class_selected = function(e) {
        console.log("add_class_selected ID = " + e);
        var t = document.getElementsByClassName("show_rename")[0];
        t && t.classList.remove("show_rename");
        var o = document.getElementsByClassName("selected")[0];
        o && o.classList.remove("selected"), (o = document.getElementById(e)).classList.add("selected");
    }, e.prototype.add_class_selected_in_sub = function(e) {
        var t = document.getElementsByClassName("selected-in-window")[0];
        t && t.classList.remove("selected-in-window"), (t = document.getElementById("w" + e)) && t.classList.add("selected-in-window");
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
        return this.list_of_folders.push(r), this.writeListToLoc(), this.makeSelection(r.id), 
        !1;
    }, e.prototype.deleteDir = function(e) {
        var t = this.getParent(e);
        t && this.makeSelection(t);
        var o = this.getIndex(e), i = "dir" == this.getTypeOfFile(e) ? "папку" : "файл", r = confirm("Вы уверены, что хотите удалить " + i + " " + this.getName(e) + " ?");
        "dir0" != e ? (o >= 0 && r && this.list_of_folders.splice(o, 1), console.log(this.list_of_folders), 
        this.writeData()) : alert("Вы не можете удалить корневую папку.");
    }, e.prototype.renameFile = function(e, t) {
        return document.querySelector("input:focus").classList.remove("show_rename"), t.name != e && ("" == e ? (alert("Введите имя."), 
        !1) : this.isNameInFolder(e, this.getParent(t.id)) ? (alert("Такое имя в каталоге уже существует."), 
        !1) : (this.list_of_folders[this.getIndex(t.id)].name = e, this.writeData(), !1));
    }, e;
}();

ListOfFoldersService = __decorate([ core_1.Injectable() ], ListOfFoldersService), 
exports.ListOfFoldersService = ListOfFoldersService;