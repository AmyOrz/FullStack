$(function(){
    init();
    function init(){
        $.get(
            "/index",
            function(data){
                $("#name").html(JSON.stringify(data));
            }
        )
    }
});
