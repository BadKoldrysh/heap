<?php

/**
 * Method for multiply two number with better speed
 * by ukrainian scientist Anatolij Karacuba
 */

echo karacubaMethod(12345, 5678);

function karacubaMethod($x, $y) {
    $xn = strlen((string)$x);
    $yn = strlen((string)$y);
    $n = 0;
    if ($xn === $yn) {
        $n = nextTwoPow($xn);
    } else {
        $n = $xn > $yn ? nextTwoPow($xn) : nextTwoPow($yn);
    }

    if ($n === 1) {
        return $x * $y;
    }

    $powN = pow(10, $n/2);
    $a = (int)($x / $powN);
    $b = $x % $powN;
    $c = (int)($y / $powN);
    $d = $y % $powN;

    // echo 'a = ' . $a . ', b = ' . $b . ', c = ' . $c . ', d = ' . $d;
    
    $ac = karacubaMethod($a, $c);
    $bd = karacubaMethod($b, $d);
    $adbc = karacubaMethod($a + $b, $c + $d) - $ac - $bd;

    $result = pow(10, $n) * $ac + $powN * $adbc + $bd;
    return $result;
}

function nextTwoPow($number) {
    $i = 0; $n = 0;
    do {
        $n = pow(2,$i++);
    } while ($number > $n);

    return $n;
}