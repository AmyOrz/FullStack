//如果指定的参数类型有2个，string和number，可以是联合类型
/**
 * function padLeft(val:string,padding:string|number){}1
 */
//如果是联合类型，我们只能访问其中共有成员
/**
interface Brid{
    fly();
    layEgg();
}
interface Fish{
    swim();
    layEgg();
}
function getSmall():Brid|Fish{}
let pet = new getSmall();
pet.layEgg();

 if(<Bird>pet.fly)
    <Bird>pet.fly();
 else
    <Fish>pet.swim();
*/
//用户可以使用自定义的类型保护
//pet is Fish就是类型断言。
// 一个断言是parameterName is Type这种形式，parameterName必须是来自于当前函数签名里的一个参数名
/**
 function isFish(pet:Fish|Bird): pet is Fish{
    return (<Fish>pet).swim !== undefined;
}
if(isFish(pet)){
    pet.swim();
}else{
    pet.fly();
}*/


