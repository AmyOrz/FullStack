//默认参数
function fck(name) {
    if (name === void 0) { name = "dwqdqw"; }
    console.log(name);
}
//Lambda表达式 ()=>{}
var dck = {
    arr: ["fck", "your", "hehe", "youqu"],
    card: Array(52),
    createCard: function () {
        var _this = this;
        return function () {
            var list = Math.random() * 52 | 0;
            var suit = list / 13 | 0;
            return { fck: _this.arr[suit], hehe: suit };
        };
    }
};
var ct = dck.createCard();
console.log(ct());
//# sourceMappingURL=function.js.map