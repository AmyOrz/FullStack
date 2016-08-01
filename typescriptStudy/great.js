//我们希望传入的参数是number或者string
function getCount(name, code) {
    return typeof code == "string" ? name + code : name + ",oh no";
}
var a = getCount("efwef", 12);
console.log(a);
//多态中的this
var Computer = (function () {
    function Computer(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    Computer.prototype.finish = function () {
        return this.value;
    };
    Computer.prototype.add = function (val) {
        this.value += val;
        return this;
    };
    Computer.prototype.chu = function (val) {
        this.value /= val;
        return this;
    };
    return Computer;
})();
var answer = new Computer(100).add(10).chu(50).finish();
console.log(answer);
//symbols 内置对象,提供iterators遍历数组
var pet = ["cat", "dog", "pig"];
for (var _i = 0; _i < pet.length; _i++) {
    var i = pet[_i];
    console.log(i);
}
//# sourceMappingURL=great.js.map