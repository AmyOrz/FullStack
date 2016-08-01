import {Sv} from "./Valition";
import ZipCodeValitor from "";

class ZipCodeValitor implements Sv{
    isAcceptable(s:string):boolean{
        return true;
    }
    getName(){
        console.log("wegwerg")
    }
}
let a = new ZipCodeValitor();
a.getName();