/// <reference path="Line.ts" />
/// <reference path="../Vector.ts" />
/// <reference path="../TouchEvent.ts" />
var StraightLine = (function () {
    function StraightLine(f, t, c) {
        this.from = f;
        this.to = t;
        this.canvas = c;
    }
    StraightLine.prototype.draw = function () {
    };
    StraightLine.prototype.onTouchStart = function (e) {
    };
    StraightLine.prototype.onTouchMove = function (e) {
    };
    StraightLine.prototype.onTouchEnd = function (e) {
    };
    return StraightLine;
})();
