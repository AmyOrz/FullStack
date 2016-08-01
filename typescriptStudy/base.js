var Name = "miller";
var hi = "hi man ,i am " + Name;
var arr = [1, 2, 34, 543, 6];
//元组tuple
var arr2 = ["fck", 123];
//枚举enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Black"] = 123] = "Black";
})(Color || (Color = {}));
;
var c = Color.Black; //没赋值为索引index.
var CName = Color[1]; //可以获取他的名字Blue
//任意值
var Arr = ["sdqwd", 12312, true];
var okay = "fck".slice(1); //ck
//空值void,定义为void只能是null和void 0
function setName() { } //当一个函数不返回值时定义为void
//断言,告诉ts这是个什么类型
var Val = "fck this";
var len = Val.length;
//const 阻止再次被赋值
var myName = "miller";
//# sourceMappingURL=base.js.map