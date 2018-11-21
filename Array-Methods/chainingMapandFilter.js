// 
// Chaining map to filter to transform an array to an unordered list
const numbers = [1, -1, 2, 3];

const items = numbers
    .filter(n => n >= 0)
    .map(n => `<li>${n}</li>`);

const listOfPositiveNumbers = `<ul>${items.join('')}</ul>`
console.log(listOfPositiveNumbers) // <ul><li>1</li><li>2</li><li>3</li></ul>

// Here's another example of chaining 
let dragons = [
    { name: 'fluffykins', element: 'lightning' },
    { name: 'noomi',      element: 'lightning' },
    { name: 'karo',       element: 'fire' },
    { name: 'doomer',     element: 'timewarp' }
];

let hasElement = (element, obj) => obj.element === element;

let lightningDragons = dragons
    .filter(x => hasElement('lightning', x))
    .map(dragon => dragon.name);

console.log(lightningDragons); // ['fluffykins', 'noomi']