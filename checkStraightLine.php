<?php

/**
 * You are given an array coord, coord[i] = [x, y], 
 * where [x, y] represents the coordinate of a point. 
 * Check if these points make a straight line in the XY plane.
 * @param Integer[][] $coord
 * @return Boolean
*/
$coord_1 = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];   // true
$coord_2 = [[1,2],[2,4],[3,6],[4,8],[5,10],[6,12]]; // true
$coord_3 = [[1,1],[3,2],[5,3],[7,4],[9,5],[11,6]];  // true
$coord_4 = [[1,7],[2,6],[3,5],[4,4],[5,3],[6,2]];   // true
$coord_5 = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]];   // false
$coord_6 = [[1,7],[3,6],[4,4],[4,5],[1,6],[8,7]];   // false
$coord_7 = [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6]];   // true
$coord_8 = [[-3,-2],[-1,-2],[2,-2],[-2,-2],[0,-2]];   // true
$coord_9 = [[0,1],[1,3],[-4,-7],[5,11]];   // true
$coord_10 = [[-7,-21],[1,2]];               // true
echo checkStraightLine($coord_1);
echo '<br />';
echo checkStraightLine($coord_2);
echo '<br />';
echo checkStraightLine($coord_3);
echo '<br />';
echo checkStraightLine($coord_4);
echo '<br />';
echo checkStraightLine($coord_5);
echo '<br />';
echo checkStraightLine($coord_6);
echo '<br />';
echo checkStraightLine($coord_7);
echo '<br />';
echo checkStraightLine($coord_8);
echo '<br />';
echo checkStraightLine($coord_9);
echo '<br />';
echo checkStraightLine($coord_10);
echo '<br />';

function checkStraightLine($coord) {
    if (count($coord) > 2) {
        $tn0 = ($coord[1][1] - $coord[0][1]) / ($coord[1][0] - $coord[0][0]); 

        for ($i = 3; $i < count($coord); $i++) {
            $tni = ($coord[$i][1] - $coord[0][1]) / ($coord[$i][0] - $coord[0][0]);
            if ($tni !== $tn0) {
                return false;
            }
        }
    }

    return true;
}