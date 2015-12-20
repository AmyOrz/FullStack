/// <reference path="./module/mysql/mysql.d.ts" />
import *  as Mysql from "mysql";
class Query{
    private client:any;
    private Table:string;
    private query:string;
    private resultData:string;

    constructor(Table:string,query:string){
        this.Table = Table;
        this.query = query;
    }
    init(){
        this.client = this.getClientConnect();
        this.client.connect();


    }
    getClientConnect(){
        return Mysql.createConnection({
            user:"root",
            password:"asd"
        });
    }

}