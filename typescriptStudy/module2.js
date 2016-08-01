var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="module.ts">
var fck;
(function (fck) {
    var People = (function (_super) {
        __extends(People, _super);
        function People(name) {
            _super.call(this, name);
            this.name = name;
        }
        People.prototype.run = function () {
            console.log(123123);
        };
        return People;
    })(Animal);
    var p = new People("hehe");
    p.run();
})(fck || (fck = {}));
//# sourceMappingURL=module2.js.map