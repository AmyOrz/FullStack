var VSHANDER = 'attribute vec4 a_Position;' +
    'void main(){ ' +
    'gl_Position = a_Position;' +
    'gl_PointSize = 50.0;' +
    '}';
var FSHANDER = 'void main(){\n'
    +'gl_FragColor = vec4(1.0,1.0,0.0,1.0);\n' +  //è®¾ç½®é¢œè‰²
    '}\n';
function main(){
    var canvas = document.getElementById("webgl");
    var gl = getWebGLContext(canvas);
    if(!gl){
        alert("error");
    }
    if(!initShaders(gl,VSHANDER,FSHANDER)){
        alert("ç€è‰²å…¶å™¨é”™è¯¯");
    }
    var a_Position = gl.getAttribLocation(gl.program,"a_Position");
    if(a_Position < 0){
        console.log("a_Positionå˜é‡ä¸å­˜åœ¨");
        return;
    }
    gl.vertexAttrib3f(a_Position,0.5,0.0,0.0);
    gl.clearColor(0.0,0.0,0.0,1.0);    //è®¾ç½®èƒŒæ™¯é¢œè‰²
    gl.clear(gl.COLOR_BUFFER_BIT);     //æ¸…é™¤ç”»å¸ƒ
    gl.drawArrays(gl.POINTS,0,1);
}
main();