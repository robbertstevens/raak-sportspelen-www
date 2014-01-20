// Authors : Robbert Stevens S1050385, Michael Stevens S1049275, Tim Lagerburg S1045334 ISM5WTb

//methoden voor het opslaan in localstorage.
var RaakStorage = (function () {
    function RaakStorage() {
    }
    RaakStorage.storeItem = function (key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    RaakStorage.getItem = function (key) {
        return JSON.parse(window.localStorage.getItem(key));
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
