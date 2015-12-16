class Greeter{
    static standGreeter:string = "hello,I am there";
    constructor(public getting:string){
    }
    greet(){
        if(this.getting){
            console.log("i am "+this.getting);
        }else{
            console.log(Greeter.standGreeter);
        }
    }
}
let greet1:Greeter = new Greeter("");
greet1.greet();

//直接获取原型对象
let greet2:typeof Greeter = Greeter;
greet2.standGreeter  = "hi,man, i am there";

let greet3:Greeter = new Greeter("");
greet3.greet();