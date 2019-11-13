<?php

/**
 * Balanced strings are those who have equal quantity of 'L' and 'R' characters.
 * Given a balanced string s split it in the maximum amount of balanced strings.
 * Return the maximum amount of splitted balanced strings.
 * 
 * @param String $s
 * @return Integer
 */

$s_1 = 'LR';
$s_2 = 'RLLLRR';
$s_3 = 'RLLLLRRRRLLLRR';

echo balancedStringSplit($s_1);
echo '<br />';
echo balancedStringSplit($s_2);
echo '<br />';
echo balancedStringSplit($s_3);
echo '<br />';

function balancedStringSplit($s) {
    $result = 0;
    $symbol = '';
    for ($i = 0; $i < count($s); $i++) {
        if ($symbol !== ''){
            if ($s[$i] === 'L') {
                $symbol = 'L';
            } else {
                $symbol = 'R';
            }
            $count = 1;
        }

        if ($s[$i+1] == $symbol) {
            $count++;
        } else {
            $count--;
        }

        if ($count == 0) {
            $result++;
            $symbol = '';
            $i++;
        }
    }
}