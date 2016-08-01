//用tsc进行编译
var isdone = false;
var age = 23.234;
var Name = "fuck";
var miller = "hello my name is " + Name + ",today i am " + age + " years";
//let miller :string = "hello my name is "+Name+",today";
console.log(miller);
var list = [1, 2, 4, 35];
//let list : Array<number> = [123,23,34,6];
var Arr = [12, "asd"];
//console.log(Arr[1].substr(1),Arr[0].substr(1))    分别对应，number无substr方法
//Arr[3] = "fck";
//Arr[4] = false;   //报错，因为Arr中没有定义为boolean，不能赋值为bool
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
;
var c = Color.Red; //默认为0
var c2 = Color.Yellow; //第二个默认是第一个数值+1，所以=2
var s = Color[2]; //输出Yellow，获取到名字
console.log(c2);
//任意值
var str = "efhwjk";
str = 213;
var arr = [1234, "sdhfejk", false]; //任意数组
//空值   不返回值
function retVoid() {
    alert("wehfjh");
}
//断言
var fuck = "fhsjkerhgr";
var num = fuck.length; //断言fuck为string类型，让他有string方法
console.log(num); //接口
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
//# sourceMappingURL=fck.js.map