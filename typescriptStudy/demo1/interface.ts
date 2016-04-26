//接口
interface labelValue{
    label:string
}
function fck(myObj:labelValue){
    console.log(myObj.label)
}
var obj = {
    name:"dw",
    label:"wefwefwef"
}
fck(obj);

//可选参数接口
interface rect{
    width?:number;
    color?:string;
}
function hehe(myRect:rect):{color:string;width:number}{
    var rect = {
        color:"blue",
        width:123
    };
    rect.color = myRect.color?myRect.color:rect.color;
    rect.width = myRect.width?myRect.width:rect.width;
    return rect;
}

console.log(hehe({color:"red"}))

//接口函数
interface searchFn{
    (source:string,subString:string):boolean
}
let mySearch:searchFn;
mySearch = function(sou,sub){
    let result = sou == sub;
    return result;
};
console.log(mySearch("wd","wdwd"));


//接口数组
interface StrArr{
    [index:number]:string;
}
let myArr : StrArr;
myArr = ["fck","d"];
console.log(myArr["1"])

//类接口
interface ClockIte{
    currentTime:Date;
    setTime(d:Date);
}
class Clock implements ClockIte{
    currentTime:Date;
    setTime(d:Date){
        this.currentTime = d;
    }
    constructor(h:number,m:number){};
}
