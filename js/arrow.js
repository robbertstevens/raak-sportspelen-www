/// <reference path="references.ts" />
var Arrow = (function () {
    function Arrow(from, to, context, orientation) {
        this.from = from;
        this.to = to;
        this.context = context;
        this.orientation = orientation;
    }
    Arrow.prototype.draw = function () {
        this.context.beginPath();
        this.context.moveTo(this.from.x, this.from.y);
        this.context.lineTo(this.to.x, this.to.y);

        switch (this.orientation) {
            case "left":
                break;

            case "up":
                break;

            case "right":
                this.context.moveTo(this.to.x, this.to.y);
                this.context.lineTo(this.to.x - 30, this.to.y - 30);

                this.context.moveTo(this.to.x, this.to.y);
                this.context.lineTo(this.to.x - 30, this.to.y + 30);
                break;

            case "down":
                this.context.moveTo(this.to.x, this.to.y);
                this.context.lineTo(this.to.x + 30, this.to.y - 30);

                this.context.moveTo(this.to.x, this.to.y);
                this.context.lineTo(this.to.x - 30, this.to.y - 30);
                break;
        }
        this.context.strokeStyle = '#FFFFFF';
        this.context.stroke();
        this.context.strokeStyle = '#000';
        this.context.closePath();
    };
    return Arrow;
})();
