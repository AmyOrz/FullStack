//后面有返回值的类型限定
function createSqu(config) {
    var newColor = { color: "black", area: 12, hehe: 'wefw' };
    if (config.color) {
        newColor.color = config.color;
    }
    if (config.num) {
        newColor.area = newColor.area * config.num;
    }
    return newColor;
}
var newColor = createSqu({ num: 123 });
console.log(newColor);
//# sourceMappingURL=interface2.js.map