var express = require('express');
var app = express();
var Mysql = require("./Mysql");
app.use(express.static('../public'));

app.get('/', function (request, response) {
    response.sendFile(__dirname+"/index.html");
})

app.get("/index",function(request,response){
    var name = request.query.name;
    console.log(name);

    var query = "select id from user order by id DESC";
    var query2 = "update user set name=? where id=?";
    var query3 = "insert into user(id,name) values(?,?)";
    var query4 = "delete from user where id=?";
    var mysql = new Mysql.createMysql({
        query:query4,
        response:response,
        config:["id","name"],
        param:["111"]
    });
    mysql.Delete();
});
var server = app.listen(8080, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});

