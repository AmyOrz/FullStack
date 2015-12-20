$(function(){
    init();
    function init(){
        $.get(
            "/index",
            {
                name:"Miller"
            },
            function(data){
                $("#name").html(JSON.stringify(data));
            }
        )
    }
});
