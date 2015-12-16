//命名空间做验证
namespace Validation{
    export interface StringValidation{
        isAcceptables(s:string):boolean;
    }
    const LetterRegexp = /^[A-Za-z]+$]/;
    const NumberRegexp = /^[0-9]+$/;

    export class LetterValidation implements StringValidation{
        isAcceptables(s:string){
            return LetterRegexp.test(s);
        }
    }
    export class NumberValidation implements StringValidation{
        isAcceptables(s:string){
            return s.length == 5 && NumberRegexp.test(s);
        }
    }
}

let strings = ["Hello","98052","1200"];
let validation:{[s:string]:Validation.StringValidation} = {};

validation["str"] = new Validation.LetterValidation();
validation["num"] = new Validation.NumberValidation();

console.log(validation)
strings.forEach(
  s=>{
      for(let name in validation){
          console.log(`"${ s }" - ${ validation[name].isAcceptables(s) ? "matches" : "does not match" } ${ name }`);
      }
  }
);

