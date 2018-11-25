// Functors are objects that have a method that implements the JavaScript equivalent of Array.prototype.map. Arrays in JavaScript implement map and are therefore functors. Promises, streams, and trees, often implement map in other functional languages, and when they do, are considered functors. The map method of a functor, takes the functor's contents and transforms them using the transformation callback that is passed to map. Map then returns a new functor of the same type which contains the transformed values. The most common fucntor is JavaScript is the Array.

// The non-functor implemenation of a simple function. 
function plus1(value) {
    // check if arg is an array
    if (Array.isArray(value)) {
        let newArray = [];
        for ( let i = 0; i < value.length; i++ ) {
            newArray[i] = value[i] + 1
        }
        return newArray
    }
    // check if arg is a string
    if (typeof value === 'string') {
        let chars = value.split('');
        let newCharArray = [];
        for (let i = 0; i < chars.length; i++ ) {
            newCharArray[i] = 
                String.fromCharCode(
                    chars[i].charCodeAt(0) + 1
                );
        }
        return newCharArray.join('');
    }
    // the key idea of this function
    return value + 1;
}

console.log(plus1(3)); // 4
console.log(plus1([3, 4])); // [4, 5]
console.log(plus1('ABC')); // BCD

// If we want to extend the functionality of what could be a one liner (the core purpose of the function can be found on line 26) to be applicable to other data types (as seen on lines 29-31), do you see how much overhead has to be bundled into an otherwise simple function? This is where functors come in to the rescue.

// Here's how we can apply a common functor to refactor our plus1 function to a simpler, purer implementation:

function plus1(value) {
    return value + 1;
}

console.log([3,4].map(plus1)); // [4, 5]

// BOOM. That was easy, right?

// Do you see how we can create multiple operators (ex: minus1, timesX, divideX, etc.) without having to duplicate the type checking logic everywhere? That's the power of functors!

// But what about the example on line 31 where we wanted to plus1 a string? We will build our own functor to solve that problem.

function stringFunctor(value, fn) {
    let chars = value.split('');
    return chars.map(char => {
        return String.fromCharCode(
            fn(char.charCodeAt(0))
        )
    }).join('');
}

console.log(stringFunctor('ABC', plus1)); // returns 'BCD'
console.log(stringFunctor('XYZ', minus1)); // returns 'WXY' 

