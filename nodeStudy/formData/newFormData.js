var express = require("express");
var app = express();
var fs = require("fs");
var multer = require("multer");             //处理表单数据form-data

app.use(express.static("../public"));
app.use(multer({dest:"/tmp"}).array("image"));

app.get("/",function(request,response){
    response.sendFile(__dirname+"/newForm.html");
});

app.post("/index",function(request,response){
    var file = request.files[0];
    var dirFile = __dirname + "/"+ file.originalname;
    fs.readFile(file.path,function(err,data){
        if(err){
            response.end(err);
        }else{
            fs.writeFile(dirFile,data,function(err){
                if(err){
                    response.end(err);
                }else {
                    res= {
                        message: "upload image successful",
                        filename: file.originalname
                    };
                    response.send(JSON.stringify(res));
                }
            })
        }
    });
});

var server = app.listen(8080,function(){
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});

