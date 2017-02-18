<?php
/**
 * Created by PhpStorm.
 * User: Lyudmila
 * Date: 16.02.2017
 * Time: 1:01
 */

$pdo = new PDO(
    'mysql:host=localhost;dbname=geekhub;charset=utf8',
    'root',
    '',
    array(
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    )
);

$stmt = $pdo->query('SELECT * FROM form');
while ($row = $stmt->fetch())
{
    var_dump($row);
}