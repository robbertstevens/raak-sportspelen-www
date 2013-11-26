var Vector = (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector.prototype.difference = function (target) {
        return new Vector(Math.abs(target.x - this.x), Math.abs(target.y - this.y));
    };
    return Vector;
})();
