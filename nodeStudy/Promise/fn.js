var Q = require("q");
var fun1 = function (data) {
    var deferred = Q.defer();
    deferred.resolve(data+" fun1");
    return deferred.promise;
}

var fun2 = function (data) {
    var deferred = Q.defer();
    deferred.resolve(data+" fun2");
    return deferred.promise;
}

var fun3 = function (data) {
    var deferred = Q.defer();
    deferred.resolve(data+" fun3");
    return deferred.promise;
}

function main(data,cb){
    fun1(data)
        .then(fun2)
        .then(fun3)
        .done(function(data){
            cb(data);//ok 获得的最终数据为 --->"data fun1 fun2 fun3"
        },function(err){
            cb(err);//failed
        });
}
main("fuck",function(data){
    console.log(data)
});