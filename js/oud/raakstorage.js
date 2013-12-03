/// <reference path="references.ts" />
var RaakStorage = (function () {
    function RaakStorage() {
    }
    RaakStorage.storeItem = function (key, value) {
        window.localStorage.setItem(key, value);
    };

    RaakStorage.getItem = function (key) {
        return window.localStorage.getItem(key);
    };

    RaakStorage.removeItem = function (key) {
        window.localStorage.removeItem(key);
    };

    RaakStorage.clearStorage = function () {
        window.localStorage.clear();
    };

    RaakStorage.getKey = function (n) {
        window.localStorage.key(n);
    };
    return RaakStorage;
})();
