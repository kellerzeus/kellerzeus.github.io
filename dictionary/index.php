<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="print.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<?php
// print_r($_POST);

try {
    $dbh = new PDO('mysql:host=localhost;dbname=dictionary','root','linmory');
    $dbh->exec("SET CHARACTER SET utf8");
    $dbh->query('set names utf8;'); 
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
/*
if(!empty($_POST['name'])){
	$now = date('Y-m-d H:i:s');
	$sql = "INSERT INTO `kellerzeus`.`message` (`id`, `title`, `name`, `email`, `message`, `update_time`, `create_time`) 
			VALUES (NULL, :title, :name, :email, :message, '$now', '$now')";
	$sth=$dbh->prepare($sql);
	$sth->bindParam(':name',$_POST['name']);
	$sth->bindParam(':title',$_POST['title']);
	$sth->bindParam(':message',$_POST['message']);
	$sth->bindParam(':email',$_POST['email']);
	$sth->execute();
}
*/
$sql = "SELECT * FROM `iciba` ORDER BY id DESC LIMIT 24";
$result = $dbh->query($sql);
?>
<div id="content">
<ul>
<?php 
foreach($result as $row) { 
	?>	
<li>
	<p><span class="word"><?php echo $row['word'] ?></span><span class="pronunciation"><?php echo $row['pronunciation'] ?></span></p>
	<p><?php echo $row['description'] ?></p>
</li>
<?php } ?>
</ul>
</div>
<div>
</div>
</body>
</html>

<?php $dbh = null; ?>
