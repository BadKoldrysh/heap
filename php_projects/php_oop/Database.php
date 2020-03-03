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
}
