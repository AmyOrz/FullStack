//接口Interface
interface printValue{
    label:string
}
function printLabel(printObj:printValue){
    console.log(printObj.label + " fck this");
}
var obj = {
    name:"miller",
    label:"hi man"
}
printLabel(obj);

//可选属性
interface fck{
    hehe?:string;
    laji?:string;
}
function createFck(fuck:fck):{hehe:string;youqu:string}{
    let newFck = {hehe:void 0,youqu:"younima"};
    newFck.hehe = fuck.hehe == void 0?"fuck this":fuck.hehe;
    newFck.youqu = fuck.laji == void 0?newFck.youqu:fuck.laji;
    return newFck;
}
let Obj = {heha:"qwdqwd",laji:"12qweqw"};
createFck({heha:"qwdqd",laji:"dwq"} as fck);  //如再次传入Obj不会报错，传入{heha}默认报错,使用断言as也可避免

//接口描述函数
interface Search{
    (source:string,substr:string):boolean;
}
let mySearch:Search;
mySearch = function(sur:string,sub:string){   //参数的类型可以省略，ts会帮你验证
    if(sur.substr(1) == sub.substr(1)){
        return true;
    }else{
        return false;
    }
};
console.log(mySearch("asd","bsd"));

//可索引类型
interface StringArr{
    [index:number]:string;
}
let myArr:StringArr;
myArr = ["fck","miler"];

//类类型，可以当作正常接口给类使用，依赖倒置
interface People{
    eat(guo:string);
}
class Miller implements People{
    eat(guo:string){}
}


