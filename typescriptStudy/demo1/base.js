//声明let,const   const只能对变量声明一次
function init() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log(i);
        }, 10);
    }
}
//# sourceMappingURL=base.js.map