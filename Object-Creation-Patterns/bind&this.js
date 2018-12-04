let dog = {
    sound: 'woof',
    talk() {
        console.log(this.sound)
    }
}

// Implicit binding of this
dog.talk() //"Woof"

let talkFunction = dog.talk
talkFunction() // undefined


/* 
talkFunction() returns undefined because line 10 is the same as saying this:
 let talkFunction = function() {
    console.log(this.sound)
}

'this' doesn't refer to the lexical environment, or context, in which it was created (dog), but instead refers to the context in which it gets called (in this case, Window). Being as there is no sound property attached to the window object, the  value 'undefined is returned'
*/


/* One way to fix this is using the bind method to create a copy of talkFunction, and set 'this' to be equal to the object we specify
*/

// Explicit binding of this
let boundFunction = talkFunction.bind(dog)
boundFunction() // "woof"

