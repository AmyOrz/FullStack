//一般写法,printLabel方法必须检查要有label属性.
function printLabel(labelObject:{label:string}){
    console.log(labelObject.label);
}

let myObj = {fuck:"qwd",label:"fuckthis"};
printLabel(myObj);

//let anotherObj = {fuck:"afjwkef",hehe:"wjgkrw"};
//printLabel(anotherObj);   //报错,没有lable属性

//接口实现
interface LabelValue{
    label:string
}

function stdoutLabel(LabelObj:LabelValue){
    console.log(LabelObj.label);
}
let myObject = {fuck:"sflkj",label:"werfwf"};
stdoutLabel(myObject);


