function Animal(name = "Hank") {
    this.name = name;
    this.feet = 4;
}

Animal.prototype.speak = function() {
    console.log("*animal sounds*");
}
Animal.prototype.getFeet = function() {
    return this.feet;
}
Animal.prototype.getName = function() {
    return this.name;
}

function Dog(name = "Hank") {
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.speak = function() {
    console.log("Woof");
}
Dog.prototype.howl = function() {
    console.log("Awooooooo");
}

function Snake(name = "Hank"){
    Animal.call(this, name);
    this.feet = 0;
}
Snake.prototype = Object.create(Animal.prototype);

Snake.prototype.speak = function() {
    console.log("Hissssssss");
}
Snake.prototype.slither = function() {
    console.log("slither slither slither");
    this.speak();
}

module.exports.Animal = Animal;
module.exports.Dog = Dog;
module.exports.Snake = Snake;