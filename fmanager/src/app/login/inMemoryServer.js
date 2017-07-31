"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var UsersData = function() {
    function e() {}
    return e.prototype.createDb = function() {
        return {
            users: [ {
                id: 1,
                name: "Alex",
                pass: "12345"
            }, {
                id: 2,
                name: "Polina",
                pass: "23456"
            } ]
        };
    }, e;
}();

exports.UsersData = UsersData;