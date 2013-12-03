/// <reference path="references.ts" />
var Icon = (function () {
    function Icon(from, to, context) {
        this.from = from;
        this.to = to;
        this.context = context;
        this.img = "trjhawdf";
    }
    Icon.prototype.draw = function () {
        this.context.drawImage(this.img, this.from.x, this.from.y, this.to.x, this.to.y);
    };
    return Icon;
})();
