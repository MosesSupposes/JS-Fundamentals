// Constructor Function
function Circle (radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1); 
/* When we use the 'new' operator, four things happen:
    1. An empty object is created.
    2. The newly constructed object is prototype-linked.
    3. The newly constructed object is set as the 'this' binding for that function call.
    4. Unless the function returns its own alternate object, the 'new'-invoked function call will automatically return the newly constructed object.
*/
