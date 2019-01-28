/* There are three reasons why a new datatype was introduced to the language
    1.) To add new core-features with backward compatibility
    2.) To avoid name collisions with these new features
    3.) To enable hooks to core methods via. "well-known" symbols (such as Symbol.search and Symbol.iterator)
*/

// How to create a Symbol

const mySymbol = Symbol()

//Note: Symbols might appear like Objects because they have methods, but they are not — they are primitives. Symbols have methods just like Objects, but unlike objects they are immutable and unique.

// Symbols can't be created by "new keyword"
// Because symbols are not objects and the new keyword is supposed to return an Object, we can’t use new to return a symbols datatype.

const mySymbol = new Symbol() // throws error

// Symbols can have a description — it’s just for logging purposes.

const mySymbol = Symbol('some text')

// Symbols can be an ojbect property key

const myCar = { name: 'BMW' }
const type = Symbol('store car type')
myCar[type] = 'A_luxury_Sedan'

// Note: You cannot use a dot operator because dot operators only work on string properties, so you should use a brackets operator to access symbols on an object.

// Symbols are unique
const mySymbol1 = Symbol('some text');
const mySymbol2 = Symbol('some text');
mySymbol1 == mySymbol2 // false 

// Symbols behave like a singleton if we use “Symbol.for” method

// Instead of creating a symbol via Symbol() , you can create it via Symbol.for(<key>). This takes a “key” (string) to create a Symbol. And if a symbol with that key already exists, it simply returns the old symbol. So it behaves like a singleton if we use the Symbol.for method.

const mySymbol1 = Symbol.for('some key'); // creates a new symbol
const mySymbol2 = Symbol.for('some key'); // returns the same symbol
mySymbol1 == mySymbol2 //true 

// =======================
// Iterators and Iterables
// =======================

/* BEFORE ES6 Symobls: 
    We can't use standard 'for-of' loop or "..." spread operator to extract each user from Users
*/

class Users {
    constructor(users) {
        this.users = users
    }
    get() { // this in not standard
        return this.users
    }  
}

const allUsers = new Users([
    { name: 'Tony' },
    { name: 'John' },
    { name: 'Matt' }
])

//allUsers.get() works, but we can't do the following...
for (const user of Users) {
    console.log(user)
}
// "TypeError: Users is no iterable"

// We also can't do the following...
[...allUsers]
// "TypeError: Users is no iterable"

// Wouldn't it be nice if there was a way to use these existing methods in our own objects? That's where the common global ES6 "iterable" symbol comes into play. Here's houw we can make our Users object an iterable: 

class Users {
    constructor(users) {
        this.users = users
    }

    // Have Symbol.iterator symbol as a property that stores a method
    [Symbol.iterator]() {
        let i = 0
        let users = this.users

        // this returned object is called an "iterator"
        return {
            next() {
                if ( i < users.length) {
                    return { done: false, value: users[i++] }
                }

                return { done: true }
            }
        }
    }
}

// allUsers is called an "iterable"
const allUsers = new Users([
    { name: 'Tony' },
    { name: 'John' },
    { name: 'Matt' }
])

//allUsersIterator is called an "iterator"
const allUsersIterator = allUsers[Symbol.iterator]()

// next method returns the next value in the stored data
allUsersIterator.next() // { done: false, value: { name: 'Tony' } }
allUsersIterator.next() // { done: false, value: { name: 'John' } }
allUsersIterator.next() // { done: false, value: { name: 'Matt' } }

// Using if for-of loop
for (const u of allUsers) {
    console.log(u.name)
}
// prints 'Tony', 'John', 'Matt'

// Using in spread operator
console.log([...allUsers])
// prints [ { name: 'Tony' }, { name: 'John' }, { name: 'Matt' } ]

// Note: instead of directly defining your objects as iterables, you can simply write a generator method on your object that will automatically return an iterable when you call it.