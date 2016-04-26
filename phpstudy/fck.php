<html>
<head>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
<?php
$name = "please input your name:";
$con = new mysqli("localhost","root","asd","blog");
mysqli_query($con,"set names utf8");
if(!$con){
    dir("connection error!");
}
$sql = "select * from Category";
$sql = "select * from Article";
$result = mysqli_query($con,$sql);
?>
<form>
    <select name="users" onchange="showUser(this.value)">
        <option value=""><?php echo $name?></option>
        <option value="6">Peter Griffin</option>
        <option value="7">Lois Griffin</option>
        <option value="8">Glenn Quagmire</option>
        <option value="9">Joseph Swanson</option>
    </select>
</form>
<div id="txtHint"><b>Person info will be listed here.</b></div>
</body>
</html>
