var fck;
(function (fck) {
    var Animal = (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    })();
    fck.Animal = Animal;
})(fck || (fck = {}));
//# sourceMappingURL=module.js.map