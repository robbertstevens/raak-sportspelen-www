/// <reference path="PlayField.ts" />
var MTRStorage = (function () {
    function MTRStorage() {
    }
    MTRStorage.prototype.storeItem = function (key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    MTRStorage.prototype.getItem = function (key) {
        return JSON.parse(window.localStorage.getItem(key));
    };

    MTRStorage.prototype.removeItem = function (key) {
        window.localStorage.removeItem(key);
    };

    MTRStorage.prototype.clearStorage = function () {
        window.localStorage.clear();
    };

    MTRStorage.prototype.getKey = function (n) {
        return window.localStorage.key(n);
    };
    return MTRStorage;
})();
