function fck(myObj) {
    console.log(myObj.label);
}
var obj = {
    name: "dw",
    label: "wefwefwef"
};
fck(obj);
function hehe(myRect) {
    var rect = {
        color: "blue",
        width: 123
    };
    rect.color = myRect.color ? myRect.color : rect.color;
    rect.width = myRect.width ? myRect.width : rect.width;
    return rect;
}
console.log(hehe({ color: "red" }));
var mySearch;
mySearch = function (sou, sub) {
    var result = sou == sub;
    return result;
};
console.log(mySearch("wd", "wdwd"));
var myArr;
myArr = ["fck", "d"];
console.log(myArr["1"]);
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    ;
    return Clock;
})();
//# sourceMappingURL=interface.js.map