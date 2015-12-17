var express = require('express');
var app = express();
var queryData = require("./queryData");

app.use(express.static('../public'));

app.get('/', function (request, response) {
    response.sendFile(__dirname+"/index.html");
})

app.get("/index",function(request,response){
    var data = queryData.Query();
    response.json(data);
});
var server = app.listen(8080, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

