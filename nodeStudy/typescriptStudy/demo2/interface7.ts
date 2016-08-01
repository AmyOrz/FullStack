interface Animal{
    name:string
}
interface monky{
    eye:string
}
interface People extends Animal,monky{
    age:number
}

let yh = <People>{};
yh.age = 123;
yh.name = "fuck";
yh.eye = "black";
console.log(yh);


