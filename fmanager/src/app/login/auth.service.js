"use strict";

var __decorate = this && this.__decorate || function(e, r, t, o) {
    var i, n = arguments.length, s = n < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, t) : o;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, r, t, o); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (s = (n < 3 ? i(s) : n > 3 ? i(r, t, s) : i(r, t)) || s);
    return n > 3 && s && Object.defineProperty(r, t, s), s;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), user_1 = require("./user");

require("rxjs/add/operator/toPromise");

var Observable_1 = require("rxjs/Observable");

require("rxjs/add/operator/map"), require("rxjs/add/operator/catch"), require("rxjs/add/observable/throw"), 
require("rxjs/add/operator/take");

var AuthService = function() {
    function e(e) {
        this.http = e, this.user = new user_1.User(0, "", "", !1), this.apiUrl = "app/users";
    }
    return e.prototype.getLogin = function() {
        localStorage.getItem("current_login") && (this.current_login = JSON.parse(localStorage.getItem("current_login")), 
        this.user.isAdmin = JSON.parse(localStorage.getItem("isAdmin")), console.info("Чтение ЛОГИНА из локалки. " + this.current_login));
    }, e.prototype.setLogin = function(e) {
        void 0 === e && (e = this.current_login), console.info("Запись ЛОГИНА в локалку."), 
        localStorage.setItem("current_login", JSON.stringify(e)), localStorage.setItem("isAdmin", JSON.stringify(this.user.isAdmin));
    }, e.prototype.getUsersDataWithPromise = function() {
        return this.http.get(this.host + this.apiUrl).toPromise().then(function(e) {
            return e.json().data;
        }).catch(this.handleErrorPromise);
    }, e.prototype.getUsersDataWithObservable = function() {
        return this.http.get(this.host + this.apiUrl).map(function(e) {
            return e.json().data;
        }).catch(this.handleErrorObservable);
    }, e.prototype.handleErrorObservable = function(e) {
        return console.error("Произошла ошибка", e), Observable_1.Observable.throw(e.message || e);
    }, e.prototype.handleErrorPromise = function(e) {
        return console.log("Произошла ошибка сервера.", e), Promise.reject(e.message || e);
    }, e.prototype.isLoggedIn = function() {
        return !!this.current_login;
    }, e.prototype.isAdmin = function() {
        return this.user.isAdmin;
    }, e.prototype.login = function(e, r) {
        var t = this;
        return this.getLogin(), this.getUsersDataWithObservable().map(function(o) {
            var i = o.find(function(r) {
                return r.name == e;
            });
            return !!t.isLoggedIn() || !(!i || i.pass != r) && (t.current_login = e, t.user = i, 
            t.setLogin(), !0);
        });
    }, e.prototype.show_data = function() {
        alert(this.userJson());
    }, e.prototype.userJson = function() {
        return JSON.stringify(this.user);
    }, e;
}();

AuthService = __decorate([ core_1.Injectable() ], AuthService), exports.AuthService = AuthService;