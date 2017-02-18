<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Form</title>
        <link rel="stylesheet" href="styles/reset.css" type="text/css">
        <link rel="stylesheet" href="styles/style2.css" type="text/css">
    </head>
    <body>
        <h1>Таблица данных юзеров</h1>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>gender</th>
                    <th>age</th>
                    <th>birthday</th>
                    <th>family status</th>
                    <th>social status</th>
                    <th>address</th>
                    <th>rest</th>
                    <th>frequency</th>
                    <th>books have read</th>
                    <th>comments</th>
                    <th>multiple select</th>
                    <th>email</th>
                    <th>spam</th>
                    <th>task</th>
                </tr>
            </thead>
            <tbody>
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
            $sql = "SELECT * FROM form;";
            $res = $pdo->query($sql);
            if ($res) {
                while($row = $res->fetch()) {
                    $spam = array();
                    if ($row['tools'] == 1)
                        array_push($spam,'Оборудование');
                    if ($row['cook'] == 1)
                        array_push($spam,'Как приготовить обеды');
                    if ($row['million'] == 1)
                        array_push($spam,'Заработай миллион за два дня!');
                    ?>
                    <tr>
                        <td><?= $row['id'] ?></td>
                        <td><?= $row['name'] ?></td>
                        <td><?= $row['surname'] ?></td>
                        <td><?= $row['sex'] ?></td>
                        <td><?= $row['age'] ?></td>
                        <td><?= $row['date'] ?></td>
                        <td><?= $row['family_status'] ?></td>
                        <td><?= $row['social_status'] ?></td>
                        <td><?= $row['location'] ?></td>
                        <td><?= str_replace(explode(', ', $row['rest']), array('Сплю', 'Гуляю с друзьями', 'Хожу на рыбалку', 'Играю в игры'), $row['rest']); ?></td>
                        <td><?= $row['site_frequency'] ?></td>
                        <td><?= $row['books'] ?></td>
                        <td><?= $row['comment'] ?></td>
                        <td><?= $row['position'] ?></td>
                        <td><?= $row['email'] ?></td>
                        <td><?= implode(', ', $spam) ?></td>
                        <td><?= $row['task'] ?></td>
                    </tr>
                    <?php
                }
            }
            ?>
            </tbody>
        </table>
        <a href="index.html" class="link">Вернуться к форме</a>
    </body>
</html>