<?php

/**
 * Given a binary matrix A, we want to flip the image 
 * horizontally, then invert it, and return the resulting image.
 * 
 * To flip an image horizontally means that each row of the image 
 * is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].
 * 
 * To invert an image means that each 0 is replaced by 1,
 * and each 1 is replaced by 0. For example, inverting [0, 1, 1] 
 * results in [1, 0, 0].
 * 
 * Input: [[1,1,0],[1,0,1],[0,0,0]]
 * Output: [[1,0,0],[0,1,0],[1,1,1]]
 * Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
 * Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
 */

echo flipAndInvertImage([[1, 0, 1], [0, 0, 1]]);

function flipAndInvertImage($arr) {
    print_r2($arr);
    foreach($arr as &$array) {
        flipArray($array);
        invertArray($array);
    }
    print_r2($arr);
}

function flipArray(&$arr) {
    $tmp = [];
    for ($i = count($arr)-1; $i >= 0; $i--) {
        array_push($tmp, $arr[$i]);
    }
    $arr = $tmp;
}

function invertArray(&$arr) {
    foreach($arr as &$a){
        $a = ($a === 0) ? 1 : 0;
    }
}

function print_r2($val){
    echo '<pre>';
    print_r($val);
    echo  '</pre>';
}
