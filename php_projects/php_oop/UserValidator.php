<?php

// create a user validator class to handle validation
// constructor which takes in POST data from form
// check required "fields to check" are present in the data
// -- a method to validate a username
// -- a method to validate an email
// return an error array once all checks are done

class userValidator
{
    private $data;
    private $error = [];
    private static $fields = ['username', 'email'];

    public function __construct($postData)
    {
        $this->data = $postData;
    }

    public function validateForm()
    {
        foreach (self::fields as $field) {
            if (!array_key_exist($field, $this->data)) {
                trigger_error("$field is not present in data");
                return;
            }
        }

        $this->validateUsername();
        $this->validateEmail();
    }

    private function validateUsername(): void
    {
        $val = trim($this->data['username']);

        if (empty($val)) {
            $this->addError('username', 'username cannot be empty');
        } else {
            if (!preg_match('/^[a-zA-Z0-9]{6,12}$/', $val)) {
                $this->addError('username', 'username must be 6-12 chars and username must be alphanumeric');
            }
        }
    }

    private function validateEmail(): void
    {
        $val = trim($this->data['email']);

        if (empty($val)) {
            $this->addError('email', 'email cannot be empty');
        } else {
            if (!filter_var($val, FILTER_VALIDATE_EMAIL)) {
                $this->addError('email', 'email must be a valid email');
            }
        }
    }

    private function addError(string $key, string $msg)
    {
        $this->errors[$key] = $msg;
    }
}
