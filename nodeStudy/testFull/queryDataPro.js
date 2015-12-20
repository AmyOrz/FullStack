function queryDataPro(query,config){
    this.query = query;
    this.config = config;
    this.mysql = require("mysql");
    this.Q = require("q");
}
queryDataPro.prototype = {
    constructor:queryDataPro,
    client:null,
    resultData:null,
    init:function(){
        this.clientConnect();
        this.getData();
    },
    clientConnect:function(){
        this.client = this.mysql.createConnection({
            user:"root",
            password:"asd"
        });
        this.client.connect();
    },
    connectMysql:function(query){
        var def = this.Q.defer();
        this.client.query("use ceshi",function(err,results){
            if(err){
                def.reject(err);
            }else{
                def.resolve(query);
            }
        });
        return def.promise;
    },
    queryData:function(query){
        var def = this.Q.defer();
        this.client.query(query,function(err,results,field){
            if(err){
                def.reject(err);
            }else{
                def.resolve(results,field);
            }
        });
        return def.promise;
    },
    getData:function(){
        var me = this;
        this.connectMysql(this.query).
        then(function(query){
            return me.queryData(query);
        },console.error).done(function(resules,field){
            if(!resules)
                return;

            var rows = {
                total:resules.length,
                result:[]
            };

            var config = me.config;
            for(var i = 0;i<resules.length;i++){
                rows.result[i] = {};
                config.forEach(function(item){
                    rows.result[i][item] = resules[i][item];
                })
            }
            me.resultData = rows;
        },console.error);
    }
};
exports.createQuery = queryDataPro;