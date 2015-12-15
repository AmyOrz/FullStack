import DateTimeFormat = Intl.DateTimeFormat;
interface CLockInterface{
    curTime:Date
    setTime(d:Date)
}

class Clock implements CLockInterface{
    curTime:Date;
    setTime(d:Date){
        this.curTime = d;
    }
    fuckthis(h:number,m:number){};
}

