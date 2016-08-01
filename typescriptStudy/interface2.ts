interface ClockConstructor{
    new (hour:string,minute:string):ClockInterface;
}
interface ClockInterface{
    tick();
}
function createClock(fck:ClockConstructor,hour:string,minute:string):ClockInterface{
    return new fck(hour,minute);
}

class DigClock implements ClockInterface{
    private h:string;
    private m:string;
    constructor(h:string,m:string){
        this.h = h;
        this.m = m;
    }
    tick(){
        console.log(this.h+":"+this.m);
    };
}
let s = createClock(DigClock,"fuck","this");
s.tick()


