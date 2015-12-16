//实现继承
class People {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    run(meter:number = 0){
        console.log(`hi ${this.name} fuck run ${meter}`);
    }
}

class BigMan extends People{
    constructor(name:string){
        super(name);
    }
    run(meter:number = 5){
        console.log("Bigman start run...")
        super.run(meter);
    }
}
class Child extends People{
    constructor(name :string){
        super(name);
    }
    run(meter :number = 2){
        console.log("child start run...");
        super.run(meter);
    }

}
let yh : People = new BigMan("miller");
yh.run();
