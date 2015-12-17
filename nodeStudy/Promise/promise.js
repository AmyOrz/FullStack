var Q = require("q");
var fs = require("fs");
var fsRead = Q.denodeify(fs.readFile);
var promise = fsRead("hehe.txt");
promise.then(function(data){
    console.log(data.toString())
},console.error);