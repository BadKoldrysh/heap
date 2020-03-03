<?php

declare(strict_types=1);

require_once('DbConnection.php');

class MysqlConnection implements DbConnection
{
    private $connection;

    public function __construct($host, $username, $password, $database)
    {
        $this->connection = new mysqli($host, $username, $password, $database);
    }

    public function getAll()
    {
        $query = "SELECT * FROM users";
        $res = [];
        if ($result = $this->connection->query($query)) {
            $row = $result->fetch_assoc();
            while (isset($row)) {
                array_push($res, $row);
                $row = $result->fetch_assoc();
            }
        }

        return $res;
    }
}
