<?php
$q = $_GET["q"];
$con = new mysqli("localhost","root","asd","blog");
mysqli_query($con,"set names utf8");
if(!$con){
    dir("cannot connection");
}
mysqli_select_db($con,"ajax_demo");
$sql = "select * from Article where articleId=".$q;
$result = mysqli_query($con,$sql);
echo "<table border='1' class = 'table table-hover'>
<tr>
<th>Id</th>
<th>name</th>
<th>time</th>
<th>address</th>
<th>date</th>
</tr>";

while($row = mysqli_fetch_array($result)){
    echo "<tr>";
    echo "<td>" . $row['articleId'] . "</td>";
    echo "<td>" . $row['articleName'] . "</td>";
    echo "<td>" . $row['year'] . "</td>";
    echo "<td>" . $row['date'] . "</td>";
    echo "<td>" . $row['address'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
