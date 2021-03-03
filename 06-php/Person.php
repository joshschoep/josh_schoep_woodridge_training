<?php
class Person {
    private $name;
    private $age;
    private $favorite_color;

    function __construct($name = "Billy Bob", $age = 19, $favorite_color = "Blue") {
        $this->name = $name;
        $this->age = $age;
        $this->favorite_color = $favorite_color;
    }

    public function setName(string $name): void {
        $this->name = $name;
    }

    public function setAge(int $age): void {
        $this->age = $age;
    }

    public function setFavoriteColor(string $favorite_color): void {
        $this->favorite_color = $favorite_color;
    }

    public function getName(): string {
        return $this->name;
    }

    public function getAge(): int {
        return $this->age;
    }

    public function getFavoriteColor(): string {
        return $this->favorite_color;
    }

    public function __toString()
    {
        return '<h2>'.$this->getName().'</h2>'.
        '<p>This person is '.$this->getAge().' years old</p>'.
        '<p>This person\'s favorite color is '.$this->getFavoriteColor().'</p>';
    }
};
?>