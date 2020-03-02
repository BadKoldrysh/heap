<?php

// create a user validator class to handle validation
// constructor which takes in POST data from form
// check required "fields to check" are present in the data
// -- a method to validate a username
// -- a method to validate an email
// return an error array once all checks are done

class userValidator {
    private $data;
    private $error = [];
    private static $fields = ['username', 'email'];

    public function __construct($postData) {
        $this->data = $postData;
    }

    public function validateForm() {
        foreach (self::fields as $field) {
            if (!array_key_exist($field, $this->data)) {
                trigger_error("$field is not present in data");
                return;
            }
        }

        $this->validateUsername();
        $this->validateEmail();
    }

    private function validateUsername() {

    }

    private function validateEmail() {

    }

    private function addError() {

    }
}