"use strict";

var __decorate = this && this.__decorate || function(e, t, r, o) {
    var n, i = arguments.length, s = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, o); else for (var u = e.length - 1; u >= 0; u--) (n = e[u]) && (s = (i < 3 ? n(s) : i > 3 ? n(t, r, s) : n(t, r)) || s);
    return i > 3 && s && Object.defineProperty(t, r, s), s;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core");

require("rxjs/add/operator/map");

var user_1 = require("./user"), LoginComponent = function() {
    function e(e, t) {
        this.authService = e, this.router = t, this.user = new user_1.User(0, "", "", !1), 
        this.apiUrl = "app/users", this.user_entering = new core_1.EventEmitter();
    }
    return e.prototype.login = function(e) {
        var t = this, r = e.form.value.username, o = e.form.value.userpass;
        this.authService.login(r, o).map(function(e) {
            e ? (t.user = new user_1.User(0, "", "", !1), t.user_entering.emit(r), t.router.navigate([ "/system" ])) : (alert("Логин или пароль неверны."), 
            t.user = new user_1.User(0, "", "", !1));
        }).subscribe();
    }, e.prototype.ngOnInit = function() {}, e;
}();

__decorate([ core_1.Output() ], LoginComponent.prototype, "user_entering", void 0), 
LoginComponent = __decorate([ core_1.Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: [ "./login.component.css" ]
}) ], LoginComponent), exports.LoginComponent = LoginComponent;