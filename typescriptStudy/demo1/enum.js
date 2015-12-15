//不设值的话按顺序
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["black"] = 30] = "black";
})(Color || (Color = {}));
var c = Color.black;
var s = Color[1];
console.log(c, s);
//任意值
var notSure = "asdqd";
notSure = 5;
var list = [1, "asdw", false];
console.log(list[1]);
//当一个函数没有返回值，可以用void
function warnVoid() {
    console.log("what fuck");
}
var no = null; //只能是null和undefined
//对js的特性做了很多限制，不能使用变量提升
//console.log(x);
//let x:number = 123;
//不能重复定义
//function init(x){
//    let x:number = 1;
//}
//使用const定义的变量不能重新赋值
//const str : string = "asd";
//str = "ef";              //报错
//# sourceMappingURL=enum.js.map