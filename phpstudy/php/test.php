<?php
$name = "miller";
$age = 22;
function getName(){
    echo $GLOBALS['name'].":".$GLOBALS['age']."\n";
    echo 2==4 or exit("fck");
}
getName();

?>
