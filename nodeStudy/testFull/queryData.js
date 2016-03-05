var queryData = (function(){
    var mysql = require("mysql"),
        RSVP = require("rsvp"),
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
       /* me.connectMysql = function(query){
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
        }*/
        me.connectMysql = new RSVP.Promise(function(resolve,reject){
           me.client.query("use ceshi",function(err,result){
               if(err){
                   reject(err);
               }else{
                   resolve(query);
               }
           })
        });
        me.queryData = new RSVP.Promise(function(resolve,reject){
            me.client.query(query,function(err,results,field){
               if(err){
                   reject(err);
               } else{
                   resolve(results,field);
               }
            });
        });
    }

    function getData() {
        me.connectMysql.then(function(query){
            me.queryData(query);
        })
        /*me.connectMysql("select * from " + me.Table).
        then(me.queryData).
        finally(function (result, field) {
            console.log(result)
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
        }, console.error);*/
    }

    return me;
}());

console.log(queryData.resultData)
//exports.Query = function(){
//    return queryData.resultData;
//};