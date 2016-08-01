//命名空间做验证
var Validation;
(function (Validation) {
    var LetterRegexp = /^[A-Za-z]+$]/;
    var NumberRegexp = /^[0-9]+$/;
    var LetterValidation = (function () {
        function LetterValidation() {
        }
        LetterValidation.prototype.isAcceptables = function (s) {
            return LetterRegexp.test(s);
        };
        return LetterValidation;
    })();
    Validation.LetterValidation = LetterValidation;
    var NumberValidation = (function () {
        function NumberValidation() {
        }
        NumberValidation.prototype.isAcceptables = function (s) {
            return s.length == 5 && NumberRegexp.test(s);
        };
        return NumberValidation;
    })();
    Validation.NumberValidation = NumberValidation;
})(Validation || (Validation = {}));
var strings = ["Hello", "98052", "1200"];
var validation = {};
validation["str"] = new Validation.LetterValidation();
validation["num"] = new Validation.NumberValidation();
console.log(validation);
strings.forEach(function (s) {
    for (var name_1 in validation) {
        console.log("\"" + s + "\" - " + (validation[name_1].isAcceptables(s) ? "matches" : "does not match") + " " + name_1);
    }
});
//# sourceMappingURL=nameSpace1.js.map