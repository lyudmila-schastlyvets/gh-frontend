<?php

$pdo = new PDO(
    'mysql:host=localhost;dbname=geekhub;charset=utf8',
    'root',
    '',
    array(
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    )
);

$sql = "
CREATE TABLE IF NOT EXISTS form (
  id int(11) AUTO_INCREMENT PRIMARY KEY,
  name varchar(60) NOT NULL,
  surname varchar(60) NOT NULL,
  sex varchar(6) NOT NULL,
  age int(3) NOT NULL,
  person varchar(4) NOT NULL,
  date date NOT NULL,
  family_status varchar(20) NOT NULL,
  social_status varchar(20) NOT NULL,
  location varchar(255) NOT NULL,
  rest varchar(60) NOT NULL,
  site_frequency int(3) NOT NULL,
  books varchar(10) NOT NULL,
  comment text NOT NULL,
  position varchar(40) NOT NULL,
  email varchar(60) NOT NULL,
  tools tinyint(1) NOT NULL,
  cook tinyint(1) NOT NULL,
  million tinyint(1) NOT NULL,
  task varchar(20) NOT NULL
)";


$pdo->query($sql);
$data = array();
$fields = array();
$values = array();
unset($_POST["submit"]);
foreach ($_POST as $key => $value) {
    if ($key == "rest" || $key == "position") {
        $value = implode(", ", $value);
    }
    $data[':'.$key] = $value;
    $fields[] = "`".$key."`";
    $values[] = ':'.$key;
}

$sql = "INSERT INTO `form`(".implode(", ", $fields).") VALUES (".implode(", ", $values).")";
$query = $pdo->prepare($sql);
$query->execute($data);
header('Location: http://'.$_SERVER['SERVER_NAME']."/table.php");