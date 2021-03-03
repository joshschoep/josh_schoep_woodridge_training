<?php
require_once './Person.php';

$person1 = new Person();

$person2 = new Person();
$person2->setName("Michael Ross");
$person2->setAge(200);
$person2->setFavoriteColor("Red");

$person3 = clone $person2;
$person3->setName("James Franklin");

function display_person($person){
    echo '<h2>'.$person->getName().'</h2>';
    echo '<p>This person is '.$person->getAge().' years old</p>';
    echo '<p>This person\'s favorite color is '.$person->getFavoriteColor().'</p>';
}


?>

<head>
    <title>People with PHP</title>
</head>
<body>
    <h1>People with PHP</h1>
    <?php
    display_person($person1);
    display_person($person2);
    display_person($person3);
    ?>
    <h3>Thank you :)</h3>  
</body>