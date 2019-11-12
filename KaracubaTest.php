<?php
use PHPUnit\Framework\TestCase;

require_once('./karacubaMethod.php');
ini_set('memory_limit', '-1');

final class KaracubaTest extends TestCase
{
    /**
     * @dataProvider seriousData
     */
    public function testMethod($x, $y, $expected): void
    {
        $this->assertEquals($expected, karacubaMethod($x, $y));
    }
    
    public function additionProvider()
    {
        return [
            [1, 1, 1],
            [1, 2, 2],
            [2, 2, 4],
            [4, 4, 16],
            [123, 456, 56088],
        ];
    }

    public function seriousData()
    {
        return [
            ["49823261", "44269423", "2205647016448403"],
            ["54761293", "65394884", "3581108403425012"],
            ["9313685456934674", "7658898761837539", "71332574014261268360454523927286"],
            ["3957322621234423", "7748313756335578", "30662577304368647842211393201494"],
            ["34215432964249374812219364786397", "94541964835273822784327848699719", "3234794260129733170788831535430575611379062580407060392628922443"],
            // ["71611955325935479159397713213124", "93567726499788166681348352945366", "6700567850052179472481148730882040129649508491917840721086183384"],
            // [
            //     8436939677358274975644341226884162349535836199962392872868456892, 
            //     3864264464372346883776335161325428226997417338413342945574123327, 
            //     32602566183268675582196165592691544162522778809155901895617284287276672563976841699892789718741377833554298336397153444191119684
            // ],
            // [
            //     8711129198194917883527844183686122989894424943636426448417394566,
            //     2924825637132661199799711722273977411715641477832758942277358764,
            //     25478534007255378799894857247961445544397925869179138904636157575535921570058983065006369481295619500406669960288667484926076424
            // ]
        ];
    }
}