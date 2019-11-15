<?php

$testArr = [1];
print_r(mergeSort($testArr));

function mergeSort($arr)
{
    if(count($arr) == 1) {
        return array($arr[0]);
    }

    $n = count($arr);
    $middle = (int)($n/2);
    $leftArr = mergeSort(array_slice($arr, 0, $middle));
    $rightArr = mergeSort(array_slice($arr, $middle, $n));
    return mergeArrays($leftArr, $rightArr);
}

function mergeArrays($arr1, $arr2)
{
    $resultArr = array();
    $i = 0; $j = 0;
    $n = count($arr1); $m = count($arr2);
    while($i < $n || $j < $m) {
        if ($j === $m || $arr1[$i] <= $arr2[$j]) {
            array_push($resultArr, $arr1[$i]);
            $i++;
        } else if ($i === $n || $arr1[$i] > $arr2[$j]){
            array_push($resultArr, $arr2[$j]);
            $j++;
        }
    }

    return $resultArr;
}