<?php

// Given a 32-bit signed integer, reverse digits of an integer.
// Input: 123
// Output: 321

echo reverse_int(1534236469);

function reverse_int($number) {
    echo is_32bit_signed_int($number);
    echo '<br />';
    $tmp = '';
    $abs = abs($number);
    while($abs !== 0) {
        $tmp = $tmp . $abs % 10;
        $abs = (int)($abs / 10);
    }
    $result = $number < 0 ? -(int)$tmp : (int)$tmp;

    return is_32bit_signed_int($result) ? $result : 0;
}

function is_32bit_signed_int($value)
{
    return (abs($value) & 0x7FFFFFFF) === abs($value);
}

function array_print($arr) {
    foreach($arr as $a) {
        echo($a . ' ');
    }
    echo('<br />');
}