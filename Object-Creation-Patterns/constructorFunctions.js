// Constructor Function
function Circle (radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1); 
/* When we use the 'new' operator, four things happen:
    1. An empty object is created
    2. Sets the prototype of the newly created object to the object that immediately follows the new keyword 
    3. Calls the constructor function and points 'this' to the newly created object
    4. it returns the newly created object
*/
