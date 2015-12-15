interface ClockConstructor{
    new (h:number,m:number):ClockInterface;
}
interface ClockInterface{
    tick();
}
function createClock(ccr:ClockConstructor,h:number,m:number):ClockInterface{
    return new ccr(h,m);
}

class DigitClock implements ClockInterface{
    constructor(h:number,m:number){
        console.log(h,m)
    }
    tick(){
        console.log("fuckthis");
    }
}

let digit = createClock(DigitClock,123,435);
digit.tick();