class Point{
    x:number;
    y:number;
}
interface Point3 extends Point{
    z:number;
}
let p:Point3 = {
    x:3,
    y:34,
    z:234
}