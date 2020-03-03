<?php

declare(strict_types=1);

require_once('DbConnection.php');
require_once('Database.php');

class DbFactory
{
    public static function create(DbConnection $connection)
    {
        return new Database($connection);
    }

}
