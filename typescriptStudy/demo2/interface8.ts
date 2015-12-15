//接口继承类  会继承到private和protect
class Control{
    private state:any;
}
interface Selectable extends Control{
   select():void;
}
class Button extends Control{
    select(){};
}

