function test(module) {
    console.log("TESTING NEW MODULE");
    var hank = new module.Animal();
    console.log("Working with", hank.getName(), "the Animal");
    hank.speak();
    console.log("Hank has", hank.getFeet(), "feet");
    console.log("\n");

    var alfred = new module.Dog("Alfred");
    console.log("Working with", alfred.getName(), "the Dog");
    alfred.speak();
    alfred.howl();
    console.log("\n");

    var george = new module.Snake("George");
    console.log("Working with", george.getName(), "the Snake");
    console.log("George has", george.getFeet(), "feet");
    george.speak();
    george.slither();
}

import * as prototypeModule from './classes.pt.js'
test(prototypeModule);
console.log("\n\n");
import * as es6Module from './classes.es6.mjs';
test(es6Module);