/// <reference path="references.ts" />
var PlayField = (function () {
    function PlayField(gameType, fieldColor) {
        this.fieldWidth = 0;
        this.fieldHeight = 0;
        this.gameType = gameType;
        this.fieldColor = fieldColor;
    }
    return PlayField;
})();
