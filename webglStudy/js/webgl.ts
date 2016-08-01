class Webgl{
    private Vshander:string;
    private Fshaner:string;
    private gl:any;
    private initShaderBool:boolean;
    constructor(private canvas){}

    getContext(){
        this.gl = this.canvas.getContent("experimental-webgl")||this.canvas.getContent("webgl");
        if(!this.gl){
            console.log("你的浏览器不支持canvas！");
        }
        return this.gl;
    }
    setShader(initShaders){
        this.initShaderBool = initShaders();
    }
}