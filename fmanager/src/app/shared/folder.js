"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var Folder = function() {
    function t(e, i, r, o, d) {
        if (void 0 === o && (o = "dir"), void 0 === d && (d = ""), this.id = r, this.type_of_file = o, 
        this.src_base64 = d, !r) {
            var n = void 0;
            do {
                n = o + String(++t.id_current);
            } while (this.isId(n));
            this.id = n;
        }
        this.name = e, this.parent_id = i, "img" == o && (this.path = "http://aortan1.github.io/webcoder/tem/" + e);
    }
    return t.prototype.isId = function(t) {
        return !!document.querySelector("#" + t);
    }, t.prototype.imgCount = function() {}, t;
}();

Folder.id_current = 0, exports.Folder = Folder;