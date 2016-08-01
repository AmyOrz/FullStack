var Webgl = (function () {
    function Webgl(canvas) {
        this.canvas = canvas;
    }
    Webgl.prototype.getContext = function () {
        this.gl = this.canvas.getContent("experimental-webgl") || this.canvas.getContent("webgl");
        if (!this.gl) {
            console.log("你的浏览器不支持canvas！");
        }
        return this.gl;
    };
    Webgl.prototype.setShader = function (initShaders) {
        this.initShaderBool = initShaders();
    };
    return Webgl;
})();
//# sourceMappingURL=webgl.js.map