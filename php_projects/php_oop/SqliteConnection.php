<?php

declare(strict_types=1);

require_once('DbConnection.php');

class SqliteConnection implements DbConnection
{
    private $connection;
    private $errors;

    public function __construct($path)
    {
        $this->errors = [];
        $this->connection = new SQLite3($path);
        $this->connection->enableExceptions(true);
    }

    public function getAll()
    {
        $query = "SELECT * FROM users";
        $res = [];
        if ($result = $this->connection->query($query)) {
            while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                array_push($res, $row);
            }
        }

        return $res;
    }

    public function saveUser(string $username, string $email)
    {
        $query = "INSERT INTO users(username, email) VALUES ('{$username}', '{$email}')";
        try {
            $res = $this->connection->exec($query);
        } catch (Exception $e) {
            $this->errors['db'] = $e->getMessage();
            $res = false;
        }
        return $res;
    }

    public function getErrors() {
        return $this->errors;
    }
}
