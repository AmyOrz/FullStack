define(["require", "exports", "mysql"], function (require, exports, Mysql) {
    var Query = (function () {
        function Query(Table, query) {
            this.Table = Table;
            this.query = query;
        }
        Query.prototype.init = function () {
            this.client = this.getClientConnect();
            this.client.connect();
        };
        Query.prototype.getClientConnect = function () {
            return Mysql.createConnection({
                user: "root",
                password: "asd"
            });
        };
        return Query;
    })();
});
//# sourceMappingURL=Query.js.map