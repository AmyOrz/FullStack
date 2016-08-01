var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//实现继承
var People = (function () {
    function People(name) {
        this.name = name;
    }
    People.prototype.run = function (meter) {
        if (meter === void 0) { meter = 0; }
        console.log("hi " + this.name + " fuck run " + meter);
    };
    return People;
})();
var BigMan = (function (_super) {
    __extends(BigMan, _super);
    function BigMan(name) {
        _super.call(this, name);
    }
    BigMan.prototype.run = function (meter) {
        if (meter === void 0) { meter = 5; }
        console.log("Bigman start run...");
        _super.prototype.run.call(this, meter);
    };
    return BigMan;
})(People);
var Child = (function (_super) {
    __extends(Child, _super);
    function Child(name) {
        _super.call(this, name);
    }
    Child.prototype.run = function (meter) {
        if (meter === void 0) { meter = 2; }
        console.log("child start run...");
        _super.prototype.run.call(this, meter);
    };
    return Child;
})(People);
var yh = new BigMan("miller");
yh.run();
//# sourceMappingURL=Class1.js.map