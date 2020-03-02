<?php

require('UserValidator.php');

if (isset($_POST['submit'])) {
    // validate entries
    $validation = new UserValidator($_POST);
    $errors = $validation->validateForm();

    // save data to db
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
            <input type="text" name="username" />
            <div class="error">
                <?php echo $errors['username'] ?? ''; ?>
            </div>

            <label>Email:</label>
            <input type="text" name="email" />
            <div class="error">
                <?php echo $errors['email'] ?? ''; ?>
            </div>

            <input type="submit" value="submit" name="submit" />
        </form>
    </div>
</body>
</html>