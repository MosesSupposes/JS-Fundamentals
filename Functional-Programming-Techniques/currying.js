// Regular function
let dragon = (name, size, element) => 
    `${name} is a ${size} dragon that breathe ${element}!`;

    console.log(dragon('fluffykins', 'tiny', 'lightning')); // fluffykins is a tiny dragon that breathes lightning!

// Same example, but with currying
let curryDragon = 
    name =>
        size =>
            element =>
                `${name} is a ${size} dragon that breathes ${element}!`;

console.log(curryDragon('karo')('large')('fire and destruction')) // karo is a large dragon that breathes fire and destruction!

// Here's a more advanced example with lodash.
import _ from 'lodash';

let dragons = [
    { name: 'fluffykins', element: 'lightning' },
    { name: 'noomi',      element: 'lightning' },
    { name: 'karo',       element: 'fire' },
    { name: 'doomer',     element: 'timewarp' }
];

let hasElement = (element, obj) => obj.element === element;

let lightningDragons = dragons
    .filter(x => hasElement('lightning', x))
    .map(dragon => dragon.name );

console.log(lightningDragons); // ['fluffykins', 'noomi']