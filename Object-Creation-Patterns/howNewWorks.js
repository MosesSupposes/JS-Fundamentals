// constuctor
function Person(saying) {
    this.saying = saying;
}

Person.prototype.talk = function() {
    console.log(`I say: ${this.saying}`);
}

// Recreation of the new operator
function spawn (constructor) {
    // Step 1: Create a new object
    var obj = {};
    // Step 2: Set the prototype
    Object.setPrototypeOf(obj, constructor.prototype);
    // Step 3: Execute constructor with 'this'
    var argsArray = Array.prototype.slice.apply(arguments); // Array.from is an alternative to this
    constructor.apply(obj, argsArray.slice(1));
    // Step 4: Return newly created object
    return obj;
}

var schizophrenicPerson = spawn(Person, 'Roses are red, violets are blue, I\'m schizophrenic, and so am I')
schizophrenicPerson.talk(); // 'I say: Roses are red ,violets are blue, I'm schizophrenic, and so am I'
