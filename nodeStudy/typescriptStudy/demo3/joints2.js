//使用typeof判断类型
//instanceof类型保护是通过其构造函数来细化其类型
/**
interface Paper{
    getPaper():string
}

class NumberPaper implements Paper{
    constructor(private numSpaces:number){}
    getPaper(){
        return Array(this.numSpaces).join(" ");
    }
}
class StringPaper implements Paper{
    constructor(private val :string){}
    getPaper(){
        return this.val;
    }
}
function getRandomPaper(random){
    return random > 0.5?
        new NumberPaper(4):new StringPaper("   ");
}

let padding : Padding = getRandomPaper(0.8);
if(padding instanceof NumberPaper){
    padding;
}
*/ 
//# sourceMappingURL=joints2.js.map