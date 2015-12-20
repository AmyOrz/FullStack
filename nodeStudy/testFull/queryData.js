var queryData = (function(){
    var mysql = require("mysql"),
        Q = require("q"),
        me = {
            client:null,
            Table:"user",
            resultData:null
        };
    function init() {
        clienConnect();
        createPromise();
        getData();
    }
    init();
    function clienConnect(){
        me.client = mysql.createConnection({
            user:"root",
            password:"asd"
        });
        me.client.connect();
    }

    function createPromise(){
        me.connectMysql = function(query){
            var deferred = Q.defer();
            me.client.query("use ceshi",function(err,results){
               if(err){
                   deferred.reject(err);
               }else{
                   deferred.resolve(query);
               }
            });
            return deferred.promise;
        };

        me.queryData = function(query){
            var def = Q.defer();
            me.client.query(query,function(err,results,field){
                if(err){
                    def.reject(err);
                }else{
                    def.resolve(results,field);
                }
            });
            return def.promise;
        }
    }

    function getData() {
        me.connectMysql("select * from " + me.Table).
        then(me.queryData).
        done(function (result, field) {
            var rows = {
                total: result.length,
                results: []
            };
            for (var i = 0; i < result.length; i++) {
                rows.results[i] = {
                    id: result[i].id,
                    name: result[i].name,
                }
            }
            me.resultData = rows;
        }, console.error);
    }

    return me;
}());

exports.Query = function(){
    return queryData.resultData;
};