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
    Animal.call(this, hank);
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

var hank = new Animal();
console.log("Working with", hank.getName(), "the Animal");
hank.speak();
console.log("Hank has", hank.getFeet(), "feet");
console.log("\n\n\n");

var alfred = new Dog("Alfred");
console.log("Working with", alfred.getName(), "the Dog");
alfred.speak();
alfred.howl();
console.log("\n\n\n");

var george = new Snake("George");
console.log("Working with", george.getName(), "the Snake");
console.log("George has", george.getFeet(), "feet");
george.speak();
george.slither();