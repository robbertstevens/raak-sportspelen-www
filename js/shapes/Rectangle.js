/// <reference path="Line.ts" />
/// <reference path="../Vector.ts" />
/// <reference path="../TouchEvent.ts" />
var Rectangle = (function () {
    function Rectangle(f, t, c) {
        this.from = f;
        this.to = t;
        this.canvas = c;
    }
    Rectangle.prototype.draw = function () {
        this.canvas.getContext("2d").beginPath();
        this.canvas.getContext("2d").rect(this.from.x, this.from.y, (this.to.x - this.from.x), (this.to.y - this.from.y));
        this.canvas.getContext("2d").stroke();
        this.canvas.getContext("2d").closePath();
    };
    Rectangle.prototype.onTouchStart = function (e) {
    };
    Rectangle.prototype.onTouchMove = function (e) {
    };
    Rectangle.prototype.onTouchEnd = function (e) {
    };
    return Rectangle;
})();
