class Animal{
    constructor(public name:string){  //直接在参数中定义需要的属性，优雅的设计
    }
    run(long:number){
        console.log(this.name + " running "+long+" minute");
    }
}
class People extends Animal{
    constructor(name:string){
        super(name);
    }
    eat(){
        console.log(this.name + " is eat some");
    }
}
//存取器get/set，设置访问权限
//静态类 static

//抽象类
abstract class Department{
    constructor(protected name:string){}

    abstract printMess():string;
    printName(){
        console.log(this.name+" is a pig");
    }
}
class acMent extends Department{
     constructor(name:string){
         super(name);
     }
    printMess(){
        return "what fck";
    }
}
let ment:Department = new acMent("fewf");
console.log(ment.printMess());

let ac:typeof acMent = acMent;
console.log(ac)
