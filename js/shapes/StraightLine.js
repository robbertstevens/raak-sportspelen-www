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
        this.canvas.getContext("2d").beginPath();
        this.canvas.getContext("2d").moveTo(this.from.x, this.from.y);
        this.canvas.getContext("2d").lineTo(this.to.x, this.to.y);
        this.canvas.getContext("2d").stroke();
        this.canvas.getContext("2d").closePath();
    };
    StraightLine.prototype.onTouchStart = function (e) {
    };
    StraightLine.prototype.onTouchMove = function (e) {
    };
    StraightLine.prototype.onTouchEnd = function (e) {
    };
    return StraightLine;
})();
