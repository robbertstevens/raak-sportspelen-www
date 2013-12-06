/// <reference path="TouchEvent.ts" />
/// <reference path="GameType.ts" />
var MTREngineController = (function () {
    function MTREngineController(pf, inv, g) {
        this._playfield = pf;
        this._inventory = inv;
        this._game = g;

        document.addEventListener("touchstart", this.onTouchStart, false);
        document.addEventListener("touchend", this.onTouchEnd, false);
        document.addEventListener("touchmove", this.onTouchMove, false);
    }
    MTREngineController.prototype.draw = function () {
        this._objects.forEach(function (object) {
            object.draw();
        });
    };
    MTREngineController.prototype.onTouchStart = function (e) {
        this._objects.forEach(function (object) {
        });
    };
    MTREngineController.prototype.onTouchMove = function (e) {
        this._objects.forEach(function (object) {
        });
    };
    MTREngineController.prototype.onTouchEnd = function (e) {
        this._objects.forEach(function (object) {
        });
    };
    return MTREngineController;
})();

function main() {
    var playfield = document.getElementById("playfield"), inventory = document.getElementById("inventory"), game = new GameType("voetbal", "#fff"), engine = new MTREngineController(playfield, inventory, game);
}
