var Greeter = (function () {
    function Greeter(getting) {
        this.getting = getting;
    }
    Greeter.prototype.greet = function () {
        if (this.getting) {
            console.log("i am " + this.getting);
        }
        else {
            console.log(Greeter.standGreeter);
        }
    };
    Greeter.standGreeter = "hello,I am there";
    return Greeter;
})();
var greet1 = new Greeter("");
greet1.greet();
//直接获取原型对象
var greet2 = Greeter;
greet2.standGreeter = "hi,man, i am there";
var greet3 = new Greeter("");
greet3.greet();
//# sourceMappingURL=Class3.js.map