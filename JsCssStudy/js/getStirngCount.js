var str = "asadafafg";
function getCount(str){
    if(str === void 0){
        return;
    }
    var result = {},
        i = 0,
        len = str.length,
        max = 0,
        name = null,
        res = null;

    for(;i<len;i++){
        if(!result[str[i]]){
            result[str[i]] = 0;
        }
        result[str[i]]++;
    }
    for(res in result){
        if(result[res] > max){
            max = result[res];
            name = res;
        }
    }
    return name+":"+max;
}
var s = getCount(str);
console.log(s)