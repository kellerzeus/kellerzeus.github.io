<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<?php
// print_r($_POST);

try {
    $dbh = new PDO('mysql:host=localhost;dbname=kellerzeus','root','');
    $dbh->exec("SET CHARACTER SET utf8");
    $dbh->query('set names utf8;'); 
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
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
$sql = "SELECT * FROM `message` ORDER BY id DESC LIMIT 100";
$result = $dbh->query($sql);
?>

<table>
<thead>
	<tr>
		<td>title</td><td>name</td><td>email</td><td>time</td>
	</tr>
</thead>
<tbody>
<?php 
foreach($result as $row) { 
	?>	
<tr>
	<td><?php echo $row['title'] ?></td>
	<td><?php echo $row['name'] ?></td>
	<td><?php echo $row['email'] ?></td>
	<td><?php echo $row['create_time'] ?></td>
</tr>
<tr>
<td colspan="4">message</td>
</tr>
<tr>
	<td colspan="4"><?php echo $row['message'] ?></td>
</tr>
<tr>
	<td colspan="4"></td>
</tr>
<?php } ?>
</tbody>
</table>

</body>
</html>

<?php $dbh = null; ?>
