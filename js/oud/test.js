var Test = (function () {
    function Test(txt) {
        this.hoi = txt;
    }
    Test.prototype.greet = function () {
        return "hoiasasg";
    };
    return Test;
})();

var t = new Test("hoasdaaasdasdssdia");
