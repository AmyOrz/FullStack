//接口可以使用可选参数
interface Color{
    color?:string,
    num?:number
}

//后面有返回值的类型限定
function createSqu(config:Color):{color:string,area:number}{
    let newColor = {color:"black",area:12,hehe:'wefw'};
    if(config.color){
        newColor.color = config.color;
    }
    if(config.num){
        newColor.area = newColor.area * config.num;
    }
    return newColor;
}
let newColor = createSqu({num:123});
console.log(newColor);