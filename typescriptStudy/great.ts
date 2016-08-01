//我们希望传入的参数是number或者string
function getCount(name:string,code:string|number){
    return typeof code == "string"?name+code:name+",oh no";
}
let a = getCount("efwef",12);
console.log(a);

//多态中的this
class Computer{
    constructor(protected value:number = 0){}
    public finish(){
        return this.value;
    }
    public add(val:number){
        this.value += val;
        return this;
    }
    public chu(val:number){
        this.value /= val;
        return this;
    }
}
let answer:number = new Computer(100).add(10).chu(50).finish();
console.log(answer)

//symbols 内置对象,提供iterators遍历数组
let pet = ["cat","dog","pig"];
for(let i of pet){
    console.log(i)
}


