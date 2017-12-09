<?php
$servername = "shareddb1c.hosting.stackcp.net";
$dbname = "manzar-db-323045fa";
$username = "manzar-db-323045fa";
$password = "manzar-db";


$name = $_POST["Name"];
$contact = $_POST["Contact"];
$email = $_POST["Email"];
$message = $_POST["Message"];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO Contacts VALUES (null,'$name','$contact','$email','$message')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "<html><body> <center><h2>Thank You For Contacting Us!!!</h2> <h3>We have sent you an confirmation mail!!!</h3><h4>We are redirecting you to previous page !!</h4></center></body></html>";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: Team @ICT MANZAR' . "\r\n";
$text = "Do not reply. This is a computer generated email.<br>\n\nThank you for your interest in ManZar 12.0.<br> \n
We will get back to you with your query in some time.\n<br>
Till then get ready to be ManZared.\n<br>
You can surf our Facebook page<br> https://www.facebook.com/ManzarICTMumbai/ <br>\n and our YouTube channel <br>https://www.youtube.com/channel/UCxm2mkDJtFqDuObOOu9rDaw to know more.<br> 
#JaiManzar";
mail($email,"Manzar 2018",$text,$headers);

//$headers = "MIME-Version: 1.0" . "\r\n";
//$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
//$headers .= 'From: <'.$Name.'>' . "\r\n";

//mail("sangatdas5@gmail.com","Random Subject",$message,$headers);
?>
<script type="text/javascript">
  window.location = "index.html";
</script>