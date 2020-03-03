<?php

declare(strict_types=1);

require_once('UserValidator.php');
require_once('MysqlConnection.php');
require_once('SqliteConnection.php');
require_once('DbFactory.php');

if (isset($_POST['submit'])) {
    // validate entries
    $validation = new UserValidator($_POST);
    $errors = $validation->validateForm();

    // save data to db


    $db = DbFactory::create(new SqliteConnection("training_app.sqlite"));
    if (empty($errors)) {
        $res = $db->saveUser($_POST['username'], $_POST['email']);
    }
    foreach ($db->getAll() as $row) {
        printf("%s: %s<br />", $row['username'], $row['email']);
    }
    // $db = DbFactory::create(new MysqlConnection("localhost", "root", "", "training_app"));
    // foreach ($db->getAll() as $row) {
    //     printf("%s: %s<br />", $row['username'], $row['email']);
    // }
}
?>

<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <title>PHP OOP Tutorial</title>
</head>
<body>
    <div class="new-user">
        <h2>Create new user</h2>
        <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">
            <label>Username:</label>
            <!-- htmlspecialchars is used for security -->
            <input type="text" name="username" value="<?php echo htmlspecialchars($_POST['username'] ?? '') ?>"/>
            <div class="error">
                <?php echo $errors['username'] ?? ''; ?>
            </div>

            <label>Email:</label>
            <input type="text" name="email" value="<?php echo htmlspecialchars($_POST['email'] ?? '') ?>" />
            <div class="error">
                <?php echo $errors['email'] ?? ''; ?>
            </div>

            <input type="submit" value="submit" name="submit" />
        </form>
    </div>
</body>
</html>