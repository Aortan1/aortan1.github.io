"use strict";

var __decorate = this && this.__decorate || function(e, o, t, i) {
    var r, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, t) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, o, t, i); else for (var n = e.length - 1; n >= 0; n--) (r = e[n]) && (l = (s < 3 ? r(l) : s > 3 ? r(o, t, l) : r(o, t)) || l);
    return s > 3 && l && Object.defineProperty(o, t, l), l;
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
    }, e.prototype.readSessionLoginFromLoc = function() {
        localStorage.getItem("session_login") && (console.info("Чтение ЛОГИНА из локалки."), 
        this.session_login = JSON.parse(localStorage.getItem("session_login")));
    }, e.prototype.readData = function() {
        this.readSessionLoginFromLoc(), this.readListFromLoc(), this.readSelectionFromLoc();
    }, e.prototype.writeListToLoc = function() {
        console.info("Запись list_of_folders в локалку."), localStorage.setItem("list_of_folders", JSON.stringify(this.list_of_folders));
    }, e.prototype.writeSelectionToLoc = function() {
        console.info("Запись sel_folder в локалку."), localStorage.setItem("sel_folder", JSON.stringify(this.sel_folder));
    }, e.prototype.writeSessionLoginToLoc = function() {
        console.info("Запись ЛОГИНА в локалку."), localStorage.setItem("session_login", JSON.stringify(this.session_login));
    }, e.prototype.writeData = function() {
        this.writeSessionLoginToLoc(), this.writeListToLoc(), this.writeSelectionToLoc();
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
        var o = -1;
        return this.list_of_folders.forEach(function(t, i, r) {
            t.id == e && (o = i);
        }), o;
    }, e.prototype.getName = function(e) {
        var o;
        return this.list_of_folders.forEach(function(t, i, r) {
            t.id == e && (o = t.name);
        }), o || console.error("У файла " + e + " нет свойства name."), o;
    }, e.prototype.getTypeOfFile = function(e) {
        var o;
        if (this.list_of_folders.forEach(function(t, i, r) {
            t.id == e && (o = t.type_of_file);
        }), o) return o;
        console.error("У файла " + e + " нет типа.");
    }, e.prototype.getPath = function(e) {
        var o = "";
        return this.list_of_folders.forEach(function(t, i, r) {
            t.id == e && (o = t.path);
        }), o || console.error("У файла " + e + " нет свойства path."), o;
    }, e.prototype.getImgWidth = function(e) {
        var o = 0;
        return this.list_of_folders.forEach(function(t, i, r) {
            "img" == t.type_of_file && t.id == e && (o = t.img_width);
        }), o;
    }, e.prototype.getParent = function(e) {
        var o = "";
        return this.list_of_folders.forEach(function(t, i, r) {
            t.id == e && (o = t.parent_id);
        }), o;
    }, e.prototype.open_tree_till = function(e) {
        var o = document.getElementById(e), t = this.getParent(e);
        if (console.log("pareint ID = " + t + ", open = " + o.getAttribute("open")), o.setAttribute("open", "true"), 
        !t) return !1;
        document.getElementById("#" + t);
        this.open_tree_till(t);
    }, e.prototype.add_class_selected = function(e) {
        console.log("add_class_selected ID = " + e);
        var o = document.getElementsByClassName("selected")[0];
        o && o.classList.remove("selected"), (o = document.getElementById(e)).classList.add("selected");
    }, e.prototype.add_class_selected_in_sub = function(e) {
        var o = document.getElementsByClassName("selected-in-window")[0];
        o && o.classList.remove("selected-in-window"), (o = document.getElementById("w" + e)) && o.classList.add("selected-in-window");
    }, e.prototype.getFolder = function(e) {
        return this.list_of_folders.find(function(o) {
            return o.id == e;
        });
    }, e.prototype.goToFolder = function(e) {
        console.log("goToFolder(" + e + ");"), this.sel_folder = this.getFolder(e), this.writeSelectionToLoc();
    }, e.prototype.makeSelection = function(e) {
        this.goToFolder(e), this.open_tree_till(e), this.add_class_selected(e);
    }, e.prototype.seachFile = function(e) {
        var o, t = new RegExp(e, "i");
        return this.list_of_folders.forEach(function(e, i, r) {
            t.test(e.name) && !o && (o = e.id);
        }), o && this.makeSelection(o), !1;
    }, e.prototype.reload = function() {
        window.location.reload();
    }, e.prototype.definition_img_sizes = function() {
        var e = document.getElementById("viewImg"), o = e ? e.clientWidth : 800;
        this.list_of_folders.forEach(function(e, t, i) {
            if ("img" == e.type_of_file) {
                e.big_or_small = !0;
                var r = new Image();
                r.src = e.src_base64 ? e.src_base64 : e.path, r.alt = "", r.addEventListener("load", function() {
                    e.img_width = r.width, e.img_height = r.height, e.big_or_small = e.img_width > o;
                });
            }
        });
    }, e.prototype.isNameInFolder = function(e, o) {
        var t = !1;
        return this.list_of_folders.forEach(function(i, r, s) {
            i.name == e && i.parent_id == o && (t = !0);
        }), t;
    }, e.prototype.createDir = function(e, o) {
        if (this.isNameInFolder(e, o)) return alert("Папка с таким именем уже существует."), 
        !1;
        if ("" == e) {
            e = "Новая папка";
            for (var t = this.isNameInFolder(e, o), i = 2; t; ) e = "Новая папка(" + i++ + ")", 
            t = this.isNameInFolder(e, o);
        }
        var r = new folder_1.Folder(e, o, void 0, "dir");
        return this.list_of_folders.push(r), console.log(this.list_of_folders), this.writeListToLoc(), 
        this.makeSelection(r.id), !1;
    }, e.prototype.deleteDir = function(e) {
        var o = this.getParent(e);
        o && this.makeSelection(o);
        var t = this.getIndex(e), i = "dir" == this.getTypeOfFile(e) ? "папку" : "файл", r = confirm("Вы уверены, что хотите удалить " + i + " " + this.getName(e) + " ?");
        "dir0" != e ? (t >= 0 && r && this.list_of_folders.splice(t, 1), console.log(this.list_of_folders), 
        this.writeData()) : alert("Вы не можете удалить корневую папку.");
    }, e.prototype.renameFile = function(e, o) {
        return document.querySelector("input:focus").classList.remove("show_rename"), o.name != e && ("" == e ? (alert("Введите имя."), 
        !1) : this.isNameInFolder(e, this.getParent(o.id)) ? (alert("Такое имя в каталоге уже существует."), 
        !1) : (this.list_of_folders[this.getIndex(o.id)].name = e, this.writeData(), !1));
    }, e;
}();

ListOfFoldersService = __decorate([ core_1.Injectable() ], ListOfFoldersService), 
exports.ListOfFoldersService = ListOfFoldersService;