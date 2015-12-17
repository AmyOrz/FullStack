var Q = require("q");
var mysql = require("mysql");
var Table = "user";
var resultData = null;

var client = mysql.createConnection({
    user:"root",
    password:"asd"
});
client.connect();

var connectMysql = function(queryData){
    var deferred = Q.defer();
    client.query("use ceshi",function(err,results){
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(queryData);
        }
    });
    return deferred.promise;
};
var queryData = function(query){
    var deferred = Q.defer();
    client.query(query,function(err,results,field){
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(results,field);
        }
    });
    return deferred.promise;
};

var promise = connectMysql("select * from "+Table);

var stdErr = function(err){
    console.error(err);
    client.end();
};
promise.
then(queryData).
done(function(result,field){
    var rows = {
        total:result.length,
        results:[]
    };
    for(var i = 0;i<result.length;i++){
        rows.results[i] = {
            id:result[i].id,
            name:result[i].name,
        }
    }
    resultData = rows;
},stdErr);
exports.Query = function(){
    return resultData;
}

