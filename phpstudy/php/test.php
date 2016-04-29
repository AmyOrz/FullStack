<?php
$name = "miller";
$age = 22;
function getName(){
    echo $GLOBALS['name'].":".$GLOBALS['age']."\n";
}
getName();

$fck = "hello world fuck this";
print_r(explode(" ",$fck));
?>
