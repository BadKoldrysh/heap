<?php

declare(strict_types=1);

interface DbConnection
{
    public function saveUser(string $username, string $email);

    public function getAll();
}
