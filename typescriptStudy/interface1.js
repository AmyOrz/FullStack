function printLabel(printObj) {
    console.log(printObj.label + " fck this");
}
var obj = {
    name: "miller",
    label: "hi man"
};
printLabel(obj);
function createFck(fuck) {
    var newFck = { hehe: void 0, youqu: "younima" };
    newFck.hehe = fuck.hehe == void 0 ? "fuck this" : fuck.hehe;
    newFck.youqu = fuck.laji == void 0 ? newFck.youqu : fuck.laji;
    return newFck;
}
var Obj = { heha: "qwdqwd", laji: "12qweqw" };
createFck({ heha: "qwdqd", laji: "dwq" }); //如再次传入Obj不会报错，传入{heha}默认报错,使用断言as也可避免
var mySearch;
mySearch = function (sur, sub) {
    if (sur.substr(1) == sub.substr(1)) {
        return true;
    }
    else {
        return false;
    }
};
console.log(mySearch("asd", "bsd"));
var myArr;
myArr = ["fck", "miler"];
var Miller = (function () {
    function Miller() {
    }
    Miller.prototype.eat = function (guo) { };
    return Miller;
})();
//# sourceMappingURL=interface1.js.map