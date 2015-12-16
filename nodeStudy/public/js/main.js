$(function(){
    init();

    function init(){
        $.get(
            "/index",
            function(data){
                console.log(data)
            }
        )
    }
});
