var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function (long) {
        console.log(this.name + " running " + long + " minute");
    };
    return Animal;
})();
var People = (function (_super) {
    __extends(People, _super);
    function People(name) {
        _super.call(this, name);
    }
    People.prototype.eat = function () {
        console.log(this.name + " is eat some");
    };
    return People;
})(Animal);
//存取器get/set，设置访问权限
//静态类 static
//抽象类
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log(this.name + " is a pig");
    };
    return Department;
})();
var acMent = (function (_super) {
    __extends(acMent, _super);
    function acMent(name) {
        _super.call(this, name);
    }
    acMent.prototype.printMess = function () {
        return "what fck";
    };
    return acMent;
})(Department);
var ment = new acMent("fewf");
console.log(ment.printMess());
var ac = acMent;
console.log(ac);
//# sourceMappingURL=class.js.map