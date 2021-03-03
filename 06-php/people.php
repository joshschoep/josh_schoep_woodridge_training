<?php
require_once './Person.php';

$person1 = new Person();

$person2 = new Person("Michael Ross", 200, "Red");

$person3 = clone $person2;
$person3->setName("James Franklin");
?>

<head>
    <title>People with PHP</title>
</head>
<body>
    <article>
        <h1>People with PHP</h1>
        <p>
            <?php
            echo($person1);
            echo($person2);
            echo($person3);
            ?>
        </p>
        <p class="lead">Thank you :)</p>
    </article>
</body>