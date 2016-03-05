function ajax(type,url){
    var httpRequest = window.XMLHttpRequest?
            new XMLHttpRequest:window.ActiveXObject("Msxm12.XMLHTTP")?
                new ActiveXObject("Msxm12.XMLHTTP"):new ActiveXObject("Microsoft.XMLHTTP");
    /*if(window.xmlhttprequest){
        httprequest = new xmlhttprequest();
    }else if(window.activexobject) {
        try {
            httprequest = new activexobject("msxm12.xmlhttp");
        } catch (e1) {
            try {
                httprequest = new activexobject("microsoft.xmlhttp");
            } catch (e2) {
                alert("浏览器问题")
            }
        }
    }*/
    console.log(httpRequest)
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState == 4 && httpRequest.status == 200){
            console.log(httpRequest.responseText);
        }
    }
    httpRequest.open(type,url,true);
    httpRequest.send();
}