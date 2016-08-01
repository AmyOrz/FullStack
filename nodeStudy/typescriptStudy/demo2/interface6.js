function createClock(ccr, h, m) {
    return new ccr(h, m);
}
var DigitClock = (function () {
    function DigitClock(h, m) {
        console.log(h, m);
    }
    DigitClock.prototype.tick = function () {
        console.log("fuckthis");
    };
    return DigitClock;
})();
var digit = createClock(DigitClock, 123, 435);
digit.tick();
//# sourceMappingURL=interface6.js.map