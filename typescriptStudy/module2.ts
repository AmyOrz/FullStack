///<reference path="module.ts">
namespace fck{
    class People extends Animal{
        constructor(protected name:string){
            super(name);
        }
        run(){
            console.log(123123);
        }
    }
    let p = new People("hehe");
    p.run();
}
