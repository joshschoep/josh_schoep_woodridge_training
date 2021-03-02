class Animal {
    name;
    feet;

    constructor(name = "Hank"){ 
        this.name = name;
        this.feet = 4;
    }

    speak() {
        console.log("*animal sounds*");
    }

    getFeet() {
        return this.feet;
    }

    getName() {
        return this.name;
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof");
    }

    howl() {
        console.log("Awoooo");
    }
}

class Snake extends Animal {
    constructor(name = "Hank") {
        super(name);
        this.feet = 0;
    }

    speak() {
        console.log("Hissss");
    }

    slither() {
        console.log("slither slither");
        this.speak();
    }
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