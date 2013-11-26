/// <reference path="references.ts" />
var PlayField = (function () {
    function PlayField(gameType, fieldColor) {
        this.gameType = gameType;
        this.fieldColor = fieldColor;
    }
    return PlayField;
})();
