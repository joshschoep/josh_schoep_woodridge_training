<?php
class Person {
    private $name = "Billy Bob";
    private $age = 19;
    private $favorite_color = "Blue";

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
};
?>