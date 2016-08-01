<?php
class Car{
    var $color = "green",$age = 10;
    function Car($color,$age){
        $this->color = $color;
        $this->age = $age;
        echo __METHOD__;
    }
}
function print_vars($obj){
    foreach (get_object_vars($obj) as $prop => $val) {
        echo "\t$prop = $val\n";
    }
}
$a = new Car("black",12);
print_vars($a);

define("fck","what fck");
function text(){
    echo strlen(fck);
}
text();

$arr = array("a"=>123,"b"=>124,"c"=>1235);
krsort($arr);
print_r($arr);

echo __FILE__;


?>
