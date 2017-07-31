"use strict";

var __decorate = this && this.__decorate || function(e, t, r, n) {
    var o, s = arguments.length, i = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (s < 3 ? o(i) : s > 3 ? o(t, r, i) : o(t, r)) || i);
    return s > 3 && i && Object.defineProperty(t, r, i), i;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core");

require("rxjs/add/operator/toPromise");

var Observable_1 = require("rxjs/Observable"), LoginComponent = function() {
    function e(e, t) {
        this.http = e, this.listService = t, this.user = new User(0, "", ""), this.itemArray = [], 
        this.apiUrl = "app/users", this.user_entering = new core_1.EventEmitter();
    }
    return e.prototype.clickHandler = function() {
        var e = this;
        this.http.get("app/users").subscribe(function(t) {
            return e.itemArray = t.json().data;
        }, function(e) {
            return console.log(e.statusText);
        });
    }, e.prototype.handleErrorPromise = function(e) {
        return console.log("Произошла ошибка сервера.", e), Promise.reject(e.message || e);
    }, e.prototype.handleErrorObservable = function(e) {
        return console.log("Произошла ошибка сервера.", e), Observable_1.Observable.throw(e.message || e);
    }, e.prototype.getUsersDataWithPromise = function() {
        var e = this;
        return this.http.get(this.apiUrl).toPromise().then(function(e) {
            return e.json().data;
        }).then(function(t) {
            return e.itemArray = t;
        }).catch(this.handleErrorPromise);
    }, e.prototype.onSubmit = function() {
        var e = this, t = document.getElementsByTagName("app-login")[0];
        this.getUsersDataWithPromise().then(function(t) {
            var r = t.find(function(t) {
                return t.name == e.user.name;
            });
            return !!e.listService.session_login || !!r && r.pass == e.user.pass;
        }).then(function(r) {
            r ? (t.classList.add("login-display-none"), e.user_entering.emit(e.user.name), e.user = new User(0, "", "")) : (alert("Логин или пароль неверны."), 
            e.user = new User(0, "", ""));
        });
    }, e.prototype.ngOnInit = function() {}, e.prototype.show_data = function() {
        alert(this.userJson());
    }, e.prototype.userJson = function() {
        return JSON.stringify(this.user);
    }, e;
}();

__decorate([ core_1.Output() ], LoginComponent.prototype, "user_entering", void 0), 
LoginComponent = __decorate([ core_1.Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: [ "./login.component.css" ]
}) ], LoginComponent), exports.LoginComponent = LoginComponent;

var User = function() {
    function e(e, t, r) {
        this.id = e, this.name = t, this.pass = r;
    }
    return e;
}();