function createClock(fck, hour, minute) {
    return new fck(hour, minute);
}
var DigClock = (function () {
    function DigClock(h, m) {
        this.h = h;
        this.m = m;
    }
    DigClock.prototype.tick = function () {
        console.log(this.h + ":" + this.m);
    };
    ;
    return DigClock;
})();
var s = createClock(DigClock, "fuck", "this");
s.tick();
//# sourceMappingURL=interface2.js.map