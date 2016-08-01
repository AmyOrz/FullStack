<?php
//继承
class Animal{
    protected $name = null;
    function __construct($name){
        $this->name = $name;
    }
    public function eat(){
        echo $this->name." eat something";
    }
}
class Dog extends Animal{
    function __construct($name){  //手动调用父类的构造方法
        parent::__construct($name);
    }

    public function eat(){
        echo "dog name is ".$this->name." eat some";
    }
}

$cat = new Animal("cat");
$cat->eat();

$tom = new Dog("Tom");
$tom->eat();

//interface
echo $_SERVER['PHP_SELF'];
echo __FILE__;
?>
