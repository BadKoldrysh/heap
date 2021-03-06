<?php
/**
 * Method for multiply two number with better speed
 * by ukrainian scientist Anatolij Karacuba
 */

// echo karacubaMethod(12345, 5678);

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
        return bcmul($x, $y);
    }

    $powN = pow(10, $n/2);
    // $a = (int)($x / $powN);
    $a = bcdiv($x, $powN);
    $b = bcmod($x, $powN);
    // $c = ($y / $powN);
    $c = bcdiv($y, $powN);
    $d = bcmod($y, $powN);

    // echo 'a = ' . $a . ', b = ' . $b . ', c = ' . $c . ', d = ' . $d;
    
    $ac = karacubaMethod($a, $c);
    $bd = karacubaMethod($b, $d);
    $adbc = bcadd(karacubaMethod(bcadd($a, $b), bcadd($c, $d)), "-".bcadd($ac, $bd));

    $result = bcadd(bcmul(pow(10, $n), $ac), bcadd(bcmul($powN, $adbc), $bd));
    return $result;
}

function nextTwoPow($number) {
    $i = 0; $n = 0;
    do {
        $n = pow(2,$i++);
    } while ($number > $n);

    return $n;
}
