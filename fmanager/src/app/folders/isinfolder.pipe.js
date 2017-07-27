"use strict";

var __decorate = this && this.__decorate || function(e, t, r, o) {
    var n, f = arguments.length, i = f < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (i = (f < 3 ? n(i) : f > 3 ? n(t, r, i) : n(t, r)) || i);
    return f > 3 && i && Object.defineProperty(t, r, i), i;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), IsInFolder = function() {
    function e() {}
    return e.prototype.myfilter = function(e, t, r) {
        var o = [];
        return e.forEach(function(e, n, f) {
            e.parent_id == t && e.type_of_file == r && o.push(e);
        }), o;
    }, e.prototype.myfilter2 = function(e, t, r) {
        for (var o = e.length, n = 0; n < o; n++) e[n].parent_id == t && e[n].type_of_file == r || delete e[n];
    }, e.prototype.transform = function(e, t, r) {
        return e = this.myfilter(e, t, r);
    }, e;
}();

IsInFolder = __decorate([ core_1.Pipe({
    name: "isinfolder"
}) ], IsInFolder), exports.IsInFolder = IsInFolder;