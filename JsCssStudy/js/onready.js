function onready(fn){
    if(window.addEventListener){
        document.addEventListener("DOMContentLoaded",function(){
            document.removeEventListener("DOMContentLoaded",argument.callee,false);
            fn();
        },false);
    }else if(window.attachEvent){
        document.attachEvent("onreadystatechange",function(){
            if(document.readyState == "complete"){
                document.dispatchEvent("onreadystatechange",arguments.callee);
                fn();
            }
        });
    }
}
