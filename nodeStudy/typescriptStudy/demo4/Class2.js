var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//抽象类
var Depatment = (function () {
    function Depatment(name) {
        this.name = name;
    }
    Depatment.prototype.printName = function () {
        console.log(this.name);
    };
    return Depatment;
})();
var Accounting = (function (_super) {
    __extends(Accounting, _super);
    function Accounting(name) {
        _super.call(this, name);
    }
    Accounting.prototype.printMetting = function () {
        console.log("fuck this");
    };
    return Accounting;
})(Depatment);
var department = new Accounting("miller");
department.printName();
department.printMetting();
//# sourceMappingURL=Class2.js.map