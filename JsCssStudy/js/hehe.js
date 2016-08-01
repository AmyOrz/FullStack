for(var i = 1000;i<=9999;i++){
    var k = (i+"").split("");
    var m = k.reverse().join("")|0;
    if(i*9 == m){
        console.log(i)
        break;
    }
}
