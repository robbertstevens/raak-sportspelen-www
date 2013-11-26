/// <reference path="references.ts" />
var ShapeFactory = (function () {
    function ShapeFactory(context) {
        this._context = context;
    }
    ShapeFactory.prototype.CreateShape = function (shape, from, to) {
        var s = null;
        switch (shape) {
            case "freeLine":
            case "fixedLine":
                s = new Line(from, to, this._context);
                break;
            case "rectangle":
                s = new Rectangle(from, to, this._context);
                break;
        }
        return s;
    };
    return ShapeFactory;
})();
