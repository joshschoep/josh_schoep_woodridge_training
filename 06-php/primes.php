<?php
//from geeksforgeeks
function primeCheck($num) {
    if($num == 1) {
        return 0;
    }
    for($i=2; $i <= $num / 2; $i++) {
        if($num % $i == 0) {
            return 0;
        }
    }
    return 1;
}
?>

<head>
    <title>PHP Prime Counter</title>
</head>
<body>
<?php   
    $n = 1000;
    if(isset($_GET['n'])){
        $n = $_GET['n'];
    }

    if($n < 0 || !ctype_digit($n)){
        exit("Requested max value ".$n." is not an integer, or is below 0");
    }

    echo "<h1>The first $n primes:</h1>";
    echo "<p>";
    $iterator = 2;
    $count = 0;
    while($count < $n){
        if(primeCheck($iterator)){
            echo "$iterator, ";
            $count++;
        }
        $iterator++;
    }
    echo "</p>";

?>
</body>