/// <reference path="references.ts" />
var CoachBoard = (function () {
    function CoachBoard(canvas) {
        this._canvas = canvas;
        this._rect = this._canvas.getBoundingClientRect();
        this._objects = [];
        this._shapeType = "fixedLine";
        this._context = this.getContext2d();
        this.drawField();

        this._shapeFactory = new ShapeFactory(this._context);

        this._canvas.addEventListener("touchstart", this.touchStart.bind(this), false);
        this._canvas.addEventListener("touchmove", this.touchMove.bind(this), false);
        this._canvas.addEventListener("touchend", this.touchEnd.bind(this), false);
        this.invalidate();
    }
    CoachBoard.prototype.getContext2d = function () {
        return this._canvas.getContext("2d");
    };
    CoachBoard.prototype.touchStart = function (e) {
        var pos = new Vector(e.targetTouches[0].pageX - this._rect.left, e.targetTouches[0].pageY - this._rect.top);

        this._current = pos;
        this._start = pos;
        this._prev = pos;
    };

    CoachBoard.prototype.touchMove = function (e) {
        var pos = new Vector(e.changedTouches[0].pageX - this._rect.left, e.changedTouches[0].pageY - this._rect.top);

        if (this._shapeType === "freeLine") {
            var diff = null;
            if (this._prev != null) {
                diff = this._prev.difference(pos);
            }

            if (diff != null) {
                if (diff.x > 5 && diff.y > 5) {
                    this._objects.push(this._shapeFactory.CreateShape(this._shapeType, this._prev, pos));
                    this._prev = this._current;
                }
            }
        }
        this._current = pos;
        this.invalidate();
    };

    CoachBoard.prototype.touchEnd = function (e) {
        var pos = new Vector(e.changedTouches[0].pageX - this._rect.left, e.changedTouches[0].pageY - this._rect.top);

        this._prev = null;
        this._current = null;
        this._end = pos;
        if (this._shapeType != "freeLine") {
            this._objects.push(this._shapeFactory.CreateShape(this._shapeType, this._start, this._end));
        }
        console.log(this._objects.length);
        this.invalidate();
    };
    CoachBoard.prototype.invalidate = function () {
        this.clear(false);

        if (this._start != null && this._current != null && this._shapeType != "freeLine") {
            this._shapeFactory.CreateShape(this._shapeType, this._start, this._current).draw();
        }
        this._objects.forEach(function (obj) {
            obj.draw();
        });
        this.drawArrow();
    };
    CoachBoard.prototype.clear = function (full) {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        if (full) {
            this._objects = [];
        }
        this.drawArrow();
    };

    CoachBoard.prototype.setShapeType = function (shape) {
        this._shapeType = shape;
    };

    CoachBoard.prototype.drawField = function () {
        var veld = JSON.parse(RaakStorage.getItem("veld"));
        console.log();
        this._canvas.style.backgroundColor = veld.fieldColor;
    };

    CoachBoard.prototype.drawArrow = function () {
        this._shapeFactory.CreateShape("arrow", new Vector(50, 50), new Vector(window.innerWidth - 50, 50), "right").draw();
        this._shapeFactory.CreateShape("arrow", new Vector(50, 50), new Vector(50, window.innerHeight - 100), "down").draw();

        var veld = JSON.parse(RaakStorage.getItem("veld"));
        this._context.font = "20px sans-serif";
        this._context.fillStyle = '#FFFFFF';
        this._context.fillText(veld.gameType.charAt(0).toUpperCase() + veld.gameType.slice(1), (window.innerWidth / 2) - 60, 30);
    };
    return CoachBoard;
})();
