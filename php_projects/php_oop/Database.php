<?php

declare(strict_types=1);

class Database
{
    private $dbConnection;

    public function __construct(DbConnection $dbConnection)
    {
        $this->dbConnection = $dbConnection;
    }

    public function getAll()
    {
        return $this->dbConnection->getAll();
    }

    public function saveUser(string $username, string $email)
    {
        return $this->dbConnection->saveUser($username, $email);
    }

    public function getErrors()
    {
        return $this->dbConnection->getErrors();
    }
}
