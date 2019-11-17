<?php
use PHPUnit\Framework\TestCase;

require_once('./mergeSort.php');

final class MergeSortTest extends TestCase
{
    /**
     * @dataProvider realTests
     */
    public function testMergeSort($arr, $expected)
    {
        $this->assertEquals($expected, mergeSort($arr));
    }

    public function basicTests()
    {
        return [
            [[1], [1]],
            [[2, 1], [1, 2]],
            [[1, 2, 3], [1, 2, 3]],
            [[3, 2, 1], [1, 2, 3]],
            [[-4, -9, 0], [-9, -4, 0]],
            [[5, 1, 3, 2], [1, 2, 3, 5]],
            [[2, 1, 1], [1, 1, 2]],
            [[0, 0, 0], [0, 0, 0]]
        ];
    }

    public function realTests()
    {
        $arraysCount = 1000;
        $elemsCount = 1000;
        $res = array();
        for ($i = 0; $i < $arraysCount; $i++) {
            $randArr = array();
            for ($j = 0; $j < $elemsCount; $j++) {
                array_push($randArr, rand(-10000000, 10000000));
            }
            $tmp = array();
            array_push($tmp, $randArr);
            sort($randArr);
            array_push($tmp, $randArr);
            array_push($res, $tmp);
        }
        return $res;
    }
}