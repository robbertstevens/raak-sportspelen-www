/// <reference path="references.ts" />
var Line = (function () {
    function Line(from, to, context) {
        this.from = from;
        this.to = to;
        this.context = context;
    }
    Line.prototype.draw = function () {
        this.context.beginPath();
        this.context.moveTo(this.from.x, this.from.y);
        this.context.lineTo(this.to.x, this.to.y);
        this.context.stroke();
        this.context.closePath();
    };
    return Line;
})();
