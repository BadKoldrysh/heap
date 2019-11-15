<?php
use PHPUnit\Framework\TestCase;

require_once('./mergeSort.php');

final class MergeSortTest extends TestCase
{
    /**
     * @dataProvider basicTests
     */
    public function testMergeSort($arr, $expected)
    {
        $this->assertEquals($expected, mergeSort($arr));
    }

    public function basicTests()
    {
        return [
            // [[1], [1]],
            // [[2, 1], [1, 2]],
            [[1, 2, 3], [1, 2, 3]],
            // [[3, 2, 1], [1, 2, 3]],
            [[-4, -9, 0], [-9, -4, 0]]
        ];
    }
}