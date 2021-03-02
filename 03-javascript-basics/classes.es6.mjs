export class Animal {
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
};

export class Dog extends Animal {
    speak() {
        console.log("Woof");
    }

    howl() {
        console.log("Awoooo");
    }
};

export class Snake extends Animal {
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
};

// export {Animal, Dog, Snake};