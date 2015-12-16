var express=require("express");
var fs=require("fs");
var app=express();
var formidable = require("formidable");


app.get("/index.html", function (req,res) {
    res.sendfile(__dirname+"/FromData.html");
});
app.post("/index", function (req,res) {
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
        fs.renameSync(files.upload.path,"/tmp/fuck.png");
        readFile();
    });
    function readFile(){
       fs.readFile("/tmp/fuck.png","binary",function(err,file){
           if(err){
               res.send(err);
           }else{
               res.send("recevied image:");
               //res.send(file,"binary");
           }
       });
    }
});

app.listen(5555, function () {
    console.log("开始监听");
});