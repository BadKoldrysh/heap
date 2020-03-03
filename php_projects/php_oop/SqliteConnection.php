<?php

declare(strict_types=1);

require_once('DbConnection.php');

class SqliteConnection implements DbConnection
{
    private $connection;

    public function __construct($path)
    {
        $this->connection = new SQLite3($path);
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
}
