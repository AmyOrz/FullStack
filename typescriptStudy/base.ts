let Name:string = "miller";
let hi:string = `hi man ,i am ${Name}`;

let arr:number[] = [1,2,34,543,6];
//元组tuple
let arr2:[string,number] = ["fck",123];
//枚举enum
enum Color{Red,Blue,Black = 123};
let c:Color = Color.Black;  //没赋值为索引index.
let CName:string = Color[1];  //可以获取他的名字Blue
//任意值
let Arr:any[] = ["sdqwd",12312,true];
let okay:any = "fck".slice(1); //ck
//空值void,定义为void只能是null和void 0
function setName():void{}  //当一个函数不返回值时定义为void
//断言,告诉ts这是个什么类型
let Val:any = "fck this";
let len:number = (<string>Val).length;
//const 阻止再次被赋值
const myName:string = "miller";

