//抽象类
abstract class Depatment{
    constructor(public name:string){}
    printName(){
        console.log(this.name);
    }
    abstract printMetting():void;
}
class Accounting extends Depatment{
    constructor(name:string){
        super(name);
    }
    printMetting(){
        console.log("fuck this");
    }
}
let department:Depatment = new Accounting("miller");
department.printName();
department.printMetting();