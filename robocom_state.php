<?php
// robot names
$score_map = [
    "raph" => 0, 
    "donny" => 0, 
    "mikey" => 0,
    "leo" => 0
];

foreach($score_map as $name => $score)
{
    if(isset($_POST[$name]) && !empty($_POST[$name]))
    {
        $score_map[$name] = $_POST[$name];
    }
    else
    {
        print_r("Key " . $name . " not set!");
    }
}
unset($name, $score);

file_put_contents("robocom_score.json", json_encode($score_map), LOCK_EX);
?>