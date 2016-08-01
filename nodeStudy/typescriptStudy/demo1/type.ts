//用tsc进行编译
let isdone:boolean = false;

let age:number = 23.234;

let Name:string = "fuck";

let miller :string = `hello my name is ${ Name },today i am ${age} years`;
//let miller :string = "hello my name is "+Name+",today";
console.log(miller);

let list : number[] = [1,2,4,35];
//let list : Array<number> = [123,23,34,6];

let Arr:[number,string] = [12,"asd"];
//console.log(Arr[1].substr(1),Arr[0].substr(1))    分别对应，number无substr方法
//Arr[3] = "fck";
//Arr[4] = false;   //报错，因为Arr中没有定义为boolean，不能赋值为bool



enum Color {Red = 1,Yellow};
let c:Color = Color.Red;      //默认为0
let c2:Color = Color.Yellow; //第二个默认是第一个数值+1，所以=2
let s:string = Color[2];     //输出Yellow，获取到名字
console.log(c2)

//任意值
let str:any = "efhwjk";  str = 213;
let arr :any[] = [1234,"sdhfejk",false];  //任意数组

//空值   不返回值
function retVoid():void{
    alert("wehfjh");
}

//断言
let fuck:any = "fhsjkerhgr";
let num:number = (<string>fuck).length;  //断言fuck为string类型，让他有string方法
console.log(num)