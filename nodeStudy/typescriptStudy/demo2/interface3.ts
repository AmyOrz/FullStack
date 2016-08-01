interface SearchFunc{
    (source:string,target:string):boolean
}

let mySearch : SearchFunc;

//mySearch = function(sur:string,tar:string):boolean{    //可以进行优化
mySearch = function(sur,tar){
    var index = sur.search(tar);
    if(index>0){
        return true;
    }else{
        return false;
    }
};
console.log(mySearch("fuckyou","wdw"));