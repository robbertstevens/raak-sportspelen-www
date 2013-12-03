/// <reference path="references.ts" />
var Rectangle = (function () {
    function Rectangle(from, to, context) {
        this.from = from;
        this.to = to;
        this.context = context;
    }
    Rectangle.prototype.draw = function () {
        this.context.beginPath();
        this.context.rect(this.from.x, this.from.y, (this.to.x - this.from.x), (this.to.y - this.from.y));
        this.context.stroke();
        this.context.closePath();
    };
    return Rectangle;
})();
